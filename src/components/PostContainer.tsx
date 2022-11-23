import React, { useEffect, useState } from 'react'
import { IPost } from '../models/IPosts'
import { postAPI } from '../services/PostService'
import PostItem from './PostItem'

const PostContainer = () => {
	const [limit, setLimit] = useState(100)

	const { data: posts, error, isLoading, refetch } = postAPI.useFetchAllPostsQuery(limit, /* {
		pollingInterval: 2000
	} */)
	const [createPost, { error: createError, isLoading: isCreateLoading }] = postAPI.useCreatePostMutation()

	const [updatePost, { }] = postAPI.useUpdatePostMutation()
	const [deletePost, { }] = postAPI.useDeletePostMutation()

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		setLimit(3)
	// 	}, 5000)
	// }, [])

	const handleCreate = async () => {
		const title = prompt()
		await createPost({
			title,
			body: title,
		} as IPost)
	}

	const handleUpdate = (post: IPost) => {
		updatePost(post)
	}
	const handleRemove = (post: IPost) => {
		deletePost(post)
	}

	return (
		<div>
			<div className='post__list'>
				{/* <button onClick={() => refetch()}>REFETCH</button> */}
				<button onClick={() => handleCreate()}>cewfefwe</button>
				{isLoading && <h1>Loading...</h1>}
				{error && <h1>dwdwdddd</h1>}
				{posts && posts.map(post =>
					<PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post} />
				)}
			</div>
		</div>
	)
}

export default PostContainer
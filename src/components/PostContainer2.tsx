import React from 'react'
import { IPost } from '../models/IPosts'
import { postAPI } from '../services/PostService'
import PostItem from './PostItem'

const PostContainer2 = () => {
	const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(100)
	// ===================
	// ===================
	const [updatePost, { }] = postAPI.useUpdatePostMutation()
	const [deletePost, { }] = postAPI.useDeletePostMutation()
	const handleUpdate = (post: IPost) => {
		updatePost(post)
	}
	const handleRemove = (post: IPost) => {
		deletePost(post)
	}
	// ===================
	// ===================
	return (
		<div>
			<div className='post__list'>
				{isLoading && <h1>Loading...</h1>}
				{error && <h1>dwdwdddd</h1>}
				{posts && posts.map(post =>
					<PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post} />
				)}
			</div>
		</div>
	)
}

export default PostContainer2



// ! delete that strings
import React, { Fragment, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { newPost } from '../redux/actions/dispathAction'

function PostForm() {
	const dispatch = useDispatch()
	const [post, setPost] = useState({
		title: "",
		body: ""
	})

	const handleOnSubmit = e => {
		e.preventDefault();

	const submitPost = {
			title: post.title,
			body: post.body
		}
		newPost(submitPost)
	}

	
	return (
		<Fragment>
			<form onSubmit = {handleOnSubmit}>
				<div>
				<h1> Post Form </h1>
				<label>Title</label> <br />
				<input type="text" name="title" value={post.title}  
				onChange={e => setPost({ title: e.target.value })}/>
				</div>
				<br />
				<div>
				<label>Body</label> <br />
				<textarea value={post.body}  
				onChange={e => setPost({ body: e.target.value })} />
				<br />
				<input type="submit" value="Submit"/>
				</div>
				
			</form>
		</Fragment>
	)
}

export default PostForm

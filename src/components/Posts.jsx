import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { fetchPosts, newPost } from "../redux/actions/dispathAction"

function Posts () {
	const dispatch = useDispatch();
	const { posts: {items}} = useSelector(state => state);

	useEffect(() => {	
		dispatch(fetchPosts())
	}, [dispatch])

	useEffect(() => {	
		dispatch(newPost())
	}, [dispatch])

	

	return (
			<div>
				{items.map(item => 
				<div key={item.id}>
				<h3>{item.title}</h3>
				<p>{item.body}</p>
				</div>)} 
			</div>
			
	)
}


export default Posts

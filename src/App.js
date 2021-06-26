import React, { Component } from 'react';
import PostForm from './components/PostForm';
import Posts from './components/Posts';
import "./app.css"

class App extends Component {
	render() {
		return (
			<div className='app'>
			<PostForm/>
			<Posts/>
			</div>
		)
	}
}

export default App

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
	//Have been depecreated on latest react versions
	// componentWillMount() {
	//   this.props.fetchPosts();
	// }

	//this was the solution for componentWillMount
	componentDidMount() {
		this.props.fetchPosts();
	}

	//TODO: Find how can be migrated this hook
	// UNSAFE_componentWillReceiveProps(nextProps) {
	// 	if (nextProps.newPost) {
	// 		this.props.posts.unshift(nextProps.newPost);
	// 	}
	// }

	//this was the solution for componentWillReceiveProps
	shouldComponentUpdate(nextProps, nextState) {
		if (nextProps.newPost !== this.props.newPost) {
			this.props.posts.unshift(nextProps.newPost);
			return true;
		} else {
			return false;
		}
	}

	render() {
		// console.log(this.state.post);
		const postItems = this.props.posts.map(post => (
			<div key={post.id}>
				<h3>{post.title}</h3>
				<p>{post.body}</p>
			</div>
		));
		return (
			<div>
				<h1>Posts</h1>
				{postItems}
			</div>
		);
	}
}

Posts.propTypes = {
	fetchPosts: PropTypes.func.isRequired,
	posts: PropTypes.array.isRequired,
	newPost: PropTypes.object
};

const mapStateToProps = state => ({
	posts: state.posts.items,
	newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);

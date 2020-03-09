import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { createPost } from '../actions/postActions';

class Postform extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			body: ''
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	onSubmit(e) {
		e.preventDefault();

		const post = {
			title: this.state.title,
			body: this.state.body
		};

		//call action
		this.props.createPost(post);
		this.setState({ title: '', body: '' });
	}

	render() {
		return (
			<div>
				<h1>Add Post</h1>
				<form action='' onSubmit={this.onSubmit}>
					<div>
						<label htmlFor=''>Title:</label>
						<br />
						<input
							type='text'
							name='title'
							onChange={this.onChange}
							value={this.state.title}
						/>
					</div>
					<div>
						<label htmlFor=''>Body:</label>
						<br />
						<textarea
							name='body'
							id=''
							cols='30'
							rows='10'
							onChange={this.onChange}
							value={this.state.body}
						/>
					</div>
					<br />
					<button type='submit'>Submit</button>
				</form>
			</div>
		);
	}
}

Postform.propTypes = {
	createPost: Proptypes.func.isRequired
};

export default connect(null, { createPost })(Postform);

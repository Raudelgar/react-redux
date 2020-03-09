import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

//Components
import Posts from './components/Posts';
import Postform from './components/Postform';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className='App'>
					<header className='App-header'>
						<img src={logo} className='App-logo' alt='logo' />
					</header>
					<div style={{ width: '90%', margin: '0 auto' }}>
						<Postform />
						<hr />
						<Posts />
					</div>
				</div>
			</Provider>
		);
	}
}

export default App;

import React, { Component } from 'react';
import logo from './docker-official.svg';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Welcome to Dockerising a React App</h1>
					<img src={logo} className="App-logo" alt="logo" />
				</header>
			</div>
		);
	}
}

export default App;

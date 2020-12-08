import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import './App.css';
import AllPosts from './allposts';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/post">
					<AllPosts></AllPosts>
				</Route>
				<Route path="/">
				<AllPosts></AllPosts>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;

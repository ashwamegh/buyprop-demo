import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import './App.css';
import AllPosts from './allposts';
import Comments from './comments';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/comments/:id" component={ Comments }>
				</Route>
				<Route path="/">
				<AllPosts></AllPosts>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;

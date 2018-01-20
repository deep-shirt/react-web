import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import ExplorePage from './pages/ExplorePage/ExplorePage';
import CreatePage from './pages/CreatePage/CreatePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';

class App extends React.Component {
  render() {
    return (
			<div>
				<Route exact path="/" component={HomePage}/>
				<Route exact path="/explore" component={ExplorePage}/>
				<Route exact path="/create" component={CreatePage}/>
				<Route exact path="/login" component={LoginPage}/>
				<Route exact path="/register" component={RegisterPage}/>
			</div>
    );
  }
}

export default App;

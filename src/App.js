import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import ExplorePage from './pages/ExplorePage/ExplorePage';
import PickContent from './pages/CreatePage/PickContent/PickContent';
import PickStylePage from './pages/CreatePage/PickStyle/PickStylePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import DetailPage from './pages/DetailPage/DetailPage';

class App extends React.Component {
  render() {
    return (
			<div>
				<Route exact path="/" component={HomePage}/>
				<Route exact path="/explore" component={ExplorePage}/>
				<Route exact path="/create/pickcontent" component={PickContent}/>
				<Route exact path="/create/pickstyle" component={PickStylePage}/>
				<Route exact path="/login" component={LoginPage}/>
				<Route exact path="/register" component={RegisterPage}/>
				<Route exact path="/designs/:id" component={DetailPage}/>
			</div>
    );
  }
}

export default App;

import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import ExplorePage from './pages/ExplorePage/ExplorePage';
import PickContent from './pages/CreatePage/PickContent/PickContent';
import PickStylePage from './pages/CreatePage/PickStyle/PickStylePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import DetailPage from './pages/DetailPage/DetailPage';

import * as routes from './constants/routes';

class App extends React.Component {
  render() {
    return (
    	<Router>
			<div>
				<Route exact path={routes.HOMEPAGE} component={HomePage}/>
				<Route exact path={routes.EXPLOREPAGE} component={ExplorePage}/>
				<Route exact path={routes.PICKCONTENTPAGE} component={PickContent}/>
				<Route exact path={routes.PICKSTYLEPAGE} component={PickStylePage}/>
				<Route exact path={routes.LOGINPAGE} component={LoginPage}/>
				<Route exact path={routes.REGISTERPAGE} component={RegisterPage}/>
				<Route exact path={routes.DETAILPAGE} component={DetailPage}/>
			</div>
		</Router>
    );
  }
}

export default App;

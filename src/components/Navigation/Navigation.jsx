import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from '../MainPage';

class Navigation extends Component {

	render(){
		return(
      <Row>
  			<Router >
          <Switch>
            <Route path='/book_covers'>
              <MainPage />
            </Route>

            <Route path='/b'>
              b
            </Route>

            <Route path='/c'>
              c
            </Route>
          </Switch>
		    </Router>
      </Row>
		)
	}
}

export default Navigation;
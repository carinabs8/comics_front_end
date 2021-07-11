import React, {Component} from 'react';
import Navigation from "./components/Navigation";
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

import logo from './images/marvel_logo.png';
import './App.css';

class App extends Component{
  render(){
    return(
      <Container fluid="md">
        <Row className="justify-content-md-center header">
          <Col xs lg="2">
            <img src={logo} alt="Logo" />
          </Col>
        </Row>
        <Row className="justify-content-md-center body">
          <Navigation />
        </Row>
      </Container>
    )
  }
}

export default App;
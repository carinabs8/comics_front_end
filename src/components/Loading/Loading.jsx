import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'

class Loading extends Component {
	render(){
		return(
      <Container>
        <Row className="justify-content-md-center text-center">
          <Col md="auto">
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </Col>
        </Row>
      </Container>
    )
	}
}

export default Loading;
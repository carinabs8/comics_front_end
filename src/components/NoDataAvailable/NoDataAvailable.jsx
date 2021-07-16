import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container'

class NoDataAvailable extends Component {
	render(){
		return(
      <Container>
        <Row className="justify-content-md-center text-center">
          <Col md="auto">
            <div>
              <FontAwesomeIcon icon={faExclamationTriangle} size="3x"/>
            </div>
            <span className="remove-margin">
              <p>No data found.</p>
            </span>
          </Col>
        </Row>
      </Container>
    )
	}
}

export default NoDataAvailable;
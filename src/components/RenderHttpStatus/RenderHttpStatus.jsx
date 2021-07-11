import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFingerprint } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container'

class RenderHttpStatus extends Component {
  render(){
    return(
      <Container>
        <Row className="justify-content-md-center text-center">
          <Col md="auto">
            <div>
              <Col sm={12} className="text-center">
                <h1><FontAwesomeIcon icon={faFingerprint} size="2x"/>{this.props.status}</h1>
              </Col>
            </div>
            <span className="remove-margin">
              <p>Invalid Access</p>
            </span>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default RenderHttpStatus;
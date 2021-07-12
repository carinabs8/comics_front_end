import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

class SearchForm  extends Component {
	constructor(props) {
    super(props);
    this.state = {value: ''};
  }

	_handleSubmit(event) {
    event.preventDefault();
		event.stopPropagation();
		this.props.setBookCoverData(event.target.value);
  }

	render(){
		return(
			<Row className="justify-content-md-center header">
			{this.book_cover}
        <Col xs lg="6">
          <Form>
            <Form.Group className="mb-3" controlId="formSearch">
              <Form.Control type="name" placeholder="Search by Character" onChange={this._handleSubmit.bind(this)}  />
            </Form.Group>
          </Form>
        </Col>
      </Row>
		)
	}
}
export default SearchForm;
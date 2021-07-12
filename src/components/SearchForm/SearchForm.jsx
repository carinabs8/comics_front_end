import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Character from '../../datas/Character';
import axios from 'axios';

class SearchForm  extends Component {
	constructor(props) {
    super(props);
    this.state = {value: ''};
  }

	_handleSubmit(event) {
		this.name = event.target.value;
    let object = this;
    event.preventDefault();
		event.stopPropagation();
  	
    let response = axios.post('/backend/book_covers/search', {
		  name: event.target.value
		});

    response.then(function (val) {
      if(val >= 403){
        object.setState({ ...object.state, status: val, loading: false})
      }else{
      	let item = new Character(val.data);
        object.props.bookCoverData(item);
      }
      object.setState({ ...object.state})
    });
  }

	render(){
		return(
			<Row className="justify-content-md-center header">
			{this.book_cover}
        <Col xs lg="6">
          <Form>
            <Form.Group className="mb-3" controlId="formSearch">
              <Form.Control type="name" placeholder="Search by Character" onChange={this._handleSubmit.bind(this)} />
            </Form.Group>
          </Form>
        </Col>
      </Row>
		)
	}
}
export default SearchForm;
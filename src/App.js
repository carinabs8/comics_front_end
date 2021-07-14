import React, {Component} from 'react';
import Navigation from "./components/Navigation";
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Character from './datas/Character';



import logo from './images/marvel_logo.png';
import './App.css';
import {fetchData} from './datas/FetchData';
import BookCover from './datas/BookCover';
import axios from 'axios';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {loading: true, bookCoverData: []}
  }

  bookCoverData(item){
    let object = this;
    let response = axios.post('/book_covers/search', {
      name: item
    });

    response.then(function (resp) {
      if(resp >= 403){
        object.setState({ ...object.state, status: resp, loading: false})
      }else{
        object.setState({ ...object.state, loading: false, status: 200, bookCoverData: new Character(resp.data) });
      }
      object.setState({ ...object.state})
    });
  }

  componentDidMount(prevProps) {
    let response = fetchData("/book_covers" + window.location.search);
    let object = this;
    console.log(response);
    response.then(function (val) {
      if(val >= 403){
        object.setState({ ...object.state, status: val, loading: false})
      }else{
        object.setState({ ...object.state, loading: false, status: 200, bookCoverData: new BookCover(val.data) });
      }
      object.setState({ ...object.state})
    });
  }

  render(){
    return(
      <Container fluid="md">
        <Row className="justify-content-md-center header">
          <Col xs lg="12">
            <img src={logo} alt="Logo" />
          </Col>
        </Row>
        <Row className="justify-content-md-center body">
          <Navigation setBookCoverData={this.bookCoverData.bind(this)} bookCoverData={this.state.bookCoverData} status={this.state.status} loading={this.state.loading} />
        </Row>
      </Container>
    )
  }
}

export default App;
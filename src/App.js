import React, {Component} from 'react';
import Navigation from "./components/Navigation";
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Character from './datas/Character';
import NoDataAvailable from './components/NoDataAvailable';
import RenderHttpStatus from './components/RenderHttpStatus';
import Loading from './components/Loading';

import logo from './images/marvel_logo.png';
import './App.css';
import {fetchData} from './datas/FetchData';
import BookCover from './datas/BookCover';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {loading: true, bookCoverData: []}
  }

  _fetchItems(item){
    
  }

  componentDidMount(prevProps) {
alert('poo')
    let response = fetchData("/backend/book_covers" + window.location.search);
        let object = this;
        response.then(function (val) {
          if(val >= 403){
            object.setState({ ...object.state, status: val, loading: false})
          }else{
            // object.props.bookCoverData(val.data);
            object.setState({ ...object.state, loading: false, status: 200, bookCoverData: new BookCover(val.data) });
          }
          object.setState({ ...object.state})
        });
      // this._fetchItems.bind(this);
  }

  render(){
    let navagation;
    if (this.state.loading === true) {
        navagation = <Loading/>;
      }else if(this.state.status >= 403){
        navagation =  <RenderHttpStatus status={this.state.status}/>
      }else if(this.state.bookCoverData.results.length === 0){
        navagation = <NoDataAvailable/>
      }else{
        navagation = (<Row className="justify-content-md-center body">
          <Navigation bookCoverData={this.state.bookCoverData} status={this.state.status} loading={this.state.loading} />
        </Row>)
      }
    return(
      <Container fluid="md">
        <Row className="justify-content-md-center header">
          <Col xs lg="12">
            <img src={logo} alt="Logo" />
          </Col>
        </Row>
        {navagation}
      </Container>
    )
  }
}

export default App;
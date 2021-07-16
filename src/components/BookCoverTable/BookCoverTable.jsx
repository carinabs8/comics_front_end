import React, {Component} from 'react';
import Pagination from 'react-bootstrap/Pagination'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import {fetchData, client} from '../../datas/FetchData';
import BookCoverComic from '../BookCoverComic';

class BookCoverTable extends Component {
  constructor(props){
    super(props);
  }

  changeVoteClass(event){
    let NameOfClass = this._setUpVoteClass(event.props.UpVoteClass)
    this.setState({ ...this.state, UpVoteClass: NameOfClass });
    return NameOfClass;
  }

  _setUpVoteClass(vote){
     let classUpVote;
     if(vote == true){
        classUpVote = 'heart_on';
     }else
     {
        classUpVote = 'heart_off';
     }
    return classUpVote;
  }

  render(){
    var PaginationElement = '';
    if(this.props.BookCoverData.next_page === null){
        PaginationElement = <Pagination.Prev href={window.location.pathname +'?page=' + (this.props.BookCoverData.preview_page)}/>
    }else{
        PaginationElement = <Pagination.Next href={window.location.pathname +'?page=' + (this.props.BookCoverData.next_page)}/>
    }
    return(
      <div>
        <Row>
          {this.props.BookCoverData.results.map((item, index) => {
            return(
              
              <BookCoverComic data={item} index={index} id={item.id} key={index} userFavorite={item.user_favorite} changeVoteClass={this.changeVoteClass.bind(this)} UpVoteClass={this._setUpVoteClass(item.user_favorite)}/>
            )
          })}
        </Row>
        <Container>
          <Row>
            <Col md={{ span: 3, offset: 6 }}>
              <Pagination>
                <Pagination.First href={window.location.pathname}/>
                {PaginationElement}
                <Pagination.Last href={window.location.pathname +'?page=' + (this.props.BookCoverData.last_page)}/>
              </Pagination>
            </Col>
            <Col md={{ span: 3, offset: 0 }}>
                <p>Total records: {this.props.BookCoverData.total}</p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default BookCoverTable;
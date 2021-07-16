import React, {Component} from 'react';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import heart_on from '../../images/heart_on.png';
import heart_off from '../../images/heart_off.png';
import heart_hover from '../../images/heart_hover.png';

import '../../stylesheets/book_cover_comic.css';
import {fetchData, client} from '../../datas/FetchData';

class BookCoverComic extends Component {

  constructor(props){
    super(props);
    this.state = {
      UpVoteClass: this.props.UpVoteClass
    }

  }

  componentDidMount(prevProps) {
    let object = this;
    this.upVote = this.UpdateVote.bind(this);
    
  }

  UpdateVote(event){
    let classUpVote = 'heart_off';
    if(this.state.UpVoteClass == 'heart_off'){
      classUpVote = 'heart_on';
    }
    this.setState({ ...this.state, UpVoteClass: classUpVote});
    this._bookCoverUpVote(this)
  }

  _bookCoverUpVote(event){
    let object = this;
    let path = '/api/book_covers/'+ object.props.id + '/upvote';
    let response = client.post(path);
    let classUpVote = 'heart_off';

    // response.then(function (resp) {
    //   if(resp >= 403){
    //   }
    // });
  }

	render(){
    return(
      <Col key={this.props.index}>
        <p onClick={this.upVote} id={this.props.data.id} class={this.state.UpVoteClass} />
        <Figure key={this.props.index}>
          <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            src={this.props.data.thumbnail}
          />
          <Figure.Caption>
            {this.props.data.title}
          </Figure.Caption>
        </Figure>
      </Col>
    )
  }
}
export default BookCoverComic;
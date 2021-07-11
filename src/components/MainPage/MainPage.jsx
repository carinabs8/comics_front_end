import React, {Component} from 'react';
import {fetchData} from '../../datas/FetchData';
import NoDataAvailable from '../NoDataAvailable';
import RenderHttpStatus from '../RenderHttpStatus';
import BookCoverTable from '../BookCoverTable';
import BookCover from '../../datas/BookCover'
import Loading from '../Loading';

class MainPage extends Component {
	constructor(props){
    super(props);
    this.state = {loading: true}
  }

	componentDidMount(prevProps) {
    let response = fetchData("/backend/book_covers" + window.location.search);
    let object = this;
    response.then(function (val) {
      if(val >= 403){
        object.setState({ ...object.state, status: val, loading: false})
      }else{
        object.setState({ ...object.state, loading: false, status: 200, book_cover: new BookCover(val.data) });
      }
      object.setState({ ...object.state})
    });
  }

	render(){
    if (this.state.loading === true) {
      return(<Loading/>);
    }else if(this.state.status >= 403){
      return(<RenderHttpStatus status={this.state.status}/>);
    }else if(this.state.book_cover.results.length === 0){
      return(<NoDataAvailable/>);
    }else{
      return(
        <div style={{ width: 1500, height: 'auto' }}>
        	<BookCoverTable reportData={this.state.book_cover} tHead={["Title", "modified"]}/>
        </div>
      )
    }
  }
}
export default MainPage;
import React, {Component} from 'react';
import {fetchData} from '../../datas/FetchData';
import NoDataAvailable from '../NoDataAvailable';
import RenderHttpStatus from '../RenderHttpStatus';
import BookCoverTable from '../BookCoverTable';
import BookCover from '../../datas/BookCover';
import Loading from '../Loading';

class MainPage extends Component {
	// constructor(props){
 //    super(props);
 //    this.state = {loading: true}
 //  }

	render(){
        console.log(this.props.bookCoverData)
      return(
        <div style={{ width: 1500, height: 'auto' }}>
        	<BookCoverTable BookCoverData={this.props.BookCoverData} tHead={["Title", "modified"]}/>
        </div>
      )
    }
}
export default MainPage;
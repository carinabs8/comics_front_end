import React, {Component} from 'react';
import BookCoverTable from '../BookCoverTable';

class MainPage extends Component {
	render(){
    return(
      <div style={{ width: 1500, height: 'auto' }}>
      	<BookCoverTable BookCoverData={this.props.BookCoverData} tHead={["Title", "modified"]} />
      </div>
    )
  }
}
export default MainPage;
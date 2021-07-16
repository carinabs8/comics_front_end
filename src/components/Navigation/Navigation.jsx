import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from '../MainPage';
import SearchForm from '../../components/SearchForm';
import NoDataAvailable from '../../components/NoDataAvailable';
import RenderHttpStatus from '../../components/RenderHttpStatus';
import Loading from '../../components/Loading';

class Navigation extends Component {
  constructor(props){
    super(props);
    this.state = {loading: true, bookCoverData: []}
  }

	render(){
    let mainpage;
    if (this.props.loading === true) {
      mainpage = <Loading/>;
    }else if(this.props.status >= 403){
      mainpage =  <RenderHttpStatus status={this.props.status}/>
    }else if(this.props.bookCoverData.results.length === 0){
      mainpage = <NoDataAvailable/>
    }else{
      mainpage = (
        <Row>
          <MainPage BookCoverData={this.props.bookCoverData} status={this.props.status} loading={this.props.loading}/>
        </Row>
      )
    }
		return(
      <>
        <Row>
          <SearchForm setBookCoverData={this.props.setBookCoverData}/>
        </Row>
        {mainpage}
      </>
		)
	}
}

export default Navigation;
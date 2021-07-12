import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from '../MainPage';
import SearchForm from '../../components/SearchForm';

class Navigation extends Component {
  constructor(props){
    super(props);
    this.state = {loading: true, bookCoverData: []}
  }

  bookCoverData(item){
    const novoEstado = {
      bookCoverData:this._fetchItems.bind(this)
    }
    
    this.setState(novoEstado);
  }

	render(){
		return(
      <>
        <Row>
          <SearchForm bookCoverData={this.bookCoverData.bind(this)}/>
        </Row>
        <Row>
          
    			<MainPage BookCoverData={this.props.bookCoverData} status={this.props.status} loading={this.props.loading}/>
        }
        </Row>
      </>
		)
	}
}

export default Navigation;
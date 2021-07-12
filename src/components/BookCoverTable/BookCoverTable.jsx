import React, {Component} from 'react';
import Pagination from 'react-bootstrap/Pagination'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Figure from 'react-bootstrap/Figure'

class BookCoverTable extends Component {
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
					    <Col key={index}>
				  			<Figure key={index}>
								  <Figure.Image
								    width={171}
								    height={180}
								    alt="171x180"
								    src={item.thumbnail}
								  />
								  <Figure.Caption>
								    {item.title}
								  </Figure.Caption>
								</Figure>
					    </Col>
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
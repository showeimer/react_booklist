import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook }  from '../actions/index';
//make sure action created flows through all reducers
import { bindActionCreators } from 'redux';


class BookDetail extends Component {

  render() {
    if(!this.props.book) {
      return (
        <div>Select a book to get started!</div>
      )
    }
    return (
      <div className="container col-md-8 bookDetails">
        <h4 className="display-4">{this.props.book.title}</h4>
        <div className="lead">{this.props.book.pages} pages</div>
        <div className="lead"><strong>Author:</strong> {this.props.book.author}</div>
        <div className="lead"><strong>Price:</strong> ${this.props.book.price} USD</div>
        <div className="lead"><strong>Published:</strong> {this.props.book.published_date} by {this.props.book.publisher}</div>
        <div className="lead"><strong>Genre:</strong> {this.props.book.category.join(", ")} </div>
      </div>
    );
  }
}

//activeBook reducer creates activeBook state.
function mapStateToProps(state) {
  return {
    book: state.activeBook,
  };
}


export default connect(mapStateToProps)(BookDetail);

// This initiates the request to grab from googles api books and sends results back.

import React, { Component } from 'react';
import SearchBox from './SearchBox';
import request from 'superagent';
import BookList from './BookList';

class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchField: ''
        }
    }

    searchBook = (e) => {
        e.preventDefault();
        request
            .get('https://www.googleapis.com/books/v1/volumes')
            .query({q: this.state.searchField})
            .then((data) => {
                console.log(data);
                this.setState({books: [...data.body.items]})
            }).catch ((e) => {
                // If search is not found, nothing happens
                return null;
            });
    }

    handleSearch = (e) => {
        this.setState({searchField: e.target.value})
    }

    render() {
      return (
        <div>
            <SearchBox searchBook={this.searchBook} handleSearch={this.handleSearch}/>
            <BookList books={this.state.books}/>
        </div>
      );
    }
  }

export default Books;
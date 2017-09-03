import React, {Component} from 'react';
import '../styles/App.css';

import BookList from '../containers/BookList';
import BookDetail from '../containers/BookDetail';

class App extends Component {
    render() {
        return (
            <div className="wrapper">
              <h1 className="title">Books N' Roses: Appetite for Instruction</h1>
                <div className="main">
                  <BookList/>
                  <BookDetail/>
                </div>
            </div>
        );
    }
}

export default App;

import React, { Component } from 'react'
import ListBooks from './ListBooks'
import * as BooksAPI from './utils/BooksAPI'
import AddBookToList from './AddBookToList'
import SearchForBooks from './SearchForBooks'
import './App.css'
import { Route } from 'react-router-dom'

class App extends Component {
  state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books
      }))
    })
  }
  // changeShelf = (book) => {
  //   this.setState((currentState) => ({
  //     books: currentState.books.shelf.filter((b) => {
  //       return b.id !== book.id
  //     })
  //   }))
  // }

  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <ListBooks
            books={this.state.books}
            onClickChangeShelf={this.changeShelf}
          />
        )}/>
          <Route path='/search'
          books={this.state.books}
          component={SearchForBooks}
           />

      </div>
    )
  }
}

export default App

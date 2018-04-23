import React, { Component } from 'react'
import ListBooks from './ListBooks'
import * as BooksAPI from './utils/BooksAPI'



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
        <ListBooks
          books={this.state.books}
          onClickChangeShelf={this.changeShelf}
        />
      </div>
    )
  }
}

export default App

import React, { Component } from 'react'
import ListBooks from './ListBooks'




class App extends Component {
  state = {
    books: [
      {
        id: '123456',
        name: 'Stormy Daniels',
        shelf: 'read'
      },
      {
        id: '111111',
        name: 'Donald Trump',
        shelf: 'currentlyReading'
      },
    ]
  }

  changeShelf = (book) => {
    this.setState((currentState) => ({
      books: currentState.books.shelf.filter((c) => {
        return c.id !== book.id
      })
    }))
  }

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

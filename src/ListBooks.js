import React, { Component } from 'react'

class ListBooks extends Component {
  render () {
    console.log('Props', this.props)
    return (
      <ol className='books-list'>
        {this.props.books.map((book) => (
          <li key={book.id}>
            {book.name}
          </li>
        ))}
      </ol>
    )
  }
}

export default ListBooks

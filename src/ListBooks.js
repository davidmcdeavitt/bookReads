import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ListBooks extends Component {
  static PropTypes = {
    contacts: PropTypes.array.isRequired,
    onClickChangeShelf: PropTypes.func.isRequired,
  }
  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState(() => ({
      query: query.trim()
    }))
  }

  clearQuery = () => {
    this.updateQuery('')
  }


  render() {
    const { query } = this.state
    const { books, onClickChangeShelf } = this.props

    const showingBooks = query === ''
    ? books
    : books.filter((b) => (
      b.name.toLowerCase().includes(query.toLowerCase())
    ))

    return(
      <div className='list-books'>
        <div className='search-books-top'>
          <input
            className='search-books'
            type='text'
            placeholder='Search Books'
            value={
            query
            }
            onChange={(event) => this.updateQuery(event.target.value)}
          />
        </div>

        {showingBooks.length !== books.length && (
          <div className='showing-books'>
            <span>
              Now showing {showingBooks.length} of {books.length}
            </span>
            <button onClick={this.clearQuery}>Show All Books</button>
          </div>
        )}

        <ol className='books-list'>
          {showingBooks.map((book) => (
            <li key={book.id} className='book-list-item'>
              <div className='book-details'>
                <p>{book.title}</p>
                <p>{book.shelf}</p>
              </div>
              <button onClick={() => onClickChangeShelf(book.shelf)}className='contact-dropdown'>
                Change Shelf
              </button>
            </li>
          ))}
        </ol>
      </div>

    )
  }

}





export default ListBooks

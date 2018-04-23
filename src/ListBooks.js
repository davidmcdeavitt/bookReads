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
  render() {
    return(
      <div className='list-books'>
        {JSON.stringify(this.state)}
        <div className='search-books-top'>
          <input
            className='search-books'
            type='text'
            placeholder='Search Books'
            value={
            this.state.query
            }
            onChange={(event) => this.updateQuery(event.target.value)}
          />
        </div>
        <ol className='books-list'>
          {this.props.books.map((book) => (
            <li key={book.id} className='book-list-item'>
              <div className='book-details'>
                <p>{book.name}</p>
                <p>{book.shelf}</p>
              </div>
              <button onClick={() => this.props.onClickChangeShelf(book.shelf)}className='contact-dropdown'>
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

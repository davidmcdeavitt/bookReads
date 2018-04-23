import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './utils/BooksAPI'
import { Link } from 'react-router-dom'
import serializeForm from 'form-serialize'

class SearchForBooks extends Component {
  static PropTypes = {
    books: PropTypes.array.isRequired,
    // onClickChangeShelf: PropTypes.func.isRequired,
  }
  state = {
    query: ''
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books
      }))
    })
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
    const { books } = this.props

    const showingBooks = query === ''
    ? "Search"
    : books.filter((b) => (
      b.name.toLowerCase().includes(query.toLowerCase())
    ))

    return(
      <div className='list-books'>

        <Link
            to='/'
            className='jump-to-home-button'
            >Jump to Home

        </Link>

        <div className='search-books-top'>
          <input
            className='search-books'
            type='text'
            placeholder='Search Books'
            value={query}
            onChange={(event) => this.updateQuery(event.target.value)}
          />
        </div>



        <ol className='books-list'>
          {showingBooks.map((book) => (
            <li key={book.id} className='book-list-item'>
              <div className='book-details'>
                <p>{book.id}</p>
                <p>{book.title}</p>
                <p>{book.shelf}</p>
              </div>

            </li>
          ))}
        </ol>
      </div>

    )
  }

  }



export default SearchForBooks

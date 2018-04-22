import React, { Component } from 'react'
import ListBooks from './ListBooks'


const books = [
  {
    id: '123456',
    name: 'Stormy Daniels',
    shelf: '"wantToRead", "currentlyReading", "read"'
  },
  {
    id: '111111',
    name: 'Donald Trump',
    shelf: '"currentlyReading'
  },
]

class App extends Component {
  render() {
    return (
      <div>
        <ListBooks books={books} />
      </div>
    )
  }
}

export default App

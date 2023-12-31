import { createContext, useContext, useState } from 'react'

const BooksContext = createContext({})

export function BooksContextWrapper({ children }) {
  const [books, setBooks] = useState([])

  const state = {
    books,
    setBooks,
  }

  return <BooksContext.Provider value={state}>{children}</BooksContext.Provider>
}

export const useBooksContext = () => {
  return useContext(BooksContext)
}

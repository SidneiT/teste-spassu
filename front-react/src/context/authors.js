import { createContext, useContext, useState } from 'react'

const AuthorsContext = createContext({})

export function AuthorsContextWrapper({ children }) {
  const [authors, setAuthors] = useState([])
  
  const state = {
    authors,
    setAuthors,
  }

  return <AuthorsContext.Provider value={state}>{children}</AuthorsContext.Provider>
}

export const useAuthorsContext = () => {
  return useContext(AuthorsContext)
}

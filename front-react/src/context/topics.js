import { createContext, useContext, useState } from 'react'

const TopicsContext = createContext({})

export function TopicsContextWrapper({ children }) {
  const [topics, setTopics] = useState([])

  const state = {
    topics,
    setTopics,
  }

  return <TopicsContext.Provider value={state}>{children}</TopicsContext.Provider>
}

export const useTopicsContext = () => {
  return useContext(TopicsContext)
}

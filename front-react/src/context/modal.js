import { createContext, useContext, useState } from 'react'

const ModalContext = createContext({})

export function ModalContextWrapper({ children }) {
  const [show, setShow] = useState(false)
  const [content, setContent] = useState()
  const [title, setTitle] = useState('')


  const openModal = ({ content, title = '' }) => {
    setTitle(title)
    setContent(content)
    setShow(true)
  }

  const closeModal = () => {
    setTitle('')
    setContent(null)
    setShow(false)
  }

  const state = {
    title,
    show,
    content,
    openModal,
    closeModal,
  }



  return <ModalContext.Provider value={state}>{children}</ModalContext.Provider>
}

export const useModalContext = () => {
  return useContext(ModalContext)
}

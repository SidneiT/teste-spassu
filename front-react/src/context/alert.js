import { createContext, useContext, useState } from 'react'

const AlertContext = createContext({})

export function AlertContextWrapper({ children }) {
  const [show, setShow] = useState(false)
  const [type, setType] = useState('info')
  const [message, setMessage] = useState('')

  const showMessage = (message, type = 'info') => {
    setType(type)
    setMessage(message)
    setShow(true)

    setTimeout(() => {
      setShow(false)
    }, 3000)
  }

  const state = {
    show,
    type,
    message,
    showMessage
  }

  return <AlertContext.Provider value={state}>{children}</AlertContext.Provider>
}

export const useAlertContext = () => {
  return useContext(AlertContext)
}

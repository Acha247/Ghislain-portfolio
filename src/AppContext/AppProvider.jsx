import React, { useState } from 'react'
import { AppContext } from './Context'

const AppProvider = ({children}) => {
    const [resume, setResume] = useState("education")

  return (
    <AppContext.Provider value={{resume, setResume}}>
        {children}
    </AppContext.Provider>
  )
}

export default AppProvider
import React from 'react'

const OutlineButton = ({children, styles}) => {
  return (
    <button 
        className={`border-2 px-8 py-2 rounded-full transition-all duration-600 text-sm font-light w-full sm:w-max
        ${styles? styles :  "text-white border-white hover:text-orange-700 hover:border-orange-700"}`}
    >
        {children}
    </button>
  )
}

export default OutlineButton
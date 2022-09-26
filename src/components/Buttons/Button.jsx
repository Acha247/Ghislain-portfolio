import React from 'react'

const Button = ({children, styles}) => {
  return (
    <button 
        className={`border-2 px-8 py-2 rounded-full transition-all duration-600 text-sm font-light w-full sm:w-max
        ${styles? styles :  "text-white border-orange-700 bg-orange-700 hover:text-orange-700 hover:border-white hover:bg-white"}`}
    >
        {children}
    </button>
  )
}

export default Button
import React from 'react'

const Center = ({children, className, ...props}: any) => {
  return (
    <div className={`flex justify-center items-center ${className}`} {...props}>
        {children}
    </div>
  )
}

export default Center
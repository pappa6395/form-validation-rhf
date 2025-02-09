import React from 'react'
import { Toaster } from 'react-hot-toast'

const Providers = ({children}: {children: React.ReactNode}) => {

  return (

    <div>
        <Toaster
        position="top-center"
        reverseOrder={false}
        />
        {children}
    </div>

  )
}

export default Providers
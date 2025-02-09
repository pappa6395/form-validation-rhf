import RegisterForm from '@/components/RegisterForm'
import React from 'react'

const page = () => {
  return (

    <div className='grid grid-cols-12 justify-center mt-6'>
        <div className='col-span-full text-center justify-center gap-4'>
            <h2 className="scroll-m-20 border-b pb-2 text-3xl 
              font-semibold tracking-tight first:mt-0">
              Form Validation
            </h2>
        </div>
        <RegisterForm />
    </div>
  )
}

export default page
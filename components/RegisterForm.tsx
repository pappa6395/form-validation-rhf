"use client"

import React from 'react'
import TextInput from './formInputs/TextInput'
import { useForm } from 'react-hook-form'
import PasswordInput from './formInputs/PasswordInput'
import toast from 'react-hot-toast'


type DataProps ={
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string;
}

const RegisterForm = () => {

    const { 
        register,
        handleSubmit, 
        reset, 
        formState: { errors } 
    } = useForm<DataProps>({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    })

    const saveForm = (data: DataProps) => {
        
        toast.success("Registered successfully")
        console.log('Form Submitted:', data)
        reset()
    }

  return (

    <div className='mt-4 col-span-full pt-2'>
        <form 
            onSubmit={handleSubmit(saveForm)}
            className="max-w-lg w-full py-4 space-y-6 mx-auto"
        >
            <TextInput
                register={register}
                errors={errors}
                type="text"
                name="firstName"
                label="First Name" 
            />
            <TextInput
                register={register}
                errors={errors}
                type="text"
                name="lastName"
                label="Last Name" 
            />
            <TextInput 
                register={register}
                errors={errors}
                type="email"
                name="email"
                label="Email"
            />
            <PasswordInput 
                register={register}
                errors={errors}
                type="password"
                name="password"
                label="Password"
            />
            <PasswordInput
                register={register}
                errors={errors}
                type="password"
                name="confirmPassword"
                label="Confirm Password" 
            />
            <div className='grid grid-cols-5 '>
                <button 
                    type="submit" 
                    className="text-white bg-blue-700 hover:bg-blue-800 
                    focus:ring-4 focus:outline-none focus:ring-blue-300 
                    font-medium rounded-lg text-sm col-start-2 col-span-3 w-full px-5 py-2.5 text-center 
                    dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Submit
                </button>
            </div>
        </form>
    </div>

  )
}

export default RegisterForm
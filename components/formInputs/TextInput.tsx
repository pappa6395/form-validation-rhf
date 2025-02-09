import React from 'react'


interface TextInputProps {
    register: any
    errors: any
    type: string
    name: string
    label: string
}

const TextInput = ({
    register,
    errors,
    type,
    name,
    label,
}: TextInputProps) => {


  return (

    <div>
       <div className="relative z-0 w-full group">
            <input
                {...register(`${name}`, { required: true })} 
                type={type} 
                name={name} 
                id={name}
                className="block py-2.5 px-0 w-full text-sm 
                text-gray-900 bg-transparent border-0 border-b-2 
                border-gray-300 appearance-none
                dark:border-gray-600 dark:focus:border-blue-500 
                focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            />
            <label 
                htmlFor={name}
                className="peer-focus:font-medium absolute text-sm 
                text-gray-500 dark:text-gray-400 duration-300 
                transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 
                peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
                peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
                peer-focus:-translate-y-6"
            >
                {label}
            </label>
        </div>
        {errors[`${name}`] && (
            <span className="text-xs text-red-600">{label} is required</span>
        )}
    </div>

  )
}

export default TextInput
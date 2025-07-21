import React, { useState } from 'react'

const Login = ({handleLogin}) => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const SubmitHandler = (e) =>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }

    return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form
            onSubmit={ (e) =>{
                SubmitHandler(e)
            }} 
            className='flex flex-col items-center justify-center'>
                <input
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                required className='outline-none bg-transparent border-2 border-emerald-600 rounded-full pl-5 py-2 text-xl placeholder:text-gray-500 ' type="email" placeholder='Enter Your Email' />
                <input 
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                required className='outline-none bg-transparent border-2 border-emerald-600 rounded-full pl-5 py-2 text-xl placeholder:text-gray-500 mt-5' type="password" placeholder='Enter Password' />
                <button className='mt-6 text-white outline-none  bg-emerald-600 rounded-full px-8 py-2 text-xl font-bold w-full' >Log In</button>
            </form>
        </div>
    </div>
  )
}

export default Login

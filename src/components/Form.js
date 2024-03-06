import React from 'react'

function Form() {
  return (
    <div className='flex justify-center w-11/12 border rounded p-6 bg-slate-400'>
      <form className='flex flex-col justify-center gap-5'>

        <label htmlFor="name" >ENTER YOUR NAME: </label>
        <input 
            className='border rounded bg-slate-300 p-2' 
            type="text" 
            id="name"
            placeholder='enter your name'
        />

        <label htmlFor="emailId" >ENTER YOUR EMAIL</label>
        <input 
            className='border rounded bg-slate-300 p-2' 
            type="email" 
            id="emailId"
            placeholder='enter your email'
        />
        <button className='border rounded bg-sky-500'>Login</button>
      </form>
    </div>
  )
}

export default Form

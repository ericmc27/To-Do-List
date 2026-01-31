import { useState } from 'react'
import { authClient } from '../../lib/auth'



const SignupPage = () => {
  const handleOnChange = (e)=>{
  const {name, value} = e.target
  setLoginDetails(prev => ({...prev, [name]: value}))
}

const handleOnSubmit = async (e)=>{
  e.preventDefault()
  const response = await authClient.signIn.email({email:loginDetails.email, password: loginDetails.password})
  console.log(response)
}

  const [loginDetails, setLoginDetails] = useState({email:'', password: ''})

  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <form className="flex items-center flex-col h-100 w-75 rounded bg-white" onSubmit={handleOnSubmit}>
          <label>Email</label>
          <input type="email" name='email' value={loginDetails.email} onChange={handleOnChange} className="border" />
          <label>Password</label>
          <input type="password" name='password' value={loginDetails.password} onChange={handleOnChange} className="border" />
          <button type="submit" className="border h-10 w-50 hover:cursor-pointer">Signup</button>
        </form>
      </div>
    </>
  )
}

export default SignupPage
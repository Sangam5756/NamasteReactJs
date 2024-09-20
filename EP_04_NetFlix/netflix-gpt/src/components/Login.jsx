import { useState } from 'react';
import Header from './Header'

const Login = () => {

  const [signUp, setSignUp] = useState(false)

  return (
    <div className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_large.jpg')" }}>
      <Header />

      <div className="flex justify-center items-center h-full px-4">
        <form className="bg-black bg-opacity-75 p-8 sm:p-10 md:p-12 w-full sm:w-8/12 md:w-5/12 lg:w-4/12 xl:w-3/12 text-white rounded">

          <h1 className="text-2xl md:text-3xl mb-4 md:mb-6">{signUp ? "Sign In" : "Sign Up"}</h1>

          {signUp && (
            <input
              type="text"
              name="Name"
              placeholder="Full Name"
              className="w-full p-3 mb-4 bg-gray-800 border border-gray-700 focus:outline-none rounded"
            />
          )}
          <input
            type="text"
            name="email"
            placeholder="Email Address"
            className="w-full p-3 mb-4 bg-gray-800 border border-gray-700 focus:outline-none rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 mb-6 bg-gray-800 border border-gray-700 focus:outline-none rounded"
          />
          <button className="w-full p-3 bg-red-600 hover:bg-red-700 text-white rounded">Sign In</button>
          {signUp && (<p className='cursor-pointer' onClick={() => setSignUp(false)}>dont have account ?  <span className='text-red-900'>sign Up</span></p>)}
          {!signUp && (<p onClick={() => setSignUp(true)} className='cursor-pointer'>Already Have Account <span className='text-red-800'>sign In</span></p>)}
        </form>
      </div>
    </div>
  )
}

export default Login;


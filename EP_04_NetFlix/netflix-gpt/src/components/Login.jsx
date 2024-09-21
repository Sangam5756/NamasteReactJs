import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";
import { BANNER_URL } from "../utils/constants";

const Login = () => {
  const [signUp, setSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = (e) => {
    // validate the form data
    e.preventDefault();
    const message = checkValidData(
      email.current.value,
      password.current.value,
      name.current.value
    );
    setErrorMessage(message);
  };

  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${BANNER_URL})` }}
    >
      <Header />

      <div className="flex justify-center items-center h-full px-4">
        <form className="bg-black bg-opacity-75 p-8 sm:p-10 md:p-12 w-full sm:w-8/12 md:w-5/12 lg:w-4/12 xl:w-3/12 text-white rounded">
          <h1 className="text-2xl md:text-3xl mb-4 md:mb-6">
            {signUp ? "Sign In" : "Sign Up"}
          </h1>

          {signUp && (
            <input
              ref={name}
              type="text"
              name="Name"
              placeholder="Full Name"
              className="w-full p-3 mb-4 bg-gray-800 border border-gray-700 focus:outline-none rounded"
            />
          )}
          <input
            ref={email}
            type="text"
            name="email"
            placeholder="Email Address"
            className="w-full p-3 mb-4 bg-gray-800 border border-gray-700 focus:outline-none rounded"
          />
          <input
            ref={password}
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 mb-6 bg-gray-800 border border-gray-700 focus:outline-none rounded"
          />
          <p className="text-red-400">{errorMessage}</p>
          <button
            onClick={handleButtonClick}
            className="w-full p-3 bg-red-600 hover:bg-red-700 text-white rounded"
          >
            {signUp ? "Sign In" : "Sign Up"}
          </button>
          {signUp && (
            <p className="cursor-pointer" onClick={() => setSignUp(false)}>
              dont have account ? <span className="text-red-900">sign Up</span>
            </p>
          )}
          {!signUp && (
            <p onClick={() => setSignUp(true)} className="cursor-pointer">
              Already Have Account <span className="text-red-800">sign In</span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;

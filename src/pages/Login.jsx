import React, { useState, useContext } from "react";
import LoginLeftSection from "../components/LoginLeftSection";
import AuthContext from "../contexts/AuthContext";
import { NavLink } from "react-router-dom";

const Login = () => {
    // useState Hooks that are used to store the input values in email and password variables.
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {loginUser} = useContext(AuthContext)
    // Function use to login user
    const handleUser = (e) => {
        e.preventDefault();
        loginUser(email, password);
    };
  return (
    <div className="font-ubuntu flex h-screen w-full justify-center items-center bg-black">
      <LoginLeftSection content='Sign In to Explore Price Pulse'/>
      <div className="flex items-center justify-center w-full lg:w-1/2 h-screen bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              className="space-y-6"
              action="#"
              onSubmit={handleUser}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-bold leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-indigo-800 hover:text-indigo-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-white">
              Not a member?{" "}
              <NavLink
                to="/signup"
                className="font-semibold leading-6 text-indigo-800 hover:text-indigo-600"
              >
                Register Yourself
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;

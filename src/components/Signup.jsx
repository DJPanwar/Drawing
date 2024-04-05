import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Helper/firebase";
import { useNavigate } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [isSignInForm, setSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!isSignInForm) {
        await createUserWithEmailAndPassword(auth, email, password);
        navigate("/");
        localStorage.setItem("loginTime", Date.now().toString());
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/");
        localStorage.setItem("loginTime", Date.now().toString());
      }
    } catch (error) {
      setError(error?.message);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md"
      >
        {error && <div className="text-red-500">{error}</div>}
        <div className="space-y-6">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h2>
          {!isSignInForm && (
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                autoComplete="name"
                required
                className="input-field"
              />
            </div>
          )}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
              className="input-field"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 focus:outline-none"
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible className="h-6 w-6" />
                ) : (
                  <AiOutlineEye className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {isSignInForm ? "Log in" : "Sign up"}
            </button>
          </div>
        </div>
        <p
          className="text-black hover:underline cursor-pointer text-xl text-center mt-4"
          onClick={toggleSignInForm}
        >
          {isSignInForm ? "New to Gallery? Sign Up" : "Already a user? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default SignUp;

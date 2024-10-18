import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', { email, password });

    setEmail("")
    setPassword("")
    
  };

  return (
    <div className="flex items-center  justify-center min-h-screen ">
      <div className="w-full max-w-sm p-6 border-emerald-500 border-2 shadow-md rounded-md">
        <h2 className="text-2xl font-bold text-center text-white mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 ">
            <input
              type="email"
              placeholder='Enter Your Email'
              id="email"
              className="mt-1 block w-full text-white px-3 py-2 border bg-transparent border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <input
            placeholder='Enter Your Password'
              type="password"
              id="password"
              className="mt-1 block w-full px-3 bg-transparent text-white py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full bg-emerald-600 text-white px-4 py-2 rounded-md focus:outline-none hover:bg-emerald-700"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

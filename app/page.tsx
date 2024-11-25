'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const handleLogin = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    /*const payload = new URLSearchParams({
      username,
      password,
    });

    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: payload.toString(),
      });

      const data = await response.text();
      if (response.ok) {
        alert(`Login successful: ${data}`);
        //router.push('/dashboard'); 
      } else {
        alert(`Login failed: ${data}`);
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed');
    }*/
    router.push('/dashboard');
  };

  const goToRegister = () => {
    router.push('/register');
  };

  return (
    <div className="relative flex min-h-screen text-gray-800 antialiased flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <div className="relative py-3 sm:w-96 mx-auto text-center">
        <span className="text-2xl font-light">Login to your account</span>
        <div className="mt-4 bg-white shadow-md rounded-lg text-left">
          <div className="h-2 bg-purple-400 rounded-t-md"></div>
          <div className="px-8 py-6">
            <form onSubmit={handleLogin}>
              <label className="block font-semibold">Username or Email</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username or Email"
                className="border w-full h-5 px-3 py-5 mt-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:ring-1"
              />
              <label className="block mt-3 font-semibold">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="border w-full h-5 px-3 py-5 mt-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:ring-1"
              />
              <div className="flex justify-between items-baseline">
                <button
                  type="submit"
                  className="mt-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600"
                >
                  Login
                </button>
                <button
                  type="button"
                  onClick={goToRegister}
                  className="mt-4 bg-gray-500 text-white py-2 px-6 rounded-md hover:bg-gray-600"
                >
                  Register
                </button>
              </div>
              <a href="#" className="text-sm hover:underline mt-2 block text-center">Forgot password?</a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

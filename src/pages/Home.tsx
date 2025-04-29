// src/pages/Home.tsx
import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to My App</h1>
      <p className="text-lg text-gray-600 mb-6">
        This is the home page. Explore the features of this application.
      </p>
      <Link
        to="/login"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Go to Login
      </Link>
    </div>
  )
}

export default Home

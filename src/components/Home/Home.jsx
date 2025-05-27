import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();
  return (
    <div className='home-container'>
        <div>
            <h1 className=' bg-amber-400 text-6xl'>Welcome to ONGC</h1>
            <button className='bg-blue-500 mt-4 cursor-pointer rounded-2xl' onClick={() => navigate("dash")}>click on the button to open the Dashboard</button>
        </div>
    </div>
  )
}

export default Home

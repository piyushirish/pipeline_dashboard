import React from 'react'
import { Link } from 'react-router-dom'

function C24P1() {
  return (
    <div className="w-screen h-screen overflow-auto bg-white" >
        <p className='text-6xl bg-amber-300'>Number of wells </p>
       <div className="flex mt-4 text-4xl items-center ">
        <Link to="/c-24-p1-1" className=' left-[150px] top-[350px] bg-blue-400 text-white px-4 py-2 rounded shadow mr-4 ml-4'>C-24-P1-1</Link>
        <Link to="/c-24-p1-2" className=" left-[150px] top-[420px] bg-blue-400 text-white px-4 py-2 rounded shadow mr-4 ">C-24-P1-2</Link>
        <Link to="/c-24-p1-3" className=" left-[150px] top-[500px] bg-blue-400 text-white px-4 py-2 rounded shadow mr-4 ">C-24-P1-3</Link>
        <Link to="/c-24-p1-4" className=' left-[150px] top-[350px] bg-blue-400 text-white px-4 py-2 rounded shadow mr-4 ml-4'>C-24-P1-4</Link>
        <Link to="/c-24-p1-5" className=" left-[150px] top-[420px] bg-blue-400 text-white px-4 py-2 rounded shadow mr-4 ">C-24-P1-5</Link>
        <Link to="/c-24-p1-6" className=" left-[150px] top-[420px] bg-blue-400 text-white px-4 py-2 rounded shadow mr-4 ">C-24-P1-6</Link>
       </div>
    </div>
  )
}

export default C24P1

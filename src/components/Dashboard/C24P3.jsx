import React from 'react'
import { Link } from 'react-router-dom'

function C24P3() {
  return (
    <div className="w-screen h-screen overflow-auto bg-white" >
        <p className='text-6xl bg-amber-300'>Number of wells </p>
       <div className="flex mt-4 text-4xl items-center ">
        <Link to="/c-24-p3-1" className=' left-[150px] top-[350px] bg-blue-400 text-white px-4 py-2 rounded shadow mr-4 ml-4'>C-24-P3-1</Link>
        <Link to="/c-24-p3-2" className=" left-[150px] top-[420px] bg-blue-400 text-white px-4 py-2 rounded shadow mr-4 ">C-24-P3-2</Link>
        <Link to="/c-24-p3-3" className=" left-[150px] top-[500px] bg-blue-400 text-white px-4 py-2 rounded shadow mr-4 ">C-24-P3-3</Link>
        <Link to="/c-24-p3-4" className=' left-[150px] top-[350px] bg-blue-400 text-white px-4 py-2 rounded shadow mr-4 ml-4'>C-24-P3-4</Link>
        <Link to="/c-24-p3-5" className=" left-[150px] top-[420px] bg-blue-400 text-white px-4 py-2 rounded shadow mr-4 ">C-24-P3-5</Link>
       </div>
    </div>
  )
}

export default C24P3

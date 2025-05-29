import React from 'react'
import { Link } from 'react-router-dom'
function C26() {
  return (
    <div className="w-screen h-screen overflow-auto bg-white" >
        <p className='text-6xl bg-amber-300'>Number of wells </p>
       <div className="flex mt-4 text-4xl items-center ">
        <Link to="/c-26-1" className=' left-[150px] top-[350px] bg-blue-400 text-white px-4 py-2 rounded shadow mr-4 ml-4'>C-26-1</Link>
        <Link to="/c-26-2" className=" left-[150px] top-[420px] bg-blue-400 text-white px-4 py-2 rounded shadow mr-4 ">C-26-2</Link>
        <Link to="/c-26-3" className=" left-[150px] top-[500px] bg-blue-400 text-white px-4 py-2 rounded shadow mr-4 ">C-26-3</Link>
        <Link to="/c-26-4" className=' left-[150px] top-[350px] bg-blue-400 text-white px-4 py-2 rounded shadow mr-4 ml-4'>C-26-4</Link>
        <Link to="/c-26-5" className=" left-[150px] top-[420px] bg-blue-400 text-white px-4 py-2 rounded shadow mr-4 ">C-26-5</Link>
        <Link to="/c-26-6" className=" left-[150px] top-[420px] bg-blue-400 text-white px-4 py-2 rounded shadow mr-4 ">C-26-6</Link>
       </div>
    </div>
  )
}

export default C26

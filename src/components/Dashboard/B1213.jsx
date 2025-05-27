import React from 'react'
import { Link } from 'react-router-dom'

function B1213() {
  return (
    <div className="w-screen h-screen overflow-auto bg-white" >
        <p className='text-6xl bg-amber-300'>Number of wells </p>
       <div className="flex mt-4 text-4xl items-center ">
         <Link to="/b-12-13-1" className=' left-[150px] top-[350px] bg-blue-400 text-white px-4 py-2 rounded shadow mr-4 ml-4'>B-12-13-1</Link>
        <Link to="/b-12-13-2" className=" left-[150px] top-[420px] bg-blue-400 text-white px-4 py-2 rounded shadow mr-4 ">B-12-13-2</Link>
        <Link to="/b-12-13-3" className=" left-[150px] top-[500px] bg-blue-400 text-white px-4 py-2 rounded shadow mr-4 ">B-12-13-3</Link>

       </div>
    </div>
  )
}

export default B1213


import { Link } from "react-router-dom"

function B1217(){
  return (
    <div className="w-screen h-screen overflow-auto bg-white" >
        <p className='text-6xl bg-amber-300'>Number of wells </p>
       <div className="flex mt-4 text-4xl items-center ">
        <Link to="/b-12-17-1" className=' left-[150px] top-[350px] bg-blue-400 text-white px-4 py-2 rounded shadow mr-4 ml-4'>B-12-17-1</Link>
        <Link to="/b-12-17-2" className=" left-[150px] top-[420px] bg-blue-400 text-white px-4 py-2 rounded shadow mr-4 ">B-12-17-2</Link>
        <Link to="/b-12-17-3" className=" left-[150px] top-[500px] bg-blue-400 text-white px-4 py-2 rounded shadow mr-4 ">B-12-17-3</Link>
        <Link to="/b-12-17-4" className=' left-[150px] top-[350px] bg-blue-400 text-white px-4 py-2 rounded shadow mr-4 ml-4'>B-12-17-4</Link>
        <Link to="/b-12-17-5" className=" left-[150px] top-[420px] bg-blue-400 text-white px-4 py-2 rounded shadow mr-4 ">B-12-17-5</Link>
        <Link to="/b-12-17-6" className=" left-[150px] top-[500px] bg-blue-400 text-white px-4 py-2 rounded shadow mr-4 ">B-12-17-6</Link>

       </div>
    </div>
  )
}

export default B1217
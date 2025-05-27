// import React from 'react'
// import { Link } from 'react-router-dom'

// function Dashboard() {
//   return (
//     <div className="w-screen h-screen overflow-auto bg-white">
//       <div className="relative min-w-[1800px] min-h-[1200px] p-4">
//         {/* Nodes */}
//         <Link to="/b-12-17" className='absolute left-[150px] top-[350px] bg-blue-400 text-white px-4 py-2 rounded shadow'>B-12-17</Link>
//         <Link to="/b-12-13" className="absolute left-[150px] top-[420px] bg-blue-400 text-white px-4 py-2 rounded shadow">B-12-13</Link>
//         <Link to="/b-12-15" className="absolute left-[150px] top-[500px] bg-blue-400 text-white px-4 py-2 rounded shadow">B-12-15</Link>
//         <Link to="/b-12-11" className="absolute left-[300px] top-[450px] bg-blue-500 text-white px-4 py-2 rounded shadow">B-12-11</Link>
//         <Link to="/c-24-p3" className="absolute left-[800px] top-[300px] bg-yellow-400 text-black px-4 py-2 rounded shadow">C-24-P3</Link>
//         <Link to="/c-24-p4" className="absolute left-[800px] top-[500px] bg-yellow-400 text-black px-4 py-2 rounded shadow">C-24-P4</Link>
//         <Link to="/c-24-p2" className="absolute left-[1000px] top-[200px] bg-yellow-400 text-black px-4 py-2 rounded shadow">C-24-P2</Link>
//         <Link to="/c-24-rp" className="absolute left-[1000px] top-[400px] bg-yellow-500 text-black px-4 py-2 rounded shadow">C-24-RP</Link>
//         <Link to="/c-24-p1" className="absolute left-[1200px] top-[400px] bg-yellow-500 text-black px-4 py-2 rounded shadow">C-24-P1</Link>
//         <Link to="/tcpp" className="absolute left-[1500px] top-[150px] bg-yellow-200 text-black px-4 py-2 rounded border border-yellow-600 shadow">TCP/TPP</Link>
//         <Link to="/c-2" className="absolute left-[1600px] top-[450px] bg-yellow-400 text-black px-4 py-2 rounded shadow">C-2</Link>
//         <Link to="/c-26" className="absolute left-[800px] top-[850px] bg-green-500 text-white px-4 py-2 rounded shadow">C-26</Link>
//         <Link to="/b-12-1" className="absolute left-[600px] top-[900px] bg-green-500 text-white px-4 py-2 rounded shadow">B-12-1</Link>
//         <Link to="/nqg" className="absolute left-[300px] top-[1000px] bg-green-700 text-white px-4 py-2 rounded shadow">NQG</Link>

//         {/* SVG Connections */}
//         <svg className="absolute inset-0 w-full h-full pointer-events-none">
//           <line x1="300" y1="470" x2="240" y2="380" stroke="green" strokeWidth="2" />
//           <line x1="300" y1="470" x2="240" y2="440" stroke="green" strokeWidth="2" />
//           <line x1="300" y1="470" x2="240" y2="520" stroke="green" strokeWidth="2" />
//           <line x1="385" y1="470" x2="1000" y2="420" stroke="green" strokeWidth="2" />

//           <line x1="1000" y1="420" x2="895" y2="320" stroke="green" strokeWidth="2" />
//           <line x1="1000" y1="420" x2="850" y2="500" stroke="green" strokeWidth="2" />
//           <line x1="1050" y1="400" x2="1050" y2="240" stroke="green" strokeWidth="2" />
//           <line x1="1095" y1="420" x2="1200" y2="420" stroke="green" strokeWidth="2" />

//           <line x1="1240" y1="400" x2="1500" y2="180" stroke="green" strokeWidth="2" />
//           <line x1="1295" y1="420" x2="1600" y2="450" stroke="green" strokeWidth="2" />

//           <line x1="1250" y1="440" x2="1000" y2="850" stroke="black" strokeWidth="2" />
//           <line x1="1000" y1="850" x2="600" y2="900" stroke="green" strokeWidth="2" />
//           <line x1="600" y1="900" x2="300" y2="1000" stroke="black" strokeWidth="3" strokeDasharray="5,5" />
//         </svg>
//       </div>
//     </div>
//   )
// }

// export default Dashboard



import React from 'react'
import { nodes } from './Nodes'
import Node from '../Node'

function Dashboard() {
  return (
    <div className='w-screen h-screen overflow-auto bg-blue-950'>
        <div className="relative min-w-[1800px] min-h-[1200px] p-4">
            {/* render all nodes */}
            { nodes.map((node) => (
                <Node key={node.id} {...node} /> 
                ))}

            {/* SVG Connections */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <line x1="300" y1="470" x2="240" y2="380" stroke="green" strokeWidth="2" stroke-linecap="round" />
          <line x1="300" y1="470" x2="240" y2="440" stroke="green" strokeWidth="2" />
          <line x1="300" y1="470" x2="240" y2="520" stroke="green" strokeWidth="2" />
          <line x1="385" y1="470" x2="1000" y2="420" stroke="green" strokeWidth="10" stroke-linecap="round" />

          <line x1="1000" y1="420" x2="895" y2="320" stroke="green" strokeWidth="2" />
          <line x1="1000" y1="420" x2="850" y2="500" stroke="green" strokeWidth="2" />
          <line x1="1050" y1="400" x2="1050" y2="240" stroke="green" strokeWidth="2" />
          <line x1="1095" y1="420" x2="1200" y2="420" stroke="green" strokeWidth="10" />

          <line x1="1240" y1="400" x2="1500" y2="180" stroke="green" strokeWidth="2" />
          <line x1="1295" y1="420" x2="1600" y2="450" stroke="green" strokeWidth="2" />

          <line x1="1250" y1="440" x2="1000" y2="850" stroke="black" strokeWidth="10" />
          <line x1="1000" y1="850" x2="600" y2="900" stroke="green" strokeWidth="2" />
          <line x1="600" y1="900" x2="300" y2="1000" stroke="black" strokeWidth="2" />
        </svg>
        </div>
    </div>
  )
}

export default Dashboard

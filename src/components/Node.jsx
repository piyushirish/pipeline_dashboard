import React from 'react'
import { Link } from 'react-router-dom'

const Node = ({ id, label, position, route, color }) => {
  return (
    <Link
        key={id}
        to={route}
        className={`absolute ${color} px-4 py-2 rounded shadow`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
        {label}
    </Link>
  )
}

export default Node;

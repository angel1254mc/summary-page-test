import React from 'react'
import { Link } from 'react-router-dom'

const Tabs = () => {
  return (
    <div className="w-full flex gap-x-10 pt-2 text-lg">
        <Link to={'/dashboard/summary'}>Summary</Link>
        <Link to={'/dashboard/summary'}>Solicitation</Link>
        <Link to={'/dashboard/summary'}>Notes</Link>
        <Link to={'/dashboard/summary'}>Team</Link>
        <Link to={'/dashboard/summary'}>Tasks</Link>
        <Link to={'/dashboard/summary'}>Documents</Link>
        <Link to={'/dashboard/summary'}>Score</Link>
    </div>
  )
}

export default Tabs
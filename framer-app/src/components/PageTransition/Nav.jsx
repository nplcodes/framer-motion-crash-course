import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function Nav() {
  return (
    <div>
        <ul className='nav'>
            <li className='nav-item'>
                <Link to='/' className='nav-link'>Home</Link>
            </li>
            <li className='nav-item'>
                <Link to='/about' className='nav-link'>About</Link>
            </li>
        </ul>
    </div>
  )
}

export default Nav
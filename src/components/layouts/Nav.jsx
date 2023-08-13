import React from 'react'
import {Link} from 'react-router-dom'
import '../../styles/components/layout/Nav.css'
const Nav = () => {
  return (
    <nav>
    <div >
       <ul className='header' >
        <li><Link to='/' className='txt'> Home</Link></li>
        <li><Link to='/Productos'className='txt' >Productos</Link></li>
        <li><Link to='/Servicios'className='txt' >Servicios</Link></li>
        <li><Link to='/Nosotros'className='txt' >Nosotros</Link></li>
        <li><Link to='/Contactanos' className='txt' >Contactanos</Link></li>
       
       </ul>
        
    </div>
    </nav>
  )
}

export default Nav
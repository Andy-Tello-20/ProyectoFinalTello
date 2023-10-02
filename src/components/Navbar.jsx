import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className='box-h1'>
      <Link to="/" >  <h1 className="logo">A VER SI AHORRA </h1></Link> </div>
      
        <ul className="menu">
            <li><Link className="menu-link" to="/">Inicio</Link></li>
            <li><Link className="menu-link" to="/productos">Productos</Link></li>
            <li><Link className="menu-link" to="/productos/materiales">Materiales</Link></li>
            <li><Link className="menu-link" to="/productos/herramientas">Herramientas</Link></li>
            <li><Link className="menu-link" to="/productos/maquinaria">Maquinaria</Link></li>
            <li><Link className="menu-link" to="/productos/medición">Medición</Link></li>
            <li><Link className="menu-link" to="/contacto">Contacto</Link></li>
            <li><CartWidget /></li>
        </ul>
    </nav>
  )
}

export default Navbar
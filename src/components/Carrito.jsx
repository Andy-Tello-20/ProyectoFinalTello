import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito,eliminarDelCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }
    const handleEliminarDelCarrito = (id) => {
        eliminarDelCarrito(id);
    }

  return (
    <div className="container">
        <h1 className="main-title">Carrito</h1>

        <div className='container-carrito' >

        {
            carrito.map((prod) => (

               

                <div className='contenedorcito' key={prod.id}>
                    <br />
                    <img className='img-carrito' src={prod.imagen} alt={prod.titulo} />
                    
                    <div className='contenido-carrito'>
                    <h3>{prod.titulo}</h3>
                    <p>Precio unit: ${prod.precio}</p>
                    <p>Precio total: ${prod.precio * prod.cantidad}</p>
                    <p>Cant: {prod.cantidad}</p>
                    <button className="borrarItem"onClick={() => handleEliminarDelCarrito(prod.id)}>Eliminar</button>
                    </div>
                    <br />
                </div>
                
            ))
        }

            </div>

        {  
            carrito.length > 0 ?
            <>
                <h2>Precio total: ${precioTotal()}</h2>

                <div className='box-botones' >
                <button className='btn-Vaciar' onClick={handleVaciar}>Vaciar</button>
                <Link className='btn-Finalizar' to="/checkout">Finalizar compra</Link>
                </div>
            </> :
            <h2>No hay nada en el carrito</h2>
        }
        
    </div>
  )
}

export default Carrito
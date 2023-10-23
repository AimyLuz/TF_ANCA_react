
import './Cart.css'
import React, { useContext  } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'
import Button from "react-bootstrap/Button";

const Cart = () => {
    const { cart, clearCart, total } = useContext(CartContext)

   
        return (
            <div>
                { cart.length 
                ? <div>
                    {cart.map((item)=> <CartItem key={item.id} item={item}/>)}
                    <p>Total a pagar: ${total()}</p>
                    <div>
                    <Button className='btn btn-danger' onClick={clearCart}>Vaciar Carrito</Button>
                    <Button className='btn btn-dark'>Terminar Compra</Button>
                    </div>
                </div>

                :             <div>
                <h1> No hay items en el carrito</h1>
                <Link to='/' className='btn btn-dark Option' >Ir a comprar</Link>
            </div>}
            </div>
        )
}

export default Cart;
{/*
const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

    if(totalQuantity === 0) {
        return (
            <div>
                <h1> No hay items en el carrito</h1>
                <button><Link to='./' className='Option'>Productos</Link></button>
            </div>
        )
    }
    return (
        <div>
            {
                cart.map(p => <CartItem key={p.id} {...p}/>)
            }
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className ="Button">Limpiar Carrito</button>
            <button><Link to='/checkout' className='Option'> Checkout</Link></button>
        </div>
    )
}

*/}
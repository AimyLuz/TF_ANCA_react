
import './Cart.css'
import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'
import Button from "react-bootstrap/Button";

const Cart = () => {
    const { cart, clearCart, total } = useContext(CartContext)


    return (
        <div>
            {cart.length
                ? <div>
                    {cart.map((item) => <CartItem key={item.id} item={item} />)}
                    <p>Total a pagar: ${total()}</p>
                    <div>
                        <Button className='btn btn-danger' onClick={clearCart}>Vaciar Carrito</Button>
                        <Link to='/checkout' className='btn btn-dark Option' >Terminar Compra</Link>
                    </div>
                </div>

                : <div>
                    <h1> No hay items en el carrito</h1>
                    <Link to='/' className='btn btn-dark Option' >Ir a comprar</Link>
                </div>}
        </div>
    )
}

export default Cart;

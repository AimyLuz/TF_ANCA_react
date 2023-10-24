import cart from './assets/cart.svg'
import './CartWidget.css'
import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import {BsCart4} from 'react-icons/bs'
import { Badge } from 'react-bootstrap';
const CartWidget = () => {
    
    const { cartQuantity } = useContext(CartContext)
    return (
        <div className='d-flex justify-context-around aling-items-center'>
            <BsCart4 fontSize={'1.5rem'} color={'#FFF6E0'}/>
            {cartQuantity() > 0 && <Badge bg='danger'>{cartQuantity()}</Badge>}
            
        </div>
    )
}
export default CartWidget;

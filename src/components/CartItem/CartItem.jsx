import React, { useContext } from "react";
import './CartItem.css'
import { CartContext } from "../../context/CartContext";
import Button from "react-bootstrap/Button";


const CartItem = ({item}) => {
    const {deleteItem} = useContext(CartContext)
    return (
        <div className="Div">
            <img src={item.img} alt={item.name} className="img_carrito"/>
            <p>{item.name}</p>
            <p>${item.price}</p>
            <p>{item.quantity}</p>
            <p>Sub total: {item.quantity * item.price}</p>
            <Button className='btn btn-danger x' onClick={() => deleteItem(item.id)}>X</Button>
        </div>
    )
}

export default CartItem;
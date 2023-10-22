import './ItemCount.css';
import Button from "react-bootstrap/Button";
import {useState} from 'react';

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    return (
        <div className='Counter'>
            <div className='Controls'>
                <Button variant="dark" className='Button' onClick={decrement}>-</Button>
                <h4 className='Number'>{quantity}</h4>
                <Button variant="dark" className='Button' onClick={increment}>+</Button>
            </div>
            <div>
                <Button variant="dark" className='Button Agregar' onClick={()=> onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </Button>
            </div>
        </div>
    )
}


export default ItemCount;
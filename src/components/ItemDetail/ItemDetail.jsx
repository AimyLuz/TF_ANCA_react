import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import Carousel from 'react-bootstrap/Carousel';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ id, name, img, carruselDos, carruselTres, price, stock, description }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

            const item = {
                id, name, price
            }
            addItem(item, quantity)
    }

    return (
        <article className='CardItemDetail'>
            <header className='HeaderDetail'>
                <h2 className='ItemHeaderDetail'>
                    {name}
                </h2>
            </header>
            <picture>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img src={img} alt={name} className='ItemImgDetail' />
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img src={carruselDos} alt={name} className='ItemImgDetail' />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={carruselTres} alt={name} className='ItemImgDetail' />
                    </Carousel.Item>
                </Carousel>
            </picture>
            <section>
                <p className='InfoDetail'>
                    Precio: ${price}
                </p>
                <p className='InfoDetail'>
                    Stock disponible: {stock}
                </p>
                <p className='InfoDetail'>
                    {description}
                </p>
            </section>
            <footer className='ItemFooterDetail'>
                {
                    quantityAdded > 0 ? (
                        
                        <Button variant="dark" className='Button' ><Link to='/cart' className='Terminar'> Terminar Compra</Link></Button>
                        
                    ) : (
                        <ItemCount initial={1} stock={10} onAdd={handleOnAdd} />
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail;
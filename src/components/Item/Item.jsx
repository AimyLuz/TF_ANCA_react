import './Item.css';
import ItemCount from '../ItemCount/ItemCount';
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';

const Item = ({id, name, img, price, stock}) =>{
    
    return (
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className='ItemImg'/>
            </picture>
            <section>
                <p className='Info Precio'>
                    Precio: ${price}
                </p>
                <Button variant="dark" className='Button' ><Link to={`/item/${id}`} className='Option'>Ver detalle</Link></Button>
                
            </section>
            <footer className='ItemFooter'>
                <p className='Info'>
                    Stock disponible: {stock}
                </p>
            </footer>
        </article>
    )
}

export default Item;
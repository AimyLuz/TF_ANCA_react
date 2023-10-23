{/*
import { useState, useContext } from 'react'
import Button from "react-bootstrap/Button";
import Cart from '../Cart/Cart';
import { CartContext } from '../../context/CartContext';
import {collection, serverTimestamp, addDoc} from 'firebase/firestore'
import { db } from '../../services/firebase'


const CheckoutForm = () => {
    const[user, setUser] = useState({})
    const[valiteEmail, setValidateEmail] = useState('')
    const{cart, total, clearCart} = useContext(CartContext)
    const datoscComprador =(e) =>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }
    const finalizarCompra = (e)=>{
        e.preventDefailt()
        if(!user.name && user.phone){
            alert('los campos son obligatorios')
        }else{
            let order = {
                user, 
                item: cart,
                total: total(),
                date: serverTimestamp()
            }
            const ventas = collection(db, "orders")
            addDoc(ventas, order)
            .then((res)=> console.log(res.id))
            .catch((error)=> console.log(error))
        }
    }
return (
    <div>
        <h2>Terminar Compra</h2>
        <h5>Por favor completar con tus datos</h5>
        <form onSubmit={finalizarCompra}>
            <div className='mb-3'>
                <label className='form-label'>Nombre Completo</label>
                <input className='form-control' onChange={datoscComprador} type='text' placeholder='Nombre y Apellido' name='name'/>
            </div>
            <div className='mb-3'>
            <label className='form-label'>Número de Telefono</label>
                <input className='form-control'  onChange={datoscComprador} type='number' placeholder='+54152212354' name='phone'/>
            </div>
            <div className='mb-3'>
            <label className='form-label'>Dirección de email</label>
                <input className='form-control' onChange={datoscComprador} type='email' placeholder='lala@lala.com' name='mail'/>
            </div>
            <div className='mb-3'>
            <label className='form-label'>Repita su email</label>
                <input className='form-control' type='email' placeholder='lala@lala.com' name='mail' onChange={((e)=> setValidateEmail(e.target.value))}/>
            </div>
            <Button className='btn btn-dark' type='submit'  disabled={valiteEmail !== user.mail}>Generar Orden</Button>
        </form>
    </div>
)
}

export default CheckoutForm;*/}
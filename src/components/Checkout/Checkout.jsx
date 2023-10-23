import { useContext, useState } from "react";
import { db } from "../../services/firebase/firebaseConfig";
import { CartContext } from "../../context/CartContext";
import { collection, serverTimestamp, writeBatch, addDoc, getDocs, query, where } from "firebase/firestore";
import Button from "react-bootstrap/Button";

const Checkout = () => {
    const[user, setUser] = useState({})
    const[valiteEmail, setValidateEmail] = useState('')
    const{cart, total, clearCart} = useContext(CartContext)
    const[orderId, setOrderId] = useState('')
    const datoscComprador =(e) =>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }
    const finalizarCompra = (e)=>{
        e.preventDefault()
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
            .then((res)=> {
                setOrderId(res.id)
                clearCart()
            })
            .catch((error)=> console.log(error))
        }
    }
return (
    <div>
        {orderId !== ''
        ?<div>
        <h2>Felicitaciones! Tu orden fue generada con éxito!</h2>
        <h5>Su id de registro es: {orderId}</h5>
        </div>
        : 
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
    </div>}
</div>
)
}
    {/*
    
const { Timestamp } = db;
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async ({ name, phone, email}) => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date ())
            }

            const batch = writeBatch(db)

            const outOfStock = []
            const ids = cart.map(prod => prod.id)
            const productsRef =  collection(db, 'products')
            const productsAddedFromFirestore = await getDocs(query(productsRef, where('documentid', 'in', ids)))
            const { docs } = productsAddedFromFirestore
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock 

                const productAddedToCart = cart.find (prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity 
                if (stockDb >= prodQuantity){
                    batch.update(doc.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
            if(outOfStock.length === 0){
                await batch.commit()
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)
                setOrderId(orderAdded.id)
                clearCart()
            } else {
                console.error('hay productos que estan fuera de stock')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return <h1>Se esta generando su orden...</h1>
    }
    if(orderId){
        return <h1>El id de su orden es: {orderId}</h1>
    }
    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfim={createOrder}/>
        </div>
    )*/}


export default Checkout
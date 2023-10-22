import { useState, useEffect } from 'react';
import { getProducts, getProductByCategory } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css'
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig'; 




const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]); // Inicializa products como un array vacío
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams();
    

    useEffect(() => {
      setLoading(true)
      
      const collectionRef = categoryId
        ? query(collection(db, 'products'), where('category', '==', categoryId))
        : collection(db, 'products')

      
      getDocs(collectionRef)
        .then(response =>{
          const productsAdapted = response.docs.map(doc => {
            const data = doc.data()
            return { id: doc.id, ...data}
          })
          setProducts(productsAdapted) 
        })
        .catch(error => {
          console.log(error)
        })
        .finally(() => {
          setLoading(false)
        })
      }, [categoryId]);
        
  

{/*    useEffect(() => {
      const asyncFunc = categoryId ? getProductByCategory : getProducts;
      asyncFunc(categoryId)
        .then(response => {
          if (Array.isArray(response)) {
            console.log('Datos de productos válidos:', response); 
            setProducts(response);
          } else {
            console.error('Los datos de productos no están en el formato esperado.');
          }
        })
        .catch(error => {
          console.error(error);
        });
  
    }, [categoryId]);
  */}
    return (
      <div>
        <h1>{greeting}</h1>
        {Array.isArray(products) && products.length > 0 && <ItemList products={products} />}
      </div>
    )
  };

export default ItemListContainer;
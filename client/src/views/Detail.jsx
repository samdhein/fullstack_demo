import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import DeleteButton from '../components/DeleteButton';

// get ID from params
// with id, grab info from backend (axios)
// get the info when loaded (useEffect). Sometimes not, when we don't need anything upon loading. 
// info change (useState)

const Detail = ( ) => {

    const [product, setProduct] = useState("")
    const {id} = useParams()

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res=>setProduct(res.data))
        .catch(err=>console.log(err))
    },[])


    return (
        <fieldset>
            <legend>Detail.jsx</legend>
            {
                product?(
                    <div>
                        <h1>Product Details</h1>
                        <h3>Title: {product.title}</h3>
                        <h3>Price: {product.price}</h3>
                        <h3>Description: {product.description}</h3>
                        <DeleteButton id={product._id}/>
                    </div>
                ): (
                    <h1>Loading...</h1>
                )
            }
        </fieldset>
    )
}
export default Detail;
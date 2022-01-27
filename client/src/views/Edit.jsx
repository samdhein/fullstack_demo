import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'
// grab ID with params
// grab info from backend
// use the info on form
// form needs onChange, submitHandler,
// if successful, redirect to / (useHistory)

const Edit = () => {

    const {id} = useParams()
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
    const history = useHistory()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res=>{
            setTitle(res.data.title)
            setPrice(res.data.price)
            setDescription(res.data.description)
        })
        .catch(err=>console.log(err))
    },[])

    const submitHandler = (e) =>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/products/${id}`, {title, price, description})
        .then(res=>history.push("/"))  // redirect to root if successful
        .catch(err=>console.log(err))
        }

    return (
        <fieldset>
            <legend>Edit.jsx</legend>
            <h1>Edit</h1>
            <form onSubmit={submitHandler}>
                <p>
                    <label>Title</label>
                    <input type="text" name="title" value={title} onChange={e=>setTitle(e.target.value)} />
                </p>
                <p>
                    <label>Price</label>
                    <input type="number" name="price" value={price} onChange={e=>setPrice(e.target.value)} />
                </p>
                <p>
                    <label>Description</label>
                    <input type="text" name="title" value={description} onChange={e=>setDescription(e.target.value)} />
                </p>
                <button>Submit</button>
            </form>
        </fieldset>
    )
}

export default Edit

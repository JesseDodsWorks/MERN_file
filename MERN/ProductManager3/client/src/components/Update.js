import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useNavigate, useParams} from "react-router-dom";

export default function Update(props) {

    const {id} = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState()
	const [price, setPrice] = useState()
	const [description, setDescription] = useState()

    useEffect( () =>{
    	axios.get("http://localhost:8000/api/products/" + id)

    	.then((res)=>{
          	setTitle(res.data.title)
            setPrice(res.data.price)
            setDescription(res.data.description)
	})
    	.catch((err)=>{
            console.log("ERROR", err);
    	})
    }, [])

    const onSubmitHandler = (e) => {
    e.preventDefault();

    axios.put('http://localhost:8000/api/products/' + id, {
        title: title,
        price: price,
        description: description,
    })
        .then(res => {
            console.log(res);
            console.log(res.data);
            navigate("/home")
        })
        .catch(err => console.log(err))
}

	return (
		<div className="App">
			
			<form onSubmit={onSubmitHandler}>
				<input placeholder="item" onChange={(e) => setTitle(e.target.value)} value={title} />
				<input placeholder="price" onChange={(e) => setPrice(e.target.value)} value={price} />
				<input placeholder="description" onChange={(e) => setDescription(e.target.value)} value={description} />
				<button type="submit"> create </button>
			</form>

		</div>
	);
}





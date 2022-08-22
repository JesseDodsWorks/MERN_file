import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams} from "react-router-dom";

export default function Detail(props) {

    const [products, setProducts] = useState({})
        const {id} = useParams();

    useEffect( () =>{
    	axios.get("http://localhost:8000/api/products/" + id)

    	.then((res)=>{
          	setProducts(res.data)
	})
    	.catch((err)=>{
            console.log("ERROR", err);
    	})
    }, [])

  return (
    <div>
        <p>{ products.title }</p>
        <p>{ products.price }</p>
        <p>{ products.description }</p>
    </div>
  )
}

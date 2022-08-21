import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';



export default function ProductList(props) {

    const [products, setProducts] = useState([])

	useEffect(()=>{
    	axios.get("http://localhost:8000/api/products")
    	.then((res)=>{
	    console.log(res.data);
          	setProducts(res.data)
	})
    	.catch((err)=>{
            console.log(err);
    	})
    }, [])

	return (
		<div>
			<h3>inside ProductList</h3>
			{ // don't forget this is JSX
				products.map( (name, index) => {
					return <Link to={"/"} key={index}> {name.title} </Link>
				})
			}
		</div>
	)
}



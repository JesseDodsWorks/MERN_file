import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function ProductList(props) {

	const [products, setProducts] = useState([])
	const navigate = useNavigate();


	useEffect(() => {
		axios.get("http://localhost:8000/api/products")
			.then((res) => {
				console.log(res.data);
				setProducts(res.data)
			})
			.catch((err) => {
				console.log(err);
			})
	}, [])

	const onButtonUpdate = (id) => {

		navigate("/update/" + id)
	}

	const onButtonDelete = (id) => {

		axios.delete("http://localhost:8000/api/products/" + id)
			.then((res) => {
				setProducts(products.filter(product => product._id !== id));
			})
			.catch((err) => {
				console.log(err);
			})
	}
ee

	return (
		<div style={{width:"50%"}} className='xm-auto'>
			<table className='table table-striped'>
				<thead>
					<tr>
						<th>Products</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{ // don't forget this is JSX
						products.map((name, index) =>
							<tr  key={index}>
								<td> <Link to={"/detail/" + name._id}>  {name.title} </Link> </td>
								<td>
									<button onClick={(e) => onButtonUpdate(name._id)}> update </button>
									<button onClick={(e) => onButtonDelete(name._id)}> delete </button>
								</td>
							</tr>
						)
					}
				</tbody>
			</table>
		</div>
	)
}



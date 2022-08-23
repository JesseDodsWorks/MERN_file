import React, { useState } from 'react'

import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

export default function Main() {

	const [title, setTitle] = useState("");
	const [price, setPrice] = useState();
	const [description, setDescription] = useState("");

	const allState = [
		[title, setTitle],
		[price, setPrice],
		[description, setDescription]
	] 

	return (
		<div >
			<h3> Product Manager </h3>
			<ProductForm allState={allState}/>
			<hr/>
			<h3> ALL Products </h3>
			<ProductList allState={allState}/>
		</div>
	)
}

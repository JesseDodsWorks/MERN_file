import React, { useState } from 'react'
import axios from 'axios';
import './App.css';

function App() {

	const [title, setTitle] = useState("");
	const [price, setPrice] = useState(0);
	const [description, setDescription] = useState("");

	const onSubmitHandler = (e) => {
		e.preventDefault();

		console.log("hello from the other side")

		axios.post('http://localhost:8000/api/products', {
			title: title,
			price: price,
			description: description,
		})
			.then(res => {
				console.log(res);
				console.log(res.data);
			})
			.catch(err => console.log(err))
	}

	return (
		<div className="App">
			<h3>Product Manager</h3>

			<form onSubmit={onSubmitHandler}>
				<input placeholder="item" onChange={(e) => setTitle(e.target.value)} value={title} />
				<input placeholder="price" onChange={(e) => setPrice(e.target.value)} value={price} />
				<input placeholder="description" onChange={(e) => setDescription(e.target.value)} value={description} />
				<button type="submit"> create </button>
			</form>

		</div>
	);
}

export default App;

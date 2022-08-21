import React from 'react'
import axios from 'axios';

export default function ProductForm(props) {

    const [title, setTitle] = props.allState[0];
	const [price, setPrice] = props.allState[1];
	const [description, setDescription] = props.allState[2];
    

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
			
			<form onSubmit={onSubmitHandler}>
				<input placeholder="item" onChange={(e) => setTitle(e.target.value)} value={title} />
				<input placeholder="price" onChange={(e) => setPrice(e.target.value)} value={price} />
				<input placeholder="description" onChange={(e) => setDescription(e.target.value)} value={description} />
				<button type="submit"> create </button>
			</form>

		</div>
	);
}

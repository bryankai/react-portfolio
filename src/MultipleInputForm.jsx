import React, { useState } from 'react';

export default function MultipleInputForm() {
	const [state, setState] = useState(
		{
			name: "",
			age: "",
			email: "",
			address: ""
		}
	)

	const handleChange = (e) => {
		const { name, value } = e.target;
		setState(prevState => {
			return { ...prevState, [name]: value }
		});
	}

	const handleSubmit = e => {
		e.preventDefault();
		console.log(state);
	}

	return (
		<form onSubmit={handleSubmit}>
			<h3>Name</h3>
			<input name="name" type="text" onChange={handleChange}></input>
			<h3>Age</h3>
			<input name="age" type="age" onChange={handleChange}></input>
			<h3>Email</h3>
			<input name="email" type="email" onChange={handleChange}></input>
			<h3>Address</h3>
			<input name="address" type="textarea" onChange={handleChange}></input>
			<button type="submit" >Submit</button>
		</form>
	)
}
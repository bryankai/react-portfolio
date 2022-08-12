import React, { useState } from 'react';
import MultipleInputForm from './MultipleInputForm';

export default function Contents() {
	const [count, setCount] = useState(4);

	const decrementCount = () => {
		setCount(prevCount => prevCount - 1);
	}

	const incrementCount = () => {
		setCount(prevCount => prevCount + 1);
	}

	return (
		<div>
			<h1>Hello, my name is Bryan.</h1>
			<p>See below for a basic counter..</p>
			<button onClick={decrementCount}>-</button>
			<span>{count}</span>
			<button onClick={incrementCount}>+</button>
			<MultipleInputForm />
		</div >
	)
}
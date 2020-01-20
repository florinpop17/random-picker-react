import React, { useState } from 'react';
import './App.css';

// TODO:
// MARKUP
// box / container ✅
// input + button ✅
// list of items ✅
// button ✅

// FUNCTIONALITIES
// input -> save to state ✅
// button (top) -> add to list ✅
// button (bottom) -> trigger the randomizer ✅

function App() {
	const [items, setItems] = useState([]);
	const [inputValue, setInputValue] = useState('');

	const handleSubmit = e => {
		e.preventDefault();

		const newItem = {
			text: inputValue,
			selected: false
		};

		const newItems = [...items, newItem];

		setInputValue('');
		setItems(newItems);
	};

	const randomizer = () => {
		for (let i = 0; i < 20; i++) {
			setTimeout(pickRandomItem, 100 * i + 100);
		}
	};

	const pickRandomItem = () => {
		const randomItem = items[Math.floor(Math.random() * items.length)];

		const newItems = items.map(item =>
			item === randomItem
				? { ...item, selected: true }
				: { ...item, selected: false }
		);

		setItems(newItems);
	};

	return (
		<div className='container bg-white mx-auto shadow-lg w-2/4 h-auto p-6'>
			<form onSubmit={handleSubmit} className='flex'>
				<input
					className='py-2 px-4 border border-gray-500 flex-1'
					type='text'
					placeholder='Add a new item'
					value={inputValue}
					onChange={e => {
						setInputValue(e.target.value);
					}}
				/>
				<button className='bg-blue-500 border border-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4'>
					Add
				</button>
			</form>

			<ul>
				{items.map((item, idx) => (
					<li
						className={`my-5 p-2 ${
							item.selected ? 'bg-orange-500 text-white' : ''
						}`}
						key={idx}>
						{item.text}
					</li>
				))}
			</ul>

			{items.length > 0 && (
				<button
					className='bg-blue-500 w-full hover:bg-blue-700 text-white py-2 px-4'
					onClick={randomizer}>
					Randomize
				</button>
			)}
		</div>
	);
}

export default App;

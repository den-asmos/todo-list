import { useState } from 'react';

const AddNewTodo = ({ refreshTodos }) => {
	const [value, setValue] = useState('');

	const addTodo = () => {
		if (value) {
			fetch('http://localhost:7000/todos', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					title: value,
				}),
			}).finally(() => {
				refreshTodos();
				setValue('');
			});
		}
	};

	return (
		<div className="mb-[20px] flex justify-between items-center">
			<input
				type="text"
				value={value}
				placeholder="ADD NEW TODO . . ."
				onChange={({ target }) => setValue(target.value)}
				className="input-field"
			/>
			<button onClick={addTodo} className="main-btn font-bold">
				ADD
			</button>
		</div>
	);
};

export default AddNewTodo;

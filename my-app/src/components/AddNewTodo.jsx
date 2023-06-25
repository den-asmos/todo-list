import { useState } from 'react';
import { ref, push } from 'firebase/database';
import { db } from '../firebase';

const AddNewTodo = () => {
	const [value, setValue] = useState('');

	const addTodo = () => {
		if (value) {
			const todosDBRef = ref(db, 'todos');

			push(todosDBRef, {
				title: value,
			}).then(() => setValue(''));
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

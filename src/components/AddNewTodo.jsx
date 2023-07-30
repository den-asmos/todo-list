import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from '../redux/actions';

const AddNewTodo = () => {
	const dispatch = useDispatch();
	const [value, setValue] = useState('');

	const addTodo = () => {
		if (value) {
			dispatch(createTodo(value));
			setValue('');
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

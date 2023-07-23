import { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AddNewTodo = () => {
	const [value, setValue] = useState('');
	const { refreshTodos, api } = useContext(AppContext);

	const addTodo = () => {
		if (value) {
			api.createTodo(value).finally(() => {
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

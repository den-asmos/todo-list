import { useContext, useState } from 'react';
import EditField from './EditField';
import EditSection from './EditSection';
import { AppContext } from '../context/AppContext';
import { TodoContext } from './../context/TodoContext';

const Todo = ({ id, title }) => {
	const [isChosen, setIsChosen] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [newTitle, setNewTitle] = useState(title);
	const refreshTodos = useContext(AppContext);

	const handleEdit = () => {
		setIsChosen(false);
		setIsEditing(true);
	};

	const editTodo = () => {
		if (newTitle) {
			fetch(`http://localhost:7000/todos/${id}`, {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ title: newTitle, id }),
			}).finally(() => {
				setIsEditing(false);
				refreshTodos();
			});
		}
	};

	const deleteTodo = () => {
		fetch(`http://localhost:7000/todos/${id}`, {
			method: 'DELETE',
		}).finally(() => refreshTodos());
	};

	return (
		<TodoContext.Provider
			value={{ newTitle, setNewTitle, editTodo, handleEdit, deleteTodo }}
		>
			{isEditing ? (
				<EditField />
			) : (
				<li onClick={() => setIsChosen(!isChosen)} className="list-item">
					{title}
					{isChosen && <EditSection />}
				</li>
			)}
		</TodoContext.Provider>
	);
};

export default Todo;

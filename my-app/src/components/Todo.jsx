import { useState } from 'react';
import EditField from './EditField';
import EditSection from './EditSection';

const Todo = ({ id, title, refreshTodos }) => {
	const [isChosen, setIsChosen] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [newTitle, setNewTitle] = useState(title);

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
		<>
			{isEditing ? (
				<EditField newTitle={newTitle} setNewTitle={setNewTitle} editTodo={editTodo} />
			) : (
				<li onClick={() => setIsChosen(!isChosen)} className="list-item">
					{title}
					{isChosen && <EditSection handleEdit={handleEdit} deleteTodo={deleteTodo} />}
				</li>
			)}
		</>
	);
};

export default Todo;

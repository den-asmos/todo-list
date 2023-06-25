import { useState } from 'react';
import { ref, set, remove } from 'firebase/database';
import { db } from '../firebase';
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
			const todoDBRef = ref(db, `todos/${id}`);

			set(todoDBRef, {
				title: newTitle,
			}).then(() => setIsEditing(false));
		}
	};

	const deleteTodo = () => {
		const todoDBRef = ref(db, `todos/${id}`);

		remove(todoDBRef);
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

import { useContext, useState } from 'react';
import EditField from './EditField';
import EditSection from './EditSection';
import { AppContext } from '../context/AppContext';
import { TodoContext } from './../context/TodoContext';

const Todo = ({ id, title }) => {
	const [isChosen, setIsChosen] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [newTitle, setNewTitle] = useState(title);
	const { refreshTodos, api } = useContext(AppContext);

	const handleEdit = () => {
		setIsChosen(false);
		setIsEditing(true);
	};

	const editTodo = () => {
		if (newTitle) {
			api.updateTodo(id, newTitle).finally(() => {
				setIsEditing(false);
				refreshTodos();
			});
		}
	};

	const removeTodo = () => {
		api.deleteTodo(id).finally(() => refreshTodos());
	};

	return (
		<TodoContext.Provider
			value={{ newTitle, setNewTitle, editTodo, handleEdit, removeTodo }}
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

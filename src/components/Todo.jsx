import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo, deleteTodo } from '../redux/actions';
import EditField from './EditField';
import EditSection from './EditSection';

const Todo = ({ id, title }) => {
	const dispatch = useDispatch();

	const [isChosen, setIsChosen] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [newTitle, setNewTitle] = useState(title);

	const handleEdit = () => {
		setIsChosen(false);
		setIsEditing(true);
	};

	const editTodo = () => {
		if (newTitle) {
			dispatch(updateTodo(id, newTitle));
			setIsEditing(false);
		}
	};

	const removeTodo = () => {
		dispatch(deleteTodo(id));
	};

	return (
		<>
			{isEditing ? (
				<EditField newTitle={newTitle} setNewTitle={setNewTitle} editTodo={editTodo} />
			) : (
				<li onClick={() => setIsChosen(!isChosen)} className="list-item">
					{title}
					{isChosen && <EditSection handleEdit={handleEdit} removeTodo={removeTodo} />}
				</li>
			)}
		</>
	);
};

export default Todo;

import { useContext } from 'react';
import { deleteIcon, editIcon } from '../assets';
import { TodoContext } from '../context/TodoContext';

const EditSection = () => {
	const { handleEdit, deleteTodo } = useContext(TodoContext);

	return (
		<div className="position-center flex justify-end bg-[--color-primary] opacity-80 rounded-md shadow-[--color-primary] shadow-sm">
			<button onClick={handleEdit} className="mx-3 edit-btn hover:opacity-80">
				<img src={editIcon} alt="edit" className="icon" />
			</button>
			<button onClick={deleteTodo} className="edit-btn hover:opacity-80">
				<img src={deleteIcon} alt="delete" className="icon" />
			</button>
		</div>
	);
};

export default EditSection;

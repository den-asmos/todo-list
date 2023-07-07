import { deleteIcon, editIcon } from '../assets';

const EditSection = ({ handleEdit, deleteTodo }) => {
	return (
		<div className="absolute top-1/2 -right-1/4 flex flex-col bg-transparent">
			<button onClick={handleEdit} className="mb-3 edit-btn hover:opacity-80">
				<img src={editIcon} alt="edit" className="icon" />
			</button>
			<button onClick={deleteTodo} className="edit-btn hover:opacity-80">
				<img src={deleteIcon} alt="delete" className="icon" />
			</button>
		</div>
	);
};

export default EditSection;

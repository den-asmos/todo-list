import { checkboxIcon } from '../assets';

const EditField = ({ newTitle, setNewTitle, editTodo }) => {
	return (
		<div className="list-item min-h-[40px]">
			<input
				type="text"
				value={newTitle}
				onChange={({ target }) => setNewTitle(target.value)}
				className="absolute top-0 left-0 py-2 px-4 bg-transparent h-[40px] w-[308px] flex flex-wrap cursor-pointer focus:outline-none"
			/>
			<button
				onClick={editTodo}
				className="edit-btn absolute top-0 right-0 hover:bg-slate-300"
			>
				<img src={checkboxIcon} alt="checkbox" className="icon" />
			</button>
		</div>
	);
};

export default EditField;

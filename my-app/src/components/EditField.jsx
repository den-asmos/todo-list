import { checkboxIcon } from '../assets';

const EditField = ({ title, setTitle, editTodo }) => {
	return (
		<div className="w-[300px] h-[400px] relative">
			<input
				type="text"
				value={title}
				onChange={({ target }) => setTitle(target.value)}
				className="absolute outline-none top-1/2 left-0 w-[300px] h-[50px] text-[20px] py-3 px-4 bg-slate-100 rounded-md text-black"
			/>
			<button
				onClick={editTodo}
				className="edit-btn absolute top-1/2 -right-1/4 hover:bg-slate-300"
			>
				<img src={checkboxIcon} alt="checkbox" className="icon" />
			</button>
		</div>
	);
};

export default EditField;

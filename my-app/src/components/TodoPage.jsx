import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { URL } from '../utils/constants';
import EditSection from './EditSection';
import EditField from './EditField';

const TodoPage = ({ refreshTodos }) => {
	const [title, setTitle] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [isChosen, setIsChosen] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const { id } = useParams();
	const navigate = useNavigate();

	const handleEdit = () => {
		setIsChosen(false);
		setIsEditing(true);
	};

	useEffect(() => {
		setIsLoading(true);

		fetch(`${URL}/${id}`)
			.then((response) => response.json())
			.then((data) => {
				setTitle(data.title);
			})
			.finally(() => setIsLoading(false));
	}, [id]);

	const editTodo = () => {
		if (title) {
			fetch(`${URL}/${id}`, {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ title: title, id }),
			}).finally(() => {
				setIsEditing(false);
				refreshTodos();
			});
		}
	};

	const deleteTodo = () => {
		fetch(`${URL}/${id}`, {
			method: 'DELETE',
		}).finally(() => {
			refreshTodos();
			navigate('/');
		});
	};

	return (
		<>
			<nav className="flex justify-between items-center py-4 px-5 shadow-md text-white w-screen">
				<h2 className="font-bold text-2xl">Todo List</h2>
				<NavLink to="/">
					<p className="mr-5 transition ease-in-out hover:scale-110 duration-200">
						Back To Home
					</p>
				</NavLink>
			</nav>
			<div className="flex justify-center items-center mt-[100px]">
				{isLoading ? (
					<svg className="loader" viewBox="0 0 50 50"></svg>
				) : (
					<div>
						{isEditing ? (
							<EditField title={title} setTitle={setTitle} editTodo={editTodo} />
						) : (
							<div className="relative">
								<div
									onClick={() => setIsChosen(!isChosen)}
									className="flex-wrap overflow-y-auto text-center py-4 px-4 w-[300px] h-[400px] bg-slate-100 shadow-md rounded-md"
								>
									<p className="bg-transparent text-[20px]">{title}</p>
								</div>
								{isChosen && (
									<EditSection handleEdit={handleEdit} deleteTodo={deleteTodo} />
								)}
							</div>
						)}
					</div>
				)}
			</div>
		</>
	);
};

export default TodoPage;

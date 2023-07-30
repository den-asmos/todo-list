import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSortingFilter, selectTodos } from './redux/selectors';
import { readTodos } from './redux/actions';
import { AddNewTodo, FilterTodos, Todo } from './components';
import { useDebounce } from './hooks';
import { sortByFilter } from './utils/sort';

export const App = () => {
	const dispatch = useDispatch();

	const [isLoading, setIsLoading] = useState(false);
	const [search, setSearch] = useState('');
	const debounced = useDebounce(search);

	useEffect(() => {
		setIsLoading(true);
		dispatch(readTodos);
		setIsLoading(false);
	}, [dispatch]);

	const todos = useSelector(selectTodos);
	const sortingFilter = useSelector(selectSortingFilter);

	return (
		<div className="container">
			{isLoading ? (
				<svg className="loader" viewBox="0 0 50 50"></svg>
			) : (
				<div className="container w-[90%] p-4">
					<h1>Todo List</h1>
					<AddNewTodo />
					<div className="w-[90%] py-[20px] flex justify-center items-center border-t-2">
						<div className="flex justify-between items-center">
							<input
								type="text"
								value={search}
								placeholder="SEARCH . . ."
								onChange={({ target }) => setSearch(target.value)}
								className="input-field"
							/>
							<FilterTodos />
						</div>
					</div>
					<ul className="grid grid-flow-row grid-cols-3">
						{sortByFilter(
							todos.filter((todo) => {
								return debounced ? todo.title.includes(debounced) : todo;
							}),
							sortingFilter,
						).map((todo) => (
							<Todo key={todo.id} id={todo.id} title={todo.title} />
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

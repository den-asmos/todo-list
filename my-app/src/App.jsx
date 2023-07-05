import { useState } from 'react';
import { AddNewTodo, FilterTodos, Todo } from './components';
import { useGetTodos, useDebounce } from './hooks';

export const App = () => {
	const [refreshTodosFlag, setRefreshTodosFlag] = useState(false);
	const [sortingFilter, setSortingFilter] = useState('id');
	const [search, setSearch] = useState('');
	const debounced = useDebounce(search);

	const refreshTodos = () => {
		setRefreshTodosFlag(!refreshTodosFlag);
	};

	const { todos, isLoading } = useGetTodos(refreshTodosFlag);

	return (
		<div className="container">
			{isLoading ? (
				<svg className="loader" viewBox="0 0 50 50"></svg>
			) : (
				<div className="container w-[90%] p-4">
					<h1>Todo List</h1>

					<AddNewTodo refreshTodos={refreshTodos} />

					<div className="w-[90%] py-[20px] flex justify-center items-center border-t-2">
						<div className="flex justify-between items-center">
							<input
								type="text"
								value={search}
								placeholder="SEARCH . . ."
								onChange={({ target }) => setSearch(target.value)}
								className="input-field"
							/>
							<FilterTodos
								sortingFilter={sortingFilter}
								setSortingFilter={setSortingFilter}
							/>
						</div>
					</div>

					<ul className="grid grid-flow-row grid-cols-3">
						{todos
							.filter((todo) => {
								return debounced ? todo.title.includes(debounced) : todo;
							})
							.sort((a, b) => (a[sortingFilter] > b[sortingFilter] ? 1 : -1))
							.map((todo) => (
								<Todo
									key={todo.id}
									id={todo.id}
									title={todo.title}
									refreshTodos={refreshTodos}
								/>
							))}
					</ul>
				</div>
			)}
		</div>
	);
};

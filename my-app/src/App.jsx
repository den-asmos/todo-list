import { useEffect, useState } from 'react';

export const App = () => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((response) => response.json())
			.then((data) => setTodos(data.splice(0, 20)))
			.finally(() => setIsLoading(false));
	}, []);

	return (
		<div className="flex flex-col justify-center items-center">
			{isLoading ? (
				<svg
					className="animate-spin h-[50px] w-[50px] absolute left-1/2 top-1/2 translate-x-1/2 translate-y-1/2 rounded-full border-[5px] border-[--color-secondary] border-l-transparent"
					viewBox="0 0 50 50"
				></svg>
			) : (
				<div className="w-[90%] p-4 flex flex-col justify-center items-center">
					<h1 className="m-3 text-[3rem] font-medium text-center text-slate-100 uppercase">
						Todo List
					</h1>
					<ul className="flex flex-wrap justify-center">
						{todos.map((todo) => (
							<li
								key={todo.id}
								className="m-3 px-4 py-2 bg-slate-200 rounded-md w-[350px] flex-wrap shadow-slate-100 shadow-sm hover:opacity-80 cursor-pointer"
							>
								{todo.title}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

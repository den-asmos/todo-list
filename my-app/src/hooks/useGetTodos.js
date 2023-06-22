import { useState, useEffect } from 'react';

export const useGetTodos = (refreshTodosFlag) => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		fetch('http://localhost:7000/todos')
			.then((response) => response.json())
			.then((data) => setTodos(data))
			.finally(() => setIsLoading(false));
	}, [refreshTodosFlag]);

	return { todos, isLoading };
};

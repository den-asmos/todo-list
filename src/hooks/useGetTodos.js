import { useState, useEffect } from 'react';
import { readTodos } from '../utils/api';

export const useGetTodos = (refreshTodosFlag) => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		readTodos()
			.then((data) => setTodos(data))
			.finally(() => setIsLoading(false));
	}, [refreshTodosFlag]);

	return { todos, isLoading };
};

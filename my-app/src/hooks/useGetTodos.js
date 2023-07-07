import { useState, useEffect } from 'react';
import { URL } from '../utils/constants';

export const useGetTodos = (refreshTodosFlag) => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		fetch(URL)
			.then((response) => response.json())
			.then((data) => setTodos(data))
			.finally(() => setIsLoading(false));
	}, [refreshTodosFlag]);

	return { todos, isLoading };
};

import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase';

export const useGetTodos = () => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const todosDBRef = ref(db, 'todos');

		return onValue(todosDBRef, (snapshot) => {
			const loadedTodos = snapshot.val() ? Object.entries(snapshot.val()) : [];

			setTodos(
				loadedTodos.map(([id, { title }]) => {
					return { id, title };
				}),
			);

			setIsLoading(false);
		});
	}, []);

	return { todos, isLoading };
};

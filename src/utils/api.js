const fetchServer = (method, { id, ...payload } = {}) => {
	let url = 'http://localhost:7000/todos';
	const options = { method: method, headers: { 'Content-Type': 'application/json' } };

	if (id !== undefined) {
		url += `/${id}`;
		options.body = JSON.stringify(payload);
	} else if (method === 'POST') {
		options.body = JSON.stringify(payload);
	}

	return fetch(url, options).then((response) => response.json());
};

export const createTodo = (todoTitle) => {
	return fetchServer('POST', { title: todoTitle });
};

export const readTodos = () => {
	return fetchServer('GET');
};

export const updateTodo = (id, newTodoTitle) => {
	return fetchServer('PATCH', { id: id, title: newTodoTitle });
};

export const deleteTodo = (todoId) => {
	return fetchServer('DELETE', { id: todoId });
};

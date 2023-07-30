import { fetchServer } from '../utils/api';

export const readTodos = (dispatch) => {
	return fetchServer('GET').then((todos) => {
		dispatch({ type: 'READ_TODOS', payload: todos });
	});
};

export const createTodo = (todoTitle) => {
	return (dispatch) => {
		return fetchServer('POST', { title: todoTitle }).then((todo) => {
			dispatch({ type: 'CREATE_TODO', payload: todo });
		});
	};
};

export const updateTodo = (id, newTodoTitle) => {
	return (dispatch) => {
		return fetchServer('PATCH', { id: id, title: newTodoTitle }).then((newTodo) => {
			dispatch({ type: 'UPDATE_TODO', payload: newTodo });
		});
	};
};

export const deleteTodo = (todoId) => {
	return (dispatch) => {
		return fetchServer('DELETE', { id: todoId }).then(() => {
			dispatch({ type: 'DELETE_TODO', payload: todoId });
		});
	};
};

export const ALPHABETICAL_SORT = { type: 'ALPHABETICAL_SORT' };

export const ORIGINAL_SEQUENCE = { type: 'ORIGINAL_SEQUENCE' };

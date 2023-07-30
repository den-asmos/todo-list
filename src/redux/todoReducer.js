const initialTodosState = { todos: [] };

export const todoReducer = (state = initialTodosState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'CREATE_TODO': {
			return { ...state, todos: [...state.todos, payload] };
		}

		case 'READ_TODOS': {
			return { ...state, todos: payload };
		}

		case 'UPDATE_TODO': {
			const newTodos = state.todos.map((todo) => {
				if (todo.id === payload.id) {
					return payload;
				}
				return todo;
			});
			return {
				...state,
				todos: newTodos,
			};
		}

		case 'DELETE_TODO': {
			const newTodos = state.todos.filter((todo) => todo.id !== payload);
			return { ...state, todos: newTodos };
		}

		default: {
			return state;
		}
	}
};

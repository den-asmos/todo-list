import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage, NotFound, TodoPage } from './components';

export const App = () => {
	const [refreshTodosFlag, setRefreshTodosFlag] = useState(false);

	const refreshTodos = () => {
		setRefreshTodosFlag(!refreshTodosFlag);
	};

	return (
		<div>
			<Routes>
				<Route
					path="/"
					element={
						<HomePage refreshTodosFlag={refreshTodosFlag} refreshTodos={refreshTodos} />
					}
				/>
				<Route path="/todo/:id" element={<TodoPage refreshTodos={refreshTodos} />} />
				<Route path="/404" element={<NotFound />} />
				<Route path="*" element={<Navigate to="/404" />} />
			</Routes>
		</div>
	);
};

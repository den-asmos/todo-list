import { Link } from 'react-router-dom';

const TodoLink = ({ id, title }) => {
	return (
		<Link to={`todo/${id}`} className="flex justify-center items-center">
			<p className="list-item">{title}</p>
		</Link>
	);
};

export default TodoLink;

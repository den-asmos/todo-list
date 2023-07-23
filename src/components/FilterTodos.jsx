import { titleSortIcon, idSortIcon } from '../assets';

const FilterTodos = ({ sortingFilter, setSortingFilter }) => {
	const handleSort = () => {
		setSortingFilter(sortingFilter === 'id' ? 'title' : 'id');
	};

	return (
		<button onClick={handleSort} className="main-btn">
			{sortingFilter === 'id' ? (
				<img src={idSortIcon} alt="sort" className="icon" />
			) : (
				<img src={titleSortIcon} alt="sort" className="icon" />
			)}
		</button>
	);
};

export default FilterTodos;

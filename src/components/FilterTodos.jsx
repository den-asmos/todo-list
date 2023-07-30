import { useDispatch, useSelector } from 'react-redux';
import { ALPHABETICAL_SORT, ORIGINAL_SEQUENCE } from '../redux/actions';
import { selectSortingFilter } from '../redux/selectors';
import { titleSortIcon, idSortIcon } from '../assets';

const FilterTodos = () => {
	const dispatch = useDispatch();
	const sortingFilter = useSelector(selectSortingFilter);

	const handleSort = () => {
		if (sortingFilter === 'id') {
			dispatch(ALPHABETICAL_SORT);
		} else {
			dispatch(ORIGINAL_SEQUENCE);
		}
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

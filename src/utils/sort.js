export const sortByFilter = (array, sortingFilter) => {
	return array.sort((a, b) => (a[sortingFilter] > b[sortingFilter] ? 1 : -1));
};

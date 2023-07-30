const initialSortState = { sortingFilter: 'id' };

export const sortReducer = (state = initialSortState, action) => {
	const { type } = action;

	switch (type) {
		case 'ALPHABETICAL_SORT': {
			return { ...state, sortingFilter: 'title' };
		}

		case 'ORIGINAL_SEQUENCE': {
			return { ...state, sortingFilter: 'id' };
		}

		default: {
			return { ...state };
		}
	}
};

import { SEARCH_FILTER_CHANGE, STATUS_FILTER_CHANGE, PRIORITIES_FILTER_CHANGE } from "./filters.actions";

const initState = {
  search: '',
  status: 'All',
  priorities: []
};

const filtersReducer = (state = initState, action) => {
  switch (action.type) {
    case SEARCH_FILTER_CHANGE:
      return {
        ...state,
        search: action.payload,
      };

    case STATUS_FILTER_CHANGE:
      return {
        ...state,
        status: action.payload
      }

    case PRIORITIES_FILTER_CHANGE:
      return {
        ...state,
        priorities: action.payload
      }
    default:
      return state
  }
};

export default filtersReducer;
import { SET_LIST, SET_DETAIL } from './constants';

const initialState = {
  list: [],
  detail: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST:
      return {
        ...state,
        list: action.payload,
      };
    case SET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
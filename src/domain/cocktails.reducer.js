import { types } from './cocktails.actions';

export const initialState = {
  cocktail: null,
  error: null,
  pending: false,
};

export default function reducer(state, action) {
  switch (action.type) {
    case types.FETCH_COCKTAIL_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      };
    case types.FETCH_COCKTAIL_PENDING:
      return {
        ...state,
        pending: true
      };
    case types.FETCH_COCKTAIL_SUCCESS:
      return {
        ...state,
        pending: false,
        cocktail: action.payload
      };
    default:
      throw new Error();
  }
}

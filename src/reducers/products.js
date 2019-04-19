const initialState = {
  loading: false,
  error: null,
  items: [],
};

export const products = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS_PENDING':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'GET_PRODUCTS_FULFILLED':
      return {
        ...state,
        loading: false,
        items: action.payload.data,
      };
    case 'GET_PRODUCTS_REJECTED':
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

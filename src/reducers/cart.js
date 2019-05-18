const initialState = {
  loading: false,
  error: null,
  items: []
};

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CART_PENDING":
      return {
        ...state,
        loading: true,
        error: null
      };
    case "GET_CART_FULFILLED":
      return {
        ...state,
        loading: false,
        items: action.payload.data
      };
    case "GET_CART_REJECTED":
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

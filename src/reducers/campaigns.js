const initialState = {
  loading: false,
  error: null,
  items: []
};

export const campaigns = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CAMPAIGNS_PENDING":
      return {
        ...state,
        loading: true,
        error: null
      };
    case "GET_CAMPAIGNS_FULFILLED":
      return {
        ...state,
        loading: false,
        items: action.payload.items
      };
    case "GET_CAMPAIGNS_REJECTED":
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

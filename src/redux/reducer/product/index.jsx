// reducers/index.js

const initialState = {
  products: [], //store fetched products //initially empty
  error: null, //store any error messages when fetched //initially no error
  isLoading: false, //set to false no fetched inprogress.
};

//productReducer takes 2 argument action,state it listen for action and updated the state according to specific action type
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_REQUEST": //dispatch when apicall starts
      //return updated state
      return {
        ...state,
        isLoading: true, //set to true indicates fetch starts
        error: null,
      };

    case "FETCH_PRODUCTS_SUCCESS":
      return {
        ...state,
        products: action.payload, //fetched products store in state
        isLoading: false, //false fetchng process has complete
        error: null,
      };
    case "FETCH_PRODUCTS_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload, //store the error message
      };

    default:
      return state;
  }
};

export default productReducer;

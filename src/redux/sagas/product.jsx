import { takeEvery, put, call } from "redux-saga/effects";
import * as actions from "../actions/product";

//responsible for actual api call
const fetchProductsFromAPI = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json(); //wait for rsponse once it's successfully arrived it parses the json
    return data; //return converted json formm  data
  } catch (error) {
    throw error;
  }
};

//generator function responsible for handling side effects ans dispatch action to store based on result
function* fetchProducts() {
  try {
    //calleffect invoke a function and wait for rsponse
    const data = yield call(fetchProductsFromAPI); // if succesfull it return data
    //saga dispatch fetchProductSuccess
    yield put(actions.fetchProductsSuccess(data)); //updated redux store with products
  } catch (error) {
    //if any error catch block will executed
    yield put(actions.fetchProductsFailure(error.message));
  }
}

//known as watcher saga it listen for specific action with corresponding worker saga
export function* watchFetchProducts() {
  yield takeEvery("FETCH_PRODUCTS_REQUEST", fetchProducts);
}

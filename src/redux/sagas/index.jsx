import { takeEvery, put, call } from "redux-saga/effects";
import * as actions from "../actions/product";

const fetchProductsFromAPI = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

function* fetchProducts() {
  try {
    const data = yield call(fetchProductsFromAPI);
    yield put(actions.fetchProductsSuccess(data));
  } catch (error) {
    yield put(actions.fetchProductsFailure(error.message));
  }
}

export function* watchFetchProducts() {
  yield takeEvery("FETCH_PRODUCTS_REQUEST", fetchProducts);
}

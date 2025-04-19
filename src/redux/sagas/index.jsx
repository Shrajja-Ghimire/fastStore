import { all } from "redux-saga/effects";
import authSaga from "./auth";
import { watchFetchProducts } from "./product";

export default function* rootSaga() {
  try {
    yield all([authSaga(), watchFetchProducts()]);
  } catch (err) {
    console.error("Root saga error:", err);
  }
}

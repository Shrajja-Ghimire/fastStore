// src/sagas/auth.js

import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { LOGIN_REQUEST } from "../actions/types";
import { loginSuccess, loginFailure } from "../actions/auth";

// Worker Saga for login

function* loginSaga(action) {
  try {
    const res = yield call(
      axios.post,
      "https://fakestoreapi.com/auth/login",
      action.payload
    );
    // Mocked user image, as the API doesn’t return user data
    const user = {
      token: res.data.token,
      image: "https://i.pravatar.cc/150?img=5",
    };
    yield put(loginSuccess(user));
  } catch (error) {
    yield put(loginFailure("Invalid credentials"));
  }
}
export default function* rootSaga() {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
}

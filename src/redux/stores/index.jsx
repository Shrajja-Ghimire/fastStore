import { configureStore } from "@reduxjs/toolkit";
import { rootreducer } from "../reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware(); //middleware handling side effect (asynchronous action,api calls) when dispatch

const store = configureStore({
  //configureStore creates redux store
  reducer: rootreducer, //combine all reducers in single
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
export default store;

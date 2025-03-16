import { configureStore } from "@reduxjs/toolkit";
import { rootreducer } from "../reducer";
import createSagaMiddleware from "redux-saga";
import { watchFetchProducts } from "../sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootreducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watchFetchProducts);
export default store;

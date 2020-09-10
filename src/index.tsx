import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
//redux
import { ThunkAction } from "redux-thunk"
import { PhotoState } from "./features/photos/PhotoSlice"
import { Provider } from "react-redux"
import { configureStore, Action } from "@reduxjs/toolkit"
import photosSliceReducer from "./features/photos/PhotoSlice"

// The AppThunk type will help us in writing type definitions for thunk actions
export type AppThunk = ThunkAction<void, PhotoState, unknown, Action<string>>;

const store = configureStore({
  reducer: {
    // the convention is to name this photos rather than photosStore but photosStore is clearer to me.
    photosStore: photosSliceReducer,

    // anyOtherStore: anyOtherSlice,
// middleware: ['array of middlewares'],
  // devTools: process.env.NODE_ENV !== "development" ? false : true,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

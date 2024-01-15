//src/redux/store.js

import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

import dataReducer from "./reducers";

const store = createStore(dataReducer, applyMiddleware(thunk.default || thunk));

export default store;
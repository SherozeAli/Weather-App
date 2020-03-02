import { compose, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/FetchCity";

const middleware = [thunk];

const store = createStore(rootReducer, compose(applyMiddleware(...middleware)));

export default store;

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./products/reducer";

const reducers = combineReducers({ product: reducer });

export default createStore(reducers, applyMiddleware(thunk));

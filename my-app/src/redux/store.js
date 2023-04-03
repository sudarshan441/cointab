import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {  SignupReducer } from "./signup/signup.reducers";
import {SigninReducer } from "./signin/signin.reducers";

const rootReducer = combineReducers({
   signup:SignupReducer,
   signin:SigninReducer
});
export const store = legacy_createStore(
    rootReducer,
     applyMiddleware(thunk)
);
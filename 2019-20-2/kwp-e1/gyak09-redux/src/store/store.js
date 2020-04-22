import { createStore, combineReducers } from "redux";
import { tracksReducer } from "./tracks/reducer";

const initialState = {};

const reducer = combineReducers({ tracks: tracksReducer });
export const store = createStore(reducer, initialState);

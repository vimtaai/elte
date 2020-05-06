import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { tracksReducer } from "./tracks/reducer";
import { playlistsReducer } from "./playlists/reducer";

const logger = (store) => (next) => (action) => {
  console.log(action.type);
  next(action);
};

const reducer = combineReducers({
  tracks: tracksReducer,
  playlists: playlistsReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk, logger));

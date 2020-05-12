import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { tracksReducer } from "./tracks/reducer";
import { playlistsReducer } from "./playlists/reducer";
import { messagesReducer } from "./messages/reducer";
import { userReducer } from "./user/reducer";

const logger = (store) => (next) => (action) => {
  console.log(action.type);
  next(action);
};

const reducer = combineReducers({
  tracks: tracksReducer,
  playlists: playlistsReducer,
  messages: messagesReducer,
  user: userReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk, logger));

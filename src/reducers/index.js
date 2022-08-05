import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import  { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import mainReducer from "./mainReducer";
import episodeReducer from "./episodeReducer";
import characterReducer from "./characterReducer";
import locationReducer from "./locationReducer";

const rootReducer = combineReducers({
  mainReducer,
  episodeReducer,
  characterReducer,
  locationReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
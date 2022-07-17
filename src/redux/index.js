import { combineReducers } from "redux";
import { addressesReducer, dataReducer } from "./reducersAndActions";

export const rootReducer = combineReducers({ addressesReducer, dataReducer });

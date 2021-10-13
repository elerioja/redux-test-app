import { combineEpics } from "redux-observable";
import apiState from "./apiState";

export default combineEpics(apiState);

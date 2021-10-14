import { combineEpics } from "redux-observable";
import api from "./api";

export default combineEpics(api);

import { combineReducers } from "redux";
import auth_reducers from "./auth_reducers";
import error_reducer from "./error_reducer";

export default combineReducers({
    auth:auth_reducers,
    err:error_reducer
});
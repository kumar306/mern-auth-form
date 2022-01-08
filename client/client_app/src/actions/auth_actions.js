import axios from "axios";
import setAuthToken from "../utils/set_auth_token";
import jwt_decode from "jwt-decode";

import { SET_CURRENT_USER,USER_LOADING,GET_ERRORS } from "./types";

export const registerUser = (user,history) => dispatch => {
    axios.post("api/users/register",user)
    .then(res => history.push("/login"))
    .catch(err => dispatch({
        type:GET_ERRORS,
        payload:err.response.data
        })
    );
};

export const loginUser = user => dispatch => {
    axios.post("api/users/login",user)
    .then(res => {
        const {token} = res.data;
        localStorage.setItem("jwtToken",token);
        setAuthToken(token);
        const decoded=jwt_decode(token);
        dispatch(setCurrentUser(decoded));
    })
    .catch(err => {
        dispatch({
            type:GET_ERRORS,
            payload:err.response.data
        })
    });
};

export const setCurrentUser = decoded => {
    return {
        type:SET_CURRENT_USER,
        payload:decoded
    };
};

export const setLoading = () => {
    return {
        type:USER_LOADING
    };
};

export const logout = () => dispatch => {
    localStorage.removeItem("jwtToken");
    setAuthToken(false);
    dispatch(setCurrentUser({}));
};
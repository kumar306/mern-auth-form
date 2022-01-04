import axios from "axios";

//delete and set the authorization header using axios

const setAuthToken = token => {
    if(token)
        axios.defaults.headers.common["Authorization"]=token;
    else   
        delete axios.defaults.headers.common["Authorization"];
};

export default setAuthToken;

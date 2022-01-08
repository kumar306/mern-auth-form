import React,{ Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Route,Redirect } from "react-router-dom";

const PrivateRoute = ({component:Component, auth, ...rest}) => (
    <Route
    {...rest}
    render={props => auth.isAuthenticated ? (<Component {...props} />) : (<Redirect to="/login" />)}
    />
);

PrivateRoute.propTypes = {
    auth:PropTypes.object.isRequired
};

const mapStatetoProps = state => ({
    auth:state.auth
});

export default connect(mapStatetoProps)(PrivateRoute);




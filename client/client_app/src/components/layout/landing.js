import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
class Landing extends Component {

    componentWillReceiveProps(nextprops)
    {
        if(nextprops.auth.isAuthenticated)
            this.setState({isLoggedIn:true});
        else if(!nextprops.auth.isAuthenticated)
            this.setState({isLoggedIn:false});
    }


    render()
    {

       /* const logged_status = () => {
            if(isLoggedIn)
            {
                return (
                <>
                <div>You are not logged in currently.</div><br></br><br></br>
                <Link to='/login' className="btn btn-outline-primary">Login</Link>
                <br></br><br></br>
                <Link to='/register' className="btn btn-outline-primary">Register</Link>
                </>
                );
            }
            else 
                return (
                    <>
                <div>Logged in as {this.props.auth.user.name}</div>
                <br></br><br></br>
                <Link to='/dashboard' className="btn btn-outline-primary">Dashboard</Link>
                </>
                );
        }
    */
        return (
            <>
             <div className="text-center">
             <div className="container-sm p-5 my-5 mx-auto text-center bg-dark text-white">
             <h1>Form Collection</h1>
             </div>
             <br></br><br></br>
             <Link to='/login' className="btn btn-outline-primary">Login</Link>
             <br></br><br></br>
        <Link to='/register' className="btn btn-outline-primary">Register</Link> 
             </div>
            </>
        );
    }
}

Landing.propTypes = {
    auth:PropTypes.object.isRequired,
    err:PropTypes.object.isRequired
};

const mapStatetoProps = state => ({
    auth:state.auth,
    err:state.err
});

export default connect(mapStatetoProps)(Landing);
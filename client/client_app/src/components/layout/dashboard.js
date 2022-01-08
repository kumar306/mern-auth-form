import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from './../../actions/auth_actions';

class Dashboard extends Component {

    onLogout = e => {
        e.preventDefault();
        this.props.logout();
    }

    render() {
        const {user} = this.props.auth;
        return (
            <>
            <div className="text-center">
            <div className="bg-dark text-white">
            <p>Hello {user.name}, you are logged in to your account.</p>
            <br></br>
            </div>
            <br></br><br></br>
            <button className="btn btn-outline-primary btn-lg" onClick={this.onLogout}>Logout</button>
            </div>
            </>
        );
    }
}

Dashboard.Proptype = {
    logout:PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired,
    err:PropTypes.object.isRequired
};

const mapStatetoProps = state => ({
    auth:state.auth,
    err:state.err
});

export default connect(mapStatetoProps,{logout})(Dashboard);
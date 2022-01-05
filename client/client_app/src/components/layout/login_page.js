import React,{Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {loginUser} from './../../actions/auth_actions';
import classnames from 'classnames';
class Login extends Component {

    constructor() {
        super();
        this.state={
            email:"",
            password:"",
            errors:{}
        };
    }
    componentWillReceiveProps(nextprops) {
        if(nextprops.auth.isAuthenticated)
            this.props.history.push('/dashboard');
        if(nextprops.err)
            this.setState({errors:nextprops.err});
    }

    onChange = event => {
        this.setState({[event.target.name]:event.target.value});
    }
    onSubmit = event => {
        event.preventDefault();
        const newUser={
            email:this.state.email,
            password:this.state.password
        };
        console.log(newUser);

        this.props.loginUser(newUser);
    }
    render() {
        const { errors } = this.state;
        return (
            <>
            <Link to='/' className="btn btn-success"><i className="material-icons">keyboard_backspace</i>&nbsp;&nbsp;Back to home page</Link>
            <br></br><br></br><br></br>
            <div className="text-center bg-light">
            <form className="mx-auto" onSubmit={this.onSubmit}>
                <div className="mx-5">
                <div className="form-group-row">
                <div className="col-sm-6">
                <h1 className='text-justify fw-light bg-dark p-5 text-white'>Enter login details:</h1><br></br><br></br>
                <label htmlFor="email" className="form-label">Email:</label>
                <input type="email" onChange={this.onChange} error={errors.email} name="email" value={this.state.email} className={classnames('form-control',{invalid:errors.email})} id="email" placeholder="Enter email..."></input><br></br><br></br>
                <span className="text-danger">{errors.email}</span>
                </div></div>
                <div className="form-group-row">
                <div className="col-sm-6">
                <label htmlFor="password" className="form-label">Password:</label>
                <input type="password" name="password" onChange={this.onChange} error={errors.password} value={this.state.password} className={classnames('form-control',{invalid:errors.password})} id="password" placeholder="Enter password..."></input><br></br><br></br>
                <span className="text-danger">{errors.password}</span>
                </div></div>
                <br></br>
                </div>
                <div className="form-group-row">
                <div className="col-sm-6">
                <input type="submit" className="btn btn-primary btn-lg" value="Login"></input>
                </div></div>
            </form>
            </div>
            </>
        );
    }
}
Login.propTypes = {
    loginUser:PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired,
    err:PropTypes.object.isRequired
};

const mapStatetoProps = state => ({
    auth:state.auth,
    err:state.err
});

export default connect(mapStatetoProps,{loginUser})(Login);
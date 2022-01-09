import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {registerUser} from './../../actions/auth_actions';
import { withRouter } from 'react-router';
import classnames from 'classnames';
class Regpage extends Component {

    constructor() {
        super();
        this.state={
            name:"",
            email:"",
            password:"",
            confirm_pwd:"",
            errors:{}
        };
    }

    componentWillReceiveProps(nextprops) {
        if(nextprops.err)
        {
            this.setState({errors:nextprops.err});
        }
    }

    componentDidMount() {
        if(this.props.auth.isAuthenicated)
            this.props.history.push('/dashboard');
    }

    onChange = event => {
        this.setState({[event.target.name]:event.target.value});
    }

    onSubmit = event => {
        event.preventDefault();

    const new_user = {
        name:this.state.name,
        email:this.state.email,
        password:this.state.password,
        confirm_pwd:this.state.confirm_pwd
    };
    console.log(new_user);
    console.log(new_user.password==new_user.confirm_pwd);
    
    this.props.registerUser(new_user,this.props.history);

    }

    render() {
        const { errors } = this.state;
        return (
            <>
            <Link to='/' className="btn btn-success mx-5"><i className="material-icons">keyboard_backspace</i>&nbsp;&nbsp;Back to home page</Link>
            <br></br><br></br><br></br>
            <div className="text-center bg-light">
            <form className="mx-auto needs-validation" onSubmit={this.onSubmit}>
            <span className="border">
                <div className="mx-5">
                <div className="form-group-row">
                <div className="col-sm-6">
                <h1 className='text-justify fw-light bg-dark p-5 text-white'>Enter registration details:</h1><br></br><br></br>
                <label htmlFor="name" className="form-label">Name:</label>
                <input type="text" name="name" onChange={this.onChange} error={errors.name} className={classnames('form-control',{invalid:errors.name})}  value={this.state.name} placeholder="Enter name.."></input><br></br><br></br>
                <span className="text-danger">{errors.name}</span><br></br>
                </div></div>
                <div className="form-group-row">
                <div className="col-sm-6">
                <label htmlFor="email" className="form-label">Email:</label>
                <input type="email" onChange={this.onChange} error={errors.email} name="email" value={this.state.email} className={classnames('form-control',{invalid:errors.email})} id="email" placeholder="Enter email..."></input><br></br><br></br>
                <span className="text-danger">{errors.email}</span><br></br>
                </div></div>
                <div className="form-group-row">
                <div className="col-sm-6">
                <label htmlFor="password" className="form-label">Password:</label>
                <input type="password" name="password" onChange={this.onChange} error={errors.password} value={this.state.password} className={classnames('form-control',{invalid:errors.password})} id="password" placeholder="Enter password..."></input><br></br>
                <span className="text-danger">{errors.password}</span><br></br>
                </div></div>
                <div className="form-group-row">
                <div className="col-sm-6">
                <label htmlFor="confirm_pwd" className="form-label">Confirm password:</label>
                <input type="password" name="confirm_pwd" onChange={this.onChange} error={errors.confirm_pwd} value={this.state.confirm_pwd} className={classnames('form-control',{invalid:errors.confirm_pwd})} id="confirm_pwd" placeholder="Enter password again..."></input><br></br>
                <span className="text-danger">{errors.confirm_pwd}</span><br></br>
                </div></div>
                <br></br>
                </div></span>
                <div className="form-group-row">
                <div className="col-sm-6">
                <input type="submit" className="btn btn-primary my-5 btn-lg position-relative" value="Register"></input>
                <br></br>
                <span className="text-danger">{errors.userexists}</span><br></br>
                </div></div>
            </form>
            </div>
            </>
        );
    }
}

Regpage.propTypes = {
    registerUser:PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired,
    err:PropTypes.object.isRequired
};

const mapStatetoProps = state => ({
    auth:state.auth,
    err:state.err
});

export default connect (mapStatetoProps,{registerUser})(withRouter(Regpage))
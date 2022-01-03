import React,{Component} from 'react';
import {Link} from 'react-router-dom';
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
    onChange = event => {
        this.setState({[event.target.name]:event.target.value});
    }

    onSubmit = event => {
        event.preventDefault();

    const new_user = {
        name:this.state.name,
        email:this.state.email,
        pwd:this.state.password,
        confirm_pwd:this.state.confirm_pwd
    };
    console.log(new_user);
    }

    render() {
        const { errors } = this.state;
        return (
            <>
            <Link to='/' className="btn btn-success"><i className="material-icons">keyboard_backspace</i>&nbsp;&nbsp;Back to home page</Link>
            <br></br><br></br><br></br>
            <div className="text-center bg-light">
            <form className="mx-auto needs-validation" onSubmit={this.onSubmit}>
            <span className="border">
                <div className="mx-5">
                <div className="form-group-row">
                <div className="col-sm-6">
                <h1 className='text-justify fw-light bg-dark p-5 text-white'>Enter registration details:</h1><br></br><br></br>
                <label htmlFor="name" className="form-label">Name:</label>
                <input type="text" name="name" onChange={this.onChange} error={errors.name} className="form-control" id="name" value={this.state.name} placeholder="Enter name.."></input><br></br><br></br>
                </div></div>
                <div className="form-group-row">
                <div className="col-sm-6">
                <label htmlFor="email" className="form-label">Email:</label>
                <input type="email" onChange={this.onChange} error={errors.email} name="email" value={this.state.email} className="form-control" id="email" placeholder="Enter email..."></input><br></br><br></br>
                </div></div>
                <div className="form-group-row">
                <div className="col-sm-6">
                <label htmlFor="password" className="form-label">Password:</label>
                <input type="password" name="password" onChange={this.onChange} error={errors.password} value={this.state.password} className="form-control" id="password" placeholder="Enter password..."></input><br></br><br></br>
                </div></div>
                <div className="form-group-row">
                <div className="col-sm-6">
                <label htmlFor="confirm_pwd" className="form-label">Confirm password:</label>
                <input type="password" name="confirm_pwd" onChange={this.onChange} error={errors.confirm_pwd} value={this.state.confirm_pwd} className="form-control" id="confirm_pwd" placeholder="Enter password again..."></input>
                </div></div>
                <br></br>
                </div></span>
                <div className="form-group-row">
                <div className="col-sm-6">
                <input type="submit" className="btn btn-primary my-5 btn-lg position-relative" value="Register"></input>
                </div></div>
            </form>
            </div>
            </>
        );
    }
}
export default Regpage;
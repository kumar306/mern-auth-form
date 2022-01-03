import React, {Component} from "react";
import {Link} from "react-router-dom";
class Landing extends Component {

    render()
    {
        return (
            <>
            <div className="text-center">
             <div className="container-sm p-5 my-5 mx-auto text-center bg-dark text-white">
             <h1>Form Collection</h1>
             </div>
             <Link to='/login' className="btn btn-outline-primary">Login</Link>
             <br></br><br></br>
             <Link to='/register' className="btn btn-outline-primary">Register if you dont have an account</Link>
             </div>
            </>
        );
    }
}

export default Landing;
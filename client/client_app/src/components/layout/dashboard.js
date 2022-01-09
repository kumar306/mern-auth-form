import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from './../../actions/auth_actions';

class Dashboard extends Component {

    constructor()
    {
        super();
        this.state={
            id:"",
            task:"",
            tasks:[],
            list_showing:false
        }
    }

    onLogout = e => {
        e.preventDefault();
        this.props.logout();
    }
    onChange = e => {
        this.setState({[e.target.name]:e.target.value,id:Math.random()});
    }

    handleClick = e => {
        const tasks=[...this.state.tasks];
        tasks.push([this.state.id,this.state.task]);
        this.setState({id:"",task:"",tasks:tasks});
        for(var i=0;i<tasks.length;i++)
            console.log(tasks[i]);
        this.changeShow();
    }

    async changeShow() {
        await this.setState({list_showing:true});
        console.log(this.state.list_showing);
    }

    render() {
        const {user} = this.props.auth;
        var list_items;
        if(this.state.list_showing)
        {
            list_items=this.state.tasks.map((tasklist,idx) => {
                return <li className="fw-bold fs-3 list-group-item list-group-item-action list-group-item-warning" key={idx}>{tasklist[1]}</li>
            })
        }
        return (
            <>
            <div className="text-center">
            <div className="bg-dark text-white">
            <h3 className='p-5'>Hello {user.name}, you are logged in.</h3>
            </div>
            <br></br><br></br>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#popup">Add task</button>
            <div className="modal" id="popup">
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="modal-title">
                            Enter task name
                        </div>
                        <button type="button" className="btn btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <label htmlFor="taskname" className='form-label'>Enter task</label><br></br><br></br>
                            <textarea className="form-control" rows="5" name="task" onChange={this.onChange} value={this.state.name}></textarea>
                            <br></br>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-success mx-5" onClick={this.handleClick} data-bs-dismiss="modal">Add task</button> 
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                    </div>
                    <div>
                </div>
                </div>
            </div></div>
            <br></br><br></br>
            <ol className="list-group list-group-numbered">{list_items}</ol>
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
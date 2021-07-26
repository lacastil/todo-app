import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js';

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "in28minutes",
            password: "",
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleChange = this.handleChange.bind(this)
        //  this.handleUsernameChange = this.handleUsernameChange.bind(this)
        //  this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }
    handleChange(event) {
        console.log(this.state)
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }
    // handleUsernameChange(event){
    //     console.log(event.target.value)
    //     this.setState(
    //         {
    //             [event.target.name]:event.target.value
    //         }
    //     )
    // }
    // handlePasswordChange(event){
    //     console.log(event.target.value)
    //     this.setState(
    //         {
    //             password:event.target.value
    //         }
    //     )
    // }
    loginClicked() {
        //
        if (this.state.username === 'in28minutes' && this.state.password === 'dummy') {
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
            this.props.history.push(`/welcome/${this.state.username}`)
            console.log('Succesfull')
            this.setState({ showSuccessMessage: true })
            this.setState({ hasLoginFailed: false })
        } else {
            console.log('Fail')
            this.setState({ showSuccessMessage: false })
            this.setState({ hasLoginFailed: true })
        }
        console.log(this.state)
    }
    render() {
        return (
            <>
                <h1>Login</h1>
                <div className='container'>
                    {this.state.hasLoginFailed && <div className='alert alert-warning'>Invalid Credentials</div>}
                    <ShowLoginSuccessful showSuccessMessage={this.state.showSuccessMessage} />
                    {/*User Name: <input className='form-control form-control-sm' type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    Password: <input className='form-control form-control-sm' type="password" name="password" value={this.state.password} onChange={this.handleChange} />*/}
                    <div className="input-group mb-3">
                        <span className="input-group-text">User Name:</span>
                        <input type="text" name="username" className="form-control" value={this.state.username} onChange={this.handleChange} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">Password:</span>
                        <input type="password" name="password" className="form-control" value={this.state.password} onChange={this.handleChange} />
                    </div>
                </div>
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button className='btn btn-primary btn-lg' onClick={this.loginClicked}>Login</button>
                </div>
            </>
        );
    }
}

function ShowLoginSuccessful(props) {
    if (props.showSuccessMessage) {
        return <div>Login Successful</div>
    }
    return null
}

export default LoginComponent
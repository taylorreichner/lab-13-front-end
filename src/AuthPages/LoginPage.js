import React, { Component } from 'react'
import { loginUser } from '../ApiUtils.js';


export default class LoginPage extends Component {
    state = {
        email: '',
        password: '',
    };
    
    handleEmailChange = (e) => this.setState(
        {email: e.target.value});

    handlePasswordChange = (e) => this.setState(
        {password: e.target.value});

    handleSubmit = async (e) => {
        e.preventDefault();

        const user = await loginUser(this.state.email, this.state.password);
        this.props.handleUserChange(user)
        this.props.history.push('todos')
    }
    
    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        email
                        <input value={this.state.email} onChange={this.handleEmailChange}/>
                    </label>
                    <label>
                        password
                        <input value={this.state.password} onChange={this.handleEmailChange}/>
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
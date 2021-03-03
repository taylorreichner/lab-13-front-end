import './App.css';
import Header from './Components/Header.js';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import SignUpPage from './AuthPages/SignUpPage.js';
import LoginPage from './AuthPages/LoginPage.js';
import TodosListPage from './TodosListPage/TodosListPage.js';
import Home from './Home/Home.js';
import { getUserFromLocalStorage, putUserInLocalStorage } from './LocalUtils.js';
import { Component } from 'react';

export default class App extends Component {
  state = {
    user: getUserFromLocalStorage()
  }

  handleUserChange = (user) => {
    this.setState({ user })

    putUserInLocalStorage(user);
  }

  render() {
    return (
      <div>
        <Router>
          <Header />
            <Switch>
              <Route path='/' exact render={(routerProps) => <Home {...routerProps} />} />
              <Route path='/todos' exact render={(routerProps) => <TodosListPage user={this.state.user}{...routerProps}/>} />
              <Route path='/login' exact render={(routerProps) => <LoginPage handleUserChange={this.handleUserChange}{...routerProps}/>} />
              <Route path='/signup' exact render={(routerProps) => <SignUpPage handleUserChang={this.handleUserChange}{...routerProps}/>} />

            </Switch>

        </Router>


      </div>

    )
  }


















}
 

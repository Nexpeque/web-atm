import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Login from "./components/Login/Login";
import axios from "./axiosInstance";
import './App.css';


class App extends Component {
  state = {
    log: false,
    userInfo: {
      user: "",
      password: ""
    },
    found: true,
    token: ""
  }

  /*componentDidMount = () => {
    axios.get("/hello")
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      })
  }*/

  login = (e) => {
    e.preventDefault();
    let credentials = {
      username: this.state.userInfo.user,
      password: this.state.userInfo.password
    }

    axios.post("/authenticate", credentials)
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          this.setState({
            token: "Bearer " + response.data.token,
            log: true
          });
          console.log(this.state.token);
        }
        this.props.history.push("/");
      })
      .catch((error) => {
        this.setState({
          found: false
        });
        console.log(error);
      })
  }
  handleLoginChange = (event, type) => {
    var userInfo = {
      ...this.state.userInfo
    }
    userInfo[type] = event.target.value;
    this.setState({
      userInfo: userInfo
    });
  }
  render() {
    return (
      <div className="App" >
        <Router>
          <Layout userLogon={this.state.log}>
            <Switch>
              <Route path="/login" render={() => {
                return (
                  <Login
                    login={this.login}
                    loginInfo={this.state.userInfo}
                    handleLoginChange={this.handleLoginChange}
                    found={this.state.found}
                  />
                )
              }} />
              <Route path="/" render={() => {
                return (<h1>Cosas</h1>);
              }} />
            </Switch>
          </Layout>
        </Router>
      </div>
    );
  }
}

export default App;

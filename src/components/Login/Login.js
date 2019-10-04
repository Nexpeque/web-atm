import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import classes from "./Login.css";

class Login extends Component {
    state = {

    }
    render() {
        const { login, loginInfo, handleLoginChange, found } = this.props
        return (
            <div className={classes.container}>
                <form onSubmit={login} className={classes.form}>
                    <div className={classes["input-div"]}>
                        <input
                            type="text"
                            placeholder="Account number"
                            value={loginInfo.user}
                            onChange={(event) => handleLoginChange(event, "user")}
                        />
                    </div>
                    <div className={classes["input-div"]} >
                        <input
                            type="password"
                            placeholder="Password"
                            value={loginInfo.password}
                            onChange={(event) => handleLoginChange(event, "password")}
                        />
                    </div>
                    <button type="submit">Log In</button>
                    {!found ? (<p>Couldn't log on with those credentials</p>) : ("")}
                </form>
            </div>
        )
    }
}
export default withRouter(Login);

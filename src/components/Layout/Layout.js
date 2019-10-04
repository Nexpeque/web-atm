import React from 'react'
import Navbar from "../Navbar/Navbar"
export default function Layout(props) {
    const { userLogon } = props
    return (
        <React.Fragment>
            <Navbar userLogon={userLogon} />
            {props.children}
        </React.Fragment>
    )
}

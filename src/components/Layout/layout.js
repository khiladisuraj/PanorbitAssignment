import React from 'react'
import { Fragment } from "react";
import Wrapper from './Wrapper';


function Layout(props) {
    return (
        <Fragment>
            <Wrapper />
            <main>
                {props.children}
            </main>
        </Fragment>
    )
}

export default Layout
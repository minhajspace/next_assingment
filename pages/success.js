
import React from 'react'
import { withRouter } from 'next/router'

const Layout = (props) => {
    console.log({ props });
    return (
        <div>
            <h2>Form submit successfully </h2>

            <h2>First Name {props.router.query.firstName} </h2>
        </div>
    )
}


export default withRouter(Layout);
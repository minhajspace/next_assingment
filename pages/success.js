import React from 'react'
import { withRouter } from 'next/router'
import { Button } from 'antd'
import Router from 'next/router';



const Layout = (props) => {
    console.log({ props });



    return (
        <div>
            <center>
                <h2>Form submited successfully </h2>

                <h2>{` Name : ${props.router.query.firstName} ${props.router.query.firstName} `}</h2>
                <input type="button">clickme</input>
            </center>
        </div>
    )
}


export default withRouter(Layout);
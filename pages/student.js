
import React from 'react'
import { Row, Col, Input, Form, Button } from 'antd';
import "antd/dist/antd.css";


class Student extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        age: null
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.age > 18) {

            console.log("you are over 18 ")

        } else {
            console.log("you are under 18 ")
        }

    }
    render() {
        return (
            <>

                <Form >
                    <h4>First Name</h4>
                    <Input
                        placeholder="Username"
                        required={true}
                        value={this.state.firstName}
                        onChange={(e) => {
                            this.setState({ firstName: e.target.value })
                        }}
                    />
                    <h4>Last Name</h4>
                    <Input

                        type="text"
                        placeholder="Last Name"
                        required={true}
                        value={this.state.lastName}
                        onChange={(e) => {
                            this.setState({ lastName: e.target.value })
                        }}

                    />
                    <h4>Age</h4>
                    <Input
                        type="text"
                        placeholder="Age"
                        required={true}
                        value={this.state.age}
                        onChange={(e) => {
                            this.setState({ age: e.target.value })
                        }}
                    />
                    <center>
                        <Button className="" type="primary" htmlType="submit" onClick={this.onSubmit} >
                            Log in
          </Button>
                    </center>
                </Form>



            </>
        )
    }
}
export default Student
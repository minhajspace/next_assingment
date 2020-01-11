
import React from 'react'
import { Row, Col, Input, Form, Button } from 'antd';
import "antd/dist/antd.css";
import Router from 'next/router'


class Student extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        age: "",
        error: ""
    }


    onSubmit = (e) => {
        e.preventDefault();
        if ((this.state.age == "") && (this.state.firstName == "") && (this.state.lastName == "")) {
            alert("Invalid Arguments")
        }
        else if ((this.state.age < 18) && (this.state.firstName != "") && (this.state.lastName != "")) {
            alert("you are under 18 ")
            this.setState({ firstName: "" })
            this.setState({ lastName: "" })
            this.setState({ age: "" })

        }
        else {
            Router.push('/success')
        }

    }
    render() {
        return (
            <>

                <Form >

                    <label htmlFor="First Name">First Name</label>
                    <Input
                        placeholder="Username"
                        required
                        value={this.state.firstName}
                        onChange={(e) => {
                            this.setState({ firstName: e.target.value })
                        }}
                    />

                    <label htmlFor="Last Name">Last Name</label>
                    <Input

                        type="text"
                        placeholder="Last Name"
                        required={true}
                        value={this.state.lastName}
                        onChange={(e) => {
                            this.setState({ lastName: e.target.value })
                        }}

                    />

                    <label htmlFor="Age">Age</label>
                    <Input
                        type="text"
                        placeholder="Age"
                        required={true}
                        value={this.state.age}
                        onChange={(e) => {
                            this.setState({ age: e.target.value })
                        }}
                    />
                    <div>
                        <center>
                            <Button className="" type="primary" htmlType="submit" onClick={this.onSubmit} >
                                Save
                          </Button>
                        </center>
                    </div>
                </Form>



            </>
        )
    }
}
export default Student

import React from 'react';
import { Row, Col, Input, Form, Button, Layout } from 'antd';
import "antd/dist/antd.css";
import Router from 'next/router';

class Student extends React.Component {

    state = {
        firstName: "",
        lastName: "",
        age: ""

    }
    onSubmit = (e) => {
        e.preventDefault();
        const { firstName, age, lastName } = this.state;
        if ((age == "") && (firstName == "") && (lastName == "")) {
            alert("Invalid Arguments")
        }
        else if ((age < 18) && (firstName !== "") && (lastName !== "")) {
            alert("you are under 18 ")
            this.setState({ firstName: "", lastName: "", age: "" });

        }
        else {
            Router.push({
                pathname: '/success',
                query: { firstName, lastName }
            });

        }

    }


    render() {
        return (
            <>
                <div>
                    <div>

                    </div>

                </div>
                <Form className="ant - advanced - search - form" >

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
                            <Button type="primary" htmlType="submit" type="submit" onClick={this.onSubmit}>
                                save
          </Button>
                        </center>
                    </div>
                </Form>

            </>

        )





    }
}
export default Student
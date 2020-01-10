import "antd/dist/antd.css";
import React from 'react'
import { Form, Icon, Input, Button } from 'antd';
import student from './student'
import { Link } from 'next/link'
import Router from 'next/router'




class App extends React.Component {
    state = {
        userInput: "",
        password: ""
    }

    onButtonPress = (e) => {
        e.preventDefault();
        if (this.state.userInput === this.state.password) {

            console.log("you are no next page")

        } else {
            console.log("please enter the valid input")
        }

    }
    render() {
        return (<div>
            <Form >
                <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                    value={this.state.userInput}
                    onChange={(e) => { this.setState({ userInput: e.target.value }) }}
                    required

                />

                <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={(e) => { this.setState({ password: e.target.value }) }}
                    required

                />
                <center>
                    <Button type="primary" htmlType="submit" onClick={this.onButtonPress}>
                        Log in
          </Button>
                </center>
            </Form>


        </div >
        )
    }
}
export default App;
import "antd/dist/antd.css";
import React from 'react'
import { Form, Icon, Input, Button } from 'antd';
import Router from 'next/router'






class App extends React.Component {
    state = {
        userInput: "",
        password: "",

    }

    onButtonPress = (e) => {
        e.preventDefault();

        if ((this.state.userInput == "") || (this.state.password == "") || (this.state.userInput == "" && this.state.password == "")) {
            alert("Invalid Credentials")
            Router.push('/index')
        }


        else if ((this.state.userInput === this.state.password) && this.state.userInput.includes("@")) {
            Router.push('/student')
        }


    }


    render() {
        return (<div>

            <Form onSubmit={this.onValid}>
                <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                    type="email"
                    value={this.state.userInput}

                    onChange={(e) => { this.setState({ userInput: e.target.value }) }}
                />

                <p>{this.state.errorUserInput}</p>
                <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={(e) => { this.setState({ password: e.target.value }) }}

                />
                <p>{this.state.errorPassword}</p>
                <center>
                    <Button type="primary" htmlType="submit" onClick={this.onButtonPress} type="submit">
                        Log in
          </Button>
                </center>
            </Form>


        </div >
        )
    }
}
export default App;
import React, {Component} from "react";

export default class UserInfo extends Component{
    render(){
        const userInfo = {
            name: "John Doe",
            profession: "Web Developer",
        }
        const randNum = Math.floor(Math.random()*10);
        return <span>
            <div>
                <h1>User Info</h1>
                <p>Name: {userInfo.name}</p>
                <p>Profession: {userInfo.profession}</p>
                <button onClick={this.props.handleClick}>Click For Alert!</button>
            </div>
            <p>Your lucky number is <b><i>{randNum}</i></b></p>
        </span>;
    }
}
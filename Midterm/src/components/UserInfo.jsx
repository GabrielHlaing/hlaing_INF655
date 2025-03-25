import React, { useState} from "react";

export default function UserInfo({handleClick}) {
        const userInfo = {
            name: "John Doe",
            profession: "Web Developer",
        }

        const [luckyNumber, setLuckyNumber] = useState(null);

        function luckyClick(){
            setLuckyNumber(Math.floor(Math.random()*100) + 1);
        }

        return <span>
            <div>
                <h1>User Info</h1>
                <p>Name: {userInfo.name}</p>
                <p>Profession: {userInfo.profession}</p>
                <button onClick={handleClick}>Click For Alert!</button>
            </div>
            <p>Your lucky number is: <b><i>{luckyNumber}</i></b></p>
            <button onClick={luckyClick}>Generate New Lucky Number</button>
        </span>;
}
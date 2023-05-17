import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Card } from "antd";

import "./Profile.scss"

const Profile = () => {
    const { getUserInfo, user } = useContext(UserContext);
    useEffect(() => {
        getUserInfo();
    }, []);
    return <div className="profile">
            <Card className="card"
      title="Profile"
      extra={<a href="#">More</a>}
      style={{
        width: 300,
      }}
    >
        <img style={{width:70,}}
        src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt=""/>
      <p>name: </p>
      <p>email: </p>
      <p>age: </p>
    </Card>
    </div>
};

export default Profile
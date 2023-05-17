import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Card, Collapse } from "antd";

import "./Profile.scss"

const Profile = () => {
  const { Panel } = Collapse;
  const { getUserInfo, user } = useContext(UserContext);

  console.log(user  )
  useEffect(() => {
    getUserInfo();
  }, []);

  if(!user){
    return <p>cargando...</p>
  }

  return  <div className="profile">

    <Card 
      className="card"
      title="Profile"
      style={{
        width: 400,
      }}
    >
      <img style={{ width: 70, }}
        src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt="" />
        <p>{user.full_name}</p> 
       <p>{user.email}</p> 
      <p>{user.birth_date}</p>
    </Card>
    <h2>Orders: </h2>
    {user.Sales.map((sale) => {
      return(
            <Collapse defaultActiveKey={["1"]} key={sale.id} className="custom-collapse">
              <Panel header={sale.createdAt} key="1">
                {sale.Products.map((product) => (
                  <p key={product.id}>
                    {product.name} {product.price} $ </p>
                ))}
              </Panel>
            </Collapse>
          );
                })}
  
  </div>
};

export default Profile
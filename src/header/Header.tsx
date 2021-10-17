import React, { FC, useState } from "react";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { appConstants } from "../shared/constants/constants";
import { Menu } from "antd";
import "./Header.scss";
import Login from "../login/Login";
import {logout} from "../actions/auth.action";
import {connect, useSelector} from "react-redux";

const Header: FC<HeaderProps> = ({ history }) => {
  const userState = useSelector((state:any)=> state?.user);
  const { SubMenu } = Menu;
  const [current, setCurrent] = useState("");
  // console.log("what is inside history", history);

  const handleClick = (e: any) => {
    console.log("click ", e);
    setCurrent(e.key);
    e.key !== "/products" && history.push(e.key);
  };

  return (
    <header>
      <nav>
          <div>

            <span>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY-TmKUI2BxcHsU0oW7U19nphXSte3ik9Riw&usqp=CAU"
                alt="logo"
                />
                PAW PAW SHOP
            </span>
          </div>
        <Menu
          onClick={(e) => handleClick(e)}
          selectedKeys={[current]}
          mode="horizontal"
          defaultSelectedKeys={["/"]}
        >
          <Menu.Item key="/">Home</Menu.Item>
          <SubMenu key="/products" title="Shop">
            <Menu.Item key="/products/dog">Dog</Menu.Item>
            <Menu.Item key="/products/cat">Cat</Menu.Item>
          </SubMenu>
          <Menu.Item key="/service">Service</Menu.Item>
            {
              !userState?.userInfo?.user?
              <SubMenu className='login' key="/loginOrRegister" title="Login">
                <Menu.Item key="/login">Login</Menu.Item>
                <Menu.Item key="/register">Register</Menu.Item>
              </SubMenu>
              :
              <Menu.Item key="/logout">Logout</Menu.Item>
            }

          {
            userState?.userInfo?.user &&
            <SubMenu key="/about-me" title="About me">
              <Menu.Item key={`/user-details`}>personal info</Menu.Item>
              <Menu.Item key={`/pets`}>furry family</Menu.Item>
              <Menu.Item key={`/payments`}>payment info</Menu.Item>
            </SubMenu>
          }
        </Menu>
      </nav>
    </header>
  );
};

export default (withRouter(connect()(Header)));

interface HeaderProps {
  history?: any;
}

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
  console.log("what is inside history", history);

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
        {/* <ul className="nav navbar-nav">
                    <li>
                        <NavLink to={appConstants.homeRoute} className="nav-link">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={appConstants.productByType} className="nav-link">Shop</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={appConstants.servicesRoute} className="nav-link">Pet Services</NavLink>
                    </li>
                </ul>
                <ul className="nav navbar-nav" style={{marginLeft:'auto'}}>
                    <NavLink to={appConstants.loginRoute} className="nav-link">Login</NavLink>
                </ul> */}
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
          {/*<Menu.Item key="/login">Login</Menu.Item>*/}
          {/*<Menu.Item key="/register">Register</Menu.Item>*/}
            {
              !userState?  <SubMenu className='login' key="/loginOrRegister" title="Login"><Menu.Item key="/login">Login</Menu.Item> <Menu.Item key="/register">Register</Menu.Item> </SubMenu> :
                  <Menu.Item key="/logout">Logout</Menu.Item>
            }

          {
            userState && <Menu.Item key={`/user-details/${userState?.userInfo?.user?.userInfo?.id}`}>About you</Menu.Item>
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

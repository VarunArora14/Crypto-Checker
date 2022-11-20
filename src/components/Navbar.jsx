import React, { useState, useEffect } from "react";
// import { Typography, Button, Menu, Avatar } from "antd";
import { Typography, Button, Avatar, Menu } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";

import icon from "../images/cryptoverse_logo.png";

const Navbar = () => {
  // show activeMenu only when value true(which is when screen is bigger than 800px)
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth); // set the screen size to the window inner width(width of the screen)
    window.addEventListener("resize", handleResize); // everytime window resizes, we call the handleResize function
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // called whenever the screen size changes
  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>
      </div>
      <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}>
        <MenuOutlined />
      </Button>
      {activeMenu && (
        <Menu theme="dark">
          <Menu.Item icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>

          <Menu.Item icon={<FundOutlined />}>
            <Link to="/cryptocurrencies">Crypto currencies</Link>
          </Menu.Item>

          <Menu.Item icon={<MoneyCollectOutlined />}>
            <Link to="/exchanges">Exchanges</Link>
          </Menu.Item>

          <Menu.Item icon={<BulbOutlined />}>
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};

export default Navbar;

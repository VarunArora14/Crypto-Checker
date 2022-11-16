import React from "react";
import {
  Link,
  Route,
  // Link,
  Routes,
} from "react-router-dom";

import { Layout, Space, Typography } from "antd";
import { Navbar, Exchanges, HomePage, CryptoDetails, Cryptocurrencies, News } from "./components";
import "./App.css";

const App = () => {
  console.log("Hello from App");
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              {/* Switch will only render the first route that matches the path, it used when we have multiple paths to choose from and route to */}
              <Route exact path="/" element={<HomePage />} />
              {/* exact path is the default path, exact word used so we go to path that entierly matches this */}
              <Route exact path="/exchanges" element={<Exchanges />} />
              <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route exact path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>

        <div className="footer">
          <Typography.Title level={5} style={{ color: "white", textAlign: "center" }}>
            Cryptoverse <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;

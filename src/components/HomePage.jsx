import React from "react";
// import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
const { Title } = Typography;
import { useGetCryptosQuery } from "../services/cryptoApi";

function HomePage() {
  const {
    data,
    // isFetching
  } = useGetCryptosQuery(); // get this from this hook
  console.log(data);
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        {/* // TODO: Update with real time values */}
        <Col span={12}>
          <Statistic title="Total Crypto currencies" value="5" />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value="5" />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value="5" />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap" value="5" />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24h Volume" value="5" />
        </Col>
      </Row>
    </>
  );
}

export default HomePage;

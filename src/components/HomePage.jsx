import React from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Cryptocurrencies, News } from "../components";
import { Typography, Row, Col, Statistic } from "antd";
const { Title } = Typography;
import { useGetCryptosQuery } from "../services/cryptoApi";

function HomePage() {
  const { data, isFetching } = useGetCryptosQuery(10); // get this from this hook
  const globalStats = data?.data?.stats; // get the data from the data object, ?. is for optional chaining

  if (isFetching) return <div>Loading...</div>;

  console.log(data);
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        {/* // TODO: Update with real time values */}
        <Col span={12}>
          <Statistic title="Total Crypto currencies" value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} />
        </Col>
      </Row>

      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Crypto currencies in the world
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show more</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />

      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3} className="show-more">
          <Link to="/news">Show more</Link>
        </Title>
      </div>
      <News simplified={true} />
      {/* above can be written as <News simplified={true} /> as well*/}
      {/* pass simplified version of both news and crypto currencies by passing props "simplified"  */}
    </>
  );
}

export default HomePage;

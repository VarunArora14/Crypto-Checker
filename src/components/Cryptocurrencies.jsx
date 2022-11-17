import React from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import {
  Card,
  Row,
  Col,
  // Input
} from "antd";

import { useGetCryptosQuery } from "../services/cryptoApi";

function Cryptocurrencies({ simplified }) {
  const count = simplified ? 10 : 100;
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
  // const [cryptos, setcryptos] = useState(cryptoList?.data?.coins); // give acces to all the coins
  const cryptos = cryptoList?.data?.coins; // give acces to all the coins

  if (isFetching) return "Loading...";

  return (
    <>
      {/* gutters are spaces between items from antd, here it is 32,32 horizontal and vertical spacing */}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => {
          return (
            <>
              <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
                <Link to={`/crypto/${currency.id}`}>
                  <Card
                    title={`${currency.rank}. ${currency.name}`}
                    extra={<img className="crypto-image" src={currency.iconUrl}></img>}
                    hoverable
                  >
                    <p>Price: {millify(currency.price)}</p>{" "}
                    {/* millify is a library to format numbers */}
                    <p>Market Cap: {millify(currency.marketCap)}</p>
                    <p>Daily Change: {millify(currency.change)}%</p>
                  </Card>
                </Link>
              </Col>
            </>
            // xs is for width on xrta small devices, 24 is span where max span is 24 so want to cover it full
          );
        })}
      </Row>
    </>
  );
}

export default Cryptocurrencies;

import React, { useState, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";

import { useGetCryptosQuery } from "../services/cryptoApi";

function Cryptocurrencies({ simplified }) {
  const count = simplified ? 10 : 100;
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
  const [searchTerm, setSearchTerm] = useState("");
  const [cryptos, setcryptos] = useState([]); // give acces to all the coins
  // since useEffect happens at start as well, we can assign empty array to cryptos

  // useEffect used to filter the coins to apply the changes in the search bar by useState hook
  useEffect(() => {
    // allows to filter out only the searched coin in list of hundreds of crypto currencies
    const filteredData = cryptoList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setcryptos(filteredData); // assign the filtered data to cryptos
  }, [cryptoList, searchTerm]); // this is the dependency array, it will run the useEffect hook when the cryptoList or searchTerm changes
  // it means this functon ill run whenver any of these values changes

  if (isFetching) return "Loading...";

  // show search bar not on homepage where only simplified view matters
  return (
    <>
      {/* is simplified then !simplified is false and does not show the search bar */}
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search CryptoCurrency"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
      {/* gutters are spaces between items from antd, here it is 32,32 horizontal and vertical spacing */}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => {
          return (
            <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.uuid}>
              <Link to={`/crypto/${currency.uuid}`}>
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

            // xs is for width on xrta small devices, 24 is span where max span is 24 so want to cover it full
          );
        })}
      </Row>
    </>
  );
}

export default Cryptocurrencies;

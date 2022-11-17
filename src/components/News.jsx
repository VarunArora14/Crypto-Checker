import React, { useState } from "react";
import {
  Select,
  // Avatar,
  Typography,
  Row,
  Col,
  Card,
  Avatar,
} from "antd";
import moment from "moment";
import { useGetNewsQuery } from "../services/newsApi";
import { useGetCryptosQuery } from "../services/cryptoApi.js";

const { Text, Title } = Typography;
const { Option } = Select;

const demoImage = "https://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";

function News({ simplified }) {
  const [searchNews, setsearchNews] = useState("Cryptocurrency");
  const { data: cryptoList } = useGetCryptosQuery(100);
  const { data: cryptoNews } = useGetNewsQuery({
    newsCategory: searchNews,
    count: simplified ? 6 : 12,
  });

  if (!cryptoNews?.value) return "Loading...";

  console.log(cryptoNews.value);

  return (
    <>
      <Row gutter={[24, 24]}>
        {!simplified && (
          <Col span={24}>
            <Select
              showSearch
              className="select-news"
              placeholder="Select a news crypto"
              optionFilterProp="children"
              onChange={(value) => setsearchNews(value)} // set the value of searchNews to the value selected
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {/* render the options we have selected. value here is the search options from which we can choose and search */}
              <Option value="Cryptocurrency">Cryptocurrency</Option>
              {cryptoList?.data?.coins.map((coin) => (
                <Option key={coin.name} value={coin.name}>
                  {coin.name}
                </Option>
              ))}
            </Select>
          </Col>
        )}
        {cryptoNews.value.map((news, i) => {
          return (
            <Col xs={24} sm={12} lg={8} key={i}>
              <Card hoverable className="news-card">
                <a href={news.url} target="_blank" rel="noreferrer">
                  <div className="news-image-container">
                    <Title className="news-title" level={4}>
                      {news.name}
                    </Title>
                    <img
                      style={{ maxWidth: "120px", maxHeight: "120px" }}
                      src={news?.image?.thumbnail?.contentUrl || demoImage}
                      alt="News"
                    ></img>
                  </div>
                  <p>
                    {news.description > 100
                      ? `${news.description.substring(0, 100)} ...`
                      : news.description}
                  </p>
                  <div className="provider-container">
                    <div>
                      <Avatar
                        src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage}
                        alt=""
                      />
                      <Text className="provider-name">{news.provider[0]?.name}</Text>
                    </div>
                    <Text>{moment(news.datePublished).startOf("ss").fromNow()}</Text>
                  </div>
                </a>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default News;

// Dont forget to return values from when using curly braces in JSX otherwise nothing will be shown
// or use normal brackets () which returns instananeously

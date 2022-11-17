import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

// from rapidApi => bing news search API
const newsHeaders = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key": "5d625d6555msh9e527165a4e48fep1b0333jsnaf2c311023d8",
  "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
};

const baseUrl = "https://bing-news-search1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: newsHeaders });

export const newsApi = createApi({
  reducerPath: "newsApi", // what is this reducer for
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    // getNews is the endpoint where /news is the endpoint
    getNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;

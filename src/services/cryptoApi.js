import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "5d625d6555msh9e527165a4e48fep1b0333jsnaf2c311023d8",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders }); // pass request headers to the request and url is the endpoint

export const cryptoApi = createApi({
  reducerPath: "cryptoApi", // what is this reducer for
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    // returns an object, inside which we can specify names of endpoints
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
  }),
});

// hook to call instantly the data for your query along with loading and error states
export const { useGetCryptosQuery, useGetCryptoDetailsQuery } = cryptoApi; // this is a hook that we can use to get data from the endpoint
// follow this convention of "use" before and "Query" after the name of the endpoint

// getCryptos is the endpoint where /coins is the endpoint

// we need to create store for redux where store is a globalized state that we can access from anywhere in our application

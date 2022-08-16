import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  HttpLink,
  from,
} from "@apollo/client";
import { setContext } from "apollo-link-context";
import { onError } from "@apollo/client/link/error";
import {App} from "./App";
import React from "react";

// const errorLink = onError(({ graphqlErrors, networkError }) => {
//   if (graphqlErrors) {
//     graphqlErrors.map(({ message, location, path }) => {
//       alert(`Graphql error ${message}`);
//     });
//   }
// });

// const link = from([errorLink, new HttpLink({ uri: "http://localhost:5000" })]);

// const authLink = setContext(() => {
//   const token = localStorage.getItem("jwtToken");
//   return {
//     headers: {
//       Authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });

const client = new ApolloClient({
  // link: from([errorLink, new HttpLink({ uri: "http://localhost:5000" })]),
  uri: "http://localhost:5000",
//  link: authLink.concat(link), //original
  cache: new InMemoryCache(),
  // cache: new InMemoryCache({
  //   typePolicies: {
  //     Query: {
  //       fields: {
  //         YOUR_FIELD: {
  //           merge(existing = [], incoming: any) {
  //             return { ...existing, ...incoming };
  //             // this part of code is depends what you actually need to do, in my
  //             // case i had to save my incoming data as single object in cache
  //           },
  //         },
  //       },
  //     },
  //   },
  // }),
});

// export default (
//   <ApolloProvider client={client}>
//     <App />
//   </ApolloProvider>
// );

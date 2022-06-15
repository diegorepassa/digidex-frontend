import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route} from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { NextUIProvider } from "@nextui-org/react";
import Home from "../pages/Home";

import GlobalStyle from "./styles.jsx";

const client = new ApolloClient({
  uri: import.meta.env.VITE_URI_GRAPHQL,
  cache: new InMemoryCache(),
});

console.log(import.meta.env.VITE_URI_GRAPHQL);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <NextUIProvider>
        <BrowserRouter>
          <GlobalStyle />
          <Home />
        </BrowserRouter>
      </NextUIProvider>
    </ApolloProvider>
  </React.StrictMode>
);

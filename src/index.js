import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Apply, Donate, Home, Navigation} from "./components";

import {ApolloClient, ApolloProvider, InMemoryCache,} from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://gql.ojs05.live/v1/graphql',
    cache: new InMemoryCache()
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="donate" element={<Donate/>}/>
                <Route path="apply" element={<Apply/>}/>
            </Routes>
        </BrowserRouter>
    </ApolloProvider>,

    document.getElementById("root")
);

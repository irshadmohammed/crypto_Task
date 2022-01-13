import React from "react";
import Details from "./Details";
import Header from "./Header";
import { ComponentWrapper } from "./styles";
import Transactions from "./Transactions";
import Wallets from "./Wallets";

function Home() {
  return (
    <>
      <ComponentWrapper>
        <Header />
        <Details />
      </ComponentWrapper>
      <Wallets />
      <Transactions />
    </>
  );
}

export default Home;

import React from "react";
import { BurnTxTable } from "./common";

const TransactionTable = ({ data, coinData }) => {
  return (
    <div>
      <div className="header">
        <p className="header_label">Burn Transactions</p>
      </div>
      <BurnTxTable data={data} priceUSD={coinData?.current_price?.usd} />
    </div>
  );
};

export default TransactionTable;

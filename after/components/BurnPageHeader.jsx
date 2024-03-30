import React from "react";
import { Button, CircularProgress } from "@material-ui/core";
import { BurnTxProgress } from "./constants";

const BurnHeader = ({
  burnAmount,
  onChangeBurnAmount,
  executeBurn,
  txButton,
  txProgress,
  burnTxHash,
  walletChain,
}) => {
  return (
    <div className="info_box filled">
      <h1 className="title">App TOKEN BURN</h1>
      <p className="description medium"></p>

      <div className="burnButtonBar">
        <p className="box_subheader">Burn your App</p>
        <div className="description medium">
          &quot; The process of reducing the supply of App tokens by
          permanently removing a certain number of them from circulation,
          often through a deliberate and recorded mechanism. &quot;
        </div>

        <div className="burn_bar">
          <div className="input_value_box">
            <p className="input_muted">Enter amount to Burn</p>
            <input
              className="input_value"
              type="text"
              value={burnAmount}
              placeholder="0.00"
              onChange={onChangeBurnAmount}
            />
          </div>
          <Button
            variant="outlined"
            onClick={executeBurn}
            startIcon={
              txProgress ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                <img
                  src="/icons/fire.svg"
                  alt="fire icon"
                  style={{ fill: "primary", size: "1.5rem" }}
                />
              )
            }
          >
            <span>{txButton}</span>
          </Button>
        </div>
        {burnTxHash && (
          <div className="tx_links">
            <span className="header_link">
              Burn Tx: {burnTxHash}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default BurnHeader;

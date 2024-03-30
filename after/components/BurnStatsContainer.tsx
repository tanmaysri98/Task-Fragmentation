import React from "react";
import { AppIcon, AppChip, AppExtLink } from "./common";

const BurnStats = ({
  statsSupplies,
  tokenAddress,
  suppliesChain,
  allSupplies,
}) => {
  return (
    <BurnStatsContainer>
      <div className="top_bar">
        <AppIcon
          url="/images/token/App_new.svg"
          size={2}
          margin={0}
          fill="unset"
        />
        <p className="label">App SUPPLY</p>

        <AppChip
          title={suppliesChain?.name || "---"}
          endIcon="/icons/expand_more.svg"
          startIcon={`/images/token/${suppliesChain?.nativeCurrency?.symbol}.svg`}
        ></AppChip>

        <AppExtLink
          className="supply_label"
          url={`${suppliesChain?.blockExplorers?.default?.url}/address/${tokenAddress}`}
        >
          View Contract
        </AppExtLink>
      </div>
      {/* Other stats rendering here */}
    </BurnStatsContainer>
  );
};

export default BurnStats;

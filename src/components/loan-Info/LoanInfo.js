import React from "react";
import "./LoanInfo.css";
import LoanInfoCard from "./LoanInfoCard";
import { loanInfoCardsData } from "./loaninfo.data";

const LoanInfo = () => {
  return (
    <div className="loaninfo_main">
      <h2>
        Header <b>Line</b> Required
      </h2>
      <div className="loaninfo_cards">
        {loanInfoCardsData.map((card) => (
          <LoanInfoCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default LoanInfo;

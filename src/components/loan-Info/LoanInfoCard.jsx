import React from "react";

const LoanInfoCard = ({card}) => {
    
  return (
    <div className="loaninfocard_main">
      <img src={card.imgSrc} alt="card"/>
      <h4>{card.title}</h4>
      <p>{card.text}</p>
    </div>
  );
};

export default LoanInfoCard;

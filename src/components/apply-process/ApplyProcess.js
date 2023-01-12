import React from "react";
import "./ApplyProcess.css";
import { applyProcessCardData } from "./ApplyProcessCard.data";

const ApplyProcess = () => {
  return (
    <div className="applyprocess_main">
      <div className="applyprocess_heading">
        How to <span>Apply</span>
      </div>
      <div className="applprocess_cardbox_container">
      {applyProcessCardData.map((card) => (
        <div className="applyprocess_cardbox">
          <div className="applyprocess_card_number">{card.id}</div>
          <div className="applyprocess_card_text">{card.text}</div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ApplyProcess;

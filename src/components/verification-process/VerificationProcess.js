import React from "react";
import "./VerificationProcess.css";

const VerificationProcess = () => {
  return (
    <div className="verificationprocess_main">
      <div className="verificationprocess_heading">
        Verification <span>Process</span>
      </div>
      <div className="verificationprocess_contentbox">
        <div className="verificationprocess_text">
          <div className="verificationprocess_text_item process_item_active">
            <span className="verificationprocess_listitem_bullet"></span>Loan
            representative will connnect you
          </div>
          <div className="verificationprocess_text_item">
            <span className="verificationprocess_listitem_bullet"></span>
            Document collection will be done
          </div>
          <div className="verificationprocess_text_item">
            <span className="verificationprocess_listitem_bullet"></span>
            Document verification will be done
          </div>
          <div className="verificationprocess_text_item">
            <span className="verificationprocess_listitem_bullet"></span>
            Finally, eSign the Loan agreement
          </div>
        </div>
        <div className="verificationprocess_img">
          <img src="./images/verification_img.svg" alt="verification-img" />
        </div>
      </div>
      <div className="verificationprocess_applybox">
        <div className="verificationprocess_interest_info">
          <div className="verificationprocess_interest_info_title">
            Rate of Interest
          </div>
          <div className="verificationprocess_interest_info_text">
            The rate of interest for home loans differs from one lender to
            another and also it depends on some factors like Credit Score,
            tenure of the loan, quantum of the loan and your income. We have
            interest rate starting as low as 7.70%.
            <br /> *The rate is subject to change as per the lender.
          </div>
        </div>
        <div className="verificationprocess_apply_button_box">
          <div className="verificationprocess_apply_info">
            Get your dream home with Credhub
          </div>
          <div className="verificationprocess_apply_infomore">
            Step up for best <b>Home Loan</b> offerings tailored specially for you
          </div>
          <button className="primary_button">Apply now</button>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default VerificationProcess;

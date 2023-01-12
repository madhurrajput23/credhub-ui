import React from "react";
import "./LoanDocx.css";

const LoanDocx = () => {
  return (
    <div className="loandocx_main">
      <h3>
        Documents <span>Required</span>
      </h3>
      <div className="loandocx_box">
        <div className="loandocx_img">
          <img src="./images/loandocx_img.svg" alt="loandocx_img" />
        </div>
        <div className="loandocx_text">
          <div className="loandocx_text_box">
            <div className="loandocx_text_left">1</div>
            <div className="loandocx_text_right">
              <div className="loandocx_text_title">Identity Proof :</div>
              <div className="loandocx_text_subtext">
                Driving License/ PAN/ Voter ID/ Valid Passport
              </div>
            </div>
          </div>

          <div className="loandocx_text_box">
            <div className="loandocx_text_left">2</div>
            <div className="loandocx_text_right">
              <div className="loandocx_text_title">Residence Proof :</div>
              <div className="loandocx_text_subtext">
                Copy of Electricity Bill/Water Bill/Telephone Bill/
                Passport/Aadhaar Card/Driving License
              </div>
            </div>
          </div>

          <div className="loandocx_text_box">
            <div className="loandocx_text_left">3</div>
            <div className="loandocx_text_right">
              <div className="loandocx_text_title">Other Documents :</div>
              <div className="loandocx_text_subtext">
                Employer Identity Card, Picture or Selfie, account statement,
                for last 6 month
              </div>
            </div>
          </div>

          <div className="loandocx_text_box">
            <div className="loandocx_text_left">4</div>
            <div className="loandocx_text_right">
              <div className="loandocx_text_title">Income Proof :</div>
              <div className="loandocx_text_subtext">
                <ul className="loandocx_text_subtext_keys">
                  For Self-employed Applicant/Co-applicant -
                  <li>Income Tax Returns for the last 3 years</li>
                  <li>
                    Certificate of Qualification (for Doctors/CA and other
                    professionals)
                  </li>
                  <li>
                    Balance Sheet audited by a certified CA and Profit and Loss
                    account for the previous 3 years
                  </li>
                  <li>Business License Details </li>
                  <li>Business address proof </li>
                  <li>TDS Certificate</li>
                </ul>
                <ul className="loandocx_text_subtext_keys">
                  For Salaried Applicant/Co-applicant
                  <li>
                    Copy of Form 16 or Income Tax Returns for the last two years
                  </li>
                  <li>Salary Slips for the last three months</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanDocx;

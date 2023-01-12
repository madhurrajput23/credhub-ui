import React, { useState } from "react";
import "./Calculator.css";
import CalculatorInput from "./CalculatorInput";
import { BiRupee } from "react-icons/bi";
import { FaPercent } from "react-icons/fa";
import { HiOutlineCalendar } from "react-icons/hi";

const Calculator = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [loanInterestPercentage, setLoanInterestPercentage] = useState(10);
  const [loanYears, setLoanYears] = useState(20);

  return (
    <div className="calculator_main">
      <h3 className="primary_color">Home loan with attractive interest rate</h3>
      <div className="calculator_box">
        <div className="calculator_range">
          <CalculatorInput
            title="Loan Amount"
            inputIcon={<BiRupee />}
            min={100000}
            max={1000000}
            minUi="1L"
            maxUi="1C"
            value={loanAmount}
            setValue={setLoanAmount}
          />
          <CalculatorInput
            title="Interest Rate"
            inputIcon={<FaPercent />}
            min={4}
            max={24}
            minUi="4%"
            maxUi="24%"
            value={loanInterestPercentage}
            setValue={setLoanInterestPercentage}
          />
          <CalculatorInput
            title="Loan Terms in Years"
            inputIcon={<HiOutlineCalendar />}
            min={1}
            max={30}
            minUi="1YR"
            maxUi="30YR"
            value={loanYears}
            setValue={setLoanYears}
          />
        </div>
        <div className="calculator_graph">graph</div>
      </div>
    </div>
  );
};

export default Calculator;

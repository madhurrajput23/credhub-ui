import React, { useEffect, useState } from "react";
import "./Calculator.css";
import CalculatorInput from "./CalculatorInput";
import { BiRupee } from "react-icons/bi";
import { FaPercent } from "react-icons/fa";
import { HiOutlineCalendar } from "react-icons/hi";
import { PieChart } from "react-minimal-pie-chart";

const Calculator = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [loanInterestPercentage, setLoanInterestPercentage] = useState(10);
  const [loanYears, setLoanYears] = useState(20);

  const [monthlyEMI, setMonthlyEMI] = useState(0);
  const [totalPayableAmount, setTotalPayableAmount] = useState(0);
  const [interestPayableAmount, setInterestPayableAmount] = useState(0);

  const calculateEmi = (amount, interestRate, years) => {
    const monthlyTenure = years * 12;
    const rate = interestRate / 12 / 100; // loan interest per year / 100 = loan percentage
    return (
      (amount * rate * (1 + rate) ** monthlyTenure) /
      ((1 + rate) ** monthlyTenure - 1)
    );
  };

  const calculateTotalPayableAmount = (emiPerMonth, totalMonths) =>
    emiPerMonth * totalMonths;

  const calculateInterestPayableAmount = (totalAmount, principleAmount) =>
    totalAmount - principleAmount;

  useEffect(() => {
    setMonthlyEMI(calculateEmi(loanAmount, loanInterestPercentage, loanYears));
  }, [loanAmount, loanInterestPercentage, loanYears]);

  useEffect(() => {
    setTotalPayableAmount(
      calculateTotalPayableAmount(monthlyEMI, loanYears * 12)
    );
  }, [monthlyEMI, loanYears]);

  useEffect(() => {
    setInterestPayableAmount(
      calculateInterestPayableAmount(totalPayableAmount, loanAmount)
    );
  }, [totalPayableAmount, loanAmount]);

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
        <div className="calculator_graph">
          <div className="calculator_graph_title">
            Equated Monthly Installment ( EMI )
          </div>
          <div className="calculator_graph_box">
            <div className="calculator_graph_container">
              <PieChart
                data={[
                  {
                    title: "Principle Amount",
                    value: loanAmount,
                    color: "#267DFF",
                  },
                  {
                    title: "Interest Payable",
                    value: interestPayableAmount,
                    color: "#FF5C5D",
                  },
                ]}
                lineWidth={25}
                startAngle={210}
                paddingAngle={2}
                animate={true}
              />
            </div>
            <div className="calculator_graph_values">
              <div className="calculator_graph_value_box">
                <span className="principle_amount_bullet"></span>
                <div className="calculator_graph_value_title">
                  Principle Amount
                </div>
                <div className="calculator_graph_value_item">
                  ₹ {loanAmount}
                </div>
              </div>
              <div className="calculator_graph_value_box">
                <span className="interest_amount_bullet"></span>
                <div className="calculator_graph_value_title">
                  Total Interest Payable
                </div>
                <div className="calculator_graph_value_item">
                  ₹ {interestPayableAmount.toFixed(0)}
                </div>
              </div>
              <div className="calculator_graph_value_box">
                <div className="calculator_graph_value_title">
                  Total Amount Payable
                </div>
                <div className="calculator_graph_value_item">
                  ₹ {totalPayableAmount.toFixed(0)}
                </div>
              </div>
            </div>
          </div>
          <div className="calculator_emi">
            <div className="calculator_emi_title">Your Monthly Payment</div>
            <div className="calculator_emi_value">
              ₹ {monthlyEMI.toFixed(0)}
            </div>
          </div>
          <div className="calculator_graph_button">
            <button className="primary_button">Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

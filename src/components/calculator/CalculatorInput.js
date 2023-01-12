import React from "react";
import "./Calculator.css";

const CalculatorInput = ({
  title,
  inputIcon,
  min,
  max,
  minUi,
  maxUi,
  value,
  setValue,
}) => {
  return (
    <div className="calculator_input_main">
      <div className="calculator_input_top">
        <div className="calculator_input_title">{title}</div>
        <div className="calculator_input">
          <input
            type="number"
            value={value}
            onChange={(e) => {
              setValue(Number(e.target.value));
            }}
          />
          <div className="calculator_input_icon">{inputIcon}</div>
        </div>
      </div>
      <div className="calculator_input_bottom">
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => {
            setValue(Number(e.target.value));
          }}
        />
        <div className="calculator_input_range_text">
          <span>{minUi}</span>
          <span>{maxUi}</span>
        </div>
      </div>
    </div>
  );
};

export default CalculatorInput;

import { useState } from "react";
import "../Styles/EmiForm.css";
import { useContext } from "react";
import { Themecontext } from "../context/ThemeContext";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
const EmiForm = () => {
  const [amount, setAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [emi, setEmi] = useState("");
  const { theme, toggleTheme } = useContext(Themecontext);

  const calculateEmi = () => {
    const principalAmount = parseFloat(amount);
    const monthlyInterestRate = parseFloat(interestRate) / 12 / 100;
    const time = parseFloat(tenure) * 12;

    if (principalAmount && monthlyInterestRate && time) {
      const emiValue =
        (principalAmount *
          monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, time)) /
        (Math.pow(1 + monthlyInterestRate, time) - 1);
      setEmi(emiValue.toFixed(2));
    } else {
      setEmi("");
      setAmount("");
      setInterestRate("");
      setTenure("");
    }
  };

  const handleResetForm = () => {
    setAmount("");
    setInterestRate("");
    setTenure("");
    setEmi("");
  };

  return (
    <div className={`form-container ${theme ? "dark-mode" : "light-mode"}`}>
      <button onClick={toggleTheme} className="change-theme-btn">
        {theme ? (
          <CiLight style={{ color: "white" }} />
        ) : (
          <CiDark style={{ color: "black" }} />
        )}
      </button>

      <div className="form">
        <label className="label">Principal Amount:</label>
        <input
          type="number"
          id="loanAmount"
          name="loanAmount"
          required
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="input-field"
        />

        <label className="label">Rate of Interest:</label>
        <input
          type="number"
          id="interestRate"
          name="interestRate"
          required
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          className="input-field"
        />

        <label className="label">Tenure (in years):</label>
        <input
          type="number"
          id="timeInYears"
          name="timeInYears"
          required
          value={tenure}
          onChange={(e) => setTenure(e.target.value)}
          className="input-field"
        />

        <div className="button-container">
          <button onClick={calculateEmi} className="calculate-emi-btn">
            Calculate EMI
          </button>
          <button onClick={handleResetForm} className="reset-form-btn">
            Reset Form
          </button>
        </div>

        {emi && (
          <div className="result-container">
            <h2 className="Emi-result">Monthly EMI: ₹ {emi}</h2>
            <p className="Warning">
              Note: This calculation assumes simple interest for simplicity.
              Actual EMI may vary based on other factors like compounding
              interest, loan terms, etc.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmiForm;

import React, { useState, useEffect } from "react";
import "./Calci.css";
import { ToastMessage } from "./ToastMessage";

const Calci = () => {
  let time = new Date().toLocaleTimeString();

  const [value, setValue] = useState<any>("");
  const [currentTime, setCurrentTime] = useState(time);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [showToast, setShowToast] = useState<boolean>(false);

  const updateStatus = () => {
    time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  };

  const handleSubmit = () => {
    const regEx = /^[-+]?[0-9]+([-+*/]+[-+]?[0-9]+)*$/;
    if (regEx.test(value)) {
      let result = eval(value);
      console.log(result);
      setValue(result);
    } else {
      setShowToast(true);
      setErrorMsg("Please Enter valid Input");
    }
  };

  const handleClear = () => {
    setValue("");
  };

  const handleBack = () => {
    setValue(value.toString().slice(0, -1));
  };

  useEffect(() => {
    setTimeout(() => {
      setShowToast(false);
    }, 4000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  }, [showToast]);
  return (
    <div className="__calci-container">
      {showToast ? <ToastMessage message={errorMsg} time={4000} /> : null}

      <div className="__calci-time">
        <span>{currentTime}</span>
      </div>
      <div className="__calci-calculator">
        <input value={value} />
        <div className="__calci-digits">
          <button onClick={() => setValue(value + "+")}>+</button>
          <button onClick={() => setValue(value + "-")}>-</button>
          <button onClick={() => setValue(value + "*")}>*</button>
          <button onClick={() => setValue(value + "/")}>/</button>

          <button onClick={() => setValue(value + "9")}>9</button>
          <button onClick={() => setValue(value + "8")}>8</button>
          <button onClick={() => setValue(value + "7")}>7</button>

          <button onClick={() => setValue(value + "±")}>±</button>

          <button onClick={() => setValue(value + "6")}>6</button>
          <button onClick={() => setValue(value + "5")}>5</button>
          <button onClick={() => setValue(value + "4")}>4</button>

          <button onClick={handleBack}>C</button>

          <button onClick={() => setValue(value + "3")}>3</button>
          <button onClick={() => setValue(value + "2")}>2</button>
          <button onClick={() => setValue(value + "1")}>1</button>

          <button id="AC-btn" onClick={handleClear}>
            AC
          </button>

          <button onClick={() => setValue(value + ".")}>.</button>
          <button onClick={() => setValue(value + "0")}>0</button>
          <button onClick={() => setValue(value + "%")}>%</button>

          <button onClick={handleSubmit}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calci;

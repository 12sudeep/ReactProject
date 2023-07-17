import { useState } from "react";
import Button from "../Button";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handlePlusClick = () => {
    setCount(count + 1);
  };

  const handleMinusClick = () => {
    if (count > 0) {
      setCount(count - 1);
    }
};

    const reset = () => {
        setCount(0);
    
  };

  return (
    <div>
      <h1>Counter</h1>
      <div
        className="counter_countainer"
        style={{
          gap: "20px",
          display:"grid",
          gridTemplateColumns : "1fr 1fr 1fr",
          alignContent: "center",
          border: "none",
          textAlign: "center",
          margin: "20px 20px",
          padding: "10px 20px",
          color: "black"
        }}
      >
        <Button className="counte" onClick={handlePlusClick} >Add</Button>
        <Button className="counte" onClick={handleMinusClick} >Subtraction</Button>
        <Button className="counte" onClick={reset}>Reset</Button></div>
        <div>{count}</div>
      </div>
  );
};

export default Counter;

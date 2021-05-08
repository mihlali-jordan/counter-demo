import React from "react";

const App = () => {
  const [firstNum, setFirstNum] = React.useState(0);
  const [secondNum, setSecondNum] = React.useState(0);
  return (
    <div>
      <h1>Counter App</h1>
      <input
        type="number"
        value={firstNum}
        onChange={(e) => setFirstNum(parseInt(e.target.value))}
      />
      <span>+</span>
      <input
        type="number"
        value={secondNum}
        onChange={(e) => setSecondNum(parseInt(e.target.value))}
      />
      <span>=</span>
      <span>{firstNum + secondNum}</span>
    </div>
  );
};

export default App;

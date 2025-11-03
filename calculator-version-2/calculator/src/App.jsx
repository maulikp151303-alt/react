import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      // Clear all
      setCalVal("");
    } else if (buttonText === "=") {
      // Evaluate expression safely
      try {
        const result = eval(calVal);
        setCalVal(result.toString());
      } catch {
        setCalVal("Error");
      }
    } else if (buttonText === "←") {
      // Remove last character
      setCalVal(calVal.slice(0, -1));
    } else {
      // Append pressed button
      setCalVal(calVal + buttonText);
    }
  };

  return (
    <div className={styles.appContainer}>
      <div className={styles.calculator}>
        <Display displayValue={calVal} />
        <ButtonsContainer onButtonClick={onButtonClick} />
      </div>
    </div>
  );
}

export default App;

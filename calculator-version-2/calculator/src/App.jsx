import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [calVal, setCalVal] = useState("");
  const [dark, setDark] = useState(false);
  const [history, setHistory] = useState([]);

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      try {
        const result = eval(calVal);
        setCalVal(result.toString());

        setHistory((prev) => [`${calVal} = ${result}`, ...prev.slice(0, 9)]);
      } catch {
        setCalVal("Error");
      }
    } else if (buttonText === "←") {
      setCalVal(calVal.slice(0, -1));
    } else {
      setCalVal(calVal + buttonText);
    }
  };

  // KEYBOARD SUPPORT ✅
  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key;

      if (/[0-9+\-*/.%]/.test(key)) setCalVal((p) => p + key);
      else if (key === "Enter") onButtonClick("=");
      else if (key === "Backspace") onButtonClick("←");
      else if (key === "Escape") onButtonClick("C");
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [calVal]);

  return (
    <div className={`${styles.appContainer} ${dark ? styles.dark : ""}`}>
      <div className={styles.calculator}>
        <button className={styles.themeSwitch} onClick={() => setDark(!dark)}>
          {dark ? "☀️" : "🌙"}
        </button>

        <h2 className={styles.title}>Bharat Smart Calculator</h2>

        <Display displayValue={calVal} />
        <ButtonsContainer onButtonClick={onButtonClick} />
      </div>

      <div className={styles.historyBox}>
        <h3>History</h3>
        {history.length === 0 ? (
          <p>No history yet</p>
        ) : (
          history.map((item, idx) => <p key={idx}>{item}</p>)
        )}
      </div>
    </div>
  );
}

export default App;

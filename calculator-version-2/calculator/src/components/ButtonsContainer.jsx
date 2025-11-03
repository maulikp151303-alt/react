import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onButtonClick }) => {
  const buttons = [
    "C",
    "/",
    "*",
    "←",
    "7",
    "8",
    "9",
    "-",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "=",
    "0",
    ".",
    "%",
  ];

  const getButtonType = (btn) => {
    if (btn === "C") return "clear";
    if (btn === "=") return "equals";
    if (["/", "*", "-", "+", "%"].includes(btn)) return "operator";
    if (btn === "←") return "backspace";
    return "number";
  };

  return (
    <div className={styles.buttonsContainer}>
      {buttons.map((btn, index) => (
        <button
          key={index}
          onClick={() => onButtonClick(btn)}
          className={`${styles.button} ${styles[getButtonType(btn)]}`}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;

import { useState } from "react";
import Button from "./components/Button";
import Result from "./components/Result";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const clearInput = () => {
    setInput("");
    setOutput("");
  };

  const changeSign = () => {
    input[0] === "-" ? setInput(input.slice(1)) : setInput("-" + input);
    setOutput(output * -1);
  };

  const calculatePercentage = () => {
    if (input.length !== 0) {
      setOutput(parseFloat(eval(input).toFixed(10)) / 100);
    }
  };

  const appendCharacter = (character) => {
    const operators = ["+", "-", "*", "/", "."];
    if (
      operators.includes(character) &&
      (operators.includes(input[input.length - 1]) || input.length === 0)
    ) {
      return;
    }
    setInput(input + character);
  };

  const calculate = () => {
    const operators = ["+", "-", "*", "/", "."];
    if (!operators.includes(input[input.length - 1])) {
      setOutput(parseFloat(eval(input).toFixed(10)));
    }
  };
  const characters = [
    { character: "AC", handler: clearInput, wide: false },
    { character: "+/-", handler: changeSign, wide: false },
    { character: "%", handler: calculatePercentage, wide: false },
    { character: "+", handler: () => appendCharacter("+"), wide: false },
    { character: "1", handler: () => appendCharacter("1"), wide: false },
    { character: "2", handler: () => appendCharacter("2"), wide: false },
    { character: "3", handler: () => appendCharacter("3"), wide: false },
    { character: "-", handler: () => appendCharacter("-"), wide: false },
    { character: "4", handler: () => appendCharacter("4"), wide: false },
    { character: "5", handler: () => appendCharacter("5"), wide: false },
    { character: "6", handler: () => appendCharacter("6"), wide: false },
    { character: "*", handler: () => appendCharacter("*"), wide: false },
    { character: "7", handler: () => appendCharacter("7"), wide: false },
    { character: "8", handler: () => appendCharacter("8"), wide: false },
    { character: "9", handler: () => appendCharacter("9"), wide: false },
    { character: "/", handler: () => appendCharacter("/"), wide: false },
    { character: "0", handler: () => appendCharacter("0"), wide: false },
    { character: ".", handler: () => appendCharacter("."), wide: false },
    { character: "=", handler: calculate, wide: true }
  ];

  return (
    <div className="app">
      <Result input={input} output={output} />
      <div className="container">
        {characters.map((content) => (
          <Button
            key={content.character}
            content={content.character}
            wide={content.wide}
            handler={content.handler}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

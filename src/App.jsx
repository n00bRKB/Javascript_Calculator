import { useState } from "react";

function App() {
  const [state, setState] = useState("");
  const [result, setResult] = useState("0");
  const clearAll = () => {
    setState("");
    setResult(0);
  };
  const removeSingleChar = () => {
    setState((prev) =>
      prev
        .split("")
        .slice(0, prev.length - 1)
        .join("")
    );
  };
  const evaluate = () => {
    setResult(eval(state));
    setState((prevState) => prevState + "=");
  };
  const preview = (input) => {
    setState((prevState) => {
      if (prevState === "0") {
        return input;
      } else {
        return prevState + input;
      }
    });

    if (/[.]/.test(input)) {
      if (/[.]/.test(state[state.length - 1])) {
        let newState = state
          .split("")
          .slice(0, state.length - 1)
          .join("");
        setState(newState + input);
      }
    }

    if (/[+-]/.test(input)) {
      if (/[+-]/.test(state[state.length - 1])) {
        let newState = state
          .split("")
          .slice(0, state.length - 1)
          .join("");
        setState(newState + input);
      }
    }

    if (/[+]/.test(input)) {
      if (/[+]/.test(state[state.length - 1])) {
        let newState = state
          .split("")
          .slice(0, state.length - 1)
          .join("");
        setState(newState + input);
      }
    }

    if (/[-]/.test(input)) {
      if (/[-]/.test(state[state.length - 1])) {
        let newState = state
          .split("")
          .slice(0, state.length - 1)
          .join("");
        setState(newState + input);
      }
    }

    if (/[*]/.test(input)) {
      if (/[*]/.test(state[state.length - 1])) {
        let newState = state
          .split("")
          .slice(0, state.length - 1)
          .join("");
        setState(newState + input);
      }
    }

    if (/[/]/.test(input)) {
      if (/[/]/.test(state[state.length - 1])) {
        let newState = state
          .split("")
          .slice(0, state.length - 1)
          .join("");
        setState(newState + input);
      }
    }

    if (/[*/]/.test(input)) {
      if (/[+-]/.test(state[state.length - 1])) {
        let newState = state
          .split("")
          .slice(0, state.length - 1)
          .join("");
        setState(newState + input);
      }
    }

    if (/[+]/.test(input)) {
      if (
        /[-]/.test(state[state.length - 1]) &&
        /[*/]/.test(state[state.length - 2])
      ) {
        let newState = state
          .split("")
          .slice(0, state.length - 1)
          .join("");
        setState(newState);
      }
    }

    if (state[state.length - 1] === "=") {
      if (/[0-9]/.test(input)) {
        setResult(input);
      } else {
        setState(result + input);
      }
    }
  };

  return (
    <div className="container">
      <div id="calculator">
        <div className="head">Javascript Calculator</div>
        <div id="display-items">
          <div className="display">{state}</div>
          <div id="display" className="result">
            {result}
          </div>
        </div>
        <div className="buttons">
          <div onClick={clearAll} className="clear" id="clear">
            AC
          </div>
          <div onClick={removeSingleChar} className="c" id="c">
            C
          </div>
          <div onClick={() => preview("/")} className="divide" id="divide">
            /
          </div>
          <div onClick={() => preview("*")} className="multiply" id="multiply">
            x
          </div>
          <div onClick={() => preview("7")} className="seven" id="seven">
            7
          </div>
          <div onClick={() => preview("8")} className="eight" id="eight">
            8
          </div>
          <div onClick={() => preview("9")} className="nine" id="nine">
            9
          </div>
          <div onClick={() => preview("-")} className="subtract" id="subtract">
            -
          </div>
          <div onClick={() => preview("4")} className="four" id="four">
            4
          </div>
          <div onClick={() => preview("5")} className="five" id="five">
            5
          </div>
          <div onClick={() => preview("6")} className="six" id="six">
            6
          </div>
          <div onClick={() => preview("+")} className="add" id="add">
            +
          </div>
          <div onClick={() => preview("1")} className="one" id="one">
            1
          </div>
          <div onClick={() => preview("2")} className="two" id="two">
            2
          </div>
          <div onClick={() => preview("3")} className="three" id="three">
            3
          </div>
          <div onClick={evaluate} className="equals" id="equals">
            =
          </div>
          <div onClick={() => preview("0")} className="zero" id="zero">
            0
          </div>
          <div onClick={() => preview(".")} className="decimal" id="decimal">
            .
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

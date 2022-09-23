import logo from "./logo.svg";
import "./App.css";
import Profile from "./Components/Function";
import React, { useEffect, useState } from "react";
import Car from "./Components/Car";
import Posts from "./Components/Posts";

function App() {
  const [input, setInput] = useState([]);

  const AddTodo = ({ setInput }) => {
    const [content, setContent] = useState("");
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <textarea
          style={{}}
          rows={4}
          // value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <br />
        <button
          onClick={() => {
            setInput((prevValue) => {
              return [
                ...prevValue,
                {
                  id: Date.now(),
                  content,
                  status: "active",
                },
              ];
            });
          }}
        >
          Submit
        </button>
      </div>
    );
  };

  const ShowList = ({ input, setInput }) => {
    const deleteToDo = (idToDel) => {
      setInput((prev) => {
        const op = [];
        prev.forEach((inp) => {
          console.log(inp.id, idToDel);
          if (inp.id !== idToDel) {
            op.push(inp);
          }
        });
        return op;
      });
    };
    const completeToDo = (idToComplete) => {
      const op = [];
      input.forEach((inp) => {
        if (inp.id == idToComplete) {
          inp.status = "complete";
        }
        op.push(inp);
      });
      setInput(op);
    };
    const underlinetext = (idToUnderline) => {
      const op = [];
      input.forEach((inp) => {
        if (inp.id == idToUnderline) {
          inp.status = "underline";
        }
        op.push(inp);
      });
      setInput(op);
    };
    const reset = () => {
      const op = [];
      input.forEach((inp) => {
        if (inp.status == "active") {
          inp.status = "none";
        }
        op.push(inp);
      });
      setInput(op);
    };
    // console.log(input)
    return (
      // <button onClick = {() => reset(inp.id)}>Reset</button>
      <>
        <ul>
          {input.map(
            (inp) =>
              inp.status !== "none" && (
                <li
                  className={inp.status === "complete" ? "completedTodo" : ""}
                  id={inp.status === "underline" ? "underlinetext" : ""}
                >
                  {inp.content}{" "}
                  <button onClick={() => deleteToDo(inp.id)}>delete</button>
                  <button onClick={() => completeToDo(inp.id)}>
                    {" "}
                    compelete{" "}
                  </button>
                  <button onClick={() => underlinetext(inp.id)}>
                    {" "}
                    Underline{" "}
                  </button>
                </li>
              )
          )}
        </ul>
        <button onClick={reset}>Reset</button>
      </>
    );
  };
  return (
    <>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <AddTodo setInput={setInput} />
        <br />
        <ShowList input={input} setInput={setInput} />
      </div> */}
      <Posts />
    </>
  );
}

export default App;

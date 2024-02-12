/* eslint-disable no-unused-labels */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";

function App() {
  const totalInputs = 6;

  const [initial, setInitial] = useState(true);

  const [showInput, setShowInput] = useState(false);

  const [inputs, setInputs] = useState(
    Array.from({ length: totalInputs }, (_, index) => {
      return {
        id: index + 1,
        value: "",
      };
    })
  );
  const [currentState, setCurrentState] = useState(true);

  const handleOnchange = (id, event) => {
    setInputs(
      inputs.map((data) =>
        data.id === id ? { ...data, value: event.target.value } : data
      )
    );
  };

  const handleOnclick = () => {
    setCurrentState(!currentState);
    initial && setInitial(!currentState);

    setShowInput(!showInput);
  };

  return (
    <div className="flex gap-3 flex-col justify-center items-center py-20">
      {inputs &&
        inputs.map((input, index) => {
          if (currentState && initial) {
            return (
              <div className="flex gap-3" key={index}>
                <input
                  type={(index + 1) % 3 !== 0 ? "text" : "password"}
                  placeholder={
                    (index + 1) % 3 !== 0
                      ? "Input Your Text"
                      : "Input Your Password"
                  }
                  value={input.value}
                  className=" gap border-2"
                  onChange={(event) => handleOnchange(input.id, event)}
                />
              </div>
            );
          }
          

          // else(currentState && initial) {
          //   return(
          //     (
          //     <div className="flex gap-3" key={index}>
          //       <input
          //         type={(index + 1) % 3 !== 0 ? "text" : "password"}
          //         placeholder={
          //           (index + 1) % 3 !== 0
          //             ? "Input Your Text"
          //             : "Input Your Password"
          //         }
          //         value={input.value}
          //         className=" gap border-2"
          //         onChange={(event) => handleOnchange(input.id, event)}
          //       />
          //     </div>
          //   )
          // )
          // }

          // return currentState ? (
          //   initial && (
          //     <div className="flex gap-3" key={index}>
          //       <input
          //         type={(index + 1) % 3 !== 0 ? "text" : "password"}
          //         placeholder={
          //           (index + 1) % 3 !== 0
          //             ? "Input Your Text"
          //             : "Input Your Password"
          //         }
          //         value={input.value}
          //         className=" gap border-2"
          //         onChange={(event) => handleOnchange(input.id, event)}
          //       />
          //     </div>
          //   )
          // ) : (
          //   <>
          //     <div className="flex gap-3" key={index}>
          //       <label>
          //         {" "}
          //         {(index + 1) % 3 !== 0
          //           ? "Text Value " + input.id
          //           : "Password Value " + input.id}{" "}
          //         :{input.value}
          //       </label>
          //     </div>
          //   </>
          // );
        })}

      {/* {showInput &&
        inputs.map((input, index) => {
          return (
            initial && (
              <div className="flex gap-3" key={index}>
                <input
                  type={(index + 1) % 3 !== 0 ? "text" : "password"}
                  placeholder={
                    (index + 1) % 3 !== 0
                      ? "Input Your Text"
                      : "Input Your Password"
                  }
                  value={input.value}
                  className=" gap border-2"
                  onChange={(event) => handleOnchange(input.id, event)}
                />
              </div>
            )
          );
        })} */}

      <button className="bg-red-100" onClick={handleOnclick}>
        {currentState ? " Submit" : "Edit"}
      </button>
    </div>
  );
}

export default App;

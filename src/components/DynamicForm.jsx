/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export default function DynamicForm({ instruction }) {
  const [formData, setFormData] = useState({});
  const [randomUUIDs, setRandomUUIDs] = useState([]);

  useEffect(() => {
    const instructedDynamicArray = Array(instruction.numOfFields)
      .fill()
      .map(() => crypto.randomUUID());

      setRandomUUIDs(instructedDynamicArray);
  }, [instruction.numOfFields]);

  function handleFormData(e, item) {
    setFormData({ ...formData, [item]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <form className="shadow flex flex-col border p-10 gap-5 ">
      <h1 className="font-bold text-xl">Dynamic generation</h1>
      {randomUUIDs.map((item, idx) => {
        const isPaused = (idx + 1) % instruction.nameFieldPause === 0;
        return (
          <input
            key={item}
            className="bg-transparent h-10 ps-5 bg-slate-100 border-2 rounded outline-none"
            type={isPaused ? "password" : "text"}
            name={isPaused ? "password" : "name"}
            placeholder={`Type your ${isPaused ? "password" : "name"}`}
            value={formData[item] || ""}
            onChange={(e) => handleFormData(e, item)}
          />
        );
      })}

      <button
        type="submit"
        onClick={handleSubmit}
        className="bg-slate-800 py-4 text-white font-xl shadow"
      >
        Submit
      </button>
    </form>
  );
}

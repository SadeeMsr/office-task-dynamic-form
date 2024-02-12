/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export default function DynamicForm({
  instruction,
  formData,
  handleFormData,
  setShowEditForm,
}) {
  const [randomUUIDs, setRandomUUIDs] = useState([]);
  const [btnType, setBtnType] = useState("Submit");

  useEffect(() => {
    const instructedDynamicArray = Array(instruction?.numOfFields)
      .fill()
      .map(() => crypto.randomUUID());

    setRandomUUIDs(instructedDynamicArray);
  }, [instruction?.numOfFields]);

  function handleFormSubmit(e) {
    e.preventDefault();
    setBtnType("Edit");
    console.log(formData);
  }

  function handleFormEdit(e) {
    e.preventDefault();
    setBtnType("Submit");
    setShowEditForm(true);
    console.log(formData);
  }

  return (
    <form className="shadow flex flex-col border p-10 gap-5 ">
      <h1 className="font-bold text-xl">Dynamic generation</h1>
      {randomUUIDs.map((item, idx) => {
        const isPaused = (idx + 1) % instruction?.nameFieldPause === 0;
        const fieldName = isPaused ? "password-0" + idx : "name-0" + idx;
        return (
          <input
            key={item}
            className="bg-transparent h-10 ps-5 bg-slate-100 border-2 rounded outline-none"
            type={isPaused ? "password" : "text"}
            name={fieldName}
            placeholder={`Type your ${fieldName}`}
            value={formData[fieldName] || ""}
            onChange={handleFormData}
          />
        );
      })}

      {btnType === "Edit" &&
        Object.keys(formData).map((item) => (
          <h1 key={item}>
            <span className="font-bold">{item}</span>: {formData[item]}
          </h1>
        ))}

      {btnType === "Submit" ? (
        <button
          type="submit"
          onClick={handleFormSubmit}
          className="bg-slate-800 py-4 text-white font-xl shadow"
        >
          Submit
        </button>
      ) : (
        <button
          type="submit"
          onClick={handleFormEdit}
          className="bg-slate-800 py-4 text-white font-xl shadow"
        >
          Edit
        </button>
      )}
    </form>
  );
}

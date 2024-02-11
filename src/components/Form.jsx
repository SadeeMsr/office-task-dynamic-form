import { useState } from "react";

export default function Form() {
  const [formInput, setFormInput] = useState({
    name: "",
    password: "",
  });

  function handleForm(e) {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formInput);
  }
  

  // crypto.getRandomValues(new Uint32Array(10)).map((item) => console.log(item));

  // console.log(new Array(10).fill(10, 30, 50))


  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-[50%] border p-10 gap-5 "
    >
      <p>100 Forms</p>


      { crypto.getRandomValues(new Uint32Array(10)).map((item) =>  {

        return (
          <input
            key={item}
            type="text"
            className="bg-slate-100 outline-none h-10 rounded ps-5"
            placeholder="Type here text"
            name="name"
            value={formInput?.name}
            onChange={handleForm}
          />
        );
      })}


      
      <input
        type="password"
        className="bg-slate-50 outline-none h-10 rounded ps-5"
        placeholder="Type here password"
        name="password"
        value={formInput?.password}
        onChange={handleForm}
      />

      <button
        type="submit"
        className="bg-slate-800 py-4 text-white font-xl shadow"
      >
        Submit
      </button>
    </form>
  );
}

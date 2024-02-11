import { useState } from "react";
import "./App.css";
import DynamicForm from "./components/DynamicForm";
import UserInstructionForm from "./components/UserInstructionForm";

function App() {

const [instruction, setInstruction] = useState({
  numOfFields:0,
  nameFieldPause:0
})

function handleForm(e) {
  setInstruction({...instruction, [e.target.name]:Number(e.target.value)})
}



  return (
    <div className="flex flex-col justify-center items-center py-20">
      <div className="w-[50%]">
        <UserInstructionForm instruction={instruction} handleForm={handleForm} />
        <DynamicForm instruction={instruction} />
      </div>
    </div>
  );
}

export default App;

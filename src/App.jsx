import { useState } from "react";
import "./App.css";
import DynamicForm from "./components/DynamicForm";
import UserInstructionForm from "./components/UserInstructionForm";

function App() {
  const [instruction, setInstruction] = useState({
    numOfFields: 0,
    nameFieldPause: 0,
  });
  const [formData, setFormData] = useState({});
 
  const [showEditForm, setShowEditForm] = useState(false);

  function handleInstructionForm(e) {
    setInstruction({ ...instruction, [e.target.name]: Number(e.target.value) });
  }

  function handleFormData(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

 

  return (
    <div className="flex flex-col justify-center items-center py-20">
      <div className="w-[50%]">
        <UserInstructionForm
          instruction={instruction}
          handleForm={handleInstructionForm}
        />
       {!showEditForm && <DynamicForm
          formData={formData}
          instruction={instruction}
          handleFormData={handleFormData}
          setShowEditForm={setShowEditForm}
        />}

        {showEditForm && (
          <DynamicForm
            formData={formData}
            instruction={instruction}
            handleFormData={handleFormData}
          />
        )}
      </div>
    </div>
  );
}

export default App;

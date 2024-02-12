/* eslint-disable react/prop-types */
export default function UserInstructionForm({instruction, handleForm}) {
  return (
    <div className="shadow flex flex-col gap-5 mb-5 border w-full p-10">
      <h1 className="font-bold text-xl">Field Generation Instruction</h1>
      <input
        name="numOfFields"
        className="bg-transparent h-10 ps-5 bg-slate-100 border-2 rounded outline-none"
        type="number"
        placeholder="Type number of fields"
        defaultValue={instruction?.numOfFields}
        onChange={handleForm}
        min="0"
      />
     
      <input
        name="nameFieldPause"
        className="bg-transparent h-10 ps-5 bg-slate-100 border-2 rounded outline-none"
        type="number"
        placeholder="Type password field position number"
        defaultValue={instruction?.nameFieldPause}
        onChange={handleForm}
        min="0"
      />
    </div>
  );
}

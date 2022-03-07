import React from "react";
import { useForm } from "react-hook-form";


interface IForm {
    ToDo:string;
}

function ToDoList() {
  const {register,handleSubmit,setValue} = useForm<IForm>();
  const handleValid = (data:IForm) => {
    console.log(data.ToDo);
    setValue("ToDo","");
  }
  return (
    <div>
        <form onSubmit={handleSubmit(handleValid)}>
            <input {...register("ToDo",{
                required:"Please Write a Todo"
            })} placeholder="Write a ToDo" />
            <button>Add</button>
        </form>
      
    </div>
  );
}

export default ToDoList;
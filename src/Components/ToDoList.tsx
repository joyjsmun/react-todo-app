import React from "react";
import { useForm } from "react-hook-form";
import {atom,useRecoilState} from "recoil";



interface IForm {
  toDo:string;
}

interface IToDo{
  text:string;
  id:number;
  category:"TO_DO" | "DOING" | "DONE";
}

const toDosState = atom<IToDo[]>({
  key:"toDo",
  default:[],
})
function ToDoList() {
  //useRecoilValue; connect with atoms + useSetRecoilState;set Atoms
  const [toDos,setToDos] = useRecoilState(toDosState);
  const {register,handleSubmit,setValue} = useForm<IForm>();
  const handleValid = ({toDo}:IForm) => {
    console.log("Add to do",toDo);
    // {new Todo} ... old todos array
    setToDos((oldToDos) => [{text:toDo, id:Date.now() ,category:"TO_DO"},...oldToDos]);
    setValue("toDo","");
  }
  console.log(toDos);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
        <form onSubmit={handleSubmit(handleValid)}>
            <input {...register("toDo",{
                required:"Please Write a Todo"
            })} placeholder="Write a ToDo" />
            <button>Add</button>
        </form>
      <ul>
        {toDos.map(toDo => <li key={toDo.id}>{toDo.text}</li>)}
      </ul>
    </div>
  );
}

export default ToDoList;
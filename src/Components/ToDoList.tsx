
import { useRecoilValue } from "recoil";
import { toDoState } from "./atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";


function ToDoList() {
  //useRecoilValue; connect with atoms + useSetRecoilState;set Atoms
  const toDos = useRecoilValue(toDoState);
  //data.toDo => ({toDo}) 

  console.log(toDos);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
     <CreateToDo />
      <ul>
        {toDos.map(toDo => <ToDo key={toDo.id} {...toDo}/> )}
      </ul>
    </div>
  );
}

export default ToDoList;
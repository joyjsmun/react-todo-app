import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { text } from "stream/consumers";
import { categoryState, toDoState } from "../Components/atoms"

interface IForm {
  toDo: string;
}


function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    // setToDos((oldToDos) => [
    //   { text: toDo, id: Date.now(), category },
    //   ...oldToDos]);
    setValue("toDo", "");
  };

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", {
          required: "Please write a To Do",
        })}
        placeholder="Write a to do"
      />
      <button>ADD Todo</button>
    </form>
  );
}

export default CreateToDo;
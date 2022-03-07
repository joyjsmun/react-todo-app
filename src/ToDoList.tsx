import React, { useState } from "react";
import {useForm} from "react-hook-form";

// function ToDoList(){
//     const [toDo,setToDo] = useState("");
//     const onChange = (event:React.FormEvent<HTMLInputElement>) => {
//         const {
//             currentTarget:{value},
//         } = event;
//         setToDo(value);
//     }
//     const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         console.log(toDo)
//     }
//     return <div>
//         <form onSubmit={onSubmit}>
//             <input onChange={onChange} value={toDo} placeholder="Write a to Do" />
//             <button>ADD</button>
//         </form>
//     </div>;
// }

function ToDoList(){
    const {register,handleSubmit,formState:{errors}} = useForm();
    const onValid = (data:any) => {
        console.log(data);
    }
    return <div>
        <form style={{display:"flex", flexDirection:"column"}} onSubmit={handleSubmit(onValid)}>
            <input {...register("email",{
                required:"Email is required",
                    pattern: {
                        value: /^[A-Za-z0-9._%+-]+@naver.com$/,
                        message: "Only naver.com emails allowed",
                      }
                })} placeholder="email" />
            <span>{errors?.email?.message  }</span>
            <input {...register("firstName", {
                required:"first name is required", 
                minLength:{
                value:5,
                message:"more than 5 letters are required!!!"
            }})} placeholder="firstName" />
             <span>{errors?.firstName?.message  }</span>
            <input {...register("lastName",{
                required:"last name is required"})} placeholder="lastName" />
        <span>{errors?.lastName?.message  }</span>
            <button>Add</button>
        </form>
    </div>
}

export default ToDoList;
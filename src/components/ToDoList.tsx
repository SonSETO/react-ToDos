import { useRecoilState, useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { Categories, categoryState, toDoSelector, toDoState } from "./atoms";
import ToDo from "./ToDo";
import React from "react";

function ToDoList() {
  // const toDos = useRecoilValue(toDoState);  // value와 변경을 함께 하고 싶을 때
  // const value = useRecoilValue(toDoState) // value만 가져오고 싶을 때
  // const modFn = useSetRecoilState(toDoState) // value를 수정하고 싶을 때

  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (e: React.FormEvent<HTMLSelectElement>) => {
    setCategory(e.currentTarget.value as any);
  };
  console.log(toDos);

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;

// type IFormData = {
//   errors: {
//     email: {
//       message: string;
//     };
//   };
//   userName: string;
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
//   CheckingPassword: string;
//   extraError?: string;
// };

// function ToDoList() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     setError,
//   } = useForm<IFormData>({
//     defaultValues: {
//       email: "@naver.com",
//     },
//   });
//   const onValid = (data: IFormData) => {
//     if (data.password !== data.CheckingPassword) {
//       setError(
//         "CheckingPassword",
//         { message: "Password are not the same" },
//         { shouldFocus: true }
//       );
//     }
//     // setError("extraError", { message: "Sever offline" });
//   };
//   console.log(errors);
//   return (
//     <div>
//       <form
//         style={{ display: "flex", flexDirection: "column" }}
//         onSubmit={handleSubmit(onValid)}
//       >
//         <input
//           {...register("email", {
//             required: "Email is Required",
//             pattern: {
//               value: /^[A-Za-z0-9._%+-]+@naver.com$/,
//               message: "Only naver.com emails allowed",
//             },
//           })}
//           placeholder="Email"
//         />
//         <span>{errors?.email?.message}</span>
//         <input
//           {...register("firstName", {
//             required: "Write here",
//             validate: {
//               noSeto: (value) =>
//                 value.includes("seto") ? "no seto allowed" : true,
//               noSetk: (value) =>
//                 value.includes("setk") ? "no seto allowed" : true,
//             },
//           })}
//           placeholder="Fist Name"
//         />
//         <span>{errors?.firstName?.message}</span>
//         <input
//           {...register("lastName", { required: "Write here" })}
//           placeholder="Last Name"
//         />
//         <span>{errors?.lastName?.message}</span>
//         <input
//           {...register("userName", { required: "Write here", minLength: 10 })}
//           placeholder="Username"
//         />
//         <span>{errors?.userName?.message}</span>
//         <input
//           {...register("password", {
//             required: "Write here",
//             minLength: 5,
//           })}
//           placeholder="Password"
//         />
//         <span>{errors?.password?.message}</span>
//         <input
//           {...register("CheckingPassword", {
//             required: "Password is required",
//             minLength: {
//               value: 5,
//               message: "Your password is too short",
//             },
//           })}
//           placeholder="CheckingPassword"
//         />
//         <span>{errors?.CheckingPassword?.message}</span>
//         <button>Add</button>
//         <span>{errors?.extraError?.message}</span>
//       </form>
//     </div>
//   );
// }

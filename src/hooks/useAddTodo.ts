
import useSetLocalStorage from "./useSetLocalStorage";
import { v4 } from "uuid"
import { DeletePropsTypes } from "../types/types";

const useAddTodo = ({ value, setTodoArray }: DeletePropsTypes) => {
    const todos = JSON.parse(localStorage.getItem("todos") as string)
    if (value) {
        if (todos) {
            todos.push({ id: v4(), value })
            setTodoArray(todos)
            useSetLocalStorage(todos)
        } else {
            setTodoArray([{ id: v4(), value }])
            useSetLocalStorage([{ id: v4(),value}] as any)
        }

    }
}

export default useAddTodo
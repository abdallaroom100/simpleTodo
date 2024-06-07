
import useSetLocalStorage from "./useSetLocalStorage";
import { AddPropsTypes } from "../types/types";



const useDeleteTodo = ({ id, setTodoArray }: AddPropsTypes) => {
    const todos = JSON.parse(localStorage.getItem("todos") as string)
    console.log(todos);
    const filterd = todos.filter((items: { id: string, value: string }) => items.id !== id)
    setTodoArray(filterd)
    useSetLocalStorage(filterd)
}

export default useDeleteTodo
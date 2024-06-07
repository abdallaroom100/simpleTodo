
import useDeleteTodo from "../hooks/useDeleteTodo";
import { TodoListProps } from "../types/types";


const Todo = ({ todo, setTodoArray }: TodoListProps) => {
    return (
        <div key={todo.id} className='flex p-[10px] justify-between items-center'>
            <p>{todo.value}</p>
            <button onClick={() => useDeleteTodo({ id: todo.id, setTodoArray })}>delete</button>
        </div>
    )
}

export default Todo
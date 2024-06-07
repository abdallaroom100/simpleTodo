import { arrayTypes } from "../types/types"


const useSetLocalStorage = (array:arrayTypes) => {
 localStorage.setItem("todos",JSON.stringify(array))
}

export default useSetLocalStorage
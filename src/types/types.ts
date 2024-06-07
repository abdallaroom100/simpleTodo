import React from "react";

export interface TodoTypes {
    id: string;
    value: string;
  }

export interface Todo {
    id: string;
    value: string;
}

export interface arrayTypes{
    id:string,
    value:string
}[]

export interface DeletePropsTypes {
    value?: string,
    setTodoArray: React.Dispatch<React.SetStateAction<any>>
}


export interface AddPropsTypes {
    id: string,
    setTodoArray: React.Dispatch<React.SetStateAction<any>>
}

export interface TodoType {
    id: string,
    value: string
}


export interface TodoListProps {
    todo: TodoType,
    setTodoArray: React.Dispatch<React.SetStateAction<any>>
}
"use client";

import AddTodo from "@/components/AddTodo";
import TodosDisplay from "@/components/TodosDisplay";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";

export interface ITodo {
    id: number
    userId: number
    title: string
    completed: boolean
}

export default function Page() {

    const [todos, setTodos] = useState([] as ITodo[])

    useEffect(() => {
        async function fetchTodos() {
            const data =  await fetch("https://jsonplaceholder.typicode.com/todos")
            const initTodos = await data.json() as ITodo[]

            setTodos([...initTodos])

        }

        fetchTodos()
    }, [])

    return (
        <Row>
            <AddTodo todos={todos} setTodos={(data: ITodo[]) => {
                setTodos([...data])
            }} />
            <TodosDisplay todos={todos} setTodos={(data: ITodo[]) => {
                setTodos([...data])
            }} />
        </Row>
    )
}
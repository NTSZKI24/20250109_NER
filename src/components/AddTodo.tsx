"use client"

import { ITodo } from "@/app/todos/page"
import { init } from "next/dist/compiled/webpack/webpack";
import { BaseSyntheticEvent, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap"

export default function TodosDisplay({
    todos,
    setTodos
} : {
    todos: ITodo[]
    setTodos: Function
}) {

    function handleSubmit(event: BaseSyntheticEvent) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const formValues = Object.fromEntries(formData)

        fetch("https://jsonplaceholder.typicode.com/todos", {
            method: 'POST',
            body: JSON.stringify({
                ...formValues
            }),
            headers: {
                'Content-type': 'application/json'
            }
        }).then((response) => {
            console.log(response)
        })
    }

    return (
        <Col xs={12}>
            <form onSubmit={handleSubmit}>
                <Row>
                {todos.map((todo) => (
                    <Col key={todo.id} xs={3}>
                        <Card>
                            <Card.Title>{todo.title}</Card.Title>
                            <Card.Text>
                                {todo.completed ? 'Készen van' : 'Nincsen készen'}
                            </Card.Text>
                        </Card>
                    </Col>
                ))}
                </Row>
            </form>
        </Col>
    )
}
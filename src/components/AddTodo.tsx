"use client"

import { ITodo } from "@/app/todos/page"
import { init } from "next/dist/compiled/webpack/webpack";
import { BaseSyntheticEvent, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap"

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

    function updateTodo(event: BaseSyntheticEvent) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const formValues = Object.fromEntries(formData)

        fetch(`https://jsonplaceholder.typicode.com/todos/${formValues.id}`, {
            method: "PUT",
            body: JSON.stringify(formValues),
            headers: {
                'Content-type': 'application/json'
            }
        }).then((response) => {
            console.log(response)
        })
    }

    return (
        <><Col xs={12}>
            <Row>
                <Col xs={3}>
                    <Form.Group className="mb-3">
                        <Form.Label> Cím </Form.Label>
                        <Form.Control type="text" name="title" required></Form.Control>
                    </Form.Group>
                </Col>
                <Col xs={3}>
                    <Form.Group className="mb-3">
                        <Form.Label> Felhasznaló azonositó </Form.Label>
                        <Form.Control type="text" name="title" required></Form.Control>
                    </Form.Group>
                </Col>
                <Col xs={3}>
                    <Form.Group className="mb-3">
                        <Form.Label>Készen van?</Form.Label>
                        <Form.Check
                            type="switch"
                            label="Igen"
                            name="completed" />
                    </Form.Group>
                </Col>
                <Col xs={3}>
                    <Button variant="success" type="submit"> Mentés </Button>
                </Col>
            </Row>
        </Col>
        <Col xs={12}>
                <form onSubmit={updateTodo}>
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
            </Col></>
    )
}
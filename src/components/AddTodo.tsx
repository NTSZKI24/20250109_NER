"use client";

import { ITodo } from "@/app/todos/page"
import { title } from "process"
import { BaseSyntheticEvent } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"

export default function AddTodo({
    todos,
    setTodos
}:{
    todos: ITodo[]
    setTodos: Function
}){
    function handleSubmit(event: BaseSyntheticEvent){
            event.preventDefault()
            const formData = new FormData(event.currentTarget)
            const formValues = Object.fromEntries(formData);

            fetch("https://jsonplaceholder.typicode.com/todos", {
                method: 'POST', 
                body: JSON.stringify({
                    ...formValues
                }),
                headers: {
                    'Content-type':'application/json'
                }
            }).then((response) => {
                console.log(response)
            })
        }
    
        function updateTodo(event: BaseSyntheticEvent){
            event.preventDefault()
            const formData = new FormData(event.currentTarget)
            const formValues = Object.fromEntries(formData);

            fetch(`https://jsonplaceholder.typicode.com/todos/${formValues.id}`, {
                method: "PUT",
                body: JSON.stringify(formValues),
                headers: {
                    'Content-type':'application/json'
                }
            }).then((response) => {
                console.log(response)
                response.json().then((json) => {
                    console.log(json)
                })
            })
        }

        

    return(
        <Col xs={12}>
            <form onSubmit={updateTodo}>
                <input type="hidden" name="id" value={200}/>
                
                    <Row>
                        <Col xs={3}>
                            <Form.Group className="mb-3">
                                <Form.Label>Cím</Form.Label>
                                <Form.Control type="text" name="title" required />
                            </Form.Group>
                        </Col>  
                        <Col xs={3}>
                            <Form.Group className="mb-3">
                                <Form.Label>Felhasználónév azonosító</Form.Label>
                                <Form.Control type="number" name="userId" required />
                            </Form.Group>
                        </Col>  
                        <Col xs={3}>
                            <Form.Group className="mb-3">
                            <Form.Label>Készen van?</Form.Label>
                                <Form.Check 
                                type="switch"
                                label="Igen"
                                name="completed"
                                required
                                />
                            </Form.Group>
                        </Col> 
                        <Col xs={3}>
                            <Button variant="success" type="submit">Mentés</Button>
                        </Col>  
                    </Row>
            </form>
        </Col>
    )
}
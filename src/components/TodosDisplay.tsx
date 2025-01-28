"use client";

import { BaseSyntheticEvent } from "react";
import { Button, Card, Col, Row } from "react-bootstrap"

export interface ITodo{

    id: number
    userId: number
    title: string
    completed: boolean
}
export default function TodoDisplay({
    todos,
    setTodos
}: {
    todos: ITodo[],
    setTodos: Function
}){

    function DeleteTodo(event: BaseSyntheticEvent){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const formValues = Object.fromEntries(formData);

        fetch(`https://jsonplaceholder.typicode.com/todos/${formValues.id}`, {
            method: "DELETE"
                
        }).then((response) => {
            console.log(response)
            response.json().then((json) => {
                    console.log(json)
            })
        })
    }
    
    return(
        <Col xs={12}>
            <Row>
                {todos.map((todo) =>(
                <Col key={todo.id} xs={3}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{todo.title}</Card.Title>
                                <Card.Text>
                                    {todo.completed ? 'Készen van' : 'Nincs kész'}
                                </Card.Text>
                                <Button
                                     
                                >vvcds</Button>
                                
                            </Card.Body>
                        </Card>
                    </Col> 
                ))}
            </Row>
            
            
        </Col>
    )
}
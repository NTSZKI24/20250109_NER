import { ITodo } from "@/app/todos/page";
import { Card, Col, Row } from "react-bootstrap";

export default function TodosDisplay({
    todos,
    setTodos
} : {
    todos: ITodo[]
    setTodos: Function
}) {
    return (
        <Col xs={12}>
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
        </Col>
    )
}
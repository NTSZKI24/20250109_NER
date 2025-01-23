import { ITodo } from "@/app/todos/page";
import { Card, Col, Row, Button } from "react-bootstrap";

export default function TodosDisplay({
    todos,
    setTodos
} : {
    todos: ITodo[]
    setTodos: Function
}) {
    const handleDelete = async (id: number) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        });
        setTodos((prevTodos: ITodo[]) => prevTodos.filter(todo => todo.id !== id));
    };

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
                            <Button variant="danger" onClick={() => handleDelete(todo.id)}>
                                Törlés
                            </Button>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Col>
    )
}
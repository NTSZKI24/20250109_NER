import { ITodo } from "@/app/todos/page";
import { Button, Col, Form, Row } from "react-bootstrap";

export default function AddTodo({
    todos,
    setTodos
} : {
    todos: ITodo[]
    setTodos: Function
}) {
    return (
        <Col xs={12}>
            <form action="">
                <Row>
                    <Col xs={3}>
                        <Form.Group className="mb-3">
                            <Form.Label> Cím </Form.Label>
                            <Form.Control type="text" name="title" required/>      
                        </Form.Group>
                    </Col>
                    <Col xs={3}>
                        <Form.Group className="mb-3">
                            <Form.Label> Felhasználó azonosító </Form.Label>
                            <Form.Control type="number" name="userId" required/>      
                        </Form.Group>
                    </Col>
                    <Col xs={3}>
                        <Form.Group className="mb-3">
                            <Form.Label> Készen van ? </Form.Label>
                            <Form.Check 
                                type="switch"
                                name="completed"
                                
                            />
                        </Form.Group>
                    </Col>
                    <Col xs={3}>
                        <Button variant="success" type="submit"> Mentés </Button>
                    </Col>
                </Row>
            </form>
        </Col>
    )
}
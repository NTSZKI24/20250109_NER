"use client";

import { BaseSyntheticEvent } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

export interface IUser {
    id: number, 
    firstName: string, 
    lastName: string 
}

export default function UserDisplay({
    users,
    setUsers
}: {
    users: IUser[],
    setUsers: Function
}) {

    function DeleteUser(event: BaseSyntheticEvent) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formValues = Object.fromEntries(formData);

        fetch(`https://dummyjson.com/users/2/${formValues.id}`, {
            method: "DELETE"
        }).then((response) => {
            console.log(response);
            response.json().then((json) => {
                console.log(json);
                // Optionally update the users state here based on the response
            });
        });
    }

    return (
        <Col xs={12}>
            <Row>
                {users.map((user) => (
                    <Col key={user.id} xs={3}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{user.firstName} {user.lastName}</Card.Title>
                                <Card.Text>ID: {user.id}</Card.Text>
                                <Button onClick={DeleteUser}>
                                    Delete
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Col>
    );
}
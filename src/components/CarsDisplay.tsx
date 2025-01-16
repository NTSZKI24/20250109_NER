"use client";

import { Button, Card, Col, Row } from "react-bootstrap";

export interface ICars {
    id: number
    brand: string
    model: string
    image?: string //nem kötelező megadni 
}

export default function CarsDisplay({
    cars
} : {
    cars: ICars[]
}) {
    return (
        <Row>
            {cars.map(car => (
                <Col key={car.id}>
                    <Card>
                        {car.image && (
                        <Card.Img src={car.image} variant="top"/>
                        )}
                        <Card.Body>
                            <Card.Title>{car.brand}</Card.Title>
                            <Card.Text>
                                {car.model}
                            </Card.Text>
                            <Button variant="danger">Törlés</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

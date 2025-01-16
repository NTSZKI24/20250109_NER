"use client";

import React, { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

export interface ICars {
    id: number;
    brand: string;
    model: string;
    image?: string; // nem kötelező megadni
}

export default function CarsDisplay({
    cars: initialCars
} : {
    cars: ICars[],
    setCars: Function
}) {

    const [cars, setCars] = useState<ICars[]>(initialCars);


    const handleDelete = (id: number) => {
        const updatedCars = cars.filter(car => car.id !== id);
        setCars(updatedCars);
    };

    return (
        <Row>
            {cars.map(car => (
                <Col key={car.id}>
                    <Card>
                        {car.image && (
                            <Card.Img src={car.image} variant="top" />
                        )}
                        <Card.Body>
                            <Card.Title>{car.brand}</Card.Title>
                            <Card.Text>
                                {car.model}
                            </Card.Text>
                            <Button variant="danger" onClick={() => setCars([...cars.filter((c) => {
                                    return c.id !== car.id;
                                })])
                            }>Törlés
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}
"use client";

import { Span } from "next/dist/trace";
import { BaseSyntheticEvent, Dispatch, FormEvent, SetStateAction } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { ICars } from "./CarsDisplay";


export default function AddCar({
    cars,
    setCars 
} : {
    cars: ICars[]
    setCars: Function
}) {

    function handleSubmit(event: BaseSyntheticEvent) {
        event.preventDefault();
        const formData = new FormData(event.target)
        const formValues = Object.fromEntries(formData);

        const newCar = {
            id: cars[cars.length - 1].id + 1,
            brand: formValues.brand as string,
            model: formValues.model as string

        }
        const newArray = cars;
        newArray.push(newCar)
        setCars(newArray)
    }

    return (
        <form onSubmit={handleSubmit}>
            <Col xs={12}>
                <Row>
                    <Col xs={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Márka</Form.Label>
                            <Form.Control type="text" name="brand" />
                        </Form.Group>
                    </Col>
                    <Col xs={4}>
                        <Form.Group>
                            <Form.Label>Model</Form.Label>
                            <Form.Control type="text" name="model" />
                        </Form.Group>
                    </Col>
                    <Col xs={{span: 2, offset: 10}} className="mb-3">
                        <Button variant="success" type="submit">
                            Hozzáadás
                        </Button>
                    </Col>
                </Row>
            </Col>

        </form>
    )
}
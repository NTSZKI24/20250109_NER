"use client";

import AddCar from "@/components/AddCar";
import CarsDisplay, { ICars } from "@/components/CarsDisplay";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";

export default function Page() {
    const [cars, setCars] = useState<ICars[]>([
        {
            id: 1,
            brand: "Skoda",
            model: "Octavia",

        },
        {
            id: 2,
            brand: "Ferrari",
            model: "SF90",

        }

    ]); //use clientes a componens csak akkor


    return (
        <Row>
            <Col>1</Col>
            <Col>2</Col>
            <Col>3</Col>
            <Col xs={2}>4</Col>
            <Col xs={12}>5</Col>
            <Col xs={6}>6</Col>
            <hr />
                <AddCar cars={cars} setCars={(data: ICars[]) => {
                    setCars([...data])
                }} />
            <hr />
            <Col xs={10}>
                <CarsDisplay cars={cars} setCars={(data: ICars[]) =>  {
                    setCars([...data])
                }} />
            </Col>
        </Row>
        
    )
}
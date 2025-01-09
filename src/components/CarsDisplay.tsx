"use client";

import { Row } from "react-bootstrap";

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

        </Row>
    )
}
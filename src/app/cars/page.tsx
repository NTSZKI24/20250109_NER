import CarsDisplay from "@/components/CarsDisplay";
import { Col, Row } from "react-bootstrap";

export default function Page() {
    return (
        <Row>
            <Col>1</Col>
            <Col>2</Col>
            <Col>3</Col>
            <Col xs={2}>4</Col>
            <Col xs={12}>5</Col>
            <Col xs={6}>6</Col>
            <hr />
            <Col xs={10}>
                <CarsDisplay cars={[]} />
            </Col>
        </Row>
    )
}
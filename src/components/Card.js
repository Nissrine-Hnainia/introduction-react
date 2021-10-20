import React from 'react'
import {Card, Button} from "react-bootstrap"
import imageInSrc from "../imageInSrc.jpg"

const MyCard = () => {
    return (
        <Card className="card">
            <Card.Img variant="top" src={imageInSrc} />
            <Card.Body>
                <Card.Title>Computer setup</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">view more</Button>
            </Card.Body>
        </Card>
    )
}

export default MyCard

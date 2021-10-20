import React from 'react'
import {Form, Button} from "react-bootstrap"

const Contact = () => {
    return (
        <Form className="contact">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Message</Form.Label>
                <Form.Control type="text" placeholder="Insert your message here" />
            </Form.Group>

            <Button variant="dark">
                send
            </Button>
        </Form>
    )
}

export default Contact

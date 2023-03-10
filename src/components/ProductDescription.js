import React from 'react'
import { Component } from 'react'
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap'
import { callAPI } from './OpenAIAPI.js'

class ProductDescription extends Component {
    constructor() {
        super()
        this.state = {
            heading: `AI Generated Response:`,
            response: `The product description generated by the AI will show here.`
        }
    }
    
    onFormSubmit = e => {

        e.preventDefault()
        
        const formData = new FormData(e.target),
        formDataObj = Object.fromEntries(formData.entries())

        const prompt = `Write a persuasive and exciting product description for: ${formDataObj.productName}`;

        this.setState({
            heading: `AshAi is thinking about your product description...`,
            response: `AshAi is coming up with a product description for ${formDataObj.productName}...`
        })
        callAPI(prompt).then((data) => {
            this.setState({
                heading: `Product Description for: ${formDataObj.productName}`,
                response: data
            })
        }); 
    }

    render () {
        return (
        <div id="main-content">
        <Container>
        <Row>
        <Col xs={6} md={4}>
        <h1>Product Description</h1>
        <p id="pageDescription">Enter your your product and a few keywords that you'd like to include in your output. Click Submit and get a product description generated for you by AI. Think less and sell more.</p>

        <Form onSubmit={this.onFormSubmit}>
        <Form.Group className="mb-3" controlId="textArea">
            <Form.Label>Product Name & Purpose:</Form.Label>
            <Form.Control as="textarea" name="productName" placeholder="e.g. ScoobySnacks will make your dog chill out" />
        </Form.Group>
        <Button variant="primary" size="md" type="submit">Submit</Button>
        </Form>
        </Col>
        
        <Col xs={12} md={8}>
        <Card className="text-center">
            <Card.Header><h2>{this.state.heading}</h2></Card.Header>
            <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
            <p>{this.state.response}</p>
            </Card.Text>
            </Card.Body>
        </Card>
        </Col>
        </Row>
        </Container>
        </div>
        );
    }
}

export default ProductDescription;
import React from 'react'
import { Component } from 'react'
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap'
import { callAPI } from './OpenAIAPI.js';

class LinkedInJobDescription extends Component {
    constructor() {
        super()
        this.state = {
            heading: `AI Generated Response:`,
            response: `The Linkedin job description generated by the AI will show here.`
        }
    }
    
    onFormSubmit = e => {
        e.preventDefault()

        const formData = new FormData(e.target),
        formDataObj = Object.fromEntries(formData.entries())

        const prompt = `Write an informative and knowledgeable LinkedIn job description in the first person past tense for the job title: ${formDataObj.jobTitle}`;

        this.setState({
            heading: `Thinking about your job description...`,
            response: `Thinking of job description for ${formDataObj.jobTitle}...`
        })
        callAPI(prompt).then((data) => {
            this.setState({
                heading: `Linkedin job Description for: ${formDataObj.jobTitle}`,
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
        <h1>LinkedIn Job Description</h1>
        <p id="pageDescription">Enter your your job title, click submit, and get a job description generated for you by AI. </p>

        <Form onSubmit={this.onFormSubmit}>
        <Form.Group className="mb-3" controlId="textArea">
            <Form.Label>Job Title:</Form.Label>
            <Form.Control as="textarea" name="jobTitle" placeholder="e.g. Website Technical Support Specialist" />
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

export default LinkedInJobDescription;
import React from 'react'
import { Component } from 'react'
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap'

const { Configuration, OpenAIApi } = require('openai')

class BlogIntro extends Component {
    constructor() {
        super()
        this.state = {
            heading: `The response from AI will show here.`,
            response: `Intro paragraph from the AI will show here.`
        }
    }
    
    onFormSubmit = e => {

        e.preventDefault()

        const formData = new FormData(e.target),
        formDataObj = Object.fromEntries(formData.entries())

        // OpenAI davinci completion
        const configuration = new Configuration({
            apiKey: 'API KEY HERE',
        });
        const openai = new OpenAIApi(configuration);

        openai.createCompletion("text-davinci-002", {
            prompt: `Write an uplifting and positive Blog intro paragraph for the blog title ${formDataObj.blogTitle} and include the keywords: ${formDataObj.context}`,
            temperature: 0.85,
            max_tokens: 200,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        })
        .then((response) => {
            this.setState({
                heading: `Blog title for: ${formDataObj.blogTitle} with the keywords ${formDataObj.context}`,
                response: `${response.data.choices[0].text}`
            })
        }); 
    }

    render () {
        return (
            <div id="main-content">
                <Container>
                <Row>
                <Col xs={6} md={4} id="inputCol">
                    <h1>Blog Intro</h1>
                    <p id="pageDescription">Enter your blog posts title and keywords that you'd like to include in your output. Click Submit and get a blog post introduction paragraph generated for you by AI. Think less and publish more.</p>
                    <Form onSubmit={this.onFormSubmit}>
                        <Form.Group className="mb-3" controlId="textArea">
                            <Form.Label>Blog post title: </Form.Label>
                            <Form.Control as="textarea" name="blogTitle" placeholder="e.g. How to Make a Commit with Git" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="textArea">
                            <Form.Label>SEO keywords: </Form.Label>
                            <Form.Control as="textarea" name="context" placeholder="e.g. Git, CLI, commit message" />
                        </Form.Group>
                        <Button variant="primary" size="md" type="submit">
                            Submit
                        </Button>
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

export default BlogIntro;
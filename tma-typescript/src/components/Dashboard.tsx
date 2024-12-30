import React from 'react';
import {Container, Card, Button, Row, Col } from 'react-bootstrap';


const Dashboard: React.FC = () => {

    return (
        <Container>
            <h2 className="mb-5 text-center">Dashboard</h2>
            <Row>
            <Col md={6} className="mb-4">
            <Card style={{ width: '100%' }}>
                <Card.Img 
                    variant="top"
                    src='https://unsplash.com/photos/hQOHDAibf6A/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8aG91c2Vob2xkJTIwY2hvcmVzfGVufDB8fHx8MTczMTM1MjcxNXww&force=true'
                    //style={{ width: '300px', height: '280px' }}  
                 />
                    <Card.Body>
                        <Card.Title>Wash Dishes</Card.Title>
                        <Card.Text>
                        This task is set to be completed by the end of the day.
                        </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                        </Card>
                            </Col>
            
                
            <Col md={6} className="mb-4">
                <Card style={{ width: '100%' }}>
                    <Card.Img 
                        variant="top"
                        src='https://unsplash.com/photos/_ODVlLRQoTk/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8Z2V0dGluZyUyMGdyb2Nlcmllc3xlbnwwfHx8fDE3MzEzNTI4NzV8MA&force=true'
                        //style={{ width: '300px', height: '280px' }}  
                    />
                    <Card.Body>
                        <Card.Title>Cook Dinner</Card.Title>
                        <Card.Text>
                        This task is to be completed on 01/14/25. Make sure bread is fresh, bought the day of.
                        </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
              
        </Container>
    )
};

export default Dashboard
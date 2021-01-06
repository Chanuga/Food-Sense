import React from 'react'
import { Card, Button } from 'react-bootstrap';

function Recipe({ nameOfTheRecipe, imageOfTheRecipe, videoURL, ingredientLines }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Card style={{ width: '18rem' , margin: '30px' }}>
                <Card.Img variant="top" src={imageOfTheRecipe} />
                <Card.Body>
                    <Card.Title>{nameOfTheRecipe}</Card.Title>
                    <Card.Text>
                        Ingredients
                        {ingredientLines.map( ingredient => (
                            <li>{ingredient}</li>
                        ))}
                    </Card.Text>
                    <Button variant="success" href={videoURL} target="blank">How To Make</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Recipe

import React from 'react';
import { Card } from 'react-bootstrap';
import '../App.css';

function CardComponent({ header, title, text, style }) {
  return (
    <Card border={style} style={{ width: '18rem' }}>
      <Card.Header>{header}</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}


export default CardComponent;

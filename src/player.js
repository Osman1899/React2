// src/Player.js

import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Player = ({ nom = "Nom Inconnu", age = "Âge Inconnu", poste = "Poste Inconnu", club = "Club Inconnu", image = "https://via.placeholder.com/150" }) => {
  const cardStyle = {
    width: '18rem',
    margin: '1rem auto'
  };

  return (
    <Col sm={6} md={4} lg={3} className="mb-3">
      <Card style={cardStyle}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{nom}</Card.Title>
          <Card.Text>
            <p>Âge : {age}</p>
            <p>Poste : {poste}</p>
            <p>Club : {club}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Player;

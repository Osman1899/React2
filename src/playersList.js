// src/PlayersList.js

import React from 'react';
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Player from './player';
import joueurs from './joueurs';

const PlayersList = () => {
  return (
    <div className="PlayersList">
      <Container>
        <h1>Liste des Joueurs</h1>
        <Row>
          {joueurs.map((joueur) => (
            <Player key={joueur.id} {...joueur} />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default PlayersList;

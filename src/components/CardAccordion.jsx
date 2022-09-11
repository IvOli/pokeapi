import React from 'react'
import { Accordion, ListGroup } from 'react-bootstrap'

export const CardAccordion = ({pokemon}) => {
  return (
    <Accordion >
      <Accordion.Item eventKey="0">
        <Accordion.Header>Abilities</Accordion.Header>
        <Accordion.Body>
          <ListGroup variant="flush">
            {pokemon.abilities.map(ability=>
              <ListGroup.Item key={ability.ability.name}>{ability.ability.name.toUpperCase()}</ListGroup.Item>
            )}
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
      <Accordion.Header>Moves</Accordion.Header>
        <Accordion.Body>
          <ListGroup variant="flush">
            {pokemon.moves.map(move=>
                <ListGroup.Item key={move.move.name}>{move.move.name.toUpperCase()}</ListGroup.Item>
            )}
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

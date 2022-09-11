import React from 'react'
import { Badge, Card, Figure } from 'react-bootstrap'
import { CardAccordion } from './CardAccordion'

export const PokemonCard = ({pokemon}) => {
  return (
    <>
    {pokemon?.sprites.front_default && 
        <Card className="text-center">
            <Figure>
                <Figure.Image
                width={600}
                alt={pokemon.name}
                src={pokemon.sprites.front_default}
                />
            </Figure>
            <Card.Body>
                <Card.Title>{pokemon.name.toUpperCase()}</Card.Title>
                {pokemon.types.map(type=>
                    <Badge key={type.type.name} bg="primary" className='m-2'>{type.type.name.toUpperCase()}</Badge>
                )}
                <CardAccordion pokemon={pokemon} />
            </Card.Body>
        </Card>}
    </>
  )
}

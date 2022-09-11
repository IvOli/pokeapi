import React from 'react';
import {  Button, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export const Paginator = ({pokemonListData, setPokemonListUrl, setPokemonUrl}) => {
  return (
    <>
      {pokemonListData &&
        <Row>
          <Button className="mb-4" variant="dark" onClick={pokemonListData.previous ? () => setPokemonListUrl(pokemonListData.previous): null }>Previous</Button>
          { pokemonListData.results.map( poke => 
          <Button variant="light" key={poke.name} onClick={() => setPokemonUrl(poke.url) }>{poke.name.toUpperCase()}</Button>)
          }
          <Button  className="mt-4" variant="dark" onClick={pokemonListData.next ? () => setPokemonListUrl(pokemonListData.next): null }>Next</Button>
        </Row>
      }
    </>
  )
}

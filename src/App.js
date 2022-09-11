import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useApi } from './hooks/useApi';
import { Paginator } from './components/Paginator';
import { SearchBar } from './components/SearchBar';
import { PokemonCard } from './components/PokemonCard';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [pokemonListUrl, setPokemonListUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0#');
  const pokemonListData = useApi(pokemonListUrl)
  const [pokemonUrl, setPokemonUrl] = useState('https://pokeapi.co/api/v2/pokemon/1/');
  const pokemon = useApi(pokemonUrl)


  const handleSubmit = (e) =>{
    e.preventDefault()
    let pokemon = e.target[0].value.toLowerCase()
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`
    setPokemonUrl(url)
    
  }
  return (
    <Container className="mt-5">
      <Row >
        <Col xs={4} md={2} className="mt-5">
          <Paginator pokemonListData={pokemonListData.data} setPokemonListUrl={setPokemonListUrl} setPokemonUrl={setPokemonUrl} />
        </Col>
        <Col xs={8} md={10} >
          <SearchBar handleSubmit={handleSubmit}/>
          <PokemonCard pokemon={pokemon.data}/>
        </Col>
      </Row>
    </Container>
  );
}

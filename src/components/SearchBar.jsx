import React from 'react'
import { Form } from 'react-bootstrap'

export const SearchBar = ({handleSubmit}) => {
  return (
     <Form onSubmit={(e) => handleSubmit(e)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <h3 className="text-center">Pokémon Search</h3>
        <Form.Control type="text" placeholder="Pokémon Search by number or name" />
      </Form.Group>
    </Form>
  )
}

import * as React from 'react'
import { InputGroup, Button, FormControl } from 'react-bootstrap'

const SearchBar = () => {
    
    return (
        <InputGroup>
            <FormControl
                type="text"
                placeholder="Busque os Pokemon aqui"
                aria-label="Busque os Pokemon aqui"
                id="inputTextPokemon"
                />
            <InputGroup.Append>
                <Button>Click me</Button>
            </InputGroup.Append>
        </InputGroup>
    )
}

export default SearchBar
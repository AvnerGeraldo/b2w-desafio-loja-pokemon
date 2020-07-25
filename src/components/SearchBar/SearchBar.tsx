import * as React from 'react'
import { InputGroup, Button, FormControl } from 'react-bootstrap'

const SearchBar = () => {
    const initialState = {
        textPokemon: ''
    }
	
	const [state, setState] = React.useState(initialState)
    return (
        <InputGroup>
            <FormControl
                type="text"
                placeholder="Busque os Pokemon aqui"
                aria-label="Busque os Pokemon aqui"
                id="inputTextPokemon"
                onChange={(e) => {
                    e.preventDefault
                    setState({
                        textPokemon: e.target.value
                    })
                }}
                value={state.textPokemon} />
            <InputGroup.Append>
                <Button>Click me</Button>
            </InputGroup.Append>
        </InputGroup>
    )
}

export default SearchBar
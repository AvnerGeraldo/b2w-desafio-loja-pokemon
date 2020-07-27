import * as React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'

import PokemonItem from '../../components/PokemonItem/PokemonItem'
import { connect } from 'react-redux'
import { StoreState } from '../../store/types/storeState'
import * as types from '../../store/types/pokemonDataTypes'

const loadingImage = require('../../assets/images/loading-image.gif')

const ColPokemonItem = styled.div`
    border: 2px solid #ADD8E6;
    padding: 5px 0px;
    box-shadow: 3px 3px 4px #ADD8E6;
    cursor: pointer;
    margin: 2px 5px;

    &:hover {
        background-color: #ADD8E6;
        opacity: 0.8;
    }
`

export type PokemonListProps = {
    loadingData?: boolean
    pokemonData?: Array<types.PokemonData>
    page?: number
}

const PokemonList = (props: PokemonListProps) => {
    const { loadingData, pokemonData } = props
    
    return (
        <Container fluid className="h-100" style={{ marginTop: '0.5em' }}>
            { loadingData && (
                <Row className="align-items-center">
                    <Col className="text-center" id="loading-data-image">
                        <img src={loadingImage.default} height="15%" width="15%" />
                    </Col>
                </Row>
            )}

            {(pokemonData && pokemonData.length === 0 && !loadingData) && (
                <Row className="align-items-center">
                    <Col className="text-center" id="error-message-empty-content">
                        <h3>Não há dados para serem exibidos.</h3><br /> 
                        <p><i style={{
                        fontSize: '4em'
                    }}>:(</i></p></Col>
                </Row>
            )}

            <Container className="pokemon-list" fluid>
                <Row className="justify-content-center">
                    {(pokemonData && pokemonData.length > 0) && pokemonData.map((v: types.PokemonData) => (
                        <ColPokemonItem key={v.id} className="col-lg-2 col-md-4 col-sm-3 col-12">
                            <PokemonItem id={v.id} name={v.name} price={v.price} image={v.image} />
                        </ColPokemonItem>
                    ))}
                </Row>
            </Container>
        </Container>
    )
}


const mapStateToProps = ({ pokemonDataStore: { loadingData, data } }: StoreState) => {
    return {
        loadingData,
        pokemonData: data
    }
}

export default connect(mapStateToProps)(PokemonList)
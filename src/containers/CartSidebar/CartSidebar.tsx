import * as React from 'react'
import { Col, Row, Button, Container } from 'react-bootstrap'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { StoreState } from '../../store/types/storeState'
import { PokemonData } from '../../store/types/pokemonDataTypes'

interface ICartSidebar {
    isOpen: boolean
    cartList?: Array<PokemonData>
}

type CartSidebarType = {
    isOpen: boolean
    cartList?: Array<PokemonData>
}

class CartSidebar extends React.Component<CartSidebarType, any> {
    constructor(props: ICartSidebar) {
        super(props)
    }

    render() {
        const { isOpen = false, cartList } = this.props
        let total = 0

        const SideBarContainer = styled.div`
            min-height: 60vh;
            margin-right: ${isOpen ? '0px' : '-250px'};
            position: absolute;
            right: 0;
            z-index: 1;
            background: #7386D5;
            color: #fff;
            overflow-x: hidden;
            transition: 0.5s;
            padding: 5px;
            min-width: 30vh;
        `

        return (
            <SideBarContainer className="col-lg-3 col-md-5 col-sm-5 col-xs-12 col-12">
                <Row>
                    <Col className="text-center sb-2 mb-2 lb-2" style={{
                        padding: '5px 15px'
                    }}><h3>Carrinho</h3></Col>
                </Row>
                <Container fluid style={{
                    minHeight: '30vh',
                    padding: '0px 2px'
                }}>
                    {(cartList && cartList.length > 0) && (
                        cartList.map((item: PokemonData) => {
                            total += item.price
                            return (
                                <Row key={item.id} style={{
                                    borderBottom: "1px solid",
                                    paddingLeft: 9
                                }}>
                                    <Col lg={2} md={3} sm={3} xs={3} style={{ padding: 0 }}><img src={item.image} width="100%" height="100%" /></Col>
                                    <Col className="align-self-center text-center">{item.name}</Col>
                                    <Col lg={4} md={3} sm={3} xs={3} className="align-self-center text-right">R$ <span>{item.price.toLocaleString('pt-br')}</span></Col>
                                </Row>
                            )
                        })
                    )}
                </Container>
                <Row style={{ padding: '2px' }}>
                    <Col lg={8} md={7} sm={7} xs={8}><h4>Total</h4></Col>
                    <Col lg={4} md={5} sm={5} xs={4} className="text-right" style={{
                        padding: '2px 15px'
                    }}>R$ <span>{total.toLocaleString('pt-br')}</span></Col>
                </Row>
                <Row style={{ marginTop: '40px', marginBottom: "15px"}}>
                    <Col>
                        <Button className="btn btn-primary btn-lg btn-block">Finalizar</Button>
                    </Col>
                </Row>
            </SideBarContainer>
        )
    }
}

const mapStateToProps = ({ cartStore: { isOpen, cartList } }: StoreState) => ({
    isOpen,
    cartList
})

export default connect(mapStateToProps)(CartSidebar)
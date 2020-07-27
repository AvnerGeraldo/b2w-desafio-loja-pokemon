import * as React from 'react'
import { Col, Row, Button, Container } from 'react-bootstrap'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import { connect } from 'react-redux'
import { StoreState } from '../../store/types/storeState'
import { PokemonData } from '../../store/types/pokemonDataTypes'
import * as actions from '../../store/actions'

import styled from 'styled-components'
import { Dispatch } from 'redux'
import CartModal from '../../components/CartModal/CartModal'

interface ICartSidebar {
    isOpen: boolean
    cartList?: Array<PokemonData>
}

type CartSidebarType = {
    isOpen: boolean
    cartList?: Array<PokemonData>
    removeItem?: (id: number) => void
    checkoutCart?: () => void
    opeClose?: (status: boolean) => void
}

class CartSidebar extends React.Component<CartSidebarType, any> {
    constructor(props: ICartSidebar) {
        super(props)

        this.state = {
            showModal: false
        }
    }

    setModalShow = (status: boolean) => {
        this.setState({
            showModal: status
        })
    }

    checkoutModal = () => {
        this.setModalShow(false)
        this.props.opeClose(true)
        this.props.checkoutCart()
    }

    render() {
        const { isOpen = false, cartList, removeItem } = this.props
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
                                    padding: '0px 10px'
                                }}>
                                    <Col lg={2} md={3} sm={3} xs={3} style={{ padding: 0 }}><img src={item.image} width="100%" height="100%" /></Col>
                                    <Col className="align-self-center text-center">{item.name}</Col>
                                    <Col lg={4} md={3} sm={3} xs={3} className="align-self-center text-right">R$ <span>{item.price.toLocaleString('pt-br')}</span></Col>
                                    <Col lg={1} md={1} sm={1} xs={2} className="align-self-center">
                                        <Icon icon={faTimes} 
                                            onClick={() => removeItem(item.id)}
                                            style={{ cursor: 'pointer' }}/></Col>
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
                        <Button 
                            className="btn btn-primary btn-lg btn-block"
                            onClick={() => this.setModalShow(true)}
                            disabled={!(cartList && cartList.length > 0)}
                            >Finalizar</Button>
                    </Col>
                </Row>
                <Row>
                    <CartModal 
                        total={total}
                        show={this.state.showModal} 
                        onHide={ () => this.checkoutModal() }
                        />
                </Row>
            </SideBarContainer>
        )
    }
}

const mapStateToProps = ({ cartStore: { isOpen, cartList } }: StoreState) => ({
    isOpen,
    cartList
})

const mapDispatchToProps = (dispatch: Dispatch<actions.RemoveItemCart | actions.CheckoutCart | actions.OpenCloseCart>) => ({
    removeItem: (id: number) => dispatch(actions.removeItemCart(id)),
    checkoutCart: () => dispatch(actions.checkoutCart()),
    opeClose: (status: boolean) => dispatch(actions.openCloseCart(status))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartSidebar)
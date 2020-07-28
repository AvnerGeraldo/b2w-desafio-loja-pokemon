import * as React from 'react'
import { Modal, Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import '../../assets/css/cart/modal.css'

interface ICartModal {
    total: number
    show: boolean
    onHide: (status: boolean) => void
}

const CartModal = (props: ICartModal) => {
    const porcentagemGanho = 0.10
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container className="text-center" style={{
                    margin: '20px 0'
                }}>
                    <Row>
                        <Col>
                            <h3>Compra concluída!!!</h3>
                        </Col>
                    </Row>
                    <Row style={{
                        margin: '30px 10px'
                    }}>
                        <Col>
                            <h4>Você ganhou de volta</h4><br />
                            <h5>{(props.total * porcentagemGanho).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col><Icon icon={faHeart} className="heart-ame"/></Col>
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>
    )
}

export default CartModal
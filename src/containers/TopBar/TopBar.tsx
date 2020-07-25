import * as React from 'react'
import { Row, Col } from 'react-bootstrap'

import Logo from '../../components/Logo/Logo'
const TopBar = () => {
    return(
        <Row>
            <Col md="2" xs={{ span: 4, order: 1 }}><Logo /></Col>
        </Row>
    )
}

export default TopBar
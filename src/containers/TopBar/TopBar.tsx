import * as React from 'react'
import { Row, Col } from 'react-bootstrap'

import Logo from '../../components/Logo/Logo'
import SearchBar from '../../components/SearchBar/SearchBar'
const TopBar = () => {
    return(
        <Row>
            <Col md="2" xs={{ span: 4, order: 1 }}><Logo /></Col>
            <Col md={{ span: 7, offset: 1, order: 2}} sm={{ span: 7, offset: 1, order: 2 }} xs={{ span: 12, order: 3 }}><SearchBar /></Col>            
        </Row>
    )
}

export default TopBar
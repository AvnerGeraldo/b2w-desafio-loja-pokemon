import * as React from 'react'
import { Row, Col } from 'react-bootstrap'

import Logo from '../../components/Logo/Logo'
import SearchBar from '../../components/SearchBar/SearchBar'
import CartButton from '../../components/CartButton/CartButton'

const topBarStyle = {
    paddingTop: '1.2em',
    paddingBottom: '1.2em',
    backgroundColor: '#4682B4'
}

interface ITopBar {
    loadLocalStorage?: (offset: number, limit: number) => void
    setPage?: (newPage: number) => void
}

const TopBar = (props: ITopBar) => {
    return(
        <Row style={topBarStyle}>
            <Col md="2" xs={{ span: 4, order: 1 }}><Logo /></Col>
            <Col md={{ span: 7, offset: 1, order: 2}} sm={{ span: 7, offset: 1, order: 2 }} xs={{ span: 12, order: 3 }}><SearchBar loadLocalStorage={props.loadLocalStorage} setPage={props.setPage}/></Col>
            <Col md={{ span: 2, order: 3 }} xs={{ span: 4, order: 2 }}><CartButton /></Col>
        </Row>
    )
}

export default TopBar
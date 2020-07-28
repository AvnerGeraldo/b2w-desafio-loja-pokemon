import * as React from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import { withRouter } from "react-router-dom";
import styled from 'styled-components'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import Logo from '../../components/Logo/Logo'
import SearchBar from '../../components/SearchBar/SearchBar'
import CartButton from '../../components/CartButton/CartButton'

const RowStyled = styled.div`
    padding-top: 1.2em;
    padding-bottom: 1.2em;
`

const TopBar = (props: any) => {

    return(
        <RowStyled className="row" id="topBar">
            <Col md="2" xs={{ span: 6, order: 1 }}><Logo /></Col>
            <Col md={{ span: 7, offset: 1, order: 2}} sm={{ span: 12, order: 3 }} xs={{ span: 12, order: 3 }} id="searchBar">
                <Row>
                    <Col lg={1} md={1} sm={1} xs={2} className="align-self-center">
                        <Button>
                            <Icon icon={faBars} title="Trocar temas" onClick={() => {
                                const urlTheme = window.location.pathname.split('/')[1]

                                if (urlTheme === 'fire-theme') {
                                    props.history.push("aqua-theme");
                                    return
                                }

                                props.history.push("fire-theme");
                                return
                            }}/>
                        </Button>
                    </Col>
                    <Col>
                        <SearchBar loadLocalStorage={props.loadLocalStorage} setPage={props.setPage}/>
                    </Col>
                </Row>
            </Col>
            <Col md={{ span: 2, order: 3 }} sm={{ span: 6, order: 2 }} xs={{ span: 6, order: 2 }}><CartButton /></Col>
        </RowStyled>
    )
}

export default withRouter(TopBar)
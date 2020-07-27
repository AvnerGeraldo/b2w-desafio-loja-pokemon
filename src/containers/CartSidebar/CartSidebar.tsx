import * as React from 'react'
import { Col } from 'react-bootstrap'
import styled from 'styled-components'


class CartSidebar extends React.Component<any, any> {
    render() {
        const isOpen = true

        const SideBarContainer = styled.div`
            min-height: 100vh;
            margin-right: ${isOpen ? '0px' : '-250px'};
            position: absolute;
            right: 0;
            z-index: 1;
            background: #7386D5;
            color: #fff;
            overflow-x: hidden;
            transition: 0.5s;
        `

        return (
            <SideBarContainer className="col-lg-5 col-md-5 col-sm-5 col-xs-12 col-12">
                <Col>
                    Cart Sidebar
                </Col>
            </SideBarContainer>
        )
    }
}

export default CartSidebar
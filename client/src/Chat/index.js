import React, { Fragment } from 'react';
import { Col, Row } from 'reactstrap';
import ChatNavbar from './Navbar/index';

export default function Chat() {
    return (
        <Fragment>
            <Row>
                <Col>
                    <div className="navbar">
                        <ChatNavbar />
                    </div>
                </Col>
                <Col>
                    <div className="chat">
                        <div className='chat-header'>
                            <div className='nav-header-chat'></div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Fragment>
    )
}
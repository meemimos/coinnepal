import React, { useContext, useEffect, useState } from 'react';
import { AccountContext } from './Accounts';
import ChangePassword from './ChangePassword';
import { ArrowRight, GearFill } from 'react-bootstrap-icons';
import ChangeEmail from './ChangeEmail';
import { Col, Container, Row } from 'react-bootstrap';


const Settings = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const { getSession } = useContext(AccountContext);


    useEffect(() => {
        console.log(AccountContext);
        console.log(getSession());
        getSession()
        .then(() => {
            setLoggedIn(true);
        })
    }, [])
    return (
        <div>
            {loggedIn && (
                <>
                <h3><GearFill /> Settings</h3>
                <Container>
                    <Row>
                        <Col>
                            <h4>Change Password</h4>
                            <ChangePassword />
                        </Col>
                        <Col>
                            <h4>Change Email</h4>
                            <ChangeEmail />
                        </Col>
                    </Row>
                </Container>
                </>
            )}
        </div>
    );
}

export default Settings;
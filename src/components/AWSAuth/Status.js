import React, {useContext, useState, useEffect} from 'react';
import { NavDropdown } from 'react-bootstrap';
import {AccountContext} from './Accounts';

const Status = () => {
    const [status, setStatus] = useState(false);

    const {getSession, logout} = useContext(AccountContext);

    useEffect(() => {
        console.log(AccountContext);
        getSession()
            .then(session => {
                console.log('Session: ', session);
                setStatus(true);
            })
    }, []);

    return(
        <div>
            {status ? (
                <>
                <NavDropdown.Item href="#login" 
                    onClick={logout}>
                    Logout
                </NavDropdown.Item>
                </>
            ) : (
                <>
                <NavDropdown.Item href="/login" 
                    onClick={logout}>
                    Login
                </NavDropdown.Item>
                </>
            )}
        </div>
    );
}

export default Status;
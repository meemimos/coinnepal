import React, { useState, useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { AccountContext } from './Accounts';

const ChangeEmail = () => {
    const [currentEmail, setCurrentEmail] = useState('')
    const [newEmail, setNewEmail] = useState('')

    const { getSession, authenticate } = useContext(AccountContext);

    const onSubmit = event => {
        event.preventDefault();
        getSession().then(({user, email}) => {
            authenticate(email, currentEmail).then(() => {
                // user.changeEmail(currentEmail, newEmail, (err, result) => {
                //     if(err) console.log(err);
                //     console.log(result);
                // })
            })
        })
    }
    return (
        <div>
            <Form onSubmit={onSubmit}>
                <Form.Group controlId="newEmail">
                    {/* <Form.Label>Current Email</Form.Label> */}
                    <Form.Control type="email" 
                        placeholder="New email" 
                        value={currentEmail} 
                        onChange={event => setNewEmail(event.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="newEmail">
                    {/* <Form.Label>New Email</Form.Label> */}
                    <Form.Control type="email" 
                        placeholder="New email" 
                        value={newEmail}
                        onChange={event => setNewEmail(event.target.value)}
                        />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Change Email
                </Button>
            </Form>
        </div>
    )
}

export default ChangeEmail;
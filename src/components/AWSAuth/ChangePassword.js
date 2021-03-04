import React, { useState, useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { AccountContext } from './Accounts';

const ChangePassword = () => {
    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')

    const { getSession, authenticate } = useContext(AccountContext);

    const onSubmit = event => {
        event.preventDefault();
        getSession().then(({user, email}) => {
            authenticate(email, currentPassword).then(() => {
                user.changePassword(currentPassword, newPassword, (err, result) => {
                    if(err) console.log(err);
                    console.log(result);
                })
            })
        })
    }
    return (
        <div>
            <Form onSubmit={onSubmit}>
                <Form.Group controlId="currentPassword">
                    {/* <Form.Label>Current password</Form.Label> */}
                    <Form.Control type="password" 
                        placeholder="Current password" 
                        value={currentPassword} 
                        onChange={event => setCurrentPassword(event.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="newPassword">
                    {/* <Form.Label>New password</Form.Label> */}
                    <Form.Control type="password" 
                        placeholder="New password" 
                        value={newPassword}
                        onChange={event => setNewPassword(event.target.value)}
                        />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Change Password
                </Button>
            </Form>
        </div>
    )
}

export default ChangePassword;
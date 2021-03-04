import { useState, useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { PersonCircle } from 'react-bootstrap-icons';
import {AccountContext} from './Accounts';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { authenticate } = useContext(AccountContext);

    const onSubmit = event => {
        event.preventDefault();

        authenticate(email, password)
            .then(data => {
                console.log(data);
                console.log("logged in!", data);
            })
            .catch(err => {
                console.error('Failed to login!', err);
            })
    }

    return (
        <div>
            <h3><PersonCircle /> Login</h3>
            <Form>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" 
                        placeholder="Enter email" 
                        value={email} 
                        onChange={event => setEmail(event.target.value)}
                        />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        />
                </Form.Group>
                <Button variant="primary" onClick={onSubmit}>
                    Login
                </Button>
            </Form>
        </div>
    )

}
export default Login;
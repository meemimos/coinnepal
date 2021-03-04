import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import UserPool from '../../services/UserPool';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const onSubmit = event => {
          event.preventDefault();

          UserPool.signUp(
                email,
                password,
                [], null, (err, data) => {
                if(err) console.error(err);
                console.log(data);
          })

    }


    return (
        <div>
            <h3>
            Signup
        </h3>
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
                Signup
            </Button>
            </Form>
        </div>
    )

}
export default SignUp;
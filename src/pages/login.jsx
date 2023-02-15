import React from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export default function Login() {
    
    const username='faramarz';
    const password='WanDet_1998';

    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const onSubmit =({username1,password1}) => {
        if(username===username1 && password===password1){
            navigate('/posts/new');
        }else {
            alert('wrong UserName Or Password');
        }
    }
    return (
    <>
         <Container className="my-5" style={{ maxWidth: '800px' }}>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit(onSubmit)} className="my-5">
        <Form.Group className="mb-3">
          <Form.Label>UserName</Form.Label>
          <Form.Control type="text" placeholder="Enter UserName" {...register('username1')} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter Password" {...register('password1')} />
        </Form.Group>
        
        <Button variant="primary" type="submit">Login</Button>
      </Form>
      <Link to="/" style={{ textDecoration: 'none' }}>&#8592; Back to Home</Link>
    </Container>
    </>
  )
}

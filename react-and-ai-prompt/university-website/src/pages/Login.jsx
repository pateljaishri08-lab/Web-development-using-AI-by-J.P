import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Card, Row, Col, Container, Alert } from 'react-bootstrap';
import { useUser } from '../components/UserContext';
import { userService } from '../services/userService';

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const userData = await userService.login(email, password);

      setUser({
        name: userData.name,
        role: userData.userType, // student or teacher
        id: userData.id.toString(),
      });

      localStorage.setItem('isAuthenticated', 'true');
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
      <Row className="w-100 justify-content-center">
        <Col md={8} lg={5}>
          <Card className="border-0 shadow-sm rounded-4 p-4 p-md-5">
            <Card.Body className="text-start">
              <div className="text-start mb-4">
                <h2 className="fw-bold text-primary mb-2">Welcome Back</h2>
                <p className="text-muted small">Access your Tech University portal</p>
              </div>

              {error && <Alert variant="danger" className="border-0 rounded-3 mb-4">{error}</Alert>}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="loginEmail">
                  <Form.Label className="small fw-bold" style={{ textAlign: 'left', display: 'block' }}>Email Address</Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="Enter your university email" 
                    required 
                    className="py-2 border-primary-subtle"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="loginPassword">
                  <Form.Label className="small fw-bold" style={{ textAlign: 'left', display: 'block' }}>Password</Form.Label>
                  <Form.Control 
                    type="password" 
                    placeholder="Enter your password" 
                    required 
                    className="py-2 border-primary-subtle"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <Form.Check 
                    type="checkbox" 
                    id="rememberMe" 
                    label="Remember me" 
                    className="small text-muted text-start"
                    style={{ textAlign: 'left' }}
                  />
                  <Link to="/contact" className="small text-primary text-decoration-none fw-bold">
                    Forgot Password?
                  </Link>
                </div>

                <Button 
                  variant="primary" 
                  type="submit" 
                  className="w-100 py-2 fw-bold rounded-pill shadow-sm mb-4"
                  disabled={loading}
                >
                  {loading ? 'Signing In...' : 'Sign In'}
                </Button>
              </Form>

              <div className="text-start mt-4 pt-3 border-top" style={{ textAlign: 'left' }}>
                <p className="text-muted small mb-0">
                  Don't have an account?{' '}
                  <Link to="/register" className="text-primary fw-bold text-decoration-none">
                    Create an Account
                  </Link>
                </p>
              </div>
            </Card.Body>
          </Card>
          
          <p className="text-start text-muted x-small mt-4" style={{ fontSize: '0.75rem', textAlign: 'left' }}>
            &copy; {new Date().getFullYear()} Tech University. Secure Student & Faculty Portal.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;

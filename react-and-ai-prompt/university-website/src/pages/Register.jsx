import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Card, Row, Col, Container, Alert, ButtonGroup, ToggleButton } from 'react-bootstrap';
import { useUser } from '../components/UserContext';
import { userService } from '../services/userService';

const Register = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();
  const [submitted, setSubmitted] = useState(false);
  const [role, setRole] = useState('student');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    const fieldMap = {
      'regName': 'name',
      'regEmail': 'email',
      'regPassword': 'password',
      'regConfirmPassword': 'confirmPassword'
    };
    setFormData(prev => ({
      ...prev,
      [fieldMap[id]]: value
    }));
  };
  
  const courses = [
    'Software Engineering',
    'Data Science & Analytics',
    'Cyber Security & Defense',
    'Artificial Intelligence',
    'Global Business Management',
    'Sustainable Energy Engineering',
    'Digital Product Design',
    'Aerospace Systems'
  ];

  const terms = ['Fall 2025', 'Spring 2026', 'Summer 2026', 'Fall 2026'];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);

    try {
      const userData = await userService.register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        userType: role,
      });

      // Update context and storage
      setUser({
        name: userData.name,
        role: userData.userType,
        id: userData.id.toString(),
      });
      localStorage.setItem('isAuthenticated', 'true');

      // Success
      setSubmitted(true);
      window.scrollTo(0, 0);
      
      // Redirect after a short delay or immediately
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
        <Row className="w-100 justify-content-center">
          <Col md={8} lg={6}>
            <Card className="border-0 shadow-sm rounded-4 p-5 text-start">
              <div className="mb-4">
                <div className="bg-primary bg-opacity-10 text-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"/>
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
                  </svg>
                </div>
                <h2 className="fw-bold text-primary mb-2">Registration Submitted!</h2>
                <p className="text-muted lead">Your application as a {role} to Tech University has been received.</p>
              </div>
              
              <Alert variant="info" className="border-0 rounded-3 mb-4 text-start small">
                <h6 className="fw-bold">Next Steps:</h6>
                <ol className="mb-0 ps-3">
                  <li>Check your email for a confirmation link.</li>
                  {role === 'student' ? (
                    <li>Submit your official transcripts via the student portal.</li>
                  ) : (
                    <li>Complete your faculty profile verification.</li>
                  )}
                  <li>Our admissions team will review your application within 5-7 business days.</li>
                </ol>
              </Alert>

              <div className="d-grid gap-3">
                <Button as={Link} to="/login" variant="primary" className="py-2 fw-bold rounded-pill shadow-sm">
                  Go to Login Portal
                </Button>
                <Button as={Link} to="/" variant="outline-secondary" className="py-2 fw-bold rounded-pill">
                  Return Home
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={10} lg={7}>
          <Card className="border-0 shadow-sm rounded-4 p-4 p-md-5">
            <Card.Body className="text-start">
              <div className="text-start mb-5">
                <h2 className="fw-bold text-primary mb-2">Start Your Journey</h2>
                <p className="text-muted lead">Join the next generation of innovators at Tech University</p>
              </div>

              {error && <Alert variant="danger" className="border-0 rounded-3 mb-4">{error}</Alert>}

              {/* Role Selection */}
              <div className="mb-5">
                <Form.Label className="small fw-bold d-block mb-3">I am registering as a:</Form.Label>
                <ButtonGroup className="w-100 shadow-sm rounded-pill overflow-hidden border border-primary-subtle p-1 bg-light">
                  <ToggleButton
                    id="role-student"
                    type="radio"
                    variant={role === 'student' ? 'primary' : 'light'}
                    name="role"
                    value="student"
                    checked={role === 'student'}
                    onChange={(e) => setRole(e.currentTarget.value)}
                    className="py-2 fw-bold rounded-pill border-0"
                  >
                    Student
                  </ToggleButton>
                  <ToggleButton
                    id="role-teacher"
                    type="radio"
                    variant={role === 'teacher' ? 'primary' : 'light'}
                    name="role"
                    value="teacher"
                    checked={role === 'teacher'}
                    onChange={(e) => setRole(e.currentTarget.value)}
                    className="py-2 fw-bold rounded-pill border-0"
                  >
                    Teacher
                  </ToggleButton>
                </ButtonGroup>
              </div>

              <Form onSubmit={handleSubmit}>
                <Row className="g-4">
                  <Col md={12}>
                    <Form.Group controlId="regName">
                      <Form.Label className="small fw-bold" style={{ textAlign: 'left', display: 'block' }}>Full Name</Form.Label>
                      <Form.Control 
                        type="text" 
                        placeholder="Enter your full name" 
                        required 
                        className="py-2 border-primary-subtle"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={12}>
                    <Form.Group controlId="regEmail">
                      <Form.Label className="small fw-bold" style={{ textAlign: 'left', display: 'block' }}>Email Address</Form.Label>
                      <Form.Control 
                        type="email" 
                        placeholder="name@example.com" 
                        required 
                        className="py-2 border-primary-subtle"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group controlId="regPassword">
                      <Form.Label className="small fw-bold" style={{ textAlign: 'left', display: 'block' }}>Password</Form.Label>
                      <Form.Control 
                        type="password" 
                        placeholder="Create a password" 
                        required 
                        className="py-2 border-primary-subtle"
                        value={formData.password}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group controlId="regConfirmPassword">
                      <Form.Label className="small fw-bold" style={{ textAlign: 'left', display: 'block' }}>Confirm Password</Form.Label>
                      <Form.Control 
                        type="password" 
                        placeholder="Confirm your password" 
                        required 
                        className="py-2 border-primary-subtle"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>

                  {role === 'student' && (
                    <>
                      <Col md={6}>
                        <Form.Group controlId="regCourse">
                          <Form.Label className="small fw-bold" style={{ textAlign: 'left', display: 'block' }}>Select Program</Form.Label>
                          <Form.Select className="py-2 border-primary-subtle" style={{ textAlign: 'left' }} required>
                            <option value="">Choose a course...</option>
                            {courses.map(course => (
                              <option key={course} value={course}>{course}</option>
                            ))}
                          </Form.Select>
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group controlId="regTerm">
                          <Form.Label className="small fw-bold" style={{ textAlign: 'left', display: 'block' }}>Enrollment Term</Form.Label>
                          <Form.Select className="py-2 border-primary-subtle" style={{ textAlign: 'left' }} required>
                            <option value="">Select a term...</option>
                            {terms.map(term => (
                              <option key={term} value={term}>{term}</option>
                            ))}
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </>
                  )}

                  <Col md={12} className="mt-4">
                    <Form.Group controlId="regAgreement">
                      <Form.Check 
                        type="checkbox" 
                        required 
                        className="text-start"
                        style={{ textAlign: 'left' }}
                        label={
                          <span className="small text-muted">
                            I agree to the <Link to="/contact" className="text-primary text-decoration-none fw-bold">Terms of Service</Link> and <Link to="/contact" className="text-primary text-decoration-none fw-bold">Privacy Policy</Link>.
                          </span>
                        }
                      />
                    </Form.Group>
                  </Col>

                  <Col md={12} className="mt-5">
                    <Button 
                      variant="primary" 
                      type="submit" 
                      className="w-100 py-3 fw-bold rounded-pill shadow-sm"
                      disabled={loading}
                    >
                      {loading ? 'Processing...' : 'Complete Registration'}
                    </Button>
                    <div className="text-start mt-4" style={{ textAlign: 'left' }}>
                      <p className="text-muted small mb-0">
                        Already have an account?{' '}
                        <Link to="/login" className="text-primary fw-bold text-decoration-none">
                          Sign In Here
                        </Link>
                      </p>
                    </div>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;

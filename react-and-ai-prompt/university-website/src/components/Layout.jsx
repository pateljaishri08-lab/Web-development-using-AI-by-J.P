import { Outlet, Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const Layout = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/');
  };

  return (
    <div id="root">
      <header>
        <Navbar bg="white" expand="lg" className="shadow-sm py-3" sticky="top">
          <Container>
            <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
              <span className="ms-2">Tech University</span>
            </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto align-items-center">
                {!isAuthenticated && (
                  <>
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    <Nav.Link as={Link} to="/courses">Courses</Nav.Link>
                    <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                  </>
                )}
                <div className="ms-lg-3 d-flex flex-column flex-lg-row gap-2 mt-3 mt-lg-0 w-100 w-lg-auto">
                  {isAuthenticated ? (
                    <>
                      <Nav.Link as={Link} to="/dashboard" className="me-2">Dashboard</Nav.Link>
                      <Button 
                        variant="outline-danger" 
                        className="px-4"
                        onClick={handleLogout}
                      >
                        Logout
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button 
                        variant="outline-primary" 
                        className="px-4"
                        onClick={() => navigate('/login')}
                      >
                        Login
                      </Button>
                      <Button 
                        variant="primary" 
                        className="px-4 border-0"
                        onClick={() => navigate('/register')}
                      >
                        Register
                      </Button>
                    </>
                  )}
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <main className="flex-grow-1">
        <Container className="py-5">
          <Outlet />
        </Container>
      </main>

      <footer className="border-top">
        <Container>
          <div className="row py-4">
            <div className="col-md-6 text-center text-md-start">
              <h5 className="mb-3" style={{ color: 'var(--primary-color)' }}>Tech University</h5>
              <p className="text-muted">Empowering the next generation of innovators.</p>
            </div>
            <div className="col-md-6 text-center text-md-end mt-4 mt-md-0">
              <p className="mb-0 text-muted">&copy; {new Date().getFullYear()} Tech University. All rights reserved.</p>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Layout;

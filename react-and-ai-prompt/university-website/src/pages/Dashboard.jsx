import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/');
  };

  return (
    <Container className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="fw-bold text-primary mb-0">Student Dashboard</h1>
        <Button variant="outline-danger" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
      <p className="lead text-muted">Welcome to your university portal. Your dashboard content will appear here.</p>
    </Container>
  );
};

export default Dashboard;

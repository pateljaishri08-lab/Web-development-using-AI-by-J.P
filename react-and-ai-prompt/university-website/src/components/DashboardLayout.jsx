import { Link, Outlet, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { Nav, Row, Col, Button, Container } from 'react-bootstrap';
import { useUser } from './UserContext';

const DashboardLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useUser();
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/');
  };

  const isTeacher = user.role?.toLowerCase() === 'teacher';

  const studentMenuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: 'bi-grid-fill' },
    { path: '/dashboard/courses', label: 'My Courses', icon: 'bi-book-half' },
    { path: '/dashboard/schedules', label: 'Schedules', icon: 'bi-calendar3' },
    { path: '/dashboard/online-classes', label: 'Online Classes', icon: 'bi-laptop' },
    { path: '/dashboard/assignments', label: 'Assignments', icon: 'bi-file-earmark-text' },
    { path: '/dashboard/grades', label: 'My Grades', icon: 'bi-mortarboard' },
  ];

  const teacherMenuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: 'bi-grid-fill' },
    { path: '/dashboard/manage-students', label: 'Manage Students', icon: 'bi-people-fill' },
    { path: '/dashboard/manage-courses', label: 'Manage Courses', icon: 'bi-journal-bookmark-fill' },
    { path: '/dashboard/manage-assignments', label: 'Manage Assignments', icon: 'bi-clipboard-check-fill' },
    { path: '/dashboard/manage-grades', label: 'Manage Grades', icon: 'bi-award-fill' },
  ];

  const menuItems = isTeacher ? teacherMenuItems : studentMenuItems;

  return (
    <Container fluid className="p-0">
      <Row className="g-0">
        {/* Sidebar */}
        <Col md={3} lg={2} className="dashboard-sidebar d-none d-md-block py-4 sticky-top">
          <div className="px-4 mb-5 d-flex align-items-center">
            <span className="fw-bold text-primary h4 mb-0">
              {isTeacher ? 'Faculty Portal' : 'Student Portal'}
            </span>
          </div>
          
          <Nav className="flex-column mb-auto">
            {menuItems.map((item) => (
              <Nav.Link 
                key={item.path}
                as={Link} 
                to={item.path} 
                className={`sidebar-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                <i className={`bi ${item.icon}`}></i>
                {item.label}
              </Nav.Link>
            ))}
          </Nav>

          <div className="mt-5 px-4">
            <Button 
              variant="light" 
              className="w-100 text-danger border-0 py-2 d-flex align-items-center justify-content-center gap-2" 
              onClick={handleLogout}
              style={{ background: 'rgba(220, 53, 69, 0.05)' }}
            >
              <i className="bi bi-box-arrow-left"></i>
              Log Out
            </Button>
          </div>
        </Col>

        {/* Main Content Area */}
        <Col md={9} lg={10} className="dashboard-main p-0">
          {/* Dashboard Header */}
          <header className="bg-white py-3 px-4 border-bottom d-flex justify-content-between align-items-center sticky-top">
            <div className="d-md-none fw-bold text-primary">
              {isTeacher ? 'Faculty Portal' : 'Student Portal'}
            </div>
            <div className="ms-auto d-flex align-items-center gap-3">
              <div className="text-end d-none d-sm-block">
                <div className="small fw-bold">{user.name}</div>
                <div className="text-muted" style={{ fontSize: '0.75rem' }}>
                  {isTeacher ? `Faculty ID: ${user.id}` : `Student ID: ${user.id}`}
                </div>
              </div>
              <div className="bg-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                <i className="bi bi-person-fill text-muted"></i>
              </div>
            </div>
          </header>

          <div className="p-4 p-lg-5">
            <Outlet />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardLayout;

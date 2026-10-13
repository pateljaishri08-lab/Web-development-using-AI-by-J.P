import { Link, useLocation } from 'react-router-dom';
import { Nav, Button } from 'react-bootstrap';

const StudentSidebar = ({ handleLogout }) => {
  const location = useLocation();

  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: 'bi-grid-fill' },
    { path: '/dashboard/courses', label: 'My Courses', icon: 'bi-book-half' },
    { path: '/dashboard/schedules', label: 'Schedules', icon: 'bi-calendar3' },
    { path: '/dashboard/online-classes', label: 'Online Classes', icon: 'bi-laptop' },
    { path: '/dashboard/assignments', label: 'Assignments', icon: 'bi-file-earmark-text' },
    { path: '/dashboard/grades', label: 'My Grades', icon: 'bi-mortarboard' },
  ];

  return (
    <div className="dashboard-sidebar d-none d-md-block py-4 sticky-top">
      <div className="px-4 mb-5 d-flex align-items-center">
        <span className="fw-bold text-primary h4 mb-0">Student Portal</span>
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
    </div>
  );
};

export default StudentSidebar;

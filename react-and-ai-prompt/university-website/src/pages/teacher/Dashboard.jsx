import { Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { useUser } from '../../components/UserContext';

const TeacherDashboard = () => {
  const { user } = useUser();

  const stats = [
    { title: 'Total Students', value: '142', icon: 'bi-people-fill', color: 'primary', trend: '+12 this month' },
    { title: 'Active Courses', value: '4', icon: 'bi-journal-bookmark-fill', color: 'success', trend: '2 new modules' },
    { title: 'Pending Assignments', value: '28', icon: 'bi-clipboard-check-fill', color: 'warning', trend: 'Due by Friday' },
    { title: 'Avg. Class Grade', value: '84%', icon: 'bi-award-fill', color: 'info', trend: 'Above average' },
  ];

  const upcomingClasses = [
    { time: '09:00 AM', subject: 'Advanced Machine Learning', room: 'Lab 402', type: 'Lecture', students: 35 },
    { time: '11:30 AM', subject: 'Neural Networks 101', room: 'Studio B', type: 'Workshop', students: 28 },
    { time: '02:00 PM', subject: 'Office Hours', room: 'Online', type: 'Consultation', students: 5 },
  ];

  return (
    <div className="animate-fade-in pb-5">
      {/* Welcome Hero */}
      <div className="mb-5 p-5 bg-gradient-primary rounded-4 shadow text-white position-relative overflow-hidden">
        <div className="position-relative z-1">
          <Badge bg="white" className="text-primary mb-3 px-3 py-2 rounded-pill fw-bold">FACULTY PORTAL 2026</Badge>
          <h1 className="display-5 fw-bold mb-2">Welcome Back, Professor {user.name}! 👋</h1>
          <p className="lead opacity-90 mb-0">Manage your students, courses, and grades with ease.</p>
        </div>
        <div className="position-absolute end-0 top-0 opacity-10 d-none d-lg-block" style={{ transform: 'translate(10%, -10%)' }}>
          <i className="bi bi-mortarboard" style={{ fontSize: '15rem' }}></i>
        </div>
      </div>

      {/* Stats Grid */}
      <Row className="g-4 mb-5">
        {stats.map((stat, index) => (
          <Col key={index} sm={6} lg={3}>
            <Card className="dashboard-card h-100 card-hover-effect border-0">
              <Card.Body className="p-4 d-flex flex-column justify-content-between">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div className={`icon-circle bg-${stat.color} bg-opacity-10 text-${stat.color}`}>
                    <i className={`bi ${stat.icon} fs-5`}></i>
                  </div>
                  <Badge bg={stat.color} className="bg-opacity-10 text-dark fw-normal small px-2 py-1 rounded-pill">{stat.trend}</Badge>
                </div>
                <div>
                  <h3 className="fw-bold mb-0">{stat.value}</h3>
                  <p className="text-muted small fw-bold mb-0 text-uppercase tracking-wider mt-1">{stat.title}</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="g-4">
        <Col lg={8}>
          <Card className="dashboard-card p-4 border-0 mb-4 shadow-sm">
            <h5 className="fw-bold mb-4">Today's Teaching Schedule</h5>
            <div className="schedule-list">
              {upcomingClasses.map((cls, idx) => (
                <div key={idx} className="d-flex align-items-center p-3 rounded-4 mb-3 bg-light">
                  <div className="text-center pe-4 border-end" style={{ minWidth: '90px' }}>
                    <div className="fw-bold text-primary">{cls.time}</div>
                    <div className="small text-muted" style={{ fontSize: '0.7rem' }}>{cls.type}</div>
                  </div>
                  <div className="ps-4 flex-grow-1">
                    <h6 className="fw-bold mb-1">{cls.subject}</h6>
                    <div className="small text-muted d-flex align-items-center gap-1">
                      <i className="bi bi-geo-alt text-primary"></i> {cls.room}
                      <span className="ms-3"><i className="bi bi-people me-1"></i> {cls.students} students</span>
                    </div>
                  </div>
                  <Button variant="primary" size="sm" className="rounded-pill px-3 fw-bold">Manage</Button>
                </div>
              ))}
            </div>
          </Card>
        </Col>
        
        <Col lg={4}>
          <Card className="dashboard-card p-4 border-0 shadow-sm">
            <h5 className="fw-bold mb-4">Recent Submissions</h5>
            <div className="notification-list">
              {[
                { name: 'Sarah Miller', task: 'ML Lab 3', time: '15m ago' },
                { name: 'John Doe', task: 'Final Project Draft', time: '1h ago' },
                { name: 'Emma Wilson', task: 'Quiz 2 Review', time: '3h ago' },
              ].map((item, idx) => (
                <div key={idx} className="d-flex align-items-center mb-3 pb-3 border-bottom last-child-no-border">
                  <div className="bg-primary bg-opacity-10 text-primary rounded-circle p-2 me-3">
                    <i className="bi bi-file-earmark-check"></i>
                  </div>
                  <div>
                    <div className="small fw-bold">{item.name}</div>
                    <div className="small text-muted">Submitted {item.task}</div>
                    <div className="small text-muted" style={{ fontSize: '0.7rem' }}>{item.time}</div>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline-primary" className="w-100 mt-2 rounded-pill fw-bold">View All</Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default TeacherDashboard;

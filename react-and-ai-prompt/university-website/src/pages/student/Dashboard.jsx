import { Row, Col, Card, Button, ProgressBar, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../components/UserContext';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  const stats = [
    { title: 'Enrolled Courses', value: '5', icon: 'bi-book-half', color: 'primary', trend: '+1 this sem' },
    { title: 'Pending Tasks', value: '12', icon: 'bi-file-earmark-text', color: 'warning', trend: '3 due soon' },
    { title: 'Current GPA', value: '3.85', icon: 'bi-mortarboard', color: 'success', trend: 'Top 5%' },
    { title: 'Attendance', value: '94%', icon: 'bi-person-check', color: 'info', trend: 'Excellent' },
  ];

  const courseProgress = [
    { title: 'Advanced Machine Learning', progress: 75, nextLesson: 'Neural Networks Deep Dive' },
    { title: 'UI/UX Design Principles', progress: 40, nextLesson: 'Prototyping in Figma' },
    { title: 'Network Security', progress: 90, nextLesson: 'Final Lab Prep' },
  ];

  const todayClasses = [
    { time: '10:00 AM', subject: 'Advanced Machine Learning', room: 'Lab 402', type: 'Lecture', active: true },
    { time: '01:00 PM', subject: 'UI/UX Design Principles', room: 'Studio B', type: 'Workshop', active: false },
    { time: '04:00 PM', subject: 'Ethical Hacking Workshop', room: 'Online', type: 'Seminar', active: false },
  ];

  const notifications = [
    { id: 1, text: 'New grade posted for Database Systems', time: '2h ago', icon: 'bi-star-fill', color: 'warning' },
    { id: 2, text: 'Library book "React Patterns" is due tomorrow', time: '5h ago', icon: 'bi-book', color: 'info' },
    { id: 3, text: 'Registration for Fall 2026 is now open', time: '1d ago', icon: 'bi-megaphone', color: 'primary' },
  ];

  return (
    <div className="animate-fade-in pb-5">
      {/* Welcome Hero */}
      <div className="mb-5 p-5 bg-gradient-primary rounded-4 shadow text-white position-relative overflow-hidden">
        <div className="position-relative z-1">
          <Badge bg="white" className="text-primary mb-3 px-3 py-2 rounded-pill fw-bold">ACADEMIC YEAR 2026</Badge>
          <h1 className="display-5 fw-bold mb-2">Hello, {user.name}! 👋</h1>
          <p className="lead opacity-90 mb-0">You're making great progress this semester. Keep it up!</p>
        </div>
        <div className="position-absolute end-0 top-0 opacity-10 d-none d-lg-block" style={{ transform: 'translate(10%, -10%)' }}>
          <i className="bi bi-mortarboard" style={{ fontSize: '15rem' }}></i>
        </div>
      </div>

      {/* Quick Stats Grid */}
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
        {/* Main Column */}
        <Col lg={8}>
          {/* Today's Schedule */}
          <Card className="dashboard-card p-4 border-0 mb-4 shadow-sm">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h5 className="fw-bold mb-0">Today's Classes</h5>
              <Button variant="link" className="text-primary p-0 text-decoration-none small fw-bold" onClick={() => navigate('/dashboard/schedules')}>
                Full Schedule →
              </Button>
            </div>
            <div className="schedule-list">
              {todayClasses.map((cls, idx) => (
                <div key={idx} className={`d-flex align-items-center p-3 rounded-4 mb-3 schedule-item ${cls.active ? 'active shadow-sm' : 'bg-light opacity-75'}`}>
                  <div className="text-center pe-4 border-end" style={{ minWidth: '90px' }}>
                    <div className={`fw-bold ${cls.active ? 'text-primary' : 'text-muted'}`}>{cls.time}</div>
                    <div className="small text-muted" style={{ fontSize: '0.7rem' }}>{cls.type}</div>
                  </div>
                  <div className="ps-4 flex-grow-1">
                    <h6 className="fw-bold mb-1">{cls.subject}</h6>
                    <div className="small text-muted d-flex align-items-center gap-1">
                      <i className="bi bi-geo-alt text-primary"></i> {cls.room}
                      {cls.active && <Badge bg="success" className="ms-2 pulse-badge">In Progress</Badge>}
                    </div>
                  </div>
                  <div>
                    <Button variant={cls.active ? 'primary' : 'outline-secondary'} size="sm" className="rounded-pill px-3 fw-bold">
                      {cls.room === 'Online' ? 'Join Zoom' : 'Details'}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Course Progress */}
          <Card className="dashboard-card p-4 border-0 shadow-sm">
            <h5 className="fw-bold mb-4">Learning Progress</h5>
            {courseProgress.map((course, idx) => (
              <div key={idx} className="mb-4 last-child-no-border pb-3 border-bottom">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h6 className="fw-bold mb-0">{course.title}</h6>
                  <span className="text-primary fw-bold small">{course.progress}%</span>
                </div>
                <ProgressBar now={course.progress} className="progress-thin mb-2" variant="primary" />
                <p className="text-muted x-small mb-0">Next: <span className="text-dark fw-medium">{course.nextLesson}</span></p>
              </div>
            ))}
          </Card>
        </Col>

        {/* Sidebar Column */}
        <Col lg={4}>
          {/* Notifications */}
          <Card className="dashboard-card p-4 border-0 mb-4 shadow-sm">
            <h5 className="fw-bold mb-4">Updates & Activity</h5>
            <div className="notification-list">
              {notifications.map((note) => (
                <div key={note.id} className="d-flex gap-3 mb-4 pb-3 border-bottom last-child-no-border">
                  <div className={`bg-${note.color} bg-opacity-10 text-${note.color} rounded-circle d-flex align-items-center justify-content-center`} style={{ width: '36px', height: '36px', minWidth: '36px' }}>
                    <i className={`bi ${note.icon} small`}></i>
                  </div>
                  <div>
                    <p className="small mb-1 text-dark fw-medium leading-snug">{note.text}</p>
                    <span className="text-muted" style={{ fontSize: '0.65rem' }}>{note.time}</span>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="light" className="w-100 rounded-pill py-2 small fw-bold text-muted bg-light border-0 mt-2">
              View All Notifications
            </Button>
          </Card>

          {/* Quick Actions Grid */}
          <Card className="dashboard-card p-4 border-0 shadow-sm bg-light">
            <h5 className="fw-bold mb-4">Quick Tools</h5>
            <Row className="g-2">
              {[
                { label: 'Courses', icon: 'bi-plus-circle', path: '/courses' },
                { label: 'Support', icon: 'bi-chat-dots', path: '/contact' },
                { label: 'Grades', icon: 'bi-mortarboard', path: '/dashboard/grades' },
                { label: 'Library', icon: 'bi-search', path: '#' },
              ].map((action, idx) => (
                <Col key={idx} xs={6}>
                  <Button 
                    variant="white" 
                    className="quick-action-btn w-100 p-3 rounded-4 border-0 shadow-sm d-flex flex-column align-items-center gap-2 bg-white"
                    onClick={() => action.path !== '#' && navigate(action.path)}
                  >
                    <i className={`bi ${action.icon} text-primary fs-5`}></i>
                    <span className="fw-bold text-dark" style={{ fontSize: '0.7rem' }}>{action.label}</span>
                  </Button>
                </Col>
              ))}
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;

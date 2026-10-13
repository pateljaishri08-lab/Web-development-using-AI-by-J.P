import { Row, Col, Card, Button, Badge } from 'react-bootstrap';

const OnlineClasses = () => {
  const classes = [
    { 
      id: 1, 
      subject: 'Advanced Machine Learning', 
      time: '10:00 AM - 11:30 AM', 
      status: 'Live Now', 
      instructor: 'Dr. Elizabeth Vance',
      meetingId: '882-123-456',
      platform: 'Zoom',
      topic: 'Neural Networks & Backpropagation'
    },
    { 
      id: 2, 
      subject: 'UI/UX Design Principles', 
      time: '01:00 PM - 02:30 PM', 
      status: 'Upcoming', 
      instructor: 'Prof. David Chen',
      meetingId: '882-987-654',
      platform: 'Microsoft Teams',
      topic: 'High-Fidelity Prototyping'
    },
    { 
      id: 3, 
      subject: 'Ethical Hacking Workshop', 
      time: '04:00 PM - 05:30 PM', 
      status: 'Upcoming', 
      instructor: 'Dr. Sarah Jenkins',
      meetingId: '882-555-000',
      platform: 'Zoom',
      topic: 'Network Vulnerability Assessment'
    }
  ];

  const recordedSessions = [
    { id: 101, subject: 'Network Security', date: 'May 10, 2026', duration: '1h 20m', instructor: 'Dr. Sarah Jenkins' },
    { id: 102, subject: 'Cloud Computing', date: 'May 09, 2026', duration: '1h 45m', instructor: 'Dr. Marcus Thorne' },
  ];

  return (
    <div className="animate-fade-in pb-5">
      {/* Header & Stats */}
      <div className="mb-5 d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-3">
        <div>
          <Badge bg="success" className="bg-opacity-10 text-success mb-2 px-3 py-1 rounded-pill small fw-bold text-uppercase tracking-wider">
            <span className="d-inline-block rounded-circle bg-success me-2" style={{ width: '8px', height: '8px' }}></span>
            1 Class Live Now
          </Badge>
          <h2 className="fw-bold mb-1">Online Learning Center</h2>
          <p className="text-muted mb-0">Access your virtual classrooms, interactive workshops, and session archives.</p>
        </div>
        <div className="d-flex gap-2">
          <Button variant="outline-primary" size="sm" className="rounded-pill px-4 fw-bold">
            <i className="bi bi-camera-video me-2"></i>Test Equipment
          </Button>
        </div>
      </div>

      <Row className="g-4 mb-5">
        <Col lg={8}>
          <h5 className="fw-bold mb-4 d-flex align-items-center gap-2">
            <i className="bi bi-play-circle-fill text-primary"></i> Today's Live Sessions
          </h5>
          {classes.map(cls => (
            <Card key={cls.id} className={`dashboard-card border-0 shadow-sm mb-3 transition hover-shadow ${cls.status === 'Live Now' ? 'border-start border-success border-4' : ''}`}>
              <Card.Body className="p-4">
                <Row className="align-items-center">
                  <Col md={7} className="mb-3 mb-md-0">
                    <div className="d-flex align-items-center gap-3">
                      <div className={`icon-circle ${cls.status === 'Live Now' ? 'bg-success bg-opacity-10 text-success' : 'bg-light text-muted'}`}>
                        <i className={`bi ${cls.platform === 'Zoom' ? 'bi-camera-video-fill' : 'bi-microsoft'}`}></i>
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1">{cls.subject}</h6>
                        <div className="text-primary small fw-medium mb-1">{cls.topic}</div>
                        <div className="text-muted x-small">Instructor: {cls.instructor}</div>
                      </div>
                    </div>
                  </Col>
                  <Col md={3} className="mb-3 mb-md-0">
                    <div className="d-flex flex-column gap-1">
                      <div className="d-flex align-items-center gap-2 small fw-bold text-dark">
                        <i className="bi bi-clock"></i> {cls.time}
                      </div>
                      <div className="x-small text-muted">{cls.platform} • ID: {cls.meetingId}</div>
                    </div>
                  </Col>
                  <Col md={2} className="text-md-end">
                    <Button 
                      variant={cls.status === 'Live Now' ? 'success' : 'outline-primary'} 
                      className={`rounded-pill px-4 fw-bold w-100 ${cls.status === 'Live Now' ? 'pulse-badge' : ''}`}
                      disabled={cls.status === 'Upcoming'}
                    >
                      {cls.status === 'Live Now' ? 'Join' : 'Wait'}
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}
        </Col>

        <Col lg={4}>
          <h5 className="fw-bold mb-4 d-flex align-items-center gap-2">
            <i className="bi bi-archive-fill text-primary"></i> Recent Recordings
          </h5>
          <Card className="dashboard-card border-0 shadow-sm p-0 overflow-hidden">
            <div className="list-group list-group-flush">
              {recordedSessions.map(session => (
                <div key={session.id} className="list-group-item p-4 border-0 border-bottom last-child-no-border hover-bg-light transition">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h6 className="fw-bold mb-0 small">{session.subject}</h6>
                    <Badge bg="light" className="text-muted border small fw-normal">{session.duration}</Badge>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="x-small text-muted">
                      <i className="bi bi-calendar3 me-1"></i> {session.date}
                    </div>
                    <Button variant="link" className="p-0 text-primary x-small fw-bold text-decoration-none">
                      Watch Video <i className="bi bi-chevron-right"></i>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="light" className="w-100 rounded-0 py-3 small fw-bold text-muted bg-light border-0">
              View All Archives
            </Button>
          </Card>
        </Col>
      </Row>

      <div className="p-4 bg-white rounded-4 shadow-sm border border-light">
        <h6 className="fw-bold mb-4 d-flex align-items-center gap-2">
          <i className="bi bi-shield-check text-primary fs-5"></i> Virtual Learning Best Practices
        </h6>
        <Row className="g-4 text-center">
          {[
            { icon: 'bi-mic-mute', text: 'Mute when not speaking' },
            { icon: 'bi-lightning-charge', text: 'Check connection' },
            { icon: 'bi-chat-text', text: 'Engage in chat' },
            { icon: 'bi-pencil-square', text: 'Take digital notes' },
          ].map((item, idx) => (
            <Col key={idx} xs={6} md={3}>
              <div className="p-3 rounded-4 bg-light h-100">
                <i className={`bi ${item.icon} text-primary fs-4 mb-2 d-block`}></i>
                <div className="x-small fw-bold text-muted text-uppercase">{item.text}</div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default OnlineClasses;

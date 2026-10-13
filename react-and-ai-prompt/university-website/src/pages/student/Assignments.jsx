import { useState } from 'react';
import { Badge, Button, Row, Col, Card, ProgressBar, Nav } from 'react-bootstrap';

const Assignments = () => {
  const [filter, setFilter] = useState('All');

  const assignments = [
    { 
      id: 1, 
      title: 'Neural Network Implementation', 
      course: 'Advanced Machine Learning', 
      dueDate: 'May 15, 2026', 
      status: 'Pending', 
      priority: 'High',
      progress: 0,
      type: 'Programming'
    },
    { 
      id: 2, 
      title: 'User Persona Research', 
      course: 'UI/UX Design Principles', 
      dueDate: 'May 18, 2026', 
      status: 'Submitted', 
      priority: 'Medium',
      progress: 100,
      type: 'Report'
    },
    { 
      id: 3, 
      title: 'Network Penetration Lab', 
      course: 'Network Security', 
      dueDate: 'May 20, 2026', 
      status: 'In Progress', 
      priority: 'High',
      progress: 65,
      type: 'Lab'
    },
    { 
      id: 4, 
      title: 'Cloud Architecture Diagram', 
      course: 'Cloud Computing', 
      dueDate: 'May 22, 2026', 
      status: 'Pending', 
      priority: 'Low',
      progress: 15,
      type: 'Design'
    }
  ];

  const exams = [
    { 
      id: 1, 
      title: 'Mid-Term Assessment', 
      course: 'Cloud Computing Architecture', 
      date: 'June 05, 2026', 
      time: '10:00 AM',
      location: 'Main Hall B'
    },
    { 
      id: 2, 
      title: 'Final Examination', 
      course: 'Advanced Machine Learning', 
      date: 'June 12, 2026', 
      time: '09:00 AM',
      location: 'Engineering Lab 1'
    }
  ];

  const filteredAssignments = assignments.filter(a => {
    if (filter === 'All') return true;
    return a.status === filter;
  });

  return (
    <div className="animate-fade-in pb-5">
      <div className="mb-5 d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-3">
        <div>
          <h2 className="fw-bold mb-1 text-dark">Assignments & Exams</h2>
          <p className="text-muted mb-0">Manage your deadlines and stay ahead of your examination schedule.</p>
        </div>
        <div className="d-flex gap-2">
          <Button variant="primary" className="rounded-pill px-4 fw-bold shadow-sm">
            <i className="bi bi-cloud-arrow-up me-2"></i>Bulk Submit
          </Button>
        </div>
      </div>

      <Row className="g-4">
        <Col lg={8}>
          <Card className="dashboard-card border-0 shadow-sm overflow-hidden">
            <div className="p-4 border-bottom bg-white">
              <Nav variant="pills" className="gap-2 custom-pills" activeKey={filter} onSelect={(k) => setFilter(k)}>
                <Nav.Item>
                  <Nav.Link eventKey="All" className="rounded-pill px-4">All</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Pending" className="rounded-pill px-4">Pending</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="In Progress" className="rounded-pill px-4">In Progress</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Submitted" className="rounded-pill px-4">Submitted</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>

            <div className="p-4">
              {filteredAssignments.length > 0 ? (
                <div className="assignment-list">
                  {filteredAssignments.map(item => (
                    <div key={item.id} className="p-4 rounded-4 border mb-3 transition card-hover-effect bg-white">
                      <Row className="align-items-center">
                        <Col md={7}>
                          <div className="d-flex align-items-center gap-3 mb-2">
                            <Badge bg={item.priority === 'High' ? 'danger' : item.priority === 'Medium' ? 'warning' : 'info'} className="bg-opacity-10 text-dark small fw-bold">
                              {item.priority} Priority
                            </Badge>
                            <span className="text-muted x-small fw-bold text-uppercase tracking-wider">{item.type}</span>
                          </div>
                          <h6 className="fw-bold text-dark mb-1 h5">{item.title}</h6>
                          <div className="text-muted small d-flex align-items-center gap-2">
                            <i className="bi bi-journal-bookmark-fill text-primary"></i> {item.course}
                          </div>
                        </Col>
                        <Col md={5} className="mt-3 mt-md-0">
                          <div className="d-flex flex-column align-items-md-end">
                            <div className="text-md-end mb-2">
                              <div className="small text-muted mb-0">Deadline</div>
                              <div className={`fw-bold ${item.status === 'Submitted' ? 'text-success' : 'text-danger'}`}>
                                <i className="bi bi-clock-history me-1"></i> {item.dueDate}
                              </div>
                            </div>
                            <Badge bg={item.status === 'Submitted' ? 'success' : item.status === 'In Progress' ? 'primary' : 'warning'} className="px-3 py-2 rounded-pill fw-bold">
                              {item.status}
                            </Badge>
                          </div>
                        </Col>
                      </Row>
                      <div className="mt-4 pt-3 border-top">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <span className="small text-muted fw-bold">Completion Progress</span>
                          <span className="small fw-bold text-primary">{item.progress}%</span>
                        </div>
                        <div className="d-flex align-items-center gap-4">
                          <ProgressBar now={item.progress} className="progress-thin flex-grow-1" variant={item.status === 'Submitted' ? 'success' : 'primary'} />
                          <Button variant={item.status === 'Submitted' ? 'outline-success' : 'primary'} size="sm" className="rounded-pill px-4 fw-bold shadow-sm">
                            {item.status === 'Submitted' ? 'View Work' : 'Open Editor'}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-5">
                  <i className="bi bi-check-circle-fill text-success display-1 opacity-10"></i>
                  <h5 className="mt-3 text-muted">No assignments found for this category.</h5>
                </div>
              )}
            </div>
          </Card>
        </Col>

        <Col lg={4}>
          <Card className="dashboard-card border-0 shadow-sm p-4 bg-primary text-white overflow-hidden position-relative mb-4">
            <div className="position-relative z-1">
              <h5 className="fw-bold mb-4 d-flex align-items-center gap-2 h4">
                <i className="bi bi-mortarboard-fill"></i> Upcoming Exams
              </h5>
              {exams.map(exam => (
                <div key={exam.id} className="mb-4 p-3 bg-white bg-opacity-10 rounded-4 border border-white border-opacity-10 transition hover-bg-opacity-20">
                  <div className="fw-bold mb-1 h6">{exam.title}</div>
                  <div className="small opacity-75 mb-3">{exam.course}</div>
                  <div className="d-grid gap-2">
                    <div className="d-flex align-items-center gap-2 small">
                      <i className="bi bi-calendar3"></i> {exam.date}
                    </div>
                    <div className="d-flex align-items-center gap-2 small">
                      <i className="bi bi-clock"></i> {exam.time}
                    </div>
                    <div className="d-flex align-items-center gap-2 small">
                      <i className="bi bi-geo-alt"></i> {exam.location}
                    </div>
                  </div>
                </div>
              ))}
              <Button variant="light" className="w-100 mt-2 text-primary fw-bold rounded-pill py-2 shadow-sm">
                Exam Regulations
              </Button>
            </div>
            <i className="bi bi-journal-text position-absolute end-0 bottom-0 opacity-10" style={{ fontSize: '10rem', transform: 'translate(20%, 20%)' }}></i>
          </Card>

          <Card className="dashboard-card border-0 shadow-sm p-4 mb-4">
            <h5 className="fw-bold mb-3 d-flex align-items-center gap-2">
              <i className="bi bi-folder2-open text-primary"></i> Study Resources
            </h5>
            <div className="d-grid gap-2">
              {[
                { name: 'Late Submission Policy.pdf', type: 'pdf', color: 'danger' },
                { name: 'Research Paper Template.docx', type: 'word', color: 'primary' },
                { name: 'Lab Safety Guidelines.pdf', type: 'pdf', color: 'danger' }
              ].map((res, idx) => (
                <Button key={idx} variant="light" className="text-start border-0 py-3 px-3 rounded-4 small fw-medium text-muted hover-bg-primary hover-bg-opacity-5 d-flex align-items-center justify-content-between">
                  <span><i className={`bi bi-file-earmark-${res.type} text-${res.color} me-2 fs-5`}></i> {res.name}</span>
                  <i className="bi bi-download"></i>
                </Button>
              ))}
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Assignments;

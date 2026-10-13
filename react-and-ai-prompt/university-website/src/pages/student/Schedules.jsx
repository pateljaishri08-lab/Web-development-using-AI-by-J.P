import { Table, Card, Badge, Button } from 'react-bootstrap';

const Schedules = () => {
  const schedule = [
    { time: '08:00 AM', mon: '-', tue: 'Research Methodology', wed: '-', thu: 'Research Methodology', fri: '-' },
    { time: '09:30 AM', mon: 'Advanced Machine Learning', tue: '-', wed: 'Advanced Machine Learning', thu: '-', fri: 'Advanced Machine Learning' },
    { time: '11:00 AM', mon: 'Break', tue: 'Break', wed: 'Break', thu: 'Break', fri: 'Break' },
    { time: '12:00 PM', mon: 'UI/UX Design Principles', tue: 'Cloud Computing', wed: 'UI/UX Design Principles', thu: 'Cloud Computing', fri: '-' },
    { time: '02:00 PM', mon: '-', tue: 'Network Security', wed: '-', thu: 'Network Security', fri: 'Capstone Project' },
    { time: '04:00 PM', mon: 'Student Club', tue: '-', wed: 'Library Session', thu: '-', fri: 'Weekly Seminar' }
  ];

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  const getBadgeVariant = (subject) => {
    if (subject === 'Break') return 'secondary';
    if (subject.includes('Machine Learning') || subject.includes('Research')) return 'primary';
    if (subject.includes('Design') || subject.includes('Cloud')) return 'success';
    if (subject.includes('Security') || subject.includes('Capstone')) return 'warning';
    return 'info';
  };

  return (
    <div className="animate-fade-in pb-5">
      <div className="mb-5 d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-3">
        <div>
          <Badge bg="primary" className="bg-opacity-10 text-primary mb-2 px-3 py-1 rounded-pill small fw-bold text-uppercase tracking-wider">Academic Year 2026</Badge>
          <h2 className="fw-bold mb-1">Weekly Timetable</h2>
          <p className="text-muted mb-0">Spring Semester • 3rd Year • Artificial Intelligence</p>
        </div>
        <div className="d-flex gap-2">
          <Button variant="outline-primary" size="sm" className="rounded-pill px-4 fw-bold">
            <i className="bi bi-printer me-2"></i>Print PDF
          </Button>
          <Button variant="primary" size="sm" className="rounded-pill px-4 fw-bold shadow-sm">
            <i className="bi bi-calendar-plus me-2"></i>Sync Calendar
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <Row className="g-4 mb-5">
        <Col md={4}>
          <Card className="dashboard-card border-0 shadow-sm p-4 border-start border-primary border-4">
            <div className="small text-muted fw-bold text-uppercase mb-1">Total Hours</div>
            <h3 className="fw-bold mb-0">18 Hours <span className="h6 text-muted">/ Week</span></h3>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="dashboard-card border-0 shadow-sm p-4 border-start border-success border-4">
            <div className="small text-muted fw-bold text-uppercase mb-1">Next Class</div>
            <h3 className="fw-bold mb-0">ML @ 09:30 AM</h3>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="dashboard-card border-0 shadow-sm p-4 border-start border-warning border-4">
            <div className="small text-muted fw-bold text-uppercase mb-1">Classroom</div>
            <h3 className="fw-bold mb-0">Engineering Hall 4</h3>
          </Card>
        </Col>
      </Row>

      <Card className="dashboard-card border-0 shadow-sm overflow-hidden">
        <div className="table-responsive">
          <Table bordered hover className="mb-0 text-center align-middle">
            <thead>
              <tr className="bg-primary text-white border-0">
                <th className="p-4 border-0 text-uppercase tracking-wider small fw-bold" style={{ width: '120px', background: 'var(--primary-color)' }}>Time</th>
                {days.map(day => (
                  <th key={day} className="p-4 border-0 text-uppercase tracking-wider small fw-bold" style={{ background: 'var(--primary-color)' }}>{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {schedule.map((row, index) => (
                <tr key={index}>
                  <td className="p-4 fw-bold bg-light border-end small">{row.time}</td>
                  {[row.mon, row.tue, row.wed, row.thu, row.fri].map((cell, idx) => (
                    <td key={idx} className={`p-3 border-end ${cell === 'Break' ? 'bg-light' : ''}`}>
                      {cell !== '-' ? (
                        <div className={`p-3 rounded-4 h-100 transition hover-shadow ${cell === 'Break' ? 'opacity-50' : `bg-${getBadgeVariant(cell)} bg-opacity-10`}`}>
                          <div className={`fw-bold small ${cell === 'Break' ? 'text-muted' : `text-${getBadgeVariant(cell)}`}`}>{cell}</div>
                          {cell !== 'Break' && (
                            <div className="x-small text-muted mt-2 d-flex align-items-center justify-content-center gap-1">
                              <i className="bi bi-geo-alt"></i>
                              {cell.includes('Online') ? 'Virtual' : 'Room ' + (300 + idx + index)}
                            </div>
                          )}
                        </div>
                      ) : <span className="text-muted opacity-25">-</span>}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Card>

      <div className="mt-5 d-flex flex-wrap gap-4 justify-content-center p-4 bg-white rounded-4 shadow-sm">
        <div className="d-flex align-items-center gap-2 small text-muted fw-bold">
          <span className="d-inline-block rounded-circle bg-primary" style={{ width: '12px', height: '12px' }}></span> Core Courses
        </div>
        <div className="d-flex align-items-center gap-2 small text-muted fw-bold">
          <span className="d-inline-block rounded-circle bg-success" style={{ width: '12px', height: '12px' }}></span> Technical Electives
        </div>
        <div className="d-flex align-items-center gap-2 small text-muted fw-bold">
          <span className="d-inline-block rounded-circle bg-warning" style={{ width: '12px', height: '12px' }}></span> Projects & Labs
        </div>
        <div className="d-flex align-items-center gap-2 small text-muted fw-bold">
          <span className="d-inline-block rounded-circle bg-info" style={{ width: '12px', height: '12px' }}></span> Extra-Curricular
        </div>
        <div className="d-flex align-items-center gap-2 small text-muted fw-bold">
          <span className="d-inline-block rounded-circle bg-secondary" style={{ width: '12px', height: '12px' }}></span> Breaks
        </div>
      </div>
    </div>
  );
};

import { Row, Col } from 'react-bootstrap';
export default Schedules;

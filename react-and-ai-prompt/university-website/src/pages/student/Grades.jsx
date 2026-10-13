import { Table, ProgressBar, Row, Col, Card, Badge, Button } from 'react-bootstrap';

const Grades = () => {
  const currentSemester = [
    { id: 1, course: 'Database Systems', credit: 4, grade: 'A', gpa: 4.0, status: 'Completed', score: 92 },
    { id: 2, course: 'Computer Networks', credit: 3, grade: 'A-', gpa: 3.7, status: 'Completed', score: 88 },
    { id: 3, course: 'Operating Systems', credit: 4, grade: 'B+', gpa: 3.3, status: 'Completed', score: 84 },
    { id: 4, course: 'Software Engineering', credit: 3, grade: 'A', gpa: 4.0, status: 'In Progress', score: 95 }
  ];

  const previousSemesters = [
    { semester: 'Fall 2025', gpa: 3.92, credits: 18, deanList: true },
    { semester: 'Spring 2025', gpa: 3.78, credits: 16, deanList: false },
    { semester: 'Fall 2024', gpa: 3.85, credits: 17, deanList: true },
  ];

  return (
    <div className="animate-fade-in pb-5">
      {/* Page Header */}
      <div className="mb-5 d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-3">
        <div>
          <h2 className="fw-bold mb-1 text-dark">Academic Performance</h2>
          <p className="text-muted mb-0">Track your grades, credit progress, and overall academic standing.</p>
        </div>
        <div className="d-flex gap-2">
          <Button variant="outline-primary" size="sm" className="rounded-pill px-4 fw-bold">
            <i className="bi bi-printer me-2"></i>Full Transcript
          </Button>
          <Button variant="primary" size="sm" className="rounded-pill px-4 fw-bold shadow-sm">
            <i className="bi bi-download me-2"></i>Semester Report
          </Button>
        </div>
      </div>

      {/* Main Performance Cards */}
      <Row className="g-4 mb-5">
        <Col md={4}>
          <Card className="dashboard-card border-0 shadow-sm p-4 text-center bg-primary text-white overflow-hidden position-relative h-100">
            <div className="position-relative z-1 py-2">
              <h6 className="opacity-75 small mb-2 text-uppercase tracking-wider fw-bold">Cumulative GPA</h6>
              <h1 className="display-3 fw-bold mb-0">3.85</h1>
              <Badge bg="white" className="text-primary px-3 py-2 rounded-pill mt-3 fw-bold shadow-sm">
                <i className="bi bi-award-fill me-1"></i> Top 5% of Class
              </Badge>
            </div>
            <i className="bi bi-mortarboard position-absolute end-0 bottom-0 opacity-10" style={{ fontSize: '8rem', transform: 'translate(20%, 20%)' }}></i>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="dashboard-card border-0 shadow-sm p-4 bg-white h-100">
            <div className="d-flex justify-content-between align-items-start mb-4">
              <div>
                <h6 className="text-muted small mb-1 text-uppercase tracking-wider fw-bold">Credits Progress</h6>
                <h2 className="fw-bold mb-0 text-dark">64 <span className="h4 text-muted">/ 120</span></h2>
              </div>
              <div className="icon-circle bg-primary bg-opacity-10 text-primary">
                <i className="bi bi-check-circle-fill fs-5"></i>
              </div>
            </div>
            <div className="mt-auto">
              <div className="d-flex justify-content-between mb-2">
                <span className="small text-muted fw-bold">Completion</span>
                <span className="small fw-bold text-primary">53%</span>
              </div>
              <ProgressBar now={53} variant="primary" className="progress-thin mb-2" />
              <p className="x-small text-muted mb-0">56 credits remaining to graduate</p>
            </div>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="dashboard-card border-0 shadow-sm p-4 bg-white h-100">
            <div className="d-flex justify-content-between align-items-start mb-4">
              <div>
                <h6 className="text-muted small mb-1 text-uppercase tracking-wider fw-bold">Academic Standing</h6>
                <h2 className="fw-bold mb-0 text-success">Excellent</h2>
              </div>
              <div className="icon-circle bg-success bg-opacity-10 text-success">
                <i className="bi bi-shield-check-fill fs-5"></i>
              </div>
            </div>
            <div className="mt-auto p-3 bg-light rounded-4">
              <div className="d-flex align-items-center gap-3">
                <div className="bg-white p-2 rounded-circle shadow-sm">
                  <i className="bi bi-star-fill text-warning"></i>
                </div>
                <div className="small text-dark fw-bold">Dean's Honor List</div>
              </div>
              <p className="x-small text-muted mt-2 mb-0">Eligible for merit-based scholarships next semester.</p>
            </div>
          </Card>
        </Col>
      </Row>

      <Row className="g-4">
        {/* Current Semester Table */}
        <Col lg={8}>
          <Card className="dashboard-card border-0 shadow-sm overflow-hidden">
            <div className="p-4 border-bottom bg-white d-flex justify-content-between align-items-center">
              <h5 className="fw-bold mb-0">Current Semester (Spring 2026)</h5>
              <Badge bg="primary" className="bg-opacity-10 text-primary px-3 py-2 rounded-pill fw-bold small">
                4 Courses Active
              </Badge>
            </div>
            <div className="p-0">
              <Table responsive hover className="mb-0 align-middle">
                <thead className="bg-light">
                  <tr className="text-muted small text-uppercase tracking-wider">
                    <th className="border-0 px-4 py-3">Course Details</th>
                    <th className="border-0 py-3 text-center">Grade</th>
                    <th className="border-0 py-3 text-center">Score</th>
                    <th className="border-0 px-4 py-3 text-end">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentSemester.map(item => (
                    <tr key={item.id} className="border-bottom last-child-no-border">
                      <td className="px-4 py-4">
                        <div className="fw-bold text-dark h6 mb-1">{item.course}</div>
                        <div className="d-flex align-items-center gap-2">
                          <span className="text-muted x-small fw-bold">{item.credit} Credits</span>
                          <span className="text-muted opacity-25">•</span>
                          <span className={`x-small fw-bold ${item.status === 'Completed' ? 'text-success' : 'text-primary'}`}>{item.status}</span>
                        </div>
                      </td>
                      <td className="py-4 text-center">
                        <div className="bg-primary bg-opacity-10 text-primary d-inline-flex align-items-center justify-content-center rounded-3 fw-bold h5 mb-0" style={{ width: '45px', height: '45px' }}>
                          {item.grade}
                        </div>
                        <div className="x-small text-muted mt-1 fw-bold">{item.gpa.toFixed(1)} Pts</div>
                      </td>
                      <td className="py-4 text-center">
                        <div className="fw-bold text-dark h6 mb-2">{item.score}%</div>
                        <ProgressBar now={item.score} variant={item.score >= 90 ? 'success' : item.score >= 80 ? 'primary' : 'warning'} className="progress-thin mx-auto" style={{ width: '60px' }} />
                      </td>
                      <td className="px-4 py-4 text-end">
                        <Button variant="link" className="text-primary p-0 text-decoration-none small fw-bold">
                          View Breakdown <i className="bi bi-chevron-right small"></i>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Card>
        </Col>

        {/* Previous Semesters Summary */}
        <Col lg={4}>
          <Card className="dashboard-card border-0 shadow-sm p-4">
            <h5 className="fw-bold mb-4">Semester History</h5>
            <div className="history-list">
              {previousSemesters.map((sem, idx) => (
                <div key={idx} className="mb-4 pb-3 border-bottom last-child-no-border">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <div>
                      <h6 className="fw-bold text-dark mb-0">{sem.semester}</h6>
                      <span className="text-muted x-small">{sem.credits} Credits Earned</span>
                    </div>
                    <div className="text-end">
                      <div className="fw-bold text-primary h6 mb-0">{sem.gpa.toFixed(2)}</div>
                      <span className="text-muted x-small fw-bold">GPA</span>
                    </div>
                  </div>
                  {sem.deanList && (
                    <div className="d-flex align-items-center gap-2 mt-2">
                      <i className="bi bi-star-fill text-warning x-small"></i>
                      <span className="x-small text-warning fw-bold text-uppercase tracking-wider">Dean's Honor List</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <Button variant="light" className="w-100 mt-2 rounded-pill py-2 small fw-bold text-muted bg-light border-0">
              View All History
            </Button>
          </Card>

          {/* GPA Goal Tracker */}
          <Card className="dashboard-card border-0 shadow-sm p-4 mt-4 bg-light">
            <h6 className="fw-bold mb-3 d-flex align-items-center gap-2 text-dark">
              <i className="bi bi-bullseye text-primary"></i> Graduation Goal
            </h6>
            <div className="text-center mb-3">
              <div className="text-muted small mb-1">Target GPA</div>
              <h3 className="fw-bold text-dark mb-0">3.90</h3>
            </div>
            <ProgressBar now={98} variant="primary" className="progress-thin mb-3" />
            <p className="x-small text-muted text-center mb-0 leading-snug">
              You need a <strong>3.95 GPA</strong> in your final year to reach this goal.
            </p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Grades;

import { Row, Col, Card, ProgressBar, Badge, Button } from 'react-bootstrap';

const MyCourses = () => {
  const courses = [
    { 
      id: 1, 
      title: 'Advanced Machine Learning', 
      instructor: 'Dr. Elizabeth Vance', 
      progress: 75, 
      category: 'Core', 
      image: 'https://picsum.photos/id/0/800/400',
      credits: 4,
      nextAssignment: 'Neural Networks Implementation',
      dueDate: 'May 15'
    },
    { 
      id: 2, 
      title: 'UI/UX Design Principles', 
      instructor: 'Prof. David Chen', 
      progress: 40, 
      category: 'Elective', 
      image: 'https://picsum.photos/id/3/800/400',
      credits: 3,
      nextAssignment: 'User Persona Research',
      dueDate: 'May 18'
    },
    { 
      id: 3, 
      title: 'Network Security', 
      instructor: 'Dr. Sarah Jenkins', 
      progress: 90, 
      category: 'Core', 
      image: 'https://picsum.photos/id/1060/800/400',
      credits: 4,
      nextAssignment: 'Final Lab Report',
      dueDate: 'May 20'
    },
    { 
      id: 4, 
      title: 'Cloud Computing Architecture', 
      instructor: 'Dr. Marcus Thorne', 
      progress: 20, 
      category: 'Elective', 
      image: 'https://picsum.photos/id/1/800/400',
      credits: 3,
      nextAssignment: 'AWS Project Setup',
      dueDate: 'May 25'
    }
  ];

  return (
    <div className="animate-fade-in">
      <div className="mb-5 d-flex justify-content-between align-items-end">
        <div>
          <h2 className="fw-bold mb-1">My Enrolled Courses</h2>
          <p className="text-muted mb-0">You are currently enrolled in {courses.length} courses for the Spring 2026 semester.</p>
        </div>
        <Button variant="primary" className="rounded-pill px-4 fw-bold shadow-sm">
          <i className="bi bi-plus-lg me-2"></i>Browse More
        </Button>
      </div>

      <Row className="g-4">
        {courses.map(course => (
          <Col key={course.id} md={6} xl={4}>
            <Card className="dashboard-card h-100 card-hover-effect overflow-hidden border-0">
              <div className="position-relative">
                <Card.Img variant="top" src={course.image} style={{ height: '180px', objectFit: 'cover' }} />
                <div className="position-absolute top-0 end-0 p-3">
                  <Badge bg="white" className="text-primary shadow-sm px-3 py-2 rounded-pill fw-bold">
                    {course.credits} Credits
                  </Badge>
                </div>
              </div>
              <Card.Body className="p-4">
                <div className="mb-3">
                  <Badge bg="primary" className="bg-opacity-10 text-primary mb-2 px-3 py-1 rounded-pill small fw-bold">
                    {course.category}
                  </Badge>
                  <h5 className="fw-bold mb-1 text-dark">{course.title}</h5>
                  <p className="text-muted small d-flex align-items-center gap-2">
                    <i className="bi bi-person-circle text-primary"></i> {course.instructor}
                  </p>
                </div>
                
                <div className="mt-4 mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="small text-muted fw-bold">Course Progress</span>
                    <span className="small fw-bold text-primary">{course.progress}%</span>
                  </div>
                  <ProgressBar now={course.progress} className="progress-thin" variant="primary" />
                </div>

                <div className="bg-light rounded-3 p-3 mb-4">
                  <div className="small text-muted mb-1 fw-bold">Next Task:</div>
                  <div className="small text-dark fw-medium d-flex justify-content-between">
                    <span>{course.nextAssignment}</span>
                    <span className="text-danger fw-bold">{course.dueDate}</span>
                  </div>
                </div>

                <div className="d-grid gap-2">
                  <Button variant="primary" className="rounded-pill py-2 fw-bold shadow-sm">
                    Continue Learning
                  </Button>
                  <Button variant="light" className="rounded-pill py-2 fw-bold text-muted border-0 bg-light">
                    View Syllabus
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MyCourses;

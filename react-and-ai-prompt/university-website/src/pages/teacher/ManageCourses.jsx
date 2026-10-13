import { useState, useEffect } from 'react';
import { Card, Button, Row, Col, Badge, Modal, Form, Alert, Spinner } from 'react-bootstrap';
import { courseService } from '../../services/courseService';

const ManageCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [currentCourse, setCurrentCourse] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    students: 0,
    modules: 0,
    status: 'Active'
  });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const data = await courseService.getAll();
      setCourses(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleShowModal = (course = null) => {
    if (course) {
      setCurrentCourse(course);
      setFormData({
        title: course.title,
        students: course.students,
        modules: course.modules,
        status: course.status
      });
    } else {
      setCurrentCourse(null);
      setFormData({
        title: '',
        students: 0,
        modules: 0,
        status: 'Active'
      });
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setError('');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: name === 'students' || name === 'modules' ? parseInt(value) || 0 : value 
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const payload = {
        ...formData,
        students: parseInt(formData.students) || 0,
        modules: parseInt(formData.modules) || 0
      };

      if (currentCourse) {
        await courseService.update(currentCourse.id, payload);
      } else {
        await courseService.create(payload);
      }
      await fetchCourses();
      handleCloseModal();
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this course?')) return;
    try {
      await courseService.delete(id);
      fetchCourses();
    } catch (err) {
      alert('Failed to delete course: ' + err.message);
    }
  };

  return (
    <div className="animate-fade-in">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold text-primary mb-0">Manage Courses</h2>
        <Button variant="primary" className="rounded-pill px-4 fw-bold" onClick={() => handleShowModal()}>
          Create New Course
        </Button>
      </div>

      {error && <Alert variant="danger" className="border-0 rounded-4 mb-4">{error}</Alert>}

      {loading ? (
        <div className="text-center py-5">
          <Spinner animation="border" variant="primary" />
          <p className="text-muted mt-2">Loading courses...</p>
        </div>
      ) : (
        <Row className="g-4">
          {courses.length === 0 ? (
            <Col xs={12}>
              <div className="text-center py-5 text-muted bg-white rounded-4 shadow-sm">
                No courses found. Start by creating one!
              </div>
            </Col>
          ) : (
            courses.map((course) => (
              <Col key={course.id} md={6} lg={4}>
                <Card className="border-0 shadow-sm rounded-4 h-100">
                  <Card.Body className="p-4">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div className="bg-primary bg-opacity-10 text-primary rounded-circle p-3">
                        <i className="bi bi-journal-bookmark-fill fs-4"></i>
                      </div>
                      <div className="d-flex gap-2">
                        <Badge bg={course.status === 'Active' ? 'success' : (course.status === 'Upcoming' ? 'warning' : 'secondary')} className="bg-opacity-10 text-dark px-3 py-2 rounded-pill">
                          {course.status}
                        </Badge>
                        <Button variant="link" className="text-danger p-0" onClick={() => handleDelete(course.id)}>
                          <i className="bi bi-trash"></i>
                        </Button>
                      </div>
                    </div>
                    <h5 className="fw-bold mb-3">{course.title}</h5>
                    <div className="d-flex gap-4 text-muted small mb-4">
                      <span><i className="bi bi-people me-1"></i> {course.students} Students</span>
                      <span><i className="bi bi-layers me-1"></i> {course.modules} Modules</span>
                    </div>
                    <div className="d-grid gap-2">
                      <Button variant="outline-primary" className="rounded-pill fw-bold" onClick={() => handleShowModal(course)}>Edit Course</Button>
                      <Button variant="light" className="rounded-pill fw-bold">View Analytics</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          )}
        </Row>
      )
      }
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton className="border-0 pb-0">
          <Modal.Title className="fw-bold text-primary">
            {currentCourse ? 'Edit Course' : 'Create New Course'}
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body className="pt-4">
            {error && <Alert variant="danger" className="border-0 rounded-3 mb-4 py-2 small">{error}</Alert>}
            <Form.Group className="mb-3">
              <Form.Label className="small fw-bold">Course Title</Form.Label>
              <Form.Control name="title" value={formData.title} onChange={handleInputChange} required placeholder="e.g. Advanced Machine Learning" />
            </Form.Group>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label className="small fw-bold">Students</Form.Label>
                  <Form.Control type="number" name="students" value={formData.students} onChange={handleInputChange} required />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label className="small fw-bold">Modules</Form.Label>
                  <Form.Control type="number" name="modules" value={formData.modules} onChange={handleInputChange} required />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label className="small fw-bold">Status</Form.Label>
              <Form.Select name="status" value={formData.status} onChange={handleInputChange}>
                <option value="Active">Active</option>
                <option value="Upcoming">Upcoming</option>
                <option value="Completed">Completed</option>
              </Form.Select>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer className="border-0 pt-0">
            <Button variant="light" onClick={handleCloseModal} className="rounded-pill px-4">Cancel</Button>
            <Button variant="primary" type="submit" disabled={submitting} className="rounded-pill px-4 fw-bold">
              {submitting ? 'Saving...' : (currentCourse ? 'Update Course' : 'Create Course')}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default ManageCourses;

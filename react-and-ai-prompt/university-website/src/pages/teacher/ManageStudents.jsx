import { useState, useEffect } from 'react';
import { Card, Table, Button, Badge, Modal, Form, Alert, Spinner } from 'react-bootstrap';
import { studentService } from '../../services/studentService';

const ManageStudents = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [currentStudent, setCurrentStudent] = useState(null);
  const [formData, setFormData] = useState({ name: '', age: '', major: '' });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    setLoading(true);
    try {
      const data = await studentService.getAll();
      setStudents(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleShowModal = (student = null) => {
    setError(''); // Clear any previous errors
    if (student) {
      setCurrentStudent(student);
      setFormData({ name: student.name, age: student.age.toString(), major: student.major });
    } else {
      setCurrentStudent(null);
      setFormData({ name: '', age: '', major: '' });
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setError('');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    const ageNum = parseInt(formData.age);
    if (isNaN(ageNum) || ageNum <= 0) {
      setError('Please enter a valid age');
      return;
    }

    setSubmitting(true);
    setError('');

    try {
      const payload = {
        name: formData.name,
        age: ageNum,
        major: formData.major
      };

      if (currentStudent) {
        await studentService.update(currentStudent.id, payload);
      } else {
        await studentService.create(payload);
      }
      
      await fetchStudents();
      handleCloseModal();
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this student?')) return;

    try {
      await studentService.delete(id);
      await fetchStudents();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="animate-fade-in">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold text-primary mb-0">Manage Students</h2>
        <Button variant="primary" className="rounded-pill px-4 fw-bold" onClick={() => handleShowModal()}>
          Add New Student
        </Button>
      </div>

      {error && <Alert variant="danger" className="border-0 rounded-3 mb-4">{error}</Alert>}

      <Card className="border-0 shadow-sm rounded-4 overflow-hidden">
        {loading ? (
          <div className="text-center py-5">
            <Spinner animation="border" variant="primary" />
            <p className="text-muted mt-2">Loading students...</p>
          </div>
        ) : (
          <Table hover responsive className="mb-0 align-middle">
            <thead className="bg-light">
              <tr>
                <th className="px-4 py-3">ID</th>
                <th className="py-3">Name</th>
                <th className="py-3">Age</th>
                <th className="py-3">Major</th>
                <th className="px-4 py-3 text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-4 text-muted">No students found</td>
                </tr>
              ) : (
                students.map((student) => (
                  <tr key={student.id}>
                    <td className="px-4 py-3 fw-bold">{student.id}</td>
                    <td className="py-3">{student.name}</td>
                    <td className="py-3">{student.age}</td>
                    <td className="py-3">
                      <Badge bg="info" className="bg-opacity-10 text-info px-3 py-2 rounded-pill">
                        {student.major}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-end">
                      <Button variant="link" className="text-primary p-0 me-3" onClick={() => handleShowModal(student)}>
                        <i className="bi bi-pencil-square"></i>
                      </Button>
                      <Button variant="link" className="text-danger p-0" onClick={() => handleDelete(student.id)}>
                        <i className="bi bi-trash"></i>
                      </Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        )}
      </Card>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton className="border-0 pb-0">
          <Modal.Title className="fw-bold text-primary">
            {currentStudent ? 'Edit Student' : 'Add New Student'}
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body className="pt-4">
            {error && <Alert variant="danger" className="border-0 rounded-3 mb-4 py-2 small">{error}</Alert>}
            
            <Form.Group className="mb-3" controlId="studentName">
              <Form.Label className="small fw-bold">Full Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter student name"
                required
                className="py-2 border-primary-subtle"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="studentAge">
              <Form.Label className="small fw-bold">Age</Form.Label>
              <Form.Control
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                placeholder="Enter student age"
                required
                className="py-2 border-primary-subtle"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="studentMajor">
              <Form.Label className="small fw-bold">Major</Form.Label>
              <Form.Control
                type="text"
                name="major"
                value={formData.major}
                onChange={handleInputChange}
                placeholder="Enter student major"
                required
                className="py-2 border-primary-subtle"
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer className="border-0 pt-0">
            <Button variant="light" onClick={handleCloseModal} className="rounded-pill px-4">
              Cancel
            </Button>
            <Button variant="primary" type="submit" disabled={submitting} className="rounded-pill px-4 fw-bold">
              {submitting ? (
                <>
                  <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-2" />
                  Saving...
                </>
              ) : (currentStudent ? 'Update Student' : 'Add Student')}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default ManageStudents;

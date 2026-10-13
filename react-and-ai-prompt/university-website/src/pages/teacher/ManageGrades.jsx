import { useState, useEffect } from 'react';
import { Card, Button, Table, Form, Row, Col, Alert, Spinner, Modal } from 'react-bootstrap';
import { gradeService } from '../../services/gradeService';

const ManageGrades = () => {
  const [grades, setGrades] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    studentId: '',
    studentName: '',
    assignment: '',
    score: '',
    total: 100
  });

  useEffect(() => {
    fetchGrades();
  }, []);

  const fetchGrades = async () => {
    setLoading(true);
    try {
      const data = await gradeService.getAll();
      setGrades(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleScoreChange = (id, newScore) => {
    setGrades(prev => prev.map(g => g.id === id ? { ...g, score: parseInt(newScore) || 0 } : g));
  };

  const handleSaveInline = async (grade) => {
    try {
      await gradeService.update(grade.id, { score: grade.score });
      alert('Grade updated successfully!');
    } catch (err) {
      alert('Failed to update grade: ' + err.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this grade record?')) return;
    try {
      await gradeService.delete(id);
      fetchGrades();
    } catch (err) {
      alert('Failed to delete: ' + err.message);
    }
  };

  const handleSubmitModal = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await gradeService.create({
        ...formData,
        score: parseInt(formData.score),
        total: parseInt(formData.total)
      });
      setShowModal(false);
      setFormData({ studentId: '', studentName: '', assignment: '', score: '', total: 100 });
      fetchGrades();
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="animate-fade-in">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold text-primary mb-0">Manage Grades</h2>
        <div className="d-flex gap-2">
          <Button variant="outline-primary" className="rounded-pill px-4 fw-bold" onClick={() => setShowModal(true)}>
            Add New Grade
          </Button>
          <Button variant="primary" className="rounded-pill px-4 fw-bold">Publish All</Button>
        </div>
      </div>

      {error && <Alert variant="danger" className="border-0 rounded-4 mb-4">{error}</Alert>}

      <Card className="border-0 shadow-sm rounded-4 overflow-hidden">
        {loading ? (
          <div className="text-center py-5">
            <Spinner animation="border" variant="primary" />
            <p className="text-muted mt-2">Loading grades...</p>
          </div>
        ) : (
          <Table hover responsive className="mb-0 align-middle">
            <thead className="bg-light">
              <tr>
                <th className="px-4 py-3">Student ID</th>
                <th className="py-3">Student Name</th>
                <th className="py-3">Assignment</th>
                <th className="py-3">Score</th>
                <th className="px-4 py-3 text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              {grades.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-4 text-muted">No grade records found</td>
                </tr>
              ) : (
                grades.map((grade) => (
                  <tr key={grade.id}>
                    <td className="px-4 py-3 fw-bold">{grade.studentId}</td>
                    <td className="py-3">{grade.studentName}</td>
                    <td className="py-3">{grade.assignment}</td>
                    <td className="py-3">
                      <div className="d-flex align-items-center gap-2" style={{ maxWidth: '120px' }}>
                        <Form.Control 
                          type="number" 
                          value={grade.score} 
                          onChange={(e) => handleScoreChange(grade.id, e.target.value)}
                          size="sm" 
                          className="rounded-3 text-center" 
                        />
                        <span className="text-muted">/ {grade.total}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-end">
                      <Button 
                        variant="link" 
                        className="text-primary p-0 me-3"
                        onClick={() => handleSaveInline(grade)}
                      >
                        <i className="bi bi-save"></i>
                      </Button>
                      <Button 
                        variant="link" 
                        className="text-danger p-0"
                        onClick={() => handleDelete(grade.id)}
                      >
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

      {/* Add Grade Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton className="border-0 pb-0">
          <Modal.Title className="fw-bold text-primary">Add New Grade Record</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmitModal}>
          <Modal.Body className="pt-4">
            <Form.Group className="mb-3">
              <Form.Label className="small fw-bold">Student ID</Form.Label>
              <Form.Control name="studentId" value={formData.studentId} onChange={handleInputChange} required className="py-2" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="small fw-bold">Student Name</Form.Label>
              <Form.Control name="studentName" value={formData.studentName} onChange={handleInputChange} required className="py-2" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="small fw-bold">Assignment</Form.Label>
              <Form.Control name="assignment" value={formData.assignment} onChange={handleInputChange} required className="py-2" />
            </Form.Group>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label className="small fw-bold">Score</Form.Label>
                  <Form.Control type="number" name="score" value={formData.score} onChange={handleInputChange} required className="py-2" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label className="small fw-bold">Total</Form.Label>
                  <Form.Control type="number" name="total" value={formData.total} onChange={handleInputChange} required className="py-2" />
                </Form.Group>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer className="border-0 pt-0">
            <Button variant="light" onClick={() => setShowModal(false)} className="rounded-pill px-4">Cancel</Button>
            <Button variant="primary" type="submit" disabled={submitting} className="rounded-pill px-4 fw-bold">
              {submitting ? 'Adding...' : 'Add Grade'}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default ManageGrades;

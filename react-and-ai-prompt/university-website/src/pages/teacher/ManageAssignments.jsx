import { Card, Button, Table, Badge } from 'react-bootstrap';

const ManageAssignments = () => {
  const assignments = [
    { id: 1, title: 'Linear Regression Project', course: 'Advanced Machine Learning', dueDate: '2026-06-01', submissions: '32/35', status: 'In Progress' },
    { id: 2, title: 'Neural Net Architecture Quiz', course: 'Neural Networks 101', dueDate: '2026-05-25', submissions: '28/28', status: 'Grading' },
    { id: 3, title: 'Data Cleaning Lab', course: 'Advanced Machine Learning', dueDate: '2026-05-15', submissions: '35/35', status: 'Completed' },
  ];

  return (
    <div className="animate-fade-in">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold text-primary mb-0">Manage Assignments</h2>
        <Button variant="primary" className="rounded-pill px-4 fw-bold">Post Assignment</Button>
      </div>

      <Card className="border-0 shadow-sm rounded-4 overflow-hidden">
        <Table hover responsive className="mb-0 align-middle">
          <thead className="bg-light">
            <tr>
              <th className="px-4 py-3">Assignment Title</th>
              <th className="py-3">Course</th>
              <th className="py-3">Due Date</th>
              <th className="py-3">Submissions</th>
              <th className="py-3">Status</th>
              <th className="px-4 py-3 text-end">Actions</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((item) => (
              <tr key={item.id}>
                <td className="px-4 py-3 fw-bold">{item.title}</td>
                <td className="py-3">{item.course}</td>
                <td className="py-3">{item.dueDate}</td>
                <td className="py-3">{item.submissions}</td>
                <td className="py-3">
                  <Badge bg={item.status === 'Completed' ? 'success' : (item.status === 'Grading' ? 'info' : 'warning')} className="bg-opacity-10 text-dark px-3 py-2 rounded-pill">
                    {item.status}
                  </Badge>
                </td>
                <td className="px-4 py-3 text-end">
                  <Button variant="outline-primary" size="sm" className="rounded-pill px-3 fw-bold me-2">Grade</Button>
                  <Button variant="link" className="text-muted p-0"><i className="bi bi-three-dots-vertical"></i></Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </div>
  );
};

export default ManageAssignments;

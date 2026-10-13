import { useState } from 'react';
import { Row, Col, Card, Form, InputGroup, Button, Badge } from 'react-bootstrap';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Engineering', 'Business', 'Science', 'Technology', 'Arts'];

  const courseList = [
    { id: 1, title: 'Artificial Intelligence', category: 'Technology', duration: '4 Years', level: 'Undergraduate', description: 'Deep dive into machine learning, neural networks, and robotics.', image: 'https://picsum.photos/id/0/600/400' },
    { id: 2, title: 'Global Business Management', category: 'Business', duration: '3 Years', level: 'Undergraduate', description: 'Master international trade, marketing, and corporate strategy.', image: 'https://picsum.photos/id/20/600/400' },
    { id: 3, title: 'Sustainable Energy Engineering', category: 'Engineering', duration: '4 Years', level: 'Undergraduate', description: 'Designing the next generation of renewable energy systems.', image: 'https://picsum.photos/id/119/600/400' },
    { id: 4, title: 'Molecular Biotechnology', category: 'Science', duration: '2 Years', level: 'Postgraduate', description: 'Advanced research in genetic mapping and bio-manufacturing.', image: 'https://picsum.photos/id/102/600/400' },
    { id: 5, title: 'Digital Product Design', category: 'Arts', duration: '3 Years', level: 'Undergraduate', description: 'UI/UX principles, design thinking, and digital prototyping.', image: 'https://picsum.photos/id/3/600/400' },
    { id: 6, title: 'Cybersecurity & Defense', category: 'Technology', duration: '1 Year', level: 'Certification', description: 'Ethical hacking, network security, and risk management.', image: 'https://picsum.photos/id/1060/600/400' },
    { id: 7, title: 'Data Science & Analytics', category: 'Science', duration: '2 Years', level: 'Postgraduate', description: 'Statistical modeling, big data tools, and predictive analytics.', image: 'https://picsum.photos/id/1/600/400' },
    { id: 8, title: 'Aerospace Systems', category: 'Engineering', duration: '4 Years', level: 'Undergraduate', description: 'Flight mechanics, propulsion systems, and orbital dynamics.', image: 'https://picsum.photos/id/122/600/400' },
  ];

  const filteredCourses = courseList.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="courses-page">
      {/* Header */}
      <section className="courses-header mb-5">
        <h1 className="fw-bold mb-3">Explore Our Programs</h1>
        <p className="text-muted lead">Find the right path for your future career from our wide range of industry-aligned courses.</p>
      </section>

      {/* Filters */}
      <section className="filters-section mb-5 bg-light p-4 rounded-4 shadow-sm">
        <Row className="g-3 align-items-center">
          <Col lg={6}>
            <InputGroup>
              <Form.Control
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="py-2"
              />
            </InputGroup>
          </Col>
          <Col lg={6}>
            <div className="d-flex flex-wrap gap-2 justify-content-lg-end">
              {categories.map(cat => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? 'primary' : 'outline-primary'}
                  size="sm"
                  className="px-3 rounded-pill"
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </Col>
        </Row>
      </section>

      {/* Course Grid */}
      <section className="courses-grid mb-5">
        <Row>
          {filteredCourses.length > 0 ? (
            filteredCourses.map(course => (
              <Col key={course.id} md={6} lg={4} className="mb-4">
                <Card className="h-100 border-0 shadow-sm hover-shadow transition overflow-hidden">
                  <div style={{ height: '200px', overflow: 'hidden' }}>
                    <Card.Img 
                      variant="top" 
                      src={course.image} 
                      className="h-100 w-100 object-fit-cover"
                    />
                  </div>
                  <Card.Body className="p-4 d-flex flex-column">
                    <div className="mb-3 d-flex justify-content-between align-items-start">
                      <Badge bg="light" className="text-primary border border-primary-subtle px-2 py-1">
                        {course.category}
                      </Badge>
                      <small className="text-muted fw-bold">{course.level}</small>
                    </div>
                    <Card.Title className="fw-bold mb-3">{course.title}</Card.Title>
                    <Card.Text className="text-muted small flex-grow-1">
                      {course.description}
                    </Card.Text>
                    <hr className="my-3 opacity-25" />
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <small className="text-muted">
                        <i className="bi bi-clock me-1"></i> {course.duration}
                      </small>
                      <Button variant="link" className="text-primary p-0 text-decoration-none fw-bold small">
                        View Details →
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <Col className="text-center py-5">
              <h4 className="text-muted">No courses found matching your criteria.</h4>
              <Button variant="link" onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}>Clear all filters</Button>
            </Col>
          )}
        </Row>
      </section>
    </div>
  );
};

export default Courses;

import { Row, Col, Card, ListGroup } from 'react-bootstrap';

const About = () => {
  const values = [
    { title: 'Innovation', description: 'Pushing boundaries in technology and creative problem-solving.' },
    { title: 'Integrity', description: 'Upholding the highest ethical standards in research and education.' },
    { title: 'Inclusivity', description: 'Fostering a diverse community where everyone belongs.' },
    { title: 'Impact', description: 'Creating solutions that make a tangible difference in the world.' }
  ];

  const rankings = [
    'Ranked #5 Globally for Emerging Technologies (2025)',
    'Top 10 National University for Research Innovation',
    '98% Employment Rate for STEM Graduates within 6 months',
    'Accredited by the Global Board of Academic Excellence'
  ];

  const leadership = [
    { name: 'Dr. Elizabeth Vance', title: 'President', bio: 'Pioneer in Quantum Computing with 25 years of academic leadership.', image: 'https://picsum.photos/id/1027/200/200' },
    { name: 'Dr. Marcus Thorne', title: 'Provost', bio: 'Expert in Educational Policy and curriculum innovation.', image: 'https://picsum.photos/id/1012/200/200' },
    { name: 'Dr. Sarah Jenkins', title: 'Dean of Students', bio: 'Dedicated advocate for student mental health and career success.', image: 'https://picsum.photos/id/1011/200/200' },
    { name: 'Prof. David Chen', title: 'Dean of Engineering', bio: 'Former Lead Architect at major tech firms, focusing on sustainable robotics.', image: 'https://picsum.photos/id/1005/200/200' },
    { name: 'Dr. Maria Rodriguez', title: 'Director of Research', bio: 'Specializes in AI Ethics and cross-disciplinary scientific collaboration.', image: 'https://picsum.photos/id/1025/200/200' }
  ];

  const timeline = [
    { year: '1995', event: 'Tech Institute founded as a specialized vocational school.' },
    { year: '2005', event: 'Received University Status and expanded to 4 major faculties.' },
    { year: '2012', event: 'Inauguration of the Global Innovation Center.' },
    { year: '2020', event: 'Pioneered the AI-Integrated Learning Framework.' },
    { year: 'Present', event: 'Expanding to become a carbon-neutral campus.' }
  ];

  return (
    <div className="about-page">
      {/* Header Section */}
      <section className="about-header text-center mb-5 py-5 bg-light rounded-4">
        <h1 className="display-4 fw-bold text-primary mb-3">About Tech University</h1>
        <p className="lead text-muted mx-auto" style={{ maxWidth: '900px' }}>
          Tech University is a premier institution dedicated to excellence in technology, engineering, and the arts. 
          Founded on the principle that innovation should be accessible to all, we have spent the last three decades 
          shaping the minds that shape the future. Our community is built on a foundation of rigorous academic 
          inquiry, hands-on experimentation, and a relentless drive to solve global challenges.
        </p>
      </section>

      {/* Mission & Values */}
      <section className="mission-values mb-5">
        <Row className="mb-4">
          <Col lg={12}>
            <div className="p-4 border-start border-primary border-4 bg-light rounded-3 mb-5">
              <h2 className="fw-bold mb-3">Our Mission</h2>
              <p className="text-muted h5 lh-base">
                To empower a diverse community of learners through transformative education, 
                pioneering research, and meaningful industry partnerships, ensuring our graduates 
                are prepared to lead with integrity in an ever-evolving digital landscape.
              </p>
            </div>
          </Col>
        </Row>
        <h3 className="fw-bold mb-4 text-center">Core Values</h3>
        <Row className="g-4">
          {values.map((v, index) => (
            <Col md={3} key={index}>
              <Card className="h-100 border-0 shadow-sm text-center p-3 hover-shadow transition">
                <Card.Body>
                  <h5 className="fw-bold text-primary mb-3">{v.title}</h5>
                  <p className="text-muted small mb-0">{v.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Accreditation & Rankings */}
      <section className="rankings py-5 bg-primary text-white rounded-4 mb-5 shadow">
        <Row className="align-items-center mx-0">
          <Col lg={4} className="text-center text-lg-start mb-4 mb-lg-0">
            <h2 className="fw-bold mb-0">Excellence Recognized</h2>
            <p className="opacity-75 mt-2">Our commitment to quality education is reflected in our global standing.</p>
          </Col>
          <Col lg={8}>
            <Row className="g-3">
              {rankings.map((rank, index) => (
                <Col md={6} key={index}>
                  <div className="d-flex align-items-center">
                    <div className="bg-white rounded-circle me-3 d-flex align-items-center justify-content-center" style={{ width: '12px', height: '12px', minWidth: '12px' }}></div>
                    <span className="fw-medium">{rank}</span>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </section>

      {/* History / Timeline */}
      <section className="history mb-5 py-5">
        <Row>
          <Col lg={5}>
            <h2 className="fw-bold mb-4">Our Journey</h2>
            <p className="text-muted mb-4">
              From a small institute to a global powerhouse, Tech University has always stayed true to its roots 
              of practical innovation and student-centered learning.
            </p>
            <div 
              className="bg-light rounded shadow-sm d-none d-lg-flex align-items-center justify-content-center overflow-hidden" 
              style={{ height: '300px' }}
            >
              <img 
                 src="https://picsum.photos/id/122/800/600" 
                 alt="Historical Archive" 
                 className="w-100 h-100 object-fit-cover"
               />
            </div>
          </Col>
          <Col lg={7} className="mt-4 mt-lg-0">
            <div className="ps-lg-5">
              <ListGroup variant="flush">
                {timeline.map((item, index) => (
                  <ListGroup.Item key={index} className="border-0 bg-transparent py-3 d-flex align-items-start">
                    <div className="fw-bold text-primary me-4" style={{ minWidth: '80px' }}>{item.year}</div>
                    <div className="text-muted border-start ps-4 pb-2">{item.event}</div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          </Col>
        </Row>
      </section>

      {/* Leadership */}
      <section className="leadership mb-5 py-5 border-top">
        <h2 className="fw-bold mb-5 text-center">University Leadership</h2>
        <Row className="justify-content-center g-4">
          {leadership.map((leader, index) => (
            <Col key={index} md={4} lg={index < 3 ? 4 : 6} className="mb-4">
              <Card className="border-0 shadow-sm h-100 text-center p-4 hover-shadow transition">
                <div className="mx-auto mb-4 rounded-circle bg-light d-flex align-items-center justify-content-center overflow-hidden" style={{ width: '140px', height: '140px', border: '4px solid #f8f9fa' }}>
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
                <Card.Body className="p-0">
                  <h5 className="fw-bold mb-1">{leader.name}</h5>
                  <p className="text-primary small fw-bold mb-3">{leader.title}</p>
                  <Card.Text className="text-muted small lh-base">{leader.bio}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Campus Life */}
      <section className="campus-life mb-5 py-5 bg-light rounded-4">
        <Row className="align-items-center px-4">
          <Col lg={6} className="mb-4 mb-lg-0">
            <div 
              className="rounded shadow-sm d-flex align-items-center justify-content-center bg-white overflow-hidden" 
              style={{ height: '400px' }}
            >
              <img 
                 src="https://picsum.photos/id/180/1000/600" 
                 alt="Campus Life" 
                 className="w-100 h-100 object-fit-cover"
               />
            </div>
          </Col>
          <Col lg={6} className="ps-lg-5 text-center text-lg-start">
            <h2 className="fw-bold mb-4">Vibrant Campus Life</h2>
            <p className="text-muted mb-4">
              Education at Tech University extends far beyond the lecture hall. With over 100 student clubs, 
              state-of-the-art recreational facilities, and a calendar packed with hackathons, cultural festivals, 
              and guest lectures, there is never a dull moment.
            </p>
            <p className="text-muted mb-4">
              Our residential halls are designed to foster collaboration and lifelong friendships, 
              providing a safe and inspiring environment for students from across the globe.
            </p>
            <div className="d-flex justify-content-center justify-content-lg-start gap-4 text-primary fw-bold">
              <div>100+ Clubs</div>
              <div>20+ Sports</div>
              <div>15+ Eateries</div>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default About;

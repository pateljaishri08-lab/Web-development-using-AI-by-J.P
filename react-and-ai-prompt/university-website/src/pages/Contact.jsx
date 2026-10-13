import { Row, Col, Form, Button, Card } from 'react-bootstrap';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Non-functional form submission
    alert('Thank you for your message! This is a demo form.');
  };

  return (
    <div className="contact-page">
      {/* Header Section */}
      <section className="contact-header text-start mb-5 py-5 bg-light rounded-4 ps-5">
        <h1 className="display-4 fw-bold text-primary mb-3">Contact Us</h1>
        <p className="lead text-muted" style={{ maxWidth: '800px' }}>
          Have questions? We're here to help. Reach out to our admissions team, 
          faculty, or support staff for any inquiries about Tech University.
        </p>
      </section>

      <Row className="g-5 mb-5">
        {/* Contact Form */}
        <Col lg={7}>
          <Card className="border-0 shadow-sm p-4 rounded-4 text-start">
            <h3 className="fw-bold mb-4">Send us a Message</h3>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Group controlId="fullName">
                    <Form.Label className="small fw-bold" style={{ textAlign: 'left', display: 'block' }}>Full Name</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="e.g. John Doe" 
                      required 
                      className="py-2 border-primary-subtle"
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group controlId="email">
                    <Form.Label className="small fw-bold" style={{ textAlign: 'left', display: 'block' }}>Email Address</Form.Label>
                    <Form.Control 
                      type="email" 
                      placeholder="e.g. john@example.com" 
                      required 
                      className="py-2 border-primary-subtle"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="subject">
                <Form.Label className="small fw-bold" style={{ textAlign: 'left', display: 'block' }}>Subject</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="How can we help you?" 
                  required 
                  className="py-2 border-primary-subtle"
                />
              </Form.Group>
              <Form.Group className="mb-4" controlId="message">
                <Form.Label className="small fw-bold" style={{ textAlign: 'left', display: 'block' }}>Message</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={5} 
                  placeholder="Write your message here..." 
                  required 
                  className="border-primary-subtle"
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="px-5 py-2 fw-bold rounded-pill shadow-sm">
                Send Message
              </Button>
            </Form>
          </Card>
        </Col>

        {/* Campus Info & Map */}
        <Col lg={5}>
          <div className="ps-lg-4">
            <h3 className="fw-bold mb-4">Campus Information</h3>
            
            <div className="mb-4">
              <div className="d-flex mb-3">
                <div className="text-primary me-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                  </svg>
                </div>
                <div>
                  <h6 className="fw-bold mb-1">Address</h6>
                  <p className="text-muted small mb-0">123 Innovation Drive, Tech City, TC 54321</p>
                </div>
              </div>

              <div className="d-flex mb-3">
                <div className="text-primary me-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                  </svg>
                </div>
                <div>
                  <h6 className="fw-bold mb-1">Phone</h6>
                  <p className="text-muted small mb-0">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="d-flex mb-3">
                <div className="text-primary me-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
                  </svg>
                </div>
                <div>
                  <h6 className="fw-bold mb-1">Email</h6>
                  <p className="text-muted small mb-0">admissions@techuni.edu</p>
                </div>
              </div>

              <div className="d-flex mb-3">
                <div className="text-primary me-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-clock-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                  </svg>
                </div>
                <div>
                  <h6 className="fw-bold mb-1">Office Hours</h6>
                  <p className="text-muted small mb-0">Monday - Friday: 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-5 text-start">
              <div 
                className="bg-light rounded shadow-sm d-flex align-items-center justify-content-center border overflow-hidden" 
                style={{ height: '250px' }}
              >
                <div className="text-center p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-map text-muted opacity-25 mb-3" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.5.5 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103M10 1.91l-4-.8v12.98l4 .8zm1 12.98 4-.8V1.11l-4 .8zm-6-.8V.11l-4 .8v12.98z"/>
                  </svg>
                  <p className="text-muted small mb-0">Interactive Campus Map Placeholder</p>
                </div>
              </div>
              <p className="text-start text-muted x-small mt-2" style={{ fontSize: '0.75rem' }}>
                Main Campus Entrance, North Wing Building A
              </p>
            </div>
          </div>
        </Col>
      </Row>

      {/* Support Section */}
      <section className="support-section py-5 bg-light rounded-4 text-start mb-5 ps-5">
        <h4 className="fw-bold mb-4">Specific Inquiries?</h4>
        <Row className="g-4 px-3">
          <Col md={4}>
            <div className="p-3">
              <h6 className="fw-bold text-primary mb-2">Student Support</h6>
              <p className="text-muted small">For current student assistance and resources.</p>
              <a href="mailto:support@techuni.edu" className="text-decoration-none small fw-bold">support@techuni.edu</a>
            </div>
          </Col>
          <Col md={4}>
            <div className="p-3">
              <h6 className="fw-bold text-primary mb-2">Media & Press</h6>
              <p className="text-muted small">For press releases and media inquiries.</p>
              <a href="mailto:media@techuni.edu" className="text-decoration-none small fw-bold">media@techuni.edu</a>
            </div>
          </Col>
          <Col md={4}>
            <div className="p-3">
              <h6 className="fw-bold text-primary mb-2">Careers</h6>
              <p className="text-muted small">Join our faculty and staff community.</p>
              <a href="mailto:careers@techuni.edu" className="text-decoration-none small fw-bold">careers@techuni.edu</a>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default Contact;

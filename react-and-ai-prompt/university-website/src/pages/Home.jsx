import { Row, Col, Button, Card, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import bannerImg from '../assets/image/ChatGPT Image May 11, 2026, 09_53_52 AM.png';
import campusImg from '../assets/image/university-banner.svg';

const Home = () => {
  const navigate = useNavigate();

  const stats = [
    { 
      label: 'Programs', 
      value: '150+', 
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-book" viewBox="0 0 16 16"><path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.688-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.385.139 2.807.62 3.688 1.02a.5.5 0 0 0 .707-.455v-11a.5.5 0 0 0-.287-.455C15.042 1.783 13.515.936 12.015.94c-1.3.03-2.727.155-3.712.984z"/></svg>
    },
    { 
      label: 'Students', 
      value: '25,000+', 
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16"><path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/></svg>
    },
    { 
      label: 'Faculty', 
      value: '1,200+', 
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person-badge" viewBox="0 0 16 16"><path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/><path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492z"/></svg>
    },
    { 
      label: 'Employment Rate', 
      value: '94%', 
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-graph-up-arrow" viewBox="0 0 16 16"><path fillRule="evenodd" d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.574l4-5.5a.5.5 0 0 1 .73-.06l2.081 2.082L13.56 4H10.5a.5.5 0 0 1-.5-.5"/></svg>
    },
  ];

  const programs = [
    {
      title: 'Computer Science',
      summary: 'Cutting-edge curriculum focused on AI, Software Engineering, and Cybersecurity.',
      image: "https://picsum.photos/id/0/400/300"
    },
    {
      title: 'Mechanical Engineering',
      summary: 'Advanced robotics, automotive systems, and sustainable energy solutions.',
      image: "https://picsum.photos/id/119/400/300"
    },
    {
      title: 'Business Analytics',
      summary: 'Data-driven decision making for the modern global marketplace.',
      image: "https://picsum.photos/id/20/400/300"
    },
    {
      title: 'Biotechnology',
      summary: 'Innovative research in genetic engineering and pharmaceutical sciences.',
      image: "https://picsum.photos/id/102/400/300"
    },
  ];

  const admissionsSteps = [
    { title: 'Explore Programs', desc: 'Choose your preferred program of study from our diverse catalog.' },
    { title: 'Check Eligibility', desc: 'Review entry requirements and application deadlines for your term.' },
    { title: 'Online Application', desc: 'Complete the comprehensive online form with your personal details.' },
    { title: 'Submit Documents', desc: 'Upload required transcripts, certificates, and identification.' },
    { title: 'Interview & Decision', desc: 'Attend a faculty interview if required and receive your decision.' },
  ];

  const testimonials = [
    {
      quote: "Tech University provided me with the tools and network to land my dream job at a top tech firm.",
      author: "Sarah Johnson",
      major: "CS Class of 2024",
      avatar: "SJ"
    },
    {
      quote: "The faculty here are world-class. Their mentorship was pivotal to my research success.",
      author: "Michael Chen",
      major: "Engineering Ph.D. Candidate",
      avatar: "MC"
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section py-5 mb-5 bg-soft-primary rounded-5 mx-2">
        <Row className="align-items-center px-4">
          <Col lg={6} className="text-center text-lg-start">
            <Badge bg="primary" className="mb-3 px-3 py-2 rounded-pill bg-opacity-10 text-primary fw-bold">ENROLLING FOR FALL 2026</Badge>
            <h1 className="display-3 fw-bold mb-4 lh-1">Empowering the <span className="text-primary">Future</span> of Innovation</h1>
            <p className="lead text-muted mb-5 pe-lg-5">
              Join a community of thinkers, creators, and leaders at Tech University. 
              Discover your potential with world-class education and hands-on research.
            </p>
            <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3">
              <Button size="lg" variant="primary" className="px-5 py-3 rounded-pill shadow" onClick={() => navigate('/register')}>Apply Now</Button>
              <Button size="lg" variant="outline-primary" className="px-4 py-3 rounded-pill" onClick={() => navigate('/courses')}>Explore Courses</Button>
            </div>
          </Col>
          <Col lg={6} className="mt-5 mt-lg-0">
            <div className="banner-container rounded-5 shadow-lg overflow-hidden position-relative">
              <img 
                src={bannerImg} 
                alt="Tech University Campus" 
                className="img-fluid w-100 h-100 object-fit-cover"
                style={{ minHeight: '450px', objectFit: 'cover' }}
              />
              <div className="position-absolute bottom-0 start-0 w-100 p-4 bg-dark bg-opacity-25 backdrop-blur text-white">
                <p className="mb-0 fw-medium">Innovation Center - Main Campus</p>
              </div>
            </div>
          </Col>
        </Row>
      </section>

      {/* Stats Section */}
      <section className="stats-section mb-5">
        <Row className="g-4">
          {stats.map((stat, index) => (
            <Col key={index} xs={6} md={3}>
              <div className="text-center p-4 border rounded-4 h-100 transition hover-shadow">
                <div className="icon-box mx-auto">{stat.icon}</div>
                <h2 className="fw-bold text-primary mb-1">{stat.value}</h2>
                <p className="text-muted small fw-bold text-uppercase mb-0">{stat.label}</p>
              </div>
            </Col>
          ))}
        </Row>
      </section>

      {/* Why Tech University Section */}
      <section className="why-us-section mb-5 bg-light rounded-5 py-5 px-4">
        <div className="text-center mb-5">
          <h2 className="section-title fw-bold">Why Tech University?</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>We combine academic excellence with practical industry experience to prepare you for the real world.</p>
        </div>
        <Row className="g-4">
          {[
            { title: 'Excellence in Research', desc: 'Ranked top 10 for research output and innovation in the country.', color: 'primary' },
            { title: 'Global Network', desc: 'Partnered with over 200 institutions and companies worldwide.', color: 'success' },
            { title: 'Modern Campus', desc: 'State-of-the-art labs, libraries, and recreational facilities.', color: 'info' }
          ].map((item, index) => (
            <Col md={4} key={index}>
              <Card className="border-0 shadow-sm rounded-4 h-100 p-3 transition hover-shadow">
                <Card.Body>
                  <div className={`icon-box bg-opacity-10 text-${item.color} bg-${item.color}`}>
                    {index === 0 ? '🔬' : index === 1 ? '🌍' : '🏫'}
                  </div>
                  <h4 className="fw-bold mb-3">{item.title}</h4>
                  <p className="text-muted mb-0">{item.desc}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Top Programs Section */}
      <section className="programs-section mb-5">
        <div className="d-flex justify-content-between align-items-end mb-5">
          <div>
            <h2 className="section-title text-start fw-bold mb-0">Top Programs</h2>
            <p className="text-muted mt-2 mb-0">Explore our most popular and high-impact degrees.</p>
          </div>
          <Button variant="outline-primary" className="rounded-pill px-4" onClick={() => navigate('/courses')}>View All Programs</Button>
        </div>
        <Row className="g-4">
          {programs.map((program, index) => (
            <Col key={index} md={6} lg={3}>
              <Card className="h-100 border-0 shadow-sm hover-shadow transition rounded-4 overflow-hidden">
                <div style={{ height: '180px', overflow: 'hidden' }}>
                  <Card.Img 
                    variant="top" 
                    src={program.image} 
                    className="h-100 w-100 object-fit-cover transition"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <Card.Body className="p-4">
                  <h5 className="fw-bold mb-3">{program.title}</h5>
                  <Card.Text className="text-muted small mb-0">
                    {program.summary}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Admissions Steps Section */}
      <section className="admissions-section mb-5 py-5 border-top border-bottom">
        <Row className="align-items-center g-5">
          <Col lg={5}>
            <Badge bg="primary" className="mb-3 px-3 py-2 rounded-pill bg-opacity-10 text-primary fw-bold">ADMISSIONS OPEN</Badge>
            <h2 className="display-5 fw-bold mb-4">Your Path to <span className="text-primary">Success</span></h2>
            <p className="text-muted mb-5 lead">Starting your journey at Tech University is simple. Our streamlined application process is designed to support you at every step.</p>
            <Button variant="primary" size="lg" className="px-5 py-3 rounded-pill shadow" onClick={() => navigate('/register')}>Start Your Application</Button>
          </Col>
          <Col lg={7}>
            <div className="ps-lg-4">
              {admissionsSteps.map((step, index) => (
                <div key={index} className="d-flex mb-4 transition hover-shadow p-3 rounded-4 bg-white border border-light">
                  <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold me-4" style={{ width: '40px', height: '40px', minWidth: '40px' }}>
                    {index + 1}
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1">{step.title}</h5>
                    <p className="text-muted small mb-0">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section mb-5 text-center bg-soft-primary rounded-5 py-5 px-4 mx-2">
        <h2 className="section-title fw-bold">What Our Students Say</h2>
        <Row className="justify-content-center g-4 mt-2">
          {testimonials.map((t, index) => (
            <Col key={index} md={5}>
              <Card className="border-0 shadow-sm rounded-4 h-100 p-4 text-start">
                <Card.Body>
                  <div className="text-primary mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-quote" viewBox="0 0 16 16"><path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.3 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"/></svg>
                  </div>
                  <p className="fst-italic mb-4 h5 lh-base">"{t.quote}"</p>
                  <div className="d-flex align-items-center mt-auto pt-3 border-top">
                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold me-3" style={{ width: '45px', height: '45px' }}>
                      {t.avatar}
                    </div>
                    <div>
                      <h6 className="fw-bold mb-0 text-primary">{t.author}</h6>
                      <small className="text-muted">{t.major}</small>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Explore Our Campus Section */}
      <section className="campus-section mb-5 py-5 px-4">
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <h2 className="section-title text-start fw-bold">Explore Our Campus</h2>
            <p className="lead text-muted mb-4">
              Tech University's main campus is a vibrant hub of innovation, featuring state-of-the-art 
              laboratories, collaborative workspaces, and a world-class digital library.
            </p>
            <p className="text-muted mb-4">
              Located in the heart of the city's tech corridor, our campus provides students with 
              unparalleled access to industry leaders and research opportunities. From our 
              sustainable architecture to our high-tech recreational centers, every corner of 
              Tech University is designed to inspire the next generation of creators.
            </p>
            <div className="d-flex gap-4 mb-4">
              <div className="text-center">
                <h4 className="fw-bold text-primary mb-0">50+</h4>
                <small className="text-muted text-uppercase fw-bold" style={{ fontSize: '0.7rem' }}>Laboratories</small>
              </div>
              <div className="text-center">
                <h4 className="fw-bold text-primary mb-0">200</h4>
                <small className="text-muted text-uppercase fw-bold" style={{ fontSize: '0.7rem' }}>Acre Campus</small>
              </div>
              <div className="text-center">
                <h4 className="fw-bold text-primary mb-0">15+</h4>
                <small className="text-muted text-uppercase fw-bold" style={{ fontSize: '0.7rem' }}>Student Hubs</small>
              </div>
            </div>
            <Button variant="outline-primary" className="rounded-pill px-4" onClick={() => navigate('/contact')}>Schedule a Campus Tour</Button>
          </Col>
          <Col lg={6}>
            <div className="rounded-5 shadow-lg overflow-hidden border border-light">
              <img 
                src={campusImg} 
                alt="Tech University Campus Design" 
                className="img-fluid w-100 h-100 object-fit-cover transition hover-zoom"
                style={{ minHeight: '500px', objectFit: 'cover' }}
              />
            </div>
          </Col>
        </Row>
      </section>

      {/* CTA Section */}
      <section className="final-cta text-center py-5">
        <h2 className="display-5 fw-bold mb-4">Ready to Build Your Future?</h2>
        <p className="lead text-muted mb-5">Join thousands of students shaping the world through technology and innovation.</p>
        <div className="d-flex justify-content-center gap-3">
          <Button variant="primary" size="lg" className="px-5 py-3 rounded-pill shadow" onClick={() => navigate('/register')}>Apply for Admission</Button>
          <Button variant="outline-primary" size="lg" className="px-5 py-3 rounded-pill" onClick={() => navigate('/contact')}>Talk to an Advisor</Button>
        </div>
      </section>
    </div>
  );
};

export default Home;

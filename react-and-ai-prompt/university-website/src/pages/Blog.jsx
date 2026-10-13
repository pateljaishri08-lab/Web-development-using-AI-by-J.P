import { useState } from 'react';
import { Row, Col, Card, Form, InputGroup, Button, Badge } from 'react-bootstrap';
import { posts } from '../data/posts';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');

  // Extract all unique tags
  const allTags = ['All', ...new Set(posts.flatMap(post => post.tags))];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === 'All' || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="blog-page">
      {/* Header */}
      <section className="blog-header text-center mb-5 py-5 bg-light rounded-4">
        <h1 className="display-4 fw-bold text-primary mb-3">University Insights</h1>
        <p className="text-muted lead mx-auto" style={{ maxWidth: '800px' }}>
          Stay updated with the latest news, research breakthroughs, and student stories from Tech University.
        </p>
      </section>

      <Row>
        {/* Main Content: Post Cards */}
        <Col lg={8}>
          {/* Search & Mobile Filter */}
          <div className="mb-4 d-lg-none">
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </InputGroup>
            <Form.Select 
              value={selectedTag} 
              onChange={(e) => setSelectedTag(e.target.value)}
              className="rounded-pill"
            >
              {allTags.map(tag => (
                <option key={tag} value={tag}>{tag}</option>
              ))}
            </Form.Select>
          </div>

          <Row className="g-4">
            {filteredPosts.length > 0 ? (
              filteredPosts.map(post => (
                <Col key={post.id} xs={12}>
                  <Card className="border-0 shadow-sm overflow-hidden hover-shadow transition rounded-4">
                    <Row className="g-0">
                      <Col md={4}>
                        <div 
                          className="h-100 bg-light d-flex align-items-center justify-content-center"
                          style={{ minHeight: '200px' }}
                        >
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="img-fluid h-100 w-100 object-fit-cover"
                            style={{ objectFit: 'cover' }}
                          />
                        </div>
                      </Col>
                      <Col md={8}>
                        <Card.Body className="p-4">
                          <div className="d-flex gap-2 mb-2 flex-wrap">
                            {post.tags.map(tag => (
                              <Badge key={tag} bg="light" className="text-primary border border-primary-subtle fw-normal">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <Card.Title className="h4 fw-bold mb-2">{post.title}</Card.Title>
                          <div className="text-muted small mb-3">
                            <span>{post.author}</span> • <span>{post.date}</span> • <span>{post.readingTime}</span>
                          </div>
                          <Card.Text className="text-muted mb-4">
                            {post.excerpt}
                          </Card.Text>
                          <Button variant="link" className="text-primary p-0 text-decoration-none fw-bold">
                            Read More →
                          </Button>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              ))
            ) : (
              <Col className="text-center py-5">
                <h4 className="text-muted">No articles found matching your criteria.</h4>
                <Button variant="link" onClick={() => { setSearchTerm(''); setSelectedTag('All'); }}>Reset Filters</Button>
              </Col>
            )}
          </Row>
        </Col>

        {/* Sidebar: Filters & Newsletter */}
        <Col lg={4} className="d-none d-lg-block">
          <div className="sticky-top" style={{ top: '100px', zIndex: 10 }}>
            {/* Search */}
            <Card className="border-0 shadow-sm rounded-4 mb-4 p-4">
              <h5 className="fw-bold mb-3">Search</h5>
              <InputGroup>
                <Form.Control
                  placeholder="Type to search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="border-primary-subtle"
                />
              </InputGroup>
            </Card>

            {/* Tags */}
            <Card className="border-0 shadow-sm rounded-4 mb-4 p-4">
              <h5 className="fw-bold mb-3">Categories</h5>
              <div className="d-flex flex-wrap gap-2">
                {allTags.map(tag => (
                  <Button
                    key={tag}
                    variant={selectedTag === tag ? 'primary' : 'outline-primary'}
                    size="sm"
                    className="px-3 rounded-pill"
                    onClick={() => setSelectedTag(tag)}
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            </Card>

            {/* Newsletter */}
            <Card className="border-0 bg-primary text-white rounded-4 p-4 shadow">
              <h5 className="fw-bold mb-2">Join Our Newsletter</h5>
              <p className="small opacity-75 mb-4">
                Get the latest insights and news delivered directly to your inbox.
              </p>
              <Form onSubmit={(e) => e.preventDefault()}>
                <Form.Group className="mb-3">
                  <Form.Control 
                    type="email" 
                    placeholder="Enter your email" 
                    className="border-0 py-2"
                  />
                </Form.Group>
                <Button variant="light" className="w-100 fw-bold text-primary mb-3 py-2">
                  Subscribe
                </Button>
                <p className="x-small mb-0 opacity-50" style={{ fontSize: '0.7rem' }}>
                  * We respect your privacy. Unsubscribe at any time. Read our privacy policy for more details.
                </p>
              </Form>
            </Card>
          </div>
        </Col>
      </Row>

      {/* Mobile Newsletter (Hidden on Desktop) */}
      <section className="d-lg-none mt-5">
        <Card className="border-0 bg-primary text-white rounded-4 p-4 shadow">
          <h5 className="fw-bold mb-2">Join Our Newsletter</h5>
          <p className="small opacity-75 mb-4">Get the latest insights delivered directly to your inbox.</p>
          <Form onSubmit={(e) => e.preventDefault()}>
            <Form.Group className="mb-3">
              <Form.Control type="email" placeholder="Enter your email" className="border-0 py-2" />
            </Form.Group>
            <Button variant="light" className="w-100 fw-bold text-primary mb-2 py-2">Subscribe Now</Button>
            <p className="x-small mb-0 opacity-50 text-center" style={{ fontSize: '0.7rem' }}>
              We respect your privacy. Unsubscribe at any time.
            </p>
          </Form>
        </Card>
      </section>
    </div>
  );
};

export default Blog;

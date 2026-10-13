import React, { useState } from "react";
import '../Pages/PageStyles.css';

export const UserForm = ({ onUserAdded }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    website: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMsg('');

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify({
          ...formData,
          id: Date.now() // Simulation of ID for local state update
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      if (!response.ok) throw new Error('Failed to add user');
      
      const newUser = await response.json();
      
      // Update the list in parent component
      onUserAdded(newUser);
      
      // Reset form and show success
      setFormData({ name: '', email: '', username: '', website: '' });
      setSuccessMsg('User added successfully!');
      
      // Hide success message after 3 seconds
      setTimeout(() => setSuccessMsg(''), 3000);
    } catch (error) {
      console.error('Error adding user:', error);
      alert('Error adding user. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-container">
      <div className="info-card user-form-card">
        <h2 className="form-title">Join the Community</h2>
        <p className="form-subtitle">Fill in the details to add a new member</p>
        
        {successMsg && <div className="success-banner">{successMsg}</div>}
        
        <form onSubmit={handleSubmit} className="styled-form">
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="johndoe123"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="website">Website</label>
              <input
                type="text"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="www.johndoe.com"
                required
              />
            </div>
          </div>
          
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? (
              <span className="btn-content">
                <span className="mini-loader"></span> Adding...
              </span>
            ) : 'Add New Member'}
          </button>
        </form>
      </div>
    </div>
  );
};

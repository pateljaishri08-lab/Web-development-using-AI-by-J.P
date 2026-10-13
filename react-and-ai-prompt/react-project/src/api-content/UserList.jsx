import React, { useState, useEffect } from "react";
import '../Pages/PageStyles.css';
import { UserForm } from "./UserForm";

export const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        // Switching to /users endpoint as requested
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleUserAdded = (newUser) => {
    // Add the new user to the beginning of the list
    setUsers(prevUsers => [newUser, ...prevUsers]);
  };

  if (loading) {
    return (
      <div className="loading-state">
        <div className="loader"></div>
        <p>Loading community profiles...</p>
      </div>
    );
  }

  return (
    <div className="community-section">
      {/* Form to add a new user */}
      <UserForm onUserAdded={handleUserAdded} />

      <div className="section-title-row" style={{ marginTop: '3rem' }}>
        <h2 className="section-heading">Member Directory</h2>
        <span className="count-badge">{users.length} Members</span>
      </div>

      <div className="user-list">
        {users.map((user) => (
          <div key={user.id} className="user-profile-card">
            <div className="user-avatar-container">
              <div className="user-avatar-circle">
                {user.name.charAt(0).toUpperCase()}
              </div>
            </div>
            <div className="user-details">
              <div className="user-info-row">
                <h3>{user.name}</h3>
                <span className="user-id-tag">#{user.id}</span>
              </div>
              <p className="user-email">{user.email.toLowerCase()}</p>
              <div className="user-bio">
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Web:</strong> {user.website}</p>
              </div>
              <div className="user-action">
                <button className="view-profile-btn">Connect</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

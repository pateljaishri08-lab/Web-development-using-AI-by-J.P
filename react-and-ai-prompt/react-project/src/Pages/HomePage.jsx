import React from "react";
import './PageStyles.css';
import { UserList } from "../api-content/UserList";
import { PostList } from "../api-content/PostList";

export const HomePage = () => {
  return (
    <div className="info-page">
      <div className="info-container">
        <header className="page-header">
          <h1>Community Members</h1>
          <p>Discover our active users and their latest contributions</p>
        </header>

        {/* Display the list of users */}
        <UserList />

        {/* Display the list of posts */}
        <PostList />
      </div>
    </div>
  )
}

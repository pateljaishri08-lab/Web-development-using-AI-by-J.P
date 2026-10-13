const API_URL = 'http://localhost:3003/courses';

export const courseService = {
  /**
   * Fetch all courses
   * @returns {Promise<Array>} List of courses
   */
  getAll: async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Failed to fetch courses');
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  /**
   * Create a new course
   * @param {Object} courseData - Course data
   * @returns {Promise<Object>} The created course
   */
  create: async (courseData) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(courseData),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create course');
      }
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  /**
   * Update a course
   * @param {number|string} id - Course ID
   * @param {Object} courseData - Updated course data
   * @returns {Promise<Object>} The updated course
   */
  update: async (id, courseData) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(courseData),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to update course');
      }
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  /**
   * Delete a course
   * @param {number|string} id - Course ID
   * @returns {Promise<boolean>} Success status
   */
  delete: async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete course');
      return true;
    } catch (error) {
      throw error;
    }
  }
};

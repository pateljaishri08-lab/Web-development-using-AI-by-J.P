const API_URL = 'http://localhost:3003/students';

export const studentService = {
  /**
   * Fetch all students
   * @returns {Promise<Array>} List of students
   */
  getAll: async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Failed to fetch students');
      }
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  /**
   * Get a student by ID
   * @param {number|string} id - Student ID
   * @returns {Promise<Object>} Student data
   */
  getById: async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch student details');
      }
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  /**
   * Create a new student
   * @param {Object} studentData - New student data
   * @returns {Promise<Object>} The created student
   */
  create: async (studentData) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(studentData),
      });

      if (!response.ok) {
        throw new Error('Failed to create student');
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  /**
   * Update an existing student
   * @param {number|string} id - Student ID
   * @param {Object} studentData - Updated student data
   * @returns {Promise<Object>} The updated student
   */
  update: async (id, studentData) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(studentData),
      });

      if (!response.ok) {
        throw new Error('Failed to update student');
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  /**
   * Delete a student
   * @param {number|string} id - Student ID
   * @returns {Promise<boolean>} Success status
   */
  delete: async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete student');
      }

      return true;
    } catch (error) {
      throw error;
    }
  }
};

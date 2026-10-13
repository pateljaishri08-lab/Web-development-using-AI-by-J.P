const API_URL = 'http://localhost:3003/grades';

export const gradeService = {
  /**
   * Fetch all grades
   * @returns {Promise<Array>} List of grades
   */
  getAll: async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Failed to fetch grades');
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  /**
   * Create a new grade
   * @param {Object} gradeData - Grade data
   * @returns {Promise<Object>} The created grade
   */
  create: async (gradeData) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(gradeData),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create grade');
      }
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  /**
   * Update a grade
   * @param {number|string} id - Grade ID
   * @param {Object} gradeData - Updated grade data
   * @returns {Promise<Object>} The updated grade
   */
  update: async (id, gradeData) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(gradeData),
      });
      if (!response.ok) throw new Error('Failed to update grade');
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  /**
   * Delete a grade
   * @param {number|string} id - Grade ID
   * @returns {Promise<boolean>} Success status
   */
  delete: async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete grade');
      return true;
    } catch (error) {
      throw error;
    }
  }
};

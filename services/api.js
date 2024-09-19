// services/api.js
import axios from "axios";

const API_BASE_URL = "https://jsonplaceholder.typicode.com";

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users`, {
      username,
      password,
    });

    // Simulate a successful login response
    if (response.status === 201) {
      return { token: "mockToken123", user: response.data };
    } else {
      throw new Error("Invalid login credentials");
    }
  } catch (error) {
    console.error("Login failed:", error);
    throw new Error("Login failed");
  }
};

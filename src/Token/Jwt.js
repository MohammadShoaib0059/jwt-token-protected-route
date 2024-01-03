import jwt from "jsonwebtoken";

const secretKey = "Codewithsaif";

export const login = (username, password) => {
  const isAuthentication = true;

  if (isAuthentication) {
    const payload = {
      user_id: 123,
      username: "Shoaib",
    };
    const token = jwt.sign(payload, secretKey);
    localStorage.setItem("token", token);
  } else {
    // Handle authentication failure
    console.error("Authentication failed");
  }
};

export const logout = () => {
  // Remove the token from local storage on logout
  localStorage.removeItem("token");
};

export const isAuthenticated = () => {
  // Check if the user is authenticated by verifying the presence of the token
  return localStorage.getItem("token") !== null;
};

const base = "http://localhost:5000/api"; // Base URL for backend API

let _token = null;
export const setToken = (token) => {
  _token = token;
  if (token) localStorage.setItem("token", token);
  else localStorage.removeItem("token");
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export async function apiClient(
  endpoint,
  { method = "GET", body, headers: customHeaders } = {}
) {
  const res = await fetch(`${base}${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...customHeaders,
    },

    body: body ? JSON.stringify(body) : undefined,
    credentials: "include", // Include cookies for session management
  });

  if (res.ok) {
    return res.json();
  } else {
    const errorData = await res.json();
    throw new Error(errorData.message || "API request failed");
  }
}

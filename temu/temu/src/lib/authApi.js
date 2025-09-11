import { apiClient, setToken } from "./apicClient.js";

export const AuthAPI = {
  login: async (email, password) => {
    const data = await apiClient("/login", {
      method: "POST",
      body: { email, password },
    });
    setToken(data.token);
    return data.user;
  },
  signup: async (fullname, email, password) => {
    const data = await apiClient("/register", {
      method: "POST",
      body: { fullname, email, password },
    });
    setToken(data.token);

    return data;
  },
  me: async () => apiClient("/getprofile"),
  logout: async () => {
    setToken(null);
    await apiClient("/logout");
  },
};

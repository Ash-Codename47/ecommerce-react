import api from "../../utils/api";

export const registerService = (data) => api.post("/users", data);

export const loginService = (data) => api.post("/auth", data);

export const getUserDetails = () => api.get("/auth");

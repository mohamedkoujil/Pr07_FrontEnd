import axios, { AxiosError } from "axios";
export default defineNuxtRouteMiddleware(async (to, from) => {
  try {
    const { data: user } = await axios.get("/user");
    if (user) {
      return navigateTo("/me");
    }
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response?.status === 401) {
      return;
    }
    throw error;
  }
});

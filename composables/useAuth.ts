import axios from "axios";
import { useRouter } from "vue-router";

interface LoginPayLoad {
  email: string;
  password: string;
}
interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at?: Date;
  two_factor_confirmed_at?: Date;
  two_factor_recovery_codes?: number;
  two_factor_secret?: string;
  created_at: Date;
  updated_at: Date;
}

export const useAuth = () => {
  const router = useRouter(); // ✅ Inicialitza el router aquí

  async function login(payload: { email: string; password: string }) {
    console.log("Login");
    await axios.post("/login", payload);
    router.push("/me"); // ✅ Utilitza router en comptes de useRouter()
  }

  async function register(payload: {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  }) {
    await axios.post("/register", payload);
    await login({ email: payload.email, password: payload.password });
  }

  async function logout() {
    await axios.post("/logout");
  }

  return {
    login,
    register,
    logout,
  };
};

<script setup lang="ts">
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

definePageMeta({
  layout: "centered",
});

interface LoginPayload {
  email: string;
  password: string;
}

const form = ref({
  email: "",
  password: "",
});

const login = async (payload: LoginPayload) => {
  try {
    const res = await axios.post("/api/login", payload);
    console.log(res);
    router.push("/me");
  } catch (error) {
    console.error(error);
  }
};
</script>
<template>
  <div class="login">
    <h1>Login</h1>
    <pre>{{ form }}</pre>
    <form @submit.prevent="login(form)">
      <label>
        <div>Email</div>
        <input type="text" v-model="form.email" />
      </label>

      <label>
        <div>Password</div>
        <input type="password" v-model="form.password" />
      </label>
      <button class="btn">Login</button>
    </form>

    <p>
      Don't have an account?
      <NuxtLink class="underline text-lime-600" to="/register"
        >Register now!</NuxtLink
      >
    </p>
  </div>
</template>

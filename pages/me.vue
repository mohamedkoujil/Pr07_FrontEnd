<script setup lang="ts">
import axios from "axios";
import { useRouter } from "vue-router";

definePageMeta({
  middleware: ["auth"],
});

const loggedIn = ref(false);
const loading = ref(true);

const user = ref({
  name: "",
  email: "",
});

const getUserData = async () => {
  try {
    const res = await axios.get("/user");
    user.value = res.data;
    loggedIn.value = true;
  } catch (error) {
    loggedIn.value = false;
    console.error(error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  getUserData();
});
</script>

<template>
  <div>
    <div v-if="loading">Loading</div>
    <div v-else>
      <p><strong>User Name:</strong> {{ user.name }}</p>
      <p><strong>User Email:</strong> {{ user.email }}</p>
    </div>
  </div>
</template>

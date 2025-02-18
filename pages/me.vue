<script setup lang="ts">
import axios from "axios";

const loggedIn = ref(false);
const loading = ref(true);

const user = ref({
  name: "",
  email: "",
});

const getUserData = async () => {
  try {
    const res = await axios.get("/api/user");
    console.log(res.data);
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
  <div v-if="loading">Loading</div>
  <div v-else>
    <div v-if="loggedIn">
      <p><strong>User Name:</strong> {{ user.name }}</p>
      <p><strong>User Email:</strong> {{ user.email }}</p>
    </div>
    <div v-else>
      <p>Not logged</p>
    </div>
  </div>
</template>

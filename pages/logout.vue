<script setup lang="ts">
import axios from "axios";

const loading = ref(true);

const logout = async () => {
  try {
    const res = await axios.post("/api/logout");
    console.log(res);
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  logout();
});
</script>

<template>
  <div v-if="loading">Logging out...</div>
  <div v-else>Logged out!</div>
</template>

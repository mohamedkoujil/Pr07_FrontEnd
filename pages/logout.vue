<script setup lang="ts">
const { logout } = useAuth();

logout();
</script>

<template>
  <div>Logged out!</div>
</template>

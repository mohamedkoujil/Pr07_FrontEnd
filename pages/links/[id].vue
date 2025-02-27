<script setup lang="ts">
import axios from "axios";

definePageMeta({
  middleware: ["auth"],
});
</script>

<template>
  <h1>Update Link</h1>
  <GoBack>or go back to links</GoBack>
  <form>
    <label>
      <div>Short Link</div>
      <input type="text" />
    </label>

    <label>
      <div>Full Link</div>
      <input type="text" />
    </label>

    <button class="btn">Update Link</button>
  </form>
</template>

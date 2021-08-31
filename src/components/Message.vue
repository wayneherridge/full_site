<template>
  <div v-if="message.length">
    <div v-for="message in message" :key="message.id" class="card">
      <p>{{ message.message }}</p>
      <router-link :to="{ name: 'EditMessage', params: { id: message.id } }"
        ><button class="router-button">Edit</button></router-link
      >
    </div>
  </div>
  <div v-else>
    <p>Loading message...</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: [],
    };
  },
  mounted() {
    fetch('http://localhost:3000/message')
      .then((res) => res.json())
      .then((data) => (this.message = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style></style>

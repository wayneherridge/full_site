<template>
  <div v-if="mainmessage.length">
    <div v-for="message in mainmessage" :key="message.id" class="card">
      <p>{{ message.message }}</p>
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
      mainmessage: [],
    };
  },
  mounted() {
    fetch('http://localhost:3000/mainmessage')
      .then((res) => res.json())
      .then((data) => (this.mainmessage = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style></style>

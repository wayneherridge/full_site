<template>
  <div class="card">
    <h3>Announcements</h3>
    <div v-if="announcements.length">
      <div v-for="announcement in announcements" :key="announcement.id">
        <p>
          {{ announcement.date }} - {{ announcement.time }} -
          {{ announcement.information }}
        </p>
        <router-link :to="{ name: 'EditAnn', params: { id: announcement.id } }"
          >Edit</router-link
        >
      </div>
      <router-link :to="{ name: 'AddAnn' }">Add Announcement</router-link>
    </div>
    <div v-else>
      <p>Loading announcements...</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      announcements: [],
    };
  },
  mounted() {
    fetch('http://localhost:3000/announcements')
      .then((res) => res.json())
      .then((data) => (this.announcements = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style></style>

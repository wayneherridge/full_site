<template>
  <div class="card">
    <h3>Activities</h3>
    <div v-if="activities.length">
      <div v-for="activity in activities" :key="activity.id">
        <p>
          {{ activity.date }} - {{ activity.time }} - {{ activity.title }} -
          {{ activity.location }}
        </p>
      </div>
      <router-link :to="{ name: 'AddActivity' }">Add Activity</router-link>
    </div>
    <div v-else>
      <p>Loading activities...</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activities: [],
    };
  },
  mounted() {
    fetch('http://localhost:3000/activities')
      .then((res) => res.json())
      .then((data) => (this.activities = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style></style>

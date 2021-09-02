<template>
  <form @submit.prevent="handleUpdate">
    <label>Title:</label>
    <input type="text" v-model="title" required />
    <label>Location:</label>
    <input type="text" v-model="location" required />
    <label>Date:</label>
    <input type="date" v-model="date" required />
    <label>Time:</label>
    <input type="time" v-model="time" required />
    <button>Update Activity</button>
  </form>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      title: '',
      location: '',
      date: '',
      time: '',
      uri: 'http://localhost:3000/activities/' + this.id,
    };
  },
  mounted() {
    fetch(this.uri)
      .then((res) => res.json())
      .then((data) => {
        this.title = data.title;
        this.location = data.location;
        this.date = data.date;
        this.time = data.time;
      });
  },
  methods: {
    handleUpdate() {
      fetch(this.uri, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: this.title,
          location: this.location,
          date: this.date,
          time: this.time,
        }),
      })
        .then(() => {
          this.$router.push('/EQHome');
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style></style>

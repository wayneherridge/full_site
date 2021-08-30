<template>
  <form @submit.prevent="handleUpdate">
    <label>Date:</label>
    <input type="date" v-model="date" required />
    <label>Time:</label>
    <input type="time" v-model="time" required />
    <label>Information:</label>
    <input type="text" v-model="information" required />
    <button>Update Announcement</button>
  </form>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      date: '',
      lesson: '',
      uri: 'http://localhost:3000/announcements/' + this.id,
    };
  },
  mounted() {
    fetch(this.uri)
      .then((res) => res.json())
      .then((data) => {
        this.date = data.date;
        (this.time = data.time), (this.information = data.information);
      });
  },
  methods: {
    handleUpdate() {
      fetch(this.uri, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          date: this.date,
          time: this.time,
          information: this.information,
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

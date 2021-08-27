<template>
  <form @submit.prevent="handleSubmit">
    <label>Title:</label>
    <input type="text" v-model="title" required />
    <label>Location:</label>
    <input type="text" v-model="location" required />
    <label>Date:</label>
    <input type="date" v-model="date" required />
    <label>Time:</label>
    <input type="time" v-model="time" required />
    <button>Add Activity</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      location: '',
      date: '',
      time: '',
    };
  },
  methods: {
    handleSubmit() {
      let activities = {
        title: this.title,
        location: this.location,
        date: this.date,
        time: this.time,
      };
      fetch('http://localhost:3000/activities', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(activities),
      })
        .then(() => {
          this.$router.push('/EQHome');
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
form {
  background: white;
  padding: 20px;
  border-radius: 10px;
}
label {
  display: block;
  color: #bbb;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}
input {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}
textarea {
  border: 1px solid #ddd;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100px;
}
form button {
  display: block;
  margin: 20px auto 0;
  background: #00ce89;
  color: white;
  padding: 10px;
  border: 0;
  border-radius: 6px;
  font-size: 16px;
}
button:hover {
  cursor: pointer;
}
</style>

<template>
  <form @submit.prevent="handleSubmit">
    <label>Date:</label>
    <input type="date" v-model="date" required />
    <label>Lesson:</label>
    <input type="text" v-model="lesson" required />
    <button>Add Project</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      date: '',
      lesson: '',
    };
  },
  methods: {
    handleSubmit() {
      let lessondetails = {
        date: this.date,
        lesson: this.lesson,
      };
      fetch('http://localhost:3000/lessons', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lessondetails),
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

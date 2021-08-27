<template>
  <form @submit.prevent="handleUpdate">
    <label>Date:</label>
    <input type="date" v-model="date" required />
    <label>Lesson:</label>
    <input type="text" v-model="lesson" required />
    <button>Update Project</button>
  </form>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      date: '',
      lesson: '',
      uri: 'http://localhost:3000/lessons/' + this.id,
    };
  },
  mounted() {
    fetch(this.uri)
      .then((res) => res.json())
      .then((data) => {
        this.date = data.date;
        this.lesson = data.lesson;
      });
  },
  methods: {
    handleUpdate() {
      fetch(this.uri, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ date: this.date, lesson: this.lesson }),
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

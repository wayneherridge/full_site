<template>
  <form @submit.prevent="handleUpdate">
    <label>Message:</label>
    <textarea v-model="message" required></textarea>
    <button>Update Message</button>
  </form>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      message: '',
      uri: 'http://localhost:3000/message/' + this.id,
    };
  },
  mounted() {
    fetch(this.uri)
      .then((res) => res.json())
      .then((data) => {
        this.message = data.message;
      });
  },
  methods: {
    handleUpdate() {
      fetch(this.uri, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: this.message }),
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

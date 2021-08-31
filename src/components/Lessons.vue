<template>
  <div class="card">
    <h3>Lessons</h3>
    <div v-if="lessons.length">
      <div v-for="lesson in lessons" :key="lesson.id" class="lesson">
        <p>{{ lesson.date }} - {{ lesson.lesson }}</p>
        <router-link :to="{ name: 'EditLesson', params: { id: lesson.id } }"
          ><button class="router-button">Edit</button></router-link
        >
      </div>
      <router-link :to="{ name: 'AddLesson' }"
        ><button class="router-button">Add</button></router-link
      >
    </div>
    <div v-else>
      <p>Loading lessons...</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['lessondetails'],
  data() {
    return {
      lessons: [],
    };
  },
  mounted() {
    fetch('http://localhost:3000/lessons')
      .then((res) => res.json())
      .then((data) => (this.lessons = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
.card {
  border-radius: 5px;
  background: green;
  flex-grow: 4;
  margin: 10px;
  background: white;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
}
</style>

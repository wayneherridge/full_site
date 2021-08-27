<template>
  <div class="container">
    <div class="title">
      <h3>Portsmouth Ward - EQ Portal</h3>
    </div>
    <div class="message">
      <Message />
    </div>
    <div class="dates">
      <Lessons />
      <Announcements />
      <Activities />
    </div>
  </div>
</template>

<script>
import Message from '../../components/Message.vue';
import Lessons from '../../components/Lessons.vue';
import Announcements from '../../components/Announcements.vue';
import Activities from '../../components/Activities.vue';

export default {
  name: 'app',
  components: { Message, Lessons, Announcements, Activities },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1000px;
  margin: 0 auto;
}

.dates {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-basis: 100%;
}
h1,
h3 {
  padding: 0;
  margin: 0;
}
h1 {
  padding-bottom: 20px;
}
.title {
  margin: 20px;
}
body {
  background: #f2f2f2;
}
</style>

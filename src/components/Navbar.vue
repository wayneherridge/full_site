<template>
  <header>
    <h3>The Hub</h3>
    <nav>
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <!-- <router-link :to="{ name: 'EQHome' }">EQ-Portal</router-link> -->
      <Pages title="Pages" />
      <router-link :to="{ name: 'About' }">About</router-link>
    </nav>
  </header>
</template>

<script>
import Pages from '../components/Pages.vue';

export default {
  name: 'pages',
  components: {
    Pages,
  },
};
</script>

<style>
header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  padding: 10px;
}
nav {
  display: flex;
  justify-content: center;
}
header h1 {
  color: #dfdfdf;
  font-size: 48px;
}
header a {
  color: #bbb;
  text-decoration: none;
  margin-left: 20px;
}
header a.router-link-active {
  color: #444;
  font-weight: bold;
}
</style>

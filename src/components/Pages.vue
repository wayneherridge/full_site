<template>
  <div class="menu-item" @click="isOpen = !isOpen">
    <a href="#">
      {{ title }}
    </a>
    <nav v-if="isOpen">
      <router-link :to="{ name: 'EQHome' }">EQ Portal</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  props: ['title'],
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style></style>

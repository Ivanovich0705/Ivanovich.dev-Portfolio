<script setup>
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import navbarVue from './components/navbar.vue';
import heroVue from "./components/hero.vue";
import aboutVue from "./components/about.vue";

</script>

<template>

  <navbarVue/>
  <heroVue/>
  <aboutVue/>
  <heroVue/>
  <heroVue/>

  


</template>

<style scoped>
</style>

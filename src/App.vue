<script setup>
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import navbarVue from './components/navbar.vue';
import heroVue from "./components/hero.vue";
import aboutVue from "./components/about.vue";
import experienceVue from "./components/experience.vue";
import contactVue from "./components/contact.vue";
</script>

<template>


  <navbarVue/>
  <div>
    <body class="inline">
      <heroVue/>
      <aboutVue/>
      <experienceVue/>
      <experienceVue/>
    </body>
    <contactVue class="inline contact"/>
  </div>
</template>

<style scoped>
.inline{
  display: inline-block;
}
.contact{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: fixed;
  right: 0;
  padding-right: 5%;
  bottom: 8%;
}
</style>

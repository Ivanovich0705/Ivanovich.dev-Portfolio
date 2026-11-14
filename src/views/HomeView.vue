<script setup>
import heroVue from '../components/hero.vue'
import aboutVue from '../components/about.vue'
import experienceVue from '../components/experience.vue'
// Projects section hidden until there are new side projects to show
// import proyectsVue from '../components/proyects.vue'
</script>

<template>
  <main class="inline">
    <heroVue/>
    <aboutVue/>
    <experienceVue/>
    <!-- <proyectsVue/> -->
  </main>
</template>

<style scoped>
.inline{
  display: inline-block;
}
</style>

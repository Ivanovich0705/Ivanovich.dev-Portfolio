<script setup>
import "bootstrap/dist/css/bootstrap.min.css";
import { onMounted, nextTick } from 'vue'
import { RouterView, useRoute, useRouter } from 'vue-router'
import AOS from 'aos'
import navbarVue from './components/navbar.vue';
import contactVue from "./components/contact.vue";

const router = useRouter()
const route = useRoute()

onMounted(() => {
  // offset: px from the bottom of the screen before an element starts animating (default 120)
  AOS.init({ offset: 20 })
})

// Re-scan for data-aos elements after every page change
router.afterEach(() => {
  nextTick(() => AOS.refreshHard())
})
</script>

<template>
  <navbarVue/>
  <div class="main">
    <RouterView/>
    <!-- 3D model + email/LinkedIn panel; hidden on the photography page so the gallery gets the full width -->
    <contactVue v-if="route.name !== 'photography'" class="inline contact"/>
  </div>
</template>

<style scoped>
.main{
  padding-bottom: 10vh;
}
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
@media screen and (max-width: 810px) {
  .contact{
    position: relative;
  }
}
</style>

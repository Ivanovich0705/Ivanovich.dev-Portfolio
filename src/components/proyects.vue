<template>
    <section id="proyects">
        <sectionTitleVue title="/ proyects"/>

    </section>
</template>

<script>
import sectionTitleVue from './sectionTitle.vue';
export default {
    name: "Proyects",
    components: {
      sectionTitleVue
    },
    data() {
        return {
            
        }
    }
}
</script>

<style scoped>
#proyects {
    padding-top: 7%;
    padding-left: 15%;
    min-height: 60vh;
}
</style>
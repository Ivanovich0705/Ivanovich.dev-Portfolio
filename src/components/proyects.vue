<template>
    <section id="proyects">
        <sectionTitleVue title="/ proyects"/>
        <proyectSwiperVue class="swipper-ivan"/>
    </section>
</template>

<script>
import sectionTitleVue from './sectionTitle.vue';
import proyectSwiperVue from './proyect-swiper.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

export default {
    name: "Proyects",
    components: {
        sectionTitleVue,
        Swiper,
        SwiperSlide,
        proyectSwiperVue
    },
    data() {
        return {

        }
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
        };
    }
}
</script>

<style scoped>
#proyects {
    padding-top: 7%;
    padding-left: 15%;
    min-height: 60vh;
}
.swipper-ivan{
    position: relative;
    width: 50vw;
    right: 10vw;
}
</style>
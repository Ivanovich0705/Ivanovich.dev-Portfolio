<template>
  <swiper
    :effect="'cards'"
    :grabCursor="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
        <ul class="proyect-grid">
          <li className="projects-card" v-for="proyect in proyects.slice(0,6)">
            <div class="project-card-info">
            <div className="card-header">
              <div className="folder-icon">
                <i class="bi bi-folder2-open"></i>
              </div>
                <externalLinksVue githubLink="hola" openLink="Ad"/>
              </div>
              <div className="card-title">Mazion</div>
              <div className="card-desc">Adventour Game</div>
              <div className="card-tech">C++</div>
            </div>
            </li>
        </ul>
    </swiper-slide>

    <swiper-slide>
      <div class="section-header last-swipper">
        <span class="section-title">More proyects in progress...</span>
      </div>
    </swiper-slide>
    
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import sectionTitleVue from './sectionTitle.vue';
import externalLinksVue from './external-links.vue';

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
    sectionTitleVue,
    externalLinksVue
  },
  data() {
    return {
      proyects: [
        {
          title: "Proyect 1",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl ultricies nunc, eget ultricies nisl nunc vel nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl ultricies nunc, eget ultricies nisl nunc vel nunc.",
          image: "https://picsum.photos/200/300",
          link: ""
        },
        {
          title: "Proyect 1",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl ultricies nunc, eget ultricies nisl nunc vel nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl ultricies nunc, eget ultricies nisl nunc vel nunc.",
          image: "https://picsum.photos/200/300",
          link: ""
        },
        {
          title: "Proyect 1",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl ultricies nunc, eget ultricies nisl nunc vel nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl ultricies nunc, eget ultricies nisl nunc vel nunc.",
          image: "https://picsum.photos/200/300",
          link: ""
        },
        {
          title: "Proyect 1",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl ultricies nunc, eget ultricies nisl nunc vel nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl ultricies nunc, eget ultricies nisl nunc vel nunc.",
          image: "https://picsum.photos/200/300",
          link: ""
        },
        {
          title: "Proyect 1",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl ultricies nunc, eget ultricies nisl nunc vel nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl ultricies nunc, eget ultricies nisl nunc vel nunc.",
          image: "https://picsum.photos/200/300",
          link: ""
        },
        {
          title: "Proyect 1",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl ultricies nunc, eget ultricies nisl nunc vel nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl ultricies nunc, eget ultricies nisl nunc vel nunc.",
          image: "https://picsum.photos/200/300",
          link: ""
        },
        {
          title: "Proyect 1",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl ultricies nunc, eget ultricies nisl nunc vel nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl ultricies nunc, eget ultricies nisl nunc vel nunc.",
          image: "https://picsum.photos/200/300",
          link: ""
        },
        {
          title: "Proyect 1",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl ultricies nunc, eget ultricies nisl nunc vel nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl ultricies nunc, eget ultricies nisl nunc vel nunc.",
          image: "https://picsum.photos/200/300",
          link: ""
        }
      ]
    }
  },
  setup() {
    return {
      modules: [EffectCards],
    };
  },
};
</script>

<style scoped>
.proyect-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  grid-gap: 10px;
  padding: 1rem;
}
.project-card-info{
  margin: 30px;
}
.section-header {
  display: flex;
  padding-bottom: 0px;
}
.swiper-slide:nth-child(2n){
  position: relative;
}
.last-swipper{
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.swiper {
  width: 240px;
  height: 545px;
}

.swiper-slide {
  position: relative;
  cursor: default;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  background-color: var(--dark-navy);
  border-radius: 16px;
  
}
.bi-folder2-open{
  font-size: 25px;
}

@media (max-width: 1080px) {
  .proyect-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
}


.projects-card {
  position: relative;
  cursor: default;
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  position: relative;
  height: 100%;
  background-color: var(--light-navy);
  border-radius: 16px;
}
.projects-card:hover {
  transform: translateY(-7px);
  background-color: var(--lightest-navy);
}

.card-header {
  margin-top: -20px;
  display: flex;
  padding: 1.25em 0 !important;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: none !important;
}
.folder-icon {
  color: var(--green-bright);
}

.github-icon {
  margin-top: 6px;
}
.github-icon:hover {
  color: var(--green-bright);
}

.open-icon {
  margin-left: 10px;
}

.card-title {
  font-family: "NTR", sans-serif;
  color: var(--lightest-slate);
  font-size: 24px;
  font-weight: bold;
}

.card-desc {
  font-family: "NTR", sans-serif;
  color: var(--slate);
  font-size: 18px;
  padding-bottom: 40px;
}

.card-tech {
  font-family: "NTR", sans-serif;
  color: var(--slate);
  font-size: 16px;
}
</style>
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
                <externalLinksVue :githubLink="proyect.githubLink"/>
              </div>
              <div className="card-title">{{proyect.title}}</div>
              <div className="card-desc">{{proyect.desc}}</div>
              <div className="card-tech">{{proyect.tech}}</div>
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
          title: "Mazion",
          desc: "Adventour game made using Sprites in Windows Form.",
          tech: "C++",
          githubLink: "https://github.com/Ivanovich0705/Mazion"
        },
        {
          title: "FlightsPy",
          desc: "Program to find the shortest between airports with Dijkstra's and Prim algorithm.",
          tech: "Python Flask, Vue.js & MongoDB",
          githubLink: "https://github.com/Ivanovich0705/acomplex-TF"
        },
        {
          title: "Take Me Home",
          desc: "Program to communicate people to bring parcels from another countries.",
          tech: " ASP. NET Core, Vue.js & MySQL",
          githubLink: "https://github.com/orgs/TakeMeHome-Del-mundo-a-tus-manos/repositories"
        },
        {
          title: "FastPorte",
          desc: "Program to communicate truck and van drivers easily with clients.",
          tech: "Spring Boot, Angular & PostreSQL",
          githubLink: "https://github.com/orgs/Tech-Company-SW52/repositories"
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
  margin: 30px;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);

}

.swiper {
  width: 240px;
  height: 630px;
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
    overflow: scroll;
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
  font-size: 25px;
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
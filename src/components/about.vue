<script>
export default {
  name: 'App',
    components: {},
    data() {
        return {
            tech_stack: [
                "C++",
                "Python",
                "Vue.js",
                "Javascript",
                "SQL",
                "MongoDB",
                "ASP.NET Core",
                "Angular",
                "HTML & CSS",
                "Bootstrap",
            ],
        }
    }
}
</script>

<template>

    <div id="about">
          <div  data-aos="fade-up" data-aos-delay="100" class="section-header ">
            <span class="section-title">/ about me</span>
          </div>
          <div class="about-content">
            <div data-aos="fade-up" data-aos-delay="200" class="about-description">
                <p>
                    I am currently a third year <b style="color: var(--green-bright)">Engineer Software</b> major at the 
                    <a target="_blank" href="https://www.upc.edu.pe/en/nosotros/pilares-estrategicos/exigencia/">
                    Peruvian University of Applied Sciences</a>. I'm interested in any new discovery of science and tech.
                    I've always loved tech and fascinated me how it can help us to solve problems and make our lives easier, 
                    especially with <b style="color: var(--green-bright)">artifical inteligence</b> and
                     <b style="color: var(--green-bright)">machine learning</b> and would love to one day make a living out of that.  
                </p>
              Here are some technologies I have been working and loving them:
                <div class="row">
                        <ul class="tech-stack">
                            <div data-aos="fade-up" v-for="[index, item] of tech_stack.entries()" :data-aos-delay="100+index*100" >
                                <li>{{item}}</li>
                            </div>
                        </ul>
                </div>
              <p>
                Outside of work and studying, I play video games. I'm a big fan of the <b style="color: var(--green-bright)"> Star Wars </b> series, and a high variety of sitcoms, 
                and starting into the audiophile world. Also I'm a tennis and ping pong player.
              </p>
            </div>
            <div className="about-image">

                <img src="../assets/profile.png" alt="">
                
            </div>
          </div>
      </div>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=NTR&display=swap');


#about {
    padding-top: 200px;
    padding-left: 15%;
    padding-right: 25%;
    min-height: 60vh;
    font-family: "NTR";
    font-weight: 200;
    font-display: fallback;
}

.about-description ul {
    padding-top: 20px;
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(2, minmax(150px, 10px));
}

.about-description li {
    position: relative;
    padding-left: 20px;
    font-size: 18px;
    color: var(--slate);
}

.about-description li::before {
    content: "▹    ";
    color: var(--green-bright);
    position: absolute;
    left: 0;
}

.about-content {
    display: flex;
    flex-direction: row;
}

.about-description {
    font-family: "NTR", sans-serif;
    color: var(--slate);
    max-width: 600px;
    font-size: 22px;
    text-align: justify;
    margin: 0;
}

.about-description a,
.about-description b {
    font-size: 21px;
    font-weight: bold;
}

.about-image {
    padding-left: 40px;
    transition: 0.5s ease;
}

.about-image img {
    max-width: 300px;
    height: auto;
    border-radius: 10px;
    margin-left: 30px;
    border: none;
    border-radius: 30%;
    background-size: 500px;
    background: no-repeat;
    background-image: url( '../assets/blob.svg' );
}

@media only screen and (max-width: 788px) {
    .about-image img {
        max-width: 200px;
    }
}

.about-image:hover {
    transform: scale(1.1);
    transition: 0.5s ease;
}

@media only screen and (max-width: 600px) {
    #about {
        height: unset;
        padding-left: unset;
        padding-right: unset;
        padding-top: 30%;
    }

    .about-description {
        font-size: 18px;
        text-align: justify;
    }

    .about-description a,
    .about-description b {
        font-size: 17px;
    }

    .about-image img {
        display: none;
    }

    .about-content {
        display: unset;
    }
}
  
</style>

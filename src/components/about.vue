<script>
import sectionTitle from './sectionTitle.vue'
export default {
  name: 'App',
    components: {
        sectionTitle
    },
    data() {
        return {
            tech_stack: [
                "C# & .NET",
                "TypeScript",
                "React",
                "Angular",
                "SQL Server (T-SQL)",
                "gRPC",
                "Java & Spring Boot",
                "Python & Flask",
                "Azure",
                "LLM APIs & Claude Code",
            ],
        }
    }
}
</script>

<template>

    <section id="about">
        
        <sectionTitle title="/ about me"/>

          <div class="about-content">
            <div data-aos="fade-up" data-aos-delay="50" class="about-description">
                <p>
                    I'm a software engineer with professional experience since 2023, working across the whole stack:
                    from database design and service architecture to the screens clients use every day.
                    I studied <b style="color: var(--green-bright)">Software Engineering</b> at the
                    <a target="_blank" href="https://www.upc.edu.pe/">Peruvian University of Applied Sciences (UPC)</a>.
                </p>
                <p>
                    I like hard problems and new technologies: migrating legacy systems, redesigning access models,
                    and bringing <b style="color: var(--green-bright)">AI</b> into real workflows, from document OCR
                    and chatbots to AI-assisted analysis of large codebases.
                </p>
              Technologies I work with:
                <div class="row">
                    <ul class="tech-stack">
                        <div data-aos="fade-up" v-for="[index, item] of tech_stack.entries()" :data-aos-delay="index*60" >
                            <li>{{item}}</li>
                        </div>
                    </ul>
                </div>
              <p>
                Outside of work, I play video games, I'm a big Star Wars fan,
                I enjoy sitcoms, audio gear and <RouterLink to="/photography">photography</RouterLink>, and I play <b style="color: var(--green-bright)">tennis</b>.
              </p>
            </div>
            <div class="about-image" data-aos="fade-up" data-aos-delay="100">

                <img src="../assets/profile.png" alt="Portrait of Ivan Moran">
                
            </div>
          </div>
      </section>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=NTR&display=swap');

a{
    color: var(--green-bright);
  }
#about {
    padding-top: 110px;
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
    grid-template-columns: repeat(2, minmax(240px, 1fr));
    column-gap: 24px;
    padding-left: 0;
}

.about-description li {
    position: relative;
    padding-left: 20px;
    font-size: 18px;
    color: var(--slate);
}

.about-description li::before {
    content: "⤷    ";
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

    .about-description ul {
        grid-template-columns: 1fr;
    }

    .about-image img {
        display: none;
    }

    .about-content {
        display: unset;
    }
}
  
</style>

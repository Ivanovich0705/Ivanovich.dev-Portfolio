<script>
import TypeWriter from './typewriter.vue'
export default {
  name: 'Hero',
  components: {
    TypeWriter
  }
};
</script>

<template>

    <section id="intro">
            
        <TypeWriter/>
    
        <div data-aos="fade-up" data-aos-delay="800">
          <div class="intro-subtitle">Full-stack software engineer.</div>
          <div class="intro-desc">
            I build backend and frontend systems with .NET, React, Angular and SQL Server, and I use AI tools
            to understand complex codebases faster. I'm currently a Software Consultant at
            <b>Zeal IT Consultants</b>, working on enterprise platforms in rail logistics, legal services and healthcare. <br>
            Based in Peru, born in Argentina.
          </div>
          <a
            href="mailto:ivanmoran.dev@gmail.com"
            class="intro-contact"
          >
          <i class="bi bi-envelope-at"></i>
            &nbsp Contact Me!
          </a>
        </div>
    </section>

</template>


<style scoped>
a{
  color: var(--green-bright);
}
a, u {
  text-decoration: none;
}
#intro {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 15%;
    padding-top: 13%;
    min-height: 90vh;
  }
  
  canvas {
    width: 200px !important;
  }
  
  .VueWriter {
    color: var(--lightest-slate);
    text-align: center;
    font-size: 76px;
    margin-top: -30px;
  }
  .VueWriter .Cursor--blinking {
    color: var(--green-bright);
    padding-left: 4px;
  }
  
  .intro-title {
    font-family: "NTR", sans-serif;
    font-size: 86px;
  }
  .intro-name {
    font-family: "NTR", sans-serif;
    color: var(--green-bright);
    font-weight: bold;
    font-size: 86px;
  }
  
  .intro-subtitle {
    margin-top: -36px;
    font-family: "NTR", sans-serif;
    color: var(--slate);
    font-weight: 300;
    font-size: 48px;
  }
  
  .intro-desc {
    color: var(--slate);
    font-family: "NTR", sans-serif;
    font-size: 22px;
    max-width: 50%;
    text-align: justify;
    padding-bottom: 50px;
  }
  
  .intro-contact {
    font-size: 22px;
    font-weight: bolder;
    font-family: "NTR", sans-serif;
    padding: 10px 30px;
    cursor: pointer;
    border: 1px solid var(--green-bright);
    border-radius: 4px;
  }
  
  .intro-contact:hover {
    background-color: var(--lightest-navy);
  }
  
  b {
    font-size: 17px;
  }
  
  @media only screen and (max-width: 600px) {
  
    #intro {
      min-height: unset;
      padding-left: unset;
      margin: 0;
      align-items: center;
    }
  
    .intro-title {
      font-size: 46px;
    }
    .intro-name {
      font-size: 46px;
    }
  
    .VueWriter {
      font-size: 36px;
    }
  
    .intro-subtitle {
      margin: 0;
      font-size: 28px;
      text-align: center;
    }
  
    .intro-desc {
      font-size: 18px;
      text-align: center;
      max-width: unset;
      padding-bottom: 40px;
    }
  
    .intro-contact {
      font-size: 16px;
      align-self: center;
      margin-left: 30%;
    }
  }
  
</style>

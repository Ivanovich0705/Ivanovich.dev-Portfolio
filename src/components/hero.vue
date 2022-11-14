<script>
import AOS from "aos";
import TypeWriter from './typewriter.vue'
export default {
  name: 'App',
  components: {
    TypeWriter
  },
  mounted() {
    AOS.init();

  }
};
</script>
<template>

    <div id="intro">
            
        <TypeWriter/>
    
        <div data-aos="fade-up" data-aos-delay="800">
          <div className="intro-subtitle">I create stuff sometimes.</div>
          <div className="intro-desc">
            I'm a software engineer and artist based in Toronto. I have great
            interest in full-stack development, artificial intelligence,
            human-computer interactions, and everything in between.
          </div>
          <a
            href="mailto:gazi.jarin@mail.utoronto.ca"
            className="intro-contact"
          >
            <EmailRoundedIcon></EmailRoundedIcon>
            {"  " + "Say hi!"}
          </a>
        </div>
    </div>

</template>


<style>
#intro {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 15%;
    padding-top: 18%;
    min-height: 100vh;
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
    max-width: 40%;
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
    #gazi-model {
      display: none;
    }
  
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

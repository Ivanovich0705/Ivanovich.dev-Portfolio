<template>
    <section id="experience">
        <sectionTitleVue title="/ experience"/>
        <div class="">
            <TabView data-aos="fade-up" data-aos-delay="200">
                <TabPanel v-for="job in jobs" :key="job.atTitle" :header="job.atTitle">

                    <span class="joblist-job-title" data-aos="fade-up" data-aos-delay="200">
                        {{job.at}}
                    </span>
                    <span className="joblist-job-company">{{job.key}}</span>
                    <div class="joblist-duration" data-aos="fade-up" data-aos-delay="200">
                        {{job.duration}}
                    </div>
                    <ul class="job-description">
                        <div v-for="[index, item] of job.content.entries()" data-aos="fade-up" :data-aos-delay="100+index*150">
                            <li key={index}>{{item}}</li>
                        </div>                                    
                    </ul>

                </TabPanel>
            </TabView>
        </div>
    </section>

</template>


<script scoped>
import sectionTitleVue from './sectionTitle.vue';
export default {
    name: "Experience",
    components: {
      sectionTitleVue
    },
    data() {
        return {
            jobs: [
	    {
              at: 'Full Stack Developer @', atTitle: "Bitacore", key: "Bitacore", duration: 'FEB 2023 - PRESENT', content: ["Use of Angular as Front-End Development.",
                "Use of Spring Boot Java as Back-End Development.",
                "Improved use of Software Patterns and Clean Code.", "Used Agile Technologies as Jira Software.", "Used GitLab and BitBucket as Project Repositories."]
            },
            {
              at: 'ULatin Hack @', atTitle: "ULatin Hack", key: "SAP & CSTI", duration: 'MAY 2022', content: ["4-week virtual program, composed of students from 13 different universities in Latin America.",
                "Learned about Design Thinking, Software Patterns and Best Practices from 8 international SAP exhibitors.",
                "Used SAP technologies to build chatbot, Appgyver, IRPA, and backend."]
            },
            {
              at: 'IT Support for Local Translator', atTitle: 'IT Support', key: "", duration: ' APR 2018 - PRESENT', content: ["Learned to communicate with technology terms in English.",
                "Improved my communication skills.",
              "Solved IT Problems on computers and social media."]
            },
            {
              at: 'Latin American Forum @', atTitle: 'Latin American Forum', key: "Oxford", duration: 'JUN 2022 ', content: ["Learned about basic economy","Helped to get social, economic, politic and cultural awareness of Latin America."]}
			]
        }
    }
}
</script>

<style scoped>
#experience {
    padding-top: 7%;
    padding-left: 15%;
    min-height: 60vh;
}

.joblist-job-title {
    font-family: "NTR", sans-serif;
    font-size: 28px;
    font-weight: bold;
    color: var(--lightest-slate);
  }
  
  .joblist-job-company {
    font-family: "NTR", sans-serif;
    font-size: 28px;
    color: var(--green-bright);
    font-weight: bold;
  }
  
  .joblist-duration {
    font-family: "NTR", sans-serif;
    font-size: 18px;
    color: var(--slate);
  }
.tabs{
    width: 50%;
}
.p-tab-view .p-tabview-nav{
    width: 10%;
}
ul {
    list-style: none;
    margin-left: -40px;
  }
.job-description li::before {
    content: "⤷    ";
    color: var(--green-bright);
    position: absolute;
    left: 0;
  }
.job-description li {
    position: relative;
    padding-left: 30px;
    padding-bottom: 16px;
    font-size: 18px;
    color: var(--slate);
  }
  
  .job-description {
    padding-top: 24px;
    max-width: 650px;
    font-family: "NTR", sans-serif;
    font-size: 20px;
  }
  
  .job-description a,
  .job-description b {
    font-size: 19px;
    font-weight: bold;
  }
  
@media only screen and (max-width: 600px) {
    #experience {
      padding-left: unset;
      padding-right: unset;
    }
  
    .jss1 {
      height: unset !important;
      flex-direction: column !important;
    }
  
    .makeStyles-root-1 {
      height: unset !important;
      width: unset;
      flex-direction: column;
    }
  
    .joblist-job-title {
      font-size: 22px;
    }
  
    .joblist-job-company {
      font-size: 22px;
    }
  }
  
</style>

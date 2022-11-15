<template>
    <section id="experience">
        <sectionTitleVue title="/ experience"/>
        <div class="">
            <TabView data-aos="fade-up" data-aos-delay="200">
                <TabPanel v-for="job in jobs" :key="job.at" :header="job.at">

                    <span class="joblist-job-title" data-aos="fade-up" data-aos-delay="200">
                        {{job.at}}
                    </span>
                    <!-- <span className="joblist-job-company">{key}</span> -->
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
                {at: 'ULatin Hack', duration:'MAY 2022', content: ["",""]},
                {at: 'IT for Local Translator', duration:' APR 2018 - PRESENT', content: ["",""]},
				{at: 'Latin American Forum', duration:'JUN 2022 ', content: ["",""]}
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
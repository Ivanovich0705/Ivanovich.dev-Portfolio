<template>
    <section id="experience">
        <sectionTitleVue title="/ experience"/>
        <div class="">
            <TabView data-aos="fade-up" data-aos-delay="200">
                <TabPanel v-for="job in jobs" :key="job.atTitle" :header="job.atTitle">

                    <span class="joblist-job-title" data-aos="fade-up" data-aos-delay="200">
                        {{job.at}}
                    </span>
                    <span class="joblist-job-company">{{job.key}}</span>
                    <div class="joblist-duration" data-aos="fade-up" data-aos-delay="200">
                        {{job.duration}}
                    </div>
                    <div class="joblist-summary">{{job.summary}}</div>
                    <ul class="job-description">
                        <li v-for="(item, index) in job.content" :key="index" data-aos="fade-up" :data-aos-delay="100+index*150">{{item}}</li>
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
                atTitle: 'Rail Logistics',
                at: 'Software Consultant @ ', key: 'Zeal IT Consultants',
                duration: 'APR 2026 - OCT 2026',
                summary: 'Developer on a tactical team migrating a legacy system to a new railcar asset management platform (React, gRPC, .NET).',
                content: [
                  'Learned and implemented gRPC to streamline service-to-service communication and clarify the system architecture.',
                  'Used Claude Code to analyze and map a complex legacy system, shortening onboarding and speeding up root-cause analysis.',
                  'Built full-stack features with .NET, React and SQL Server under tight delivery deadlines.'
                ]
              },
              {
                atTitle: 'Client Portal',
                at: 'Software Consultant @ ', key: 'Zeal IT Consultants',
                duration: 'JUL 2024 - JUN 2026',
                summary: 'Developer on a legal-services client portal (Angular, .NET), evolving it from an admin-only tool into a multi-client platform.',
                content: [
                  'Re-architected user management from an internal-only model to multi-client, role-based access, so the platform could securely serve external clients.',
                  'Built metrics and dashboard pages that gave clients real-time visibility into their data.',
                  'Integrated the Jira API for bidirectional ticket syncing with custom priority filters, saving hours of manual tracking and coordination.'
                ]
              },
              {
                atTitle: 'Healthcare QA',
                at: 'Quality Assistant @ ', key: 'Zeal IT Consultants',
                duration: 'SEP 2025 - APR 2026',
                summary: 'QA for a healthcare migration from Salesforce to Microsoft Dynamics 365.',
                content: [
                  'Validated data integrity during the migration and database redesign.',
                  'Identified, documented and tracked defects across migration phases, resolving them with developers before go-live.',
                  'Supported UAT sessions and tested integrations between Dynamics 365, Power Apps and the client\'s systems.'
                ]
              },
              {
                atTitle: 'Bitacore',
                at: 'Jr. Software Developer @ ', key: 'Bitacore',
                duration: 'FEB 2023 - JUN 2024',
                summary: 'Built systems for a pharmaceutical distributor: inventory, finance, client communication and transport.',
                content: [
                  'Cut invoice processing time by 40% by implementing automatic OCR with Google Document AI.',
                  'Built a Google Chat chatbot with Dialogflow translation, making information retrieval 35% faster.',
                  'Developed Salesforce-based registration modules for pharmaceutical purchases and sales.'
                ]
              }
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
.joblist-summary {
    font-family: "NTR", sans-serif;
    font-size: 19px;
    color: var(--lightest-slate);
    max-width: 650px;
    padding-top: 12px;
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
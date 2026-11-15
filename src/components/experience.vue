<template>
    <section id="experience">
        <sectionTitleVue title="/ experience"/>
        <div class="">
            <TabView v-model:activeIndex="activeTab" data-aos="fade-up" data-aos-delay="200">
                <TabPanel v-for="(job, jobIndex) in jobs" :key="job.company">

                    <!-- Tab header: company name, plus its client projects as sub-items -->
                    <template #header>
                        <span class="tab-company">{{job.company}}</span>
                        <span v-if="job.projects" class="tab-projects">
                            <span
                                v-for="(project, projectIndex) in job.projects"
                                :key="project.name"
                                class="tab-project"
                                :class="{ active: activeTab === jobIndex && activeProject === projectIndex }"
                                role="button"
                                tabindex="0"
                                @click.stop.prevent="goToProject(jobIndex, projectIndex)"
                                @keydown.enter.stop.prevent="goToProject(jobIndex, projectIndex)"
                            >
                                {{project.name}}
                            </span>
                        </span>
                    </template>

                    <!-- Role, company, dates and location: shown once per company -->
                    <span class="joblist-job-title">{{job.role}} @ </span>
                    <span class="joblist-job-company">{{job.company}}</span>
                    <span v-if="job.language" class="joblist-language">({{job.language}})</span>
                    <div class="joblist-duration">
                        <span>{{job.duration}}</span>
                        <span v-if="job.location" class="joblist-location">
                            <i class="bi" :class="job.location.startsWith('Remote') ? 'bi-globe2' : 'bi-geo-alt'"></i> {{job.location}}
                        </span>
                    </div>

                    <!-- Consulting: one entry per client project -->
                    <ol v-if="job.projects" class="project-timeline">
                        <li
                            v-for="(project, projectIndex) in job.projects"
                            :key="project.name"
                            :id="projectId(jobIndex, projectIndex)"
                            class="project"
                        >
                            <div class="project-header">
                                <span class="project-name">{{project.name}}</span>
                                <span v-if="project.role" class="project-role">{{project.role}}</span>
                            </div>
                            <div class="project-duration">{{project.duration}}</div>
                            <div class="joblist-summary" v-html="project.summary"></div>
                            <ul class="job-description">
                                <li v-for="(item, index) in project.content" :key="index" v-html="item"></li>
                            </ul>
                        </li>
                    </ol>

                    <!-- Single role without client projects -->
                    <template v-else>
                        <div class="joblist-summary" v-html="job.summary"></div>
                        <ul class="job-description">
                            <li v-for="(item, index) in job.content" :key="index" v-html="item"></li>
                        </ul>
                    </template>

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
    methods: {
        projectId(jobIndex, projectIndex) {
            return `project-${jobIndex}-${projectIndex}`;
        },
        // Open the company's tab, then scroll to the project below the sticky navbar
        goToProject(jobIndex, projectIndex) {
            this.activeTab = jobIndex;
            this.$nextTick(() => {
                // Set after the tab change so the activeTab watcher doesn't clear it
                this.activeProject = projectIndex;
                const el = document.getElementById(this.projectId(jobIndex, projectIndex));
                if (!el) return;
                // Sum offsetTop up the tree: unlike getBoundingClientRect, it ignores the
                // fade-up animation's temporary transform, so the target doesn't drift
                let pageTop = 0;
                for (let node = el; node; node = node.offsetParent) pageTop += node.offsetTop;
                const navbarHeight = document.querySelector('header')?.offsetHeight || 80;
                const top = pageTop - navbarHeight - 16;
                window.scrollTo({ top, behavior: 'smooth' });
            });
        },
    },
    watch: {
        // Clicking a company tab directly clears the project highlight
        activeTab() {
            this.activeProject = null;
        },
    },
    data() {
        return {
            activeTab: 0,
            activeProject: null,
            // One entry per company. Consulting jobs list their client projects in `projects`
            // (newest first); a project only sets `role` when it differs from the company role.
            jobs: [
              {
                company: 'Zeal IT Consultants',
                language: 'English',
                role: 'Software Consultant',
                duration: 'JUL 2024 - PRESENT',
                location: 'Remote · Texas, United States',
                projects: [
                  {
                    name: 'Rail Logistics Platform',
                    duration: 'APR 2026 - OCT 2026',
                    summary: 'Developer on a tactical team migrating a legacy system to a new <span class="highlight">railcar asset management </span> platform (React, gRPC, .NET).',
                    content: [
                      'Learned and implemented <span class="highlight">gRPC</span> to streamline service-to-service communication and clarify the system architecture.',
                      'Used <span class="highlight">Claude Code</span> to analyze and map a complex legacy system, shortening onboarding and speeding up root-cause analysis.',
                      'Built <span class="highlight">full-stack features</span> with .NET, React and SQL Server under tight delivery deadlines.'
                    ]
                  },
                  {
                    name: 'Legal Client Portal',
                    duration: 'JUL 2024 - JUN 2026',
                    summary: 'Developer on a <span class="highlight">legal-services client portal</span> (Angular, .NET), evolving it from an admin-only tool into a multi-client platform.',
                    content: [
                      'Re-architected user management from an internal-only model to <span class="highlight">multi-client, role-based access</span>, so the platform could securely serve external clients.',
                      'Built <span class="highlight">metrics and dashboard pages</span> that gave clients real-time visibility into their data.',
                      'Integrated the Jira API for bidirectional ticket syncing with custom priority filters, <span class="highlight">saving hours of manual tracking</span> and coordination.'
                    ]
                  },
                  {
                    name: 'Healthcare CRM Migration',
                    role: 'Quality Assistant',
                    duration: 'SEP 2025 - APR 2026',
                    summary: 'QA for a healthcare migration from Salesforce to Microsoft Dynamics 365.',
                    content: [
                      'Validated <span class="highlight">data integrity</span> during the migration and database redesign.',
                      'Identified, documented and <span class="highlight">tracked defects</span> across migration phases, resolving them with developers before go-live.',
                      'Supported <span class="highlight">UAT sessions</span> and tested integrations between Dynamics 365, Power Apps and the client\'s systems.'
                    ]
                  }
                ]
              },
              {
                company: 'Bitacore',
                role: 'Jr. Software Developer',
                duration: 'FEB 2023 - JUN 2024',
                location: 'Hybrid · Lima, Peru',
                summary: 'Built systems for a pharmaceutical distributor: inventory, finance, client communication and transport.',
                content: [
                  '<span class="highlight">Cut invoice processing time by 40%</span> by implementing automatic OCR with Google Document AI.',
                  'Built a Google Chat chatbot with Dialogflow translation, making information retrieval <span class="highlight">35% faster</span>.',
                  'Developed <span class="highlight">Salesforce-based</span> registration modules for pharmaceutical purchases and sales.'
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
    /* Keeps the panel clear of the 3D model fixed in the bottom-right corner */
    padding-right: 26%;
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
    display: flex;
    flex-direction: column;
    gap: 2px;
    font-family: "NTR", sans-serif;
    font-size: 18px;
    color: var(--slate);
  }
  .joblist-location {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: var(--light-slate);
  }
  .joblist-location i {
    color: var(--green-bright);
  }
.joblist-summary {
    font-family: "NTR", sans-serif;
    font-size: 19px;
    color: var(--lightest-slate);
    max-width: 650px;
    padding-top: 12px;
}

/* Tab column wide enough for company names (the theme sets 13%) */
#experience :deep(.p-tabview-nav-container) {
    width: 190px;
    flex-shrink: 0;
    /* Stays in view below the navbar while reading a long tab */
    position: sticky;
    top: calc(10vh + 16px);
    align-self: flex-start;
}
#experience :deep(.p-tabview-nav-link) {
    white-space: normal;
}
/* Description panel fills the space next to the tabs */
#experience :deep(.p-tabview-panels) {
    flex: 1 1 auto;
    min-width: 0;
}

/* Highlighted words inside summaries (rendered with v-html, so :deep is needed) */
.joblist-language {
    margin-left: 8px;
    font-family: "NTR", sans-serif;
    font-size: 20px;
    color: var(--light-slate);
    white-space: nowrap;
}

.joblist-summary :deep(.highlight),
.job-description :deep(.highlight) {
    color: var(--green-bright);
    font-weight: bold;
}

/* Tab header: company with its projects listed below */
.tab-company {
    display: block;
}
.tab-projects {
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin-top: 8px;
    padding-left: 10px;
    border-left: 1px solid var(--lightest-navy);
}
.tab-project {
    font-size: 14px;
    font-weight: normal;
    line-height: 1.3;
    padding: 3px 0;
    color: var(--slate);
    cursor: pointer;
    transition: color 0.2s ease;
}
.tab-project:hover,
.tab-project:focus-visible,
.tab-project.active {
    color: var(--green-bright);
    outline: none;
}

/* Client projects timeline (consulting) */
.project-timeline {
    list-style: none;
    margin: 28px 0 0;
    padding: 0 0 0 22px;
    border-left: 1px solid var(--lightest-navy);
    max-width: 680px;
    font-family: "NTR", sans-serif;
}
.project {
    position: relative;
    padding-bottom: 12px;
}
.project + .project {
    padding-top: 12px;
}
.project::before {
    content: "";
    position: absolute;
    left: -28px;
    top: 7px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: var(--navy);
    border: 2px solid var(--green-bright);
}
.project + .project::before {
    top: 19px;
}
.project-header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
}
.project-name {
    font-size: 22px;
    font-weight: bold;
    line-height: 1.2;
    color: var(--lightest-slate);
}
.project-role {
    font-size: 14px;
    line-height: 1;
    padding: 4px 10px;
    border-radius: 999px;
    border: 1px solid var(--green-bright);
    color: var(--green-bright);
}
.project-duration {
    font-size: 16px;
    color: var(--slate);
}
.project .joblist-summary {
    padding-top: 6px;
}
.project .job-description {
    padding-top: 12px;
}
.project .job-description li:last-child {
    padding-bottom: 0;
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

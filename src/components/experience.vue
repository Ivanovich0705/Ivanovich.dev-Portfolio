<template>
    <section id="experience">
        <sectionTitleVue title="/ experience"/>
        <div class="">
            <TabView >
                <TabPanel v-for="tab in tabs" :key="tab.title" :header="tab.title">
                    <p>{{tab.content}}</p>
                </TabPanel>
            </TabView>
        </div>
    </section>

</template>

<style scoped>
</style>

<script scoped>
import sectionTitleVue from './sectionTitle.vue';
export default {
    name: "Experience",
    components: {
        sectionTitleVue
    },
    data() {
        return {
            tabs: [
                {title: 'IT for Local Translator', content: ''},
				{title: 'ULatin Hack', content: ''},
				{title: 'Latin American Forum', content: 'Content 3'}
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
.tabs{
    width: 50%;
}
.p-tab-view .p-tabview-nav{
    width: 10%;
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
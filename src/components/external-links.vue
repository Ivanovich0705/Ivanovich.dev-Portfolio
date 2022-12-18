<template>
    <span className="external-links">
        <a class="github-icon" href={{this.props.githubLink}}>
            <i class="bi bi-github"></i>
        </a>
        <a v-if="openLink != null" class="open-icon" href="youtube.com">
            <i class="bi bi-window-stack"></i>
        </a>
        
      </span>
</template>

<script>
export default {
    props: {
        githubLink: String,
        openLink: String
    }
}
</script>

<style scoped>
i{
    font-size: 20px;
    color: var(--lightest-slate);
    padding-left: 5px;

}
</style>
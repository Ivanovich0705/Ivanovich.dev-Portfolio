<template>
    <section id="contact">
        <div class="test">
            <voxelVue class="voxel"/>
        </div>
        <div className="sidebar-logos" href="/">
            <a target="_blank" href="mailto:ivanmoran.dev@gmail.com">
                <i class="bi bi-envelope-fill"></i>        
            </a>
            <a target="_blank" href="https://github.com/Ivanovich0705">
                <i class="bi bi-github"></i>        
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/ivan-moran-36a446231/">
                <i class="bi bi-linkedin"></i>
            </a>
        </div>
    </section>
</template>

<style scoped>
.test{
    height: 300px;
    width: 300px;
}
.voxel{
    height: 300px;
    width: 300px;
}

i{
    font-size: 23px !important;
}
a {
    text-decoration: none !important;
    color: var(--green-bright) !important;
}
  
a:hover {
color: var(--lightest-slate) !important;
}

.sidebar-logos {
    padding-top: 0px;
    width: 90px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 8px;
}
</style>

<script>
import voxelVue from './voxel.vue';

export default {
    name: 'contact',
    components: {
        voxelVue
    }
}
</script>
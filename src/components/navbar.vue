<template>

    <header class="sticky-md-top align-items-center" :class="{ 'header-scrolled': scrolled }">

        <div class="navline">
            <nav class="p-steps p-component navigation" aria-label="Main">
                <ol class="p-steps-list">
                    <li
                        v-for="(item, index) in items"
                        :key="item.label"
                        class="p-steps-item"
                        :class="{ 'p-highlight': isActive(item) }"
                    >
                        <RouterLink
                            :to="item.to"
                            class="p-menuitem-link"
                            :aria-current="isActive(item) ? 'page' : undefined"
                        >
                            <span class="p-steps-number">{{ index + 1 }}</span>
                            <span class="p-steps-title">{{ item.label }}</span>
                        </RouterLink>
                    </li>
                </ol>
            </nav>
        </div>

      </header>

</template>

<style scoped>


header{
    background-color: var(--navy);
    height: 10vh;
}

.navline {
    margin: 0;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 60%;
    margin: 0 auto;
    scroll-behavior: smooth;

}

::v-deep(b) {
    display: block;
}

::v-deep(.p-card-body) {
    padding: 2rem;
}

a{
    color: var(--green-bright);
    text-decoration: none;
}

span{
    color: var(--green-bright);
}
.header-scrolled{
    opacity: 0.95;
}

@media screen and (max-width: 500px) {
    header {
        display: flex;
        visibility: hidden;
        align-items: center;
    }
}
</style>

<script>
import { RouterLink } from 'vue-router'

// Home page sections the navbar can scroll to.
// Projects (#proyects) is hidden for now; add { label: '/projects', to: { path: '/', hash: '#proyects' }, section: 'proyects' } to bring it back.
const ITEMS = [
    { label: '/home', to: { path: '/', hash: '#intro' }, section: 'intro' },
    { label: '/about', to: { path: '/', hash: '#about' }, section: 'about' },
    { label: '/experience', to: { path: '/', hash: '#experience' }, section: 'experience' },
    { label: '/photography', to: { path: '/photography' }, route: 'photography' },
]

export default {
    components: { RouterLink },
    data() {
        return {
            items: ITEMS,
            scrolled: false,
            activeSection: 'intro',
        }
    },
    mounted() {
        window.addEventListener('scroll', this.onScroll, { passive: true });
        this.onScroll();
    },
    unmounted() {
        window.removeEventListener('scroll', this.onScroll);
    },
    methods: {
        isActive(item) {
            if (item.route) return this.$route.name === item.route;
            return this.$route.name === 'home' && this.activeSection === item.section;
        },
        onScroll() {
            this.scrolled = window.scrollY > 100;

            // Highlight the home section currently on screen
            const scrollY = window.scrollY;
            for (const item of this.items) {
                if (!item.section) continue;
                const section = document.getElementById(item.section);
                if (!section) continue;
                const top = section.offsetTop - 100;
                if (scrollY > top && scrollY <= top + section.offsetHeight) {
                    this.activeSection = item.section;
                }
            }
            if (scrollY <= 100) this.activeSection = 'intro';
        },
    }
}
</script>

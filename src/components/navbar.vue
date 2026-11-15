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
                            <span class="p-steps-number">
                                <i v-if="item.icon" class="bi" :class="item.icon" aria-hidden="true"></i>
                                <template v-else>{{ index + 1 }}</template>
                            </span>
                            <span class="p-steps-title">{{ item.label }}</span>
                        </RouterLink>
                    </li>
                </ol>
            </nav>
        </div>

      </header>

    <!-- Phones only: bottom tab bar (the top menu is hidden under 500px) -->
    <nav class="mobile-tabbar" aria-label="Main">
        <RouterLink
            v-for="item in items"
            :key="item.label"
            :to="item.to"
            class="mobile-tab"
            :class="{ active: isActive(item) }"
            :aria-current="isActive(item) ? 'page' : undefined"
        >
            <i class="bi" :class="item.mobileIcon" aria-hidden="true"></i>
            <span class="mobile-tab-label">{{ item.label.slice(1) }}</span>
        </RouterLink>
    </nav>

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

/* Bottom tab bar: hidden on larger screens */
.mobile-tabbar {
    display: none;
}

@media screen and (max-width: 500px) {
    /* The tab bar replaces the top menu, so drop it instead of leaving an empty gap */
    header {
        display: none;
    }

    .mobile-tabbar {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1000;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        padding: 6px 4px calc(6px + env(safe-area-inset-bottom));
        background-color: rgba(10, 25, 47, 0.96);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
    }

    .mobile-tab {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2px;
        min-height: 48px;
        border-radius: 10px;
        color: var(--slate);
        font-family: "NTR", sans-serif;
        /* #app sets a large font-size on phones; keep the bar's text small and fixed */
        font-size: 12px;
        line-height: 1.1;
        -webkit-tap-highlight-color: transparent;
        transition: color 0.2s ease, background-color 0.2s ease;
    }
    .mobile-tab i {
        font-size: 20px;
    }
    .mobile-tab .mobile-tab-label {
        color: inherit;
    }
    /* Active tab: cyan icon and bold label, no background (like the desktop menu) */
    .mobile-tab.active {
        color: var(--green-bright);
        font-weight: bold;
    }
    .mobile-tab:focus-visible {
        outline: 2px solid var(--green-bright);
        outline-offset: -2px;
    }
}
</style>

<style>
/* Leave room at the bottom of every page so the tab bar never covers content */
@media screen and (max-width: 500px) {
    body {
        padding-bottom: calc(64px + env(safe-area-inset-bottom));
    }
}
</style>

<script>
import { RouterLink } from 'vue-router'

// Home page sections the navbar can scroll to.
// Projects (#proyects) is hidden for now; add { label: '/projects', to: { path: '/', hash: '#proyects' }, section: 'proyects' } to bring it back.
// `icon` replaces the step number in the top menu; `mobileIcon` is used by the phone tab bar.
const ITEMS = [
    { label: '/home', to: { path: '/', hash: '#intro' }, section: 'intro', mobileIcon: 'bi-house' },
    { label: '/about', to: { path: '/', hash: '#about' }, section: 'about', mobileIcon: 'bi-person' },
    { label: '/experience', to: { path: '/', hash: '#experience' }, section: 'experience', mobileIcon: 'bi-briefcase' },
    { label: '/photography', to: { path: '/photography' }, route: 'photography', icon: 'bi-camera', mobileIcon: 'bi-camera' },
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

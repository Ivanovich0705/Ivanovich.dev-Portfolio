<template>

    <header class="sticky-md-top align-items-center" v-on:scroll="scrollFunction">

        <div class="navline">
            <nav id="pv_id_1" class="p-steps p-component">
                <ol class="p-steps-list">
                    <li class="p-steps-item p-highlight p-steps-current">
                        <a href="#intro" class="p-menuitem-link router-link-active router-link-active-exact" tabindex="0" aria-current="step">
                            <span class="p-steps-number">1</span>
                            <span class="p-steps-title">/home</span>
                        </a>
                    </li>
                    <li class="p-steps-item">
                        <a href="#about" class="p-menuitem-link " tabindex="-1">
                            <span class="p-steps-number">2</span>
                            <span class="p-steps-title">/about</span>
                        </a>
                    </li>
                    <li class="p-steps-item">
                        <a href="#experience" class="p-menuitem-link" tabindex="-1">
                            <span class="p-steps-number">3</span>
                            <span class="p-steps-title">/experience</span>
                        </a>
                    </li>
                    <li class="p-steps-item">
                        <a href="/hjd" class="p-menuitem-link" tabindex="-1">
                            <span class="p-steps-number">4</span>
                            <span class="p-steps-title">/sofware-creations</span>
                        </a>
                    </li>
                </ol>
            </nav>
        </div>

      </header>
    

</template>

<style>

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
}

span{
    color: var(--green-bright);
}
.header-scrolled{
    opacity: 0.95;
}
</style>

<script scoped>
//TODO:detect id and set it active on navbar with pi-highlight class
export default {
    data() {
        return {
            items: [{
                label: '/home',
                to: '/#intro'
            },
            {
                label: '/about',
                to: '/kh'
            },
            {
                label: '/experience',
                to: '/hj'
            },
            {
                label: '/sofware-creations',
                to: '/hjd'
            }],
            formObject: {}
        }
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
  } ,
    methods: {
        handleScroll(event) {
            const header = document.querySelector('header');            

            if (window.scrollY > 100) {
                header.classList.add('header-scrolled');
                
            } else {
                header.classList.remove('header-scrolled');

            }
        },
        nextPage(event) {
            for (let field in event.formData) {
                this.formObject[field] = event.formData[field];
            }

            this.$router.push(this.items[event.pageIndex + 1].to);
        },
        prevPage(event) {
            this.$router.push(this.items[event.pageIndex - 1].to);
        },
        complete() {
            this.$toast.add({severity:'success', summary:'Order submitted', detail: 'Dear, ' + this.formObject.firstname + ' ' + this.formObject.lastname + ' your order completed.'});
        }
    }
}
</script>
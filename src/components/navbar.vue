<template>

    <header class="sticky-md-top align-items-center" v-on:scroll="changeColor">

        <div class="navline">
            <nav id="pv_id_1" class="p-steps p-component navigation">
                <ol class="p-steps-list">
                    <li href="#intro" class="p-steps-item intro p-highlight scrollspy p-steps-current">
                        <a href="#intro" class="p-menuitem-link router-link-active router-link-active-exact" tabindex="0" aria-current="step">
                            <span class="p-steps-number">1</span>
                            <span class="p-steps-title">/home</span>
                        </a>
                    </li>
                    <li href="#about" class="p-steps-item about scrollspy">
                        <a href="#about" class="p-menuitem-link" tabindex="-1">
                            <span class="p-steps-number">2</span>
                            <span class="p-steps-title">/about</span>
                        </a>
                    </li>
                    <li href="#experience" class="p-steps-item scrollspy">
                        <a href="#experience" class="p-menuitem-link scrollspy" tabindex="-1">
                            <span class="p-steps-number">3</span>
                            <span class="p-steps-title">/experience</span>
                        </a>
                    </li>
                    <li class="p-steps-item scrollspy">
                        <a href="/hjd" class="p-menuitem-link scrollspy" tabindex="-1">
                            <span class="p-steps-number">4</span>
                            <span class="p-steps-title">/sofware-creations</span>
                        </a>
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

<script scoped>
export default {
    data() {
        return {
            formObject: {}
        }
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener("scroll", this.navHighlighter);
        let sections = document.querySelectorAll("section[id]");
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
        navHighlighter() {
            let sections = document.querySelectorAll("section[id]");
            // Get current scroll position
            let scrollY = window.pageYOffset;
            
            // Now we loop through sections to get height, top and ID values for each
            sections.forEach(current => {
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop - 100;
                let sectionId = current.getAttribute("id");
                if (
                scrollY > sectionTop &&
                scrollY <= sectionTop + sectionHeight
                ){
                    document.querySelector(".navigation li[href*=" + sectionId + "]").classList.add("p-highlight");
                } else {
                    document.querySelector(".navigation li[href*=" + sectionId + "]").classList.remove("p-highlight");
                }
            });
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
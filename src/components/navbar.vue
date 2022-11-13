<template>

    <header class="sticky-md-top align-items-center" v-on:scroll="scrollFunction">
        <div class="navline">
            <Steps :model="items" :readonly="false">
            </Steps>
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
export default {
    data() {
        return {
            items: [{
                label: '/home',
                to: '/'
            },
            {
                label: '/about',
                to: '/seat'
            },
            {
                label: '/experience',
                to: '/payment'
            },
            {
                label: '/sofware-creations',
                to: '/confirmation'
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
<template>
    <div data-aos="fade-up" data-aos-delay="100" class="section-header">
        <span class="section-title">{{title}}</span>
      </div>
</template>

<script>
export default {
  name: "sectionTitle",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.section-header {
    display: flex;
    padding-bottom: 42px;
  }
  
  .section-header::after {
    content: "";
    display: block;
    width: 300px;
    margin-top: 39px;
    height: 1px;
    margin-left: 20px;
    background-color: var(--lightest-navy);
  }
  .section-title {
    font-family: "NTR", sans-serif;
    color: var(--lightest-slate);
    font-size: 46px;
    font-weight: bold;
  }
  @media screen and (max-width: 768px) {
    .section-header::after {
      width: 200px;
    }
    .section-title {
      font-size: 36px;
    }
    .section-header::after {
      content: "";
      display: block;
      width: 100px;
      margin-top: 39px;
      height: 1px;
      margin-left: 20px;
      background-color: var(--lightest-navy);
    }
  }
</style>
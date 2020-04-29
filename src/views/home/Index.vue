<!-- this is home page contents -->
<template>
  <section>
    
    <home-hero />

  </section>
</template>

<script>
export default {
  name: "Home",
  components: {
    HomeHero: () => import('./Hero'),
  },

  data: () => ({
    //
  }),

  computed: {},

  methods: {},

  mounted() {}
};
</script>

<style lang='scss' scoped>

</style>
<!-- logo -->
<template>
  <router-link
    :to="{ name: 'Home', params: {}}"
    aria-label="Yuri's Home Page"
    class="d-flex align-center text--primary"
    title="Yuri's Home Page"
    style="text-decoration: none;"
    @click.native="$vuetify.goTo(0)"
  >
    <v-sheet
      class="display-1 hidden-sm-and-down font-weight-medium mr-0 mr-md-4"
      color="transparent"
    >Site title</v-sheet>
  </router-link>
</template>

<script>
export default {
  name: "BaseLogo",
  components: {},

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
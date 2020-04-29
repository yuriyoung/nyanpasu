<!-- logo -->
<template>
  <router-link
    :to="{ name: 'Home', params: {}}"
    :aria-label="appName"
    class="d-flex align-center text--primary"
    :title="appName"
    style="text-decoration: none;"
    @click.native="$vuetify.goTo(0)"
  >
    <v-icon color="pink" size="48">mdi-alpha-n-circle-outline</v-icon>
    <v-sheet
      class="display-1 hidden-sm-and-down font-weight-medium mr-0 mr-md-4"
      color="transparent"
    >{{appName.substr(1)}}</v-sheet>
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
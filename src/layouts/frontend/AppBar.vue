<!-- app bar -->
<template>
  <v-app-bar id="app-toolbar" app dark elevate-on-scroll color="primary" extension-height="40">
    <v-container class="pa-0 d-flex">
      <base-logo />

      <v-spacer />

        <v-toolbar-items>
            <v-btn exact min-width="48" text>
                Menus
                <v-icon>mdi-menu-down</v-icon>
            </v-btn>
        </v-toolbar-items>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "FrontendAppBar",
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
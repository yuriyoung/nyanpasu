<!-- this is home page contents -->
<template>
  <section>
    <base-section
      id="home-hero"
      class="py-6 py-md-12"
    >
      <v-responsive :max-width="1280 + 24" min-height="30vh">
        <v-container>
          <v-row align="center">
            <v-col cols="12" md="8">
              <v-responsive>Home hero content here</v-responsive>
            </v-col>
          </v-row>
        </v-container>
      </v-responsive>
    </base-section>
  </section>
</template>

<script>
export default {
  name: "Home",
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
<!--  -->
<template>
  <v-footer id="footer" dark>
    <v-container class="text-center">
      <v-row>
        <v-col cols="12">
          <div>Copyright &copy; 2019-{{ (new Date()).getFullYear() }} Yuri, QQ 12319597</div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "FrontendFooter",
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
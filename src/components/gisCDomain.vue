<template>
  <div id="gis_c_wrap">
    <gisH></gisH>
    <gisA></gisA>
    <gisB></gisB>
  </div>

</template>

<script>
export default {
  data() {
    return {
      name: "HelloWorld",
      msg: "Welcome to Your Vue.js App"
    };
  },
  components: {
    gisA: require("./gisADomain.vue").default,
    gisB: require("./gisBDomain.vue").default,
    gisH: require("./gisHeaderDomian.vue").default
  }
};
</script>

<style scoped lang="less">
#gis_c_wrap {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>

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
    gisA: require("./GIS_A.vue").default,
    gisB: require("./GIS_B.vue").default,
    gisH: require("./GIS_H.vue").default
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

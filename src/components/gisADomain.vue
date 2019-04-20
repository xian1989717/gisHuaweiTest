<template>
  <div id="gis_a_wrap">
    <tableCom
      :data="tableData"
      height="90%"
    ></tableCom>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: {
        tableColumn: [
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄",
            tag: "家"
          },
          {
            date: "2016-05-04",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1517 弄",
            tag: "公司"
          },
          {
            date: "2016-05-01",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1519 弄",
            tag: "家"
          },
          {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄",
            tag: "公司"
          },
          {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄",
            tag: "公司"
          },
          {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄",
            tag: "公司"
          },
          {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄",
            tag: "公司"
          },
          {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄",
            tag: "公司"
          },
          {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄",
            tag: "公司"
          },
          {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄",
            tag: "公司"
          },
          {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄",
            tag: "公司"
          },
          {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄",
            tag: "公司"
          },
          {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄",
            tag: "公司"
          },
          {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄",
            tag: "公司"
          },
          {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄",
            tag: "公司"
          },
          {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄",
            tag: "公司"
          },
          {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄",
            tag: "公司"
          },
          {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄",
            tag: "公司"
          },
          {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄",
            tag: "公司"
          }
        ]
      }
    };
  },
  components: {
    tableCom: require("../basicComponents/tableComponents.vue").default
  }
  // mounted() {
  //   const that = this;
  //   window.onresize = () => {
  //     return (() => {
  //       window.screenHeight = document.body.clientHeight;
  //       that.tableHeight = window.screenHeight + "";
  //     })();
  //   };
  // },
  // watch: {
  //   tableHeight(val) {
  //     if (!this.timer) {
  //       this.tableHeight = val + "";
  //       this.timer = true;
  //       let that = this;
  //       setTimeout(function() {
  //         that.timer = false;
  //       }, 400);
  //     }
  //   }
  // }
};
</script>

<style lang="less" scoped>
#gis_a_wrap {
  position: absolute;
  top: 60px;
  bottom: 0px;
  width: 350px;
}
</style>

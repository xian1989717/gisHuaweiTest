<template>
  <div id="gis_a_wrap">
    <div class="part_sheet_a_wrap">
      <div
        class="part_sheet_a"
        v-for="item in sheetPart"
        :key="item.id"
        @click="changePartSheetA(item.id)"
      >
        {{item.text}}
      </div>
    </div>
    <tableCom
      v-show="showTableData1"
      :data="tableData1"
      style="float:right;width:264px;border-left:1px solid #ccc;"
      height="90%"
    ></tableCom>
    <tableCom
      v-show="showTableData2"
      :data="tableData2"
      style="float:right;width:264px;border-left:1px solid #ccc;"
      height="90%"
    ></tableCom>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showTableData1: true,
      showTableData2: false,
      tableData1: {
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
      },
      tableData2: {
        tableColumn: [
          {
            date: "2016-05-02",
            name: "peter",
            address: "上海市普陀区金沙江路 1518 弄",
            tag: "家"
          },
          {
            date: "2016-05-04",
            name: "peter",
            address: "上海市普陀区金沙江路 1517 弄",
            tag: "公司"
          },
          {
            date: "2016-05-01",
            name: "peter",
            address: "上海市普陀区金沙江路 1519 弄",
            tag: "家"
          },
          {
            date: "2016-05-03",
            name: "peter",
            address: "上海市普陀区金沙江路 1516 弄",
            tag: "公司"
          },
          {
            date: "2016-05-03",
            name: "peter",
            address: "上海市普陀区金沙江路 1516 弄",
            tag: "公司"
          },
          {
            date: "2016-05-03",
            name: "peter",
            address: "上海市普陀区金沙江路 1516 弄",
            tag: "公司"
          }
        ]
      },
      sheetPart: [{ id: 0, text: "Site" }, { id: 1, text: "Cell" }]
    };
  },
  components: {
    tableCom: require("../basicComponents/tableCom/tableComponents.vue").default
  },
  methods: {
    changePartSheetA(id) {
      if (id === 0) {
        this.showTableData1 = true;
        this.showTableData2 = false;
      } else {
        this.showTableData1 = false;
        this.showTableData2 = true;
      }
    }
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
  overflow: hidden;
  .part_sheet_a_wrap {
    width: 85px;
    float: left;
    .part_sheet_a {
      width: 100%;
      margin-left: 1px;
      height: 50px;
      border-bottom: 1px solid #ccc;
    }
  }
}
</style>

<template>
  <div id="gis_b_wrap">
    <el-tabs
      v-model="activeName"
      style="margin:0px;"
    >
      <el-tab-pane
        label="用户管理"
        name="first"
      >
        <tableCom
          :data="tableData0"
          :height="tableHeight"
        ></tableCom>
      </el-tab-pane>
      <el-tab-pane
        label="配置管理"
        name="second"
      >
        <tableCom
          :data="tableData1"
          :height="tableHeight"
        ></tableCom>
      </el-tab-pane>
      <el-tab-pane
        label="角色管理"
        name="third"
      >
        <tableCom
          :data="tableData2"
          :height="tableHeight"
        ></tableCom>
      </el-tab-pane>
      <el-tab-pane
        label="定时任务补偿"
        name="fourth"
      >
        <tableCom
          :data="tableData3"
          :height="tableHeight"
        ></tableCom>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      tableHeight: "210",
      tableData0: {
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
      tableData1: {
        tableColumn: [
          {
            date: "2016-05-02",
            name: "peter",
            address: "北京市新城区农业银行",
            tag: "家"
          },
          {
            date: "2016-05-04",
            name: "peter",
            address: "北京市新城区农业银行",
            tag: "公司"
          },
          {
            date: "2016-05-01",
            name: "peter",
            address: "北京市新城区农业银行",
            tag: "家"
          },
          {
            date: "2016-05-03",
            name: "peter",
            address: "北京市新城区农业银行",
            tag: "公司"
          },
          {
            date: "2016-05-03",
            name: "peter",
            address: "北京市新城区农业银行",
            tag: "公司"
          },
          {
            date: "2016-05-03",
            name: "peter",
            address: "北京市新城区农业银行",
            tag: "公司"
          },
          {
            date: "2016-05-03",
            name: "peter",
            address: "北京市新城区农业银行",
            tag: "公司"
          },
          {
            date: "2016-05-03",
            name: "peter",
            address: "北京市新城区农业银行",
            tag: "公司"
          },
          {
            date: "2016-05-03",
            name: "peter",
            address: "北京市新城区农业银行",
            tag: "公司"
          },
          {
            date: "2016-05-03",
            name: "peter",
            address: "北京市新城区农业银行",
            tag: "公司"
          },
          {
            date: "2016-05-03",
            name: "peter",
            address: "北京市新城区农业银行",
            tag: "公司"
          },
          {
            date: "2016-05-03",
            name: "peter",
            address: "北京市新城区农业银行",
            tag: "公司"
          },
          {
            date: "2016-05-03",
            name: "peter",
            address: "北京市新城区农业银行",
            tag: "公司"
          },
          {
            date: "2016-05-03",
            name: "peter",
            address: "北京市新城区农业银行",
            tag: "公司"
          },
          {
            date: "2016-05-03",
            name: "peter",
            address: "北京市新城区农业银行",
            tag: "公司"
          },
          {
            date: "2016-05-03",
            name: "peter",
            address: "北京市新城区农业银行",
            tag: "公司"
          },
          {
            date: "2016-05-03",
            name: "peter",
            address: "北京市新城区农业银行",
            tag: "公司"
          },
          {
            date: "2016-05-03",
            name: "peter",
            address: "北京市新城区农业银行",
            tag: "公司"
          },
          {
            date: "2016-05-03",
            name: "peter",
            address: "北京市新城区农业银行",
            tag: "公司"
          }
        ]
      },
      tableData2: {
        tableColumn: [
          {
            date: "2016-05-02",
            name: "李小虎",
            address: "广州市天河区小蛮腰",
            tag: "家"
          },
          {
            date: "2016-05-04",
            name: "李小虎",
            address: "广州市天河区小蛮腰",
            tag: "公司"
          },
          {
            date: "2016-05-01",
            name: "李小虎",
            address: "广州市天河区小蛮腰",
            tag: "家"
          },
          {
            date: "2016-05-03",
            name: "李小虎",
            address: "广州市天河区小蛮腰",
            tag: "公司"
          },
          {
            date: "2016-05-03",
            name: "李小虎",
            address: "广州市天河区小蛮腰",
            tag: "公司"
          },
          {
            date: "2016-05-03",
            name: "李小虎",
            address: "广州市天河区小蛮腰",
            tag: "公司"
          },
          {
            date: "2016-05-03",
            name: "李小虎",
            address: "广州市天河区小蛮腰",
            tag: "公司"
          },
          {
            date: "2016-05-03",
            name: "李小虎",
            address: "广州市天河区小蛮腰",
            tag: "公司"
          },
          {
            date: "2016-05-03",
            name: "李小虎",
            address: "广州市天河区小蛮腰",
            tag: "公司"
          },
          {
            date: "2016-05-03",
            name: "李小虎",
            address: "广州市天河区小蛮腰",
            tag: "公司"
          },
          {
            date: "2016-05-03",
            name: "李小虎",
            address: "上海市普陀区金沙江路 1516 弄",
            tag: "公司"
          },
          {
            date: "2016-05-03",
            name: "李小虎",
            address: "上海市普陀区金沙江路 1516 弄",
            tag: "公司"
          },
          {
            date: "2016-05-03",
            name: "李小虎",
            address: "上海市普陀区金沙江路 1516 弄",
            tag: "公司"
          },
          {
            date: "2016-05-03",
            name: "李小虎",
            address: "上海市普陀区金沙江路 1516 弄",
            tag: "公司"
          },
          {
            date: "2016-05-03",
            name: "李小虎",
            address: "上海市普陀区金沙江路 1516 弄",
            tag: "公司"
          },
          {
            date: "2016-05-03",
            name: "李小虎",
            address: "上海市普陀区金沙江路 1516 弄",
            tag: "公司"
          },
          {
            date: "2016-05-03",
            name: "李小虎",
            address: "上海市普陀区金沙江路 1516 弄",
            tag: "公司"
          },
          {
            date: "2016-05-03",
            name: "李小虎",
            address: "广州市天河区小蛮腰",
            tag: "公司"
          },
          {
            date: "2016-05-03",
            name: "李小虎",
            address: "广州市天河区小蛮腰",
            tag: "公司"
          }
        ]
      },
      tableData3: {
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
    tableCom: require("../basicComponents/tableCom/tableComponents.vue").default
  }
};
</script>

<style lang="less" scoped>
#gis_b_wrap {
  position: absolute;
  bottom: 0px;
  left: 350px;
  right: 0px;
  height: 300px;
  border-top: 1px solid black;
}
</style>

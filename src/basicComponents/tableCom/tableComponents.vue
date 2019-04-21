<template>
  <div class="table_wrap">
    <el-table
      :data="tableData"
      style="width: 100%;border-top:1px solid #ccc;border-bottom:1px solid #ccc;"
      :height="tableHeight"
      :cell-class-name="tableRowClassName"
      tooltip-effect="dark"
    >
      <el-table-column
        prop="date"
        label="日期"
        sortable
        width="180"
        column-key="date"
        :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
        :filter-method="filterHandler"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        show-overflow-tooltip
        :formatter="formatter"
      >
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="20"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: this.data.tableColumn,
      tableHeight: this.height
    };
  },
  props: {
    data: Object,
    height: String
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      return "tableRowClass";
    },
    formatter(row, column) {
      return row.address;
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    }
  }
};
</script>

<style scope lang="less">
.table_wrap {
  overflow: hidden;
  height: 100%;
  .tableRowClass {
    border-bottom: 1px solid rgb(204, 204, 204);
  }
  .el-pagination {
    float: right;
    margin: 10px 50px 0 0;
    padding: 0px;
  }
}
</style>
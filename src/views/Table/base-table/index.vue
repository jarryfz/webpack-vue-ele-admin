<template>
  <div>
    <table-pane
      :search-data="searchData"
      :table-data="tableData"
      :table-row-class-name="tableRowClassName"
      @highlightCurrentChange="highlightCurrentChange"
      @handleSelectionChange="handleSelectionChange"
      @handleCurrentChange="handleCurrentChange"
      @handleSizeChange="handleSizeChange"
    />
  </div>
</template>

<script>
import TablePane from '_c/Table/tablePane.vue'
export default {
  name: 'BaseTable',
  components: {
    TablePane
  },
  data () {
    return {
      searchData: {
        elInput: [
          {
            key: 'name',
            name: '名称',
            width: 150
          }
        ],
        datePicker: {
          key: 'time',
          name: '时间',
          type: 'date'
        }
      },
      tableData: {
        border: true, // 是否开启边框
        stripe: false, // 是否带斑马纹
        // index: true, // 是否开启序号
        rowClassName: true, // 带状态表格
        currentRow: true, // 单选
        selection: true, // 多选
        tool: [
          {
            name: '新增用户', // 按钮名称
            key: 1, // 唯一标识符
            type: '', // 使用element自带按钮类型
            bgColor: '#67c23a', // 自定义背景色
            handleClick: this.handleAdd // 自定义事件
          }
        ],
        // 列
        cols: [
          {
            prop: 'name',
            // fiexd: 'left', // 固定列 left， right
            label: '名称'
          }
        ],
        // 表格数据
        data: [],
        // 分页
        pageData: {
          align: 'left', // 分页位置 left左 center中 right右
          total: 5, // 总条数
          pageSize: 3, // 每页数量
          pageNum: 1, // 页码
          pageSizes: [2, 5, 15, 20]// 每页数量
        }
      },
      listData: [
        { name: '张三', id: 1 },
        { name: '李四', id: 2 },
        { name: '王五', id: 3 },
        { name: '李彩', id: 4 },
        { name: '吴思', id: 5 }
      ]
    }
  },
  mounted () {
    this.tableData.data = [this.listData[0], this.listData[1]]
  },
  methods: {
    handleAdd (val, e) {
      console.log(val, e)
    },
    tableRowClassName ({row, rowIndex}) {
      console.log(row, rowIndex)
      if (rowIndex === 1) {
        return 'warning-row'
      } else if (rowIndex === 3) {
        return 'success-row'
      }
      return ''
    },
    highlightCurrentChange (val) {
      console.log(val)
    },
    // 多选
    handleSelectionChange (row) {
      console.log(row)
    },
    handleSizeChange (val) {
      console.log(val)
    },
    // 分页
    handleCurrentChange (val) {
      this.tableData.data = [this.listData[val - 1], this.listData[val]]
    }
  },
}
</script>
<style lang="less" scoped>
  
</style>
<template>
  <div>
    <table-pane
      :table-data="tableData"
      :table-row-class-name="tableRowClassName"
      :loading="loading"
      @highlight-current-change="highlightCurrentChange"
      @handle-selection-change="handleSelectionChange"
      @handle-current-change="handleCurrentChange"
      @handle-size-change="handleSizeChange"
      @handle-search="search"
      @handle-reset="reset"
    />
  </div>
</template>

<script>
import TablePane from '_c/Table/tablePane.vue'
export default {
  name: 'PageTable',
  components: {
    TablePane
  },
  data() {
    return {
      loading: true,
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
        border: true,
        // 列
        cols: [
          {
            prop: 'name',
            // fiexd: 'left', // 固定列 left， right
            label: '名称',
            render: (h, data) => {
              return h(
                'el-tag',
                {
                  props: {
                    type: 'info'
                  }
                },
                data.name
              )
            }
          }
        ],
        // 表格数据
        data: [
          { id: 1, name: 'name' }
        ],
        // 操作列
        operation: {
          label: '操作',
          overflowTooltip: true,
          fixed: 'right',
          btns: [
            {
              type: 'primary',
              icon: 'el-icon-view',
              label: '查看',
              // 点击事件
              btnRowClick: ((index, row) => {
                console.log(index, row)
              })
            }
          ]
        },
        // 分页
        pageData: {
          align: 'left', // 分页位置 left左 center中 right右
          total: 5, // 总条数
          pageSize: 10, // 每页数量
          pageNum: 1, // 页码
          pageSizes: [10, 20, 30, 40] // 每页数量
        }
      },
    }
  },
  mounted () {
    setTimeout(() => {
      this.loading = false
    }, 1000)
  }
}
</script>
<style lang="less" scoped>
  
</style>
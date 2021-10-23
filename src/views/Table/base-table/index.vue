<template>
  <div>
    <table-pane
      :search-data="searchData"
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
  name: 'BaseTable',
  components: {
    TablePane
  },
  data () {
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
        data: [],
        // 操作列
        operation: {
          label: '操作',
          overflowTooltip: true,
          // width: 150,
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
            },
            {
              type: 'success',
              icon: 'el-icon-edit',
              label: '编辑',
              // 是否可操作
              isDisabled: ((index, row) => {
                const disabled = row.id === 1
                return disabled
              }),
              // 点击事件
              btnRowClick: ((index, row) => {
                console.log(index, row)
              })
            },
            {
              type: 'danger',
              // icon: 'el-icon-delete',
              label: '删除',
              // 是否可操作
              isDisabled: ((index, row) => {
                const disabled = row.id === 1
                return disabled
              }),
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
    this.tableData.data = this.listData
    setTimeout(() => {
      this.loading = false
    }, 1000)
  },
  methods: {
    handleAdd (val, e) {
      console.log(val, e)
    },
    // 搜索
    search (data) {
      console.log(data)
    },
    // 重置
    reset (data) {
      console.log(data)
    },
    tableRowClassName ({row, rowIndex}) {
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
    handleCurrentChange (val) {}
  }
}
</script>
<style lang="less" scoped>
  
</style>
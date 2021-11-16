<template>
  <div>
    <table-pane
      ref="table"
      :search-data="searchData"
      :table-data="tableData"
      @handle-current-change="handleCurrentChange"
      @handle-size-change="handleSizeChange"
    />
  </div>
</template>

<script>
import TablePane from '_c/Table/tablePane.vue'
export default {
  name: 'FiltersTable',
  components: {
    TablePane
  },
  data () {
    return {
      // 搜索栏
      searchData: {},
      tableData: {
        border: true,
        defaultSort: {prop: 'age', order: 'descending'},
        tool: [
          {
            key: '',
            name: '清除过滤器',
            handleClick: (name, e) => {
              this.$refs.table.$refs.elTable.clearFilter()
            }
          }
        ],
        cols: [
          {
            prop: 'name',
            filters: [
              { text: '张三', value: '张三' },
              { text: '李四', value: '李四' },
              { text: '王五', value: '王五' }
            ],
            filterHandler: (value, row, column) => {
              const property = column.property
              return row[property] === value
            },
            label: '姓名'
          },
          {
            prop: 'age',
            sortable: true,
            label: '年龄'
          },
          {
            prop: 'sex',
            label: '性别',
            render: (h, data) => {
              return h(
                'el-tag',
                {
                  props: {
                    type: 'info'
                  }
                },
                data.sex == 1 ? '男' : '女'
              )
            }
          }
        ],
        data: [
          { id: 1, name: '张三', age: '14', sex: '1' },
          { id: 2, name: '李四', age: '15', sex: '2' },
          { id: 3, name: '王五', age: '16', sex: '2' },
          { id: 4, name: '王五', age: '16', sex: '2' },
          { id: 5, name: '王五', age: '16', sex: '2' },
          { id: 6, name: '王五', age: '16', sex: '2' },
          { id: 7, name: '张三', age: '14', sex: '1' },
          { id: 8, name: '李四', age: '15', sex: '2' },
          { id: 9, name: '王五', age: '16', sex: '2' },
          { id: 10, name: '王五', age: '16', sex: '2' }
        ],
        operation: {
          label: '操作',
          btns: [
            {
              type: 'primary',
              icon: 'el-icon-view',
              label: '查看',
              // 点击事件
              btnRowClick: ((index, row) => {
                this.$notify({
                  title: '提示',
                  message: row,
                  duration: 0
                })
              })
            }
          ]
        },
        // 分页
        pageData: {
          align: 'left', // 分页位置 left左 center中 right右
          total: 10, // 总条数
          pageSize: 10, // 每页数量
          pageNum: 1, // 页码
          pageSizes: [10, 20, 30, 40] // 每页数量
        }
      }
    }
  },
  methods: {
    handelSearch (params) {
      this.$notify({
        title: '提示',
        message: params,
        duration: 3000
      })
    },
    handleSelectionChange (rows) {
      this.multipleSelection = rows
    },
    handleCurrentChange (val) {
      this.$notify({
        title: '提示',
        message: val,
        duration: 1000
      })
    },
    handleSizeChange (val) {
      this.$notify({
        title: '提示',
        message: val,
        duration: 1000
      })
    }
  }
}
</script>
<style lang="less" scoped>

</style>
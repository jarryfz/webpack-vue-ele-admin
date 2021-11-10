<template>
  <div>
    <table-pane
      :search-data="searchData"
      :table-data="tableData"
      @handle-current-change="handleCurrentChange"
      @handle-size-change="handleSizeChange"
      @handle-search-btn="handelSearch"
      @handle-selection-change="handleSelectionChange"
    />
  </div>
</template>

<script>
import TablePane from '_c/Table/tablePane.vue'
export default {
  name: 'SearchTable',
  components: {
    TablePane
  },
  data () {
    return {
      multipleSelection: [],
      // 搜索栏
      searchData: {
        elInput: [
          { width: 150, key: 'name', name: '姓名' },
          { width: 160, key: 'age', name: '年龄' }
        ],
        elSelect: [
          { width: 150, key: 'sex', name: '性别', options: [{label: '男', value: 1}, {label: '女', value: 2}] }
        ]
      },
      tableData: {
        border: true,
        selection: true,
        tool: [
          {
            key: '',
            name: '确认选择',
            handleClick: (name, e) => {
              this.$notify({
                title: '提示',
                message: this.multipleSelection,
                duration: 2000
              })
            }
          }
        ],
        cols: [
          {
            prop: 'name',
            label: '姓名'
          },
          {
            prop: 'age',
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
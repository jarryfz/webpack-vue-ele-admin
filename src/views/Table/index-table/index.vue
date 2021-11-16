<template>
  <div>
    <table-pane
      :table-data="tableData"
      :loading="loading"
    />
  </div>
</template>

<script>
import TablePane from '_c/Table/tablePane.vue'
export default {
  name: 'IndexTable',
  components: {
    TablePane
  },
  data () {
    return {
      loading: true,
      tableData: {
        index: true,
        border: true, // 是否开启边框
        // 列
        cols: [
          {
            prop: 'name',
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
  methods: {}
}
</script>
<style lang="less" scoped>
  
</style>
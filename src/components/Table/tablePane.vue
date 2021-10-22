<template>
  <div class="table-wrap">
    <Search :search-data="searchData" />
    <div class="table-container">
      <div v-if="tableData.tool" class="tool">
        <el-button
          v-for="(item) in tableData.tool"
          :key="item.key"
          v-permission="item.permission"
          class="filter-item"
          :style="{'background':item.bgColor,borderColor:item.bgColor}"
          :type="item.type || 'primary'"
          @click="item.handleClick(item.name,$event)"
        >
          {{ item.name }}
        </el-button>
      </div>
      <el-table
        ref="elTable"
        style="width: 100%"
        :data="tableData.data"
        :border="!!tableData.border"
        :stripe="!!tableData.stripe"
        :row-class-name="tableRowClassName"
        :highlight-current-row="!!tableData.currentRow"
        :row-key="getRowKeys"
        @current-change="highlightCurrentChange"
        @selection-change="handleSelectionChange"
      >
        <!-- 是否开启序号 -->
        <el-table-column
          v-if="tableData.index"
          type="index"
          label="序号"
          width="50"
          align="center"
        />
        <!-- 多选 -->
        <el-table-column
          v-if="tableData.selection"
          type="selection"
          width="55"
          :reserve-selection="true"
          align="center"
        />
        <template v-for="item in tableData.cols">
          <!-- 普通列，适用大部分情况 -->
          <el-table-column
            :key="item.prop"
            :prop="item.prop"
            :label="item.label"
            :width="item.width"
            :fiexd="item.fiexd"
            align="center"
          >
          </el-table-column>
        </template>
      </el-table>
      <!-- 分页 -->
      <div class="pagination-box" :style="{'text-align': tableData.pageData.align ? tableData.pageData.align  : 'right' }">
        <el-pagination
          v-if="tableData.pageData.total > 0"
          :current-page="tableData.pageData.pageNum"
          :page-sizes="tableData.pageData.pageSizes ? tableData.pageData.pageSizes : [10, 20, 30, 40]"
          :page-size="tableData.pageData.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableData.pageData.total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Search from './search.vue'
export default {
  name: 'TablePane',
  components: {
    Search
  },
  props: {
    // 搜索栏
    searchData: {
      type: Object,
      default: () => {}
    },
    // 表格配置数据
    tableData: {
      type: Object,
      default: () => {}
    },
    // 带状态表格 可以通过指定 Table 组件的 row-class-name 属性来为 Table 中的某一行添加 class，表明该行处于某种状态
    tableRowClassName: {
      type: Function,
      default: () => {}
    }
  },
  data () {
    return {
      getRowKeys (row) {
        return row.id
      }
    }
  },
  methods: {
    handleSizeChange (val) {
      this.$emit('handleSizeChange', val)
    },
    handleCurrentChange (val) {
      this.$emit('handleCurrentChange', val)
    },
    // 表格单选
    highlightCurrentChange (val) {
      if(this.tableData.currentRow) {
        this.$emit('highlightCurrentChange', val)
      }
    },
    // 多选
    handleSelectionChange (row) {
      if(this.tableData.selection) {
        this.$emit('handleSelectionChange', row)
      }
    }
  },
}
</script>

<style lang="less" scoped>
  .table-wrap {
    .table-container {
      background: #ffffff;
      padding: 20px;
    }
    .pagination-box {
      margin: 10px 0 0 0;
    }
    .tool {
      margin-bottom: 10px;
    }
  }
  /deep/.el-table .warning-row {
    background: oldlace;
  }

  /deep/.el-table .success-row {
    background: #f0f9eb;
  }
</style>

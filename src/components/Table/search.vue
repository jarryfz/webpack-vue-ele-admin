<template>
  <div class="search-container">
    <template v-if="searchData.elInput">
      <div
        v-for="(item, index) in searchData.elInput"
        :key="index"
        class="search-input-box"
      >
        <span class="label-input">{{ item.name }}</span>
        <el-input
          v-model="listQuery[item.key]"
          :placeholder="item.name"
          :style="{'width': item.width ? item.width + 'px' : '200px'}"
          class="search-input"
        />
      </div>
    </template>
    <template v-if="searchData.elSelect">
      <div
        v-for="(item, index) in searchData.elSelect"
        :key="index"
        class="search-input-box"
      >
        <span class="label-input">{{ item.name }}</span>
        <el-select
          v-model="listQuery[item.key]"
          :multiple="item.multiple ? item.multiple : false"
          :placeholder="item.name"
          :filterable="item.filterable ? item.filterable : false"
          clearable
          :style="{'width': item.width ? item.width + 'px' : '200px'}"
          class="search-select"
        >
          <el-option
            v-for="(val, i) in item.options"
            :key="i"
            :label="val.label"
            :value="val.value"
          />
        </el-select>
      </div>
    </template>
    <div class="search-btn">
      <el-button
        class="filter-item"
        type="primary"
        @click="handleSearch"
      >
        搜索
      </el-button>
      <el-button
        class="filter-item"
        type="warning"
        @click="handleRest"
      >
        重置
      </el-button>
    </div>
  </div>
</template>

<script>
// 搜索栏
// searchData: {
//   // 输入框
//   elInput: [
//     {
//       width: 150, // 输入框宽度
//       key: 'name', // v-model值
//       name: '姓名' // label
//     },
//     ...
//   ],
//   // 选择框
//   elSelect: [
//     {
//       width: 150, // 选择框宽度
//       key: 'select', // v-model
//       name: 'label', // label
//       multiple: true, // 开启多选
//       filterable: true, // 开启搜索,
//       options: [ // option
//         {
//           label: 'label',
//           value: 'value'
//         },
//         ...
//       ]
//     },
//     ...
//   ]
// }
export default {
  name: 'TablePane',
  props: {
    searchData: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      listQuery: {}
    }
  },
  methods: {
    handleSearch () {

    },
    handleRest () {

    }
  }
}
</script>

<style lang="less" scoped>
  .search-container {
    .search-input-box {
      display: inline-block;
    }
    .search-btn {
      margin-left: 10px;
      display: inline-block;
    }
  }
</style>

<template>
  <div class="data-table">
    <!-- 表格内容 -->
    <el-table
      id="table"
      :data="list"
      style="width: 100%;"
      max-height="600px"
      stripe
      lazy
      :header-cell-style="{ background: '#F2F2F2', color: '#7C7C7C' }"
      :cell-style="setCellStyle"
    >
      <el-table-column
        v-for="(col, index) in rowHeader"
        :key="index"
        :prop="col.prop"
        :sortable="col.sortable == undefined ? false : col.sortable"
        :label="col.label"
        align="center"
        min-width="180"
      >
        <template slot-scope="scope">
          <span v-if="!col.action || !scope.row[col.prop]">
            {{ scope.row[col.prop] && scope.row[col.prop] != '0000-00-00' && scope.row[col.prop] != '0000-00-00 00:00:00' ? scope.row[col.prop] : '-' }}
          </span>
          <span v-else>
            <img :src="scope.row[col.prop]" alt="" class="productImg">
          </span>
        </template>
    </el-table-column>

      <!-- 操作 -->
      <el-table-column
        v-if="operation.length > 0"
        fixed="right"
        label="操作"
        align="center"
        :min-width="120*operation.length"
      >
        <template slot-scope="scope">
          <span v-for="(item, index) in operation" :key="index">
            <span>
              <el-button
                v-if="item.operationType != 'delete'"
                :type="item.type"
                @click.stop="btnClick(item.operationType, scope.row, scope.$index)"
              >
                {{ item.label }}
              </el-button>
              <el-popconfirm
                v-else
                title="确认删除？"
                @onConfirm="btnClick(item.operationType, scope.row, scope.$index)"
              >
                <el-button
                  slot="reference"
                  type="danger"
                  style="margin-left: 10px;"
                >
                  删除
                </el-button>
              </el-popconfirm>
            </span>
          </span>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>
<script>
export default {
  props: {
    rowIndex: { // 是否需要自动编号的序号列
      type: Boolean,
      default: true
    },
    rowHeader: { // 表头
      type: Array,
      default: function() {
        return [
          /* {
              label: 'label', // 显示文案
              prop: 'prop', // 对应的属性名
            }, */
        ]
      }
    },
    list: { // 表格数据
      type: Array,
      default: () => []
    },
    setCellStyleRowNameAndStyleObj: {
      type: Object,
      default: () => {
        return {
          rowName: '',
          styleObj: {
            // cellValue: styleString
            // 单元格的具体值: 样式字符串

            // other: "fontSize: '12px'"
          }
        }
      }
    },
    operation: { // 操作按钮
      type: Array,
      default: function() {
        return [
          /* {
              type: 'primary', // 按钮类型
              label: '删除', // 按钮文案
            }, */
        ]
      }
    },
    currentPage: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    },
    total: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
    }
  },

  methods: {
    /**
     * @description 改变页数
     */
    handleSizeChange(val) {
      this.$emit('update:pageSize', val)
      this.$emit('updatePage')
    },

    /**
     * @description 改变当前页码
     */
    handleCurrentChange(val) {
      this.$emit('update:currentPage', val)
      this.$emit('updatePage')
    },

    /**
     * @description 设置具体单个单元格样式
     */
    setCellStyle({ row, column, rowIndex, columnIndex }) {
      if (column.property == this.setCellStyleRowNameAndStyleObj.rowName) {
        const val = this.list[rowIndex][column.property]
        if (this.setCellStyleRowNameAndStyleObj.styleObj[val] !== 'undefined') {
          return this.setCellStyleRowNameAndStyleObj.styleObj[val]
        } else if (this.setCellStyleRowNameAndStyleObj.styleObj[val] === 'undefined' && this.setCellStyleRowNameAndStyleObj.styleObj.other !== undefined) {
          return this.setCellStyleRowNameAndStyleObj.styleObj.other
        } else {
          return ''
        }
      }
    },

    /**
     * @description 点击操作按钮
     */
    btnClick(operationType, row, index = 0) {
      this.$emit('operation', row)
    },
  }
}
</script>
<style scope lang="scss">
.data-table {
  .table-tool {
    padding: 20px 0;
    .tool-left {
      display: inline-block;
    }

    .tool-right {
      float: right;
    }
  }

  .el-table {
    min-width: 320px;
    overflow: auto;
    .productImg{
        width: 100px;
        height: 100px;
    }
  }

  .el-pagination {
    margin: 20px 0;
    text-align: center;
  }
}
</style>

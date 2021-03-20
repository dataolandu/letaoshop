<template>
  <div class="goodsManagement">
    <el-card>
      <div class="search">
        <!-- 查询栏 -->
        <div class="fun">
          <el-form ref="searchForm" :model="search" label-width="90px">
            <el-row>
              <el-col :span="4" class="w200">
                <el-form-item label="商品编号:" prop="number">
                  <el-input
                    v-model="search.goodsId"
                    placeholder="请输入商品编号"
                    clearable
                  />
                </el-form-item>
              </el-col>
              <el-col :span="4" class="w200">
                <el-form-item label="商品名称:" prop="username">
                  <el-input
                    v-model="search.goodsName"
                    placeholder="请输入商品名称"
                    clearable
                  />
                </el-form-item>
              </el-col>
              <el-col :span="4" class="w200">
                <el-form-item
                  label="商品分类:"
                  label-width="80px"
                  prop="goodsCategory"
                >
                  <el-select
                    v-model="search.goodsCategory"
                    filterable
                    clearable
                    placeholder="请选择商品分类"
                  >
                    <el-option
                      v-for="(item, index) in categoriesData"
                      :key="index"
                      :label="item.categoryName"
                      :value="item.categoryId"
                    />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="4" class="w200">
                <el-form-item label-width="20px">
                  <el-button size="mini" type="primary" @click="onSearch">
                    查询
                  </el-button>
                  <el-button
                    size="mini"
                    type="default"
                    @click="resetForm('searchForm')"
                  >
                    重置
                  </el-button>
                  <el-button
                    size="mini"
                    type="primary"
                    @click="addProductDialog = true"
                  >
                    新增
                  </el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </div>
      <!-- 表格 -->
      <div class="table">
        <DataTable
          v-loading="loading"
          :row-header="historyRowHeader"
          :list.sync="tableData"
          :total="total"
          :current-page.sync="pageNum"
          :page-size.sync="pageSize"
          :operation="operation"
          @updatePage="updatePage"
          @operation="UpdateProduct"
        />
      </div>
    </el-card>
    <!-- 新增弹窗 -->
    <el-dialog
      title="新增商品"
      :visible.sync="addProductDialog"
      width="30%"
      :before-close="closeProductDialog"
    >
      <el-form
        ref="addForm"
        :model="addForm"
        :rules="rules"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="商品名称" prop="productName">
          <el-input v-model="addForm.productName"></el-input>
        </el-form-item>
        <el-form-item label="商品图片" prop="productImg">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-change="handlePictureCardPreview"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="商品分类" prop="category">
          <el-select v-model="addForm.category" placeholder="请选择商品分类">
            <el-option
              v-for="(item, index) in categoriesData"
              :key="index"
              :label="item.categoryName"
              :value="item.categoryId"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="商品单价" prop="price">
          <el-input v-model="addForm.price"></el-input>
        </el-form-item>
        <el-form-item label="商品总量" prop="count">
          <el-input v-model="addForm.count"></el-input>
        </el-form-item>
        <el-form-item label="商品简介" prop="desc">
          <el-input v-model="addForm.desc" type="textarea"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="addProduct('addForm')">立即创建</el-button>
          <el-button @click="resetForm('addForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import DataTable from "./components/DataTable";
const historyRowHeader = [
  {
    label: "商品编号",
    prop: "productId",
  },
  {
    label: "商品图片",
    prop: "productImg",
    action: "img",
  },
  {
    label: "商品名称",
    prop: "productName",
  },
  {
    label: "商品价格",
    prop: "productPrice",
  },
  {
    label: "商品分类",
    prop: "productCategory",
  },
  {
    label: "商品库存",
    prop: "productCount",
  },
  {
    label: "入库时间",
    prop: "date",
  },
];
export default {
  components: {
    DataTable,
  },
  data() {
    return {
      historyRowHeader,
      loading: false,
      addProductDialog: false,
      dialogImageUrl: "",
      search: {
        goodsId: "",
        goodsName: "",
        goodsCategory: ""
      },
      addForm: {
        productName: "",
        category: "",
        desc: "",
        productImg: "",
        price: null,
        count: null
      },
      tableData: [], // 表格数据
      categoriesData: [], // 商品分类列表
      total: 0,
      pageNum: 1,
      pageSize: 10,
      operation: [
        {
          operationType: "operation",
          type: "primary", // 按钮类型
          label: "编辑", // 按钮文案
        },
      ],
      rules: {
        productName: [
          { required: true, message: "请输入商品名称", trigger: "blur" },
        ],
        category: [
          { required: true, message: "请选择商品分类", trigger: "change" },
        ],
        productImg: [
          { required: true, message: "请上传商品图片", },
        ],
        price: [
          { required: true, message: "请输入商品结果", trigger: "blur" },
        ],
        count: [
          { required: true, message: "请输入商品总量", trigger: "blur" },
        ],
        desc: [
          { required: true, message: "请输入商品简介", trigger: "blur" },
        ],
      },
    };
  },
  mounted() {
    this.getCategoriesList();
    this.getDataList(1);
  },
  methods: {
    closeProductDialog() {
      this.addProductDialog = false;
    },
    async getDataList(page) {
      this.loading = true;
      this.pageNum = page;
      let res = await this.$http.getProductList({
        pageNum: this.pageNum,
        pageSize: this.pageSize,
      });
      console.log(res);
      if (res.code == 0) {
        this.tableData = res.data;
        this.tableData.forEach((item) => {
          this.categoriesData.forEach((item1) => {
            if (item.productCategory == item1.categoryId) {
              item.productCategory = item1.categoryName;
            }
          });
        });
      }
      this.loading = false;
    },
    async getCategoriesList() {
      let res = await this.$http.getCategoriesList({
        pageNum: this.pageNum,
        pageSize: this.pageSize,
      });
      if (res.code == 0) {
        this.categoriesData = res.data;
      } else {
        this.$message.error("分类数据请求出错，请联系超管");
      }
    },
    async onSearch() {
      let res = await this.$http.getProductList({
        pageNum: this.pageNum,
        pageSize: this.pageSize,
        productId: this.search.goodsId || '',
        productName: this.search.goodsName || '',
        productCategory: this.search.goodsCategory || '',
      });
      console.log(res);
    },
    resetForm(FormName) {
      this.$refs[FormName].resetFields();
    },
    handlePictureCardPreview(file) {
      this.addForm.productImg = file.url;
    },
    addProduct(formName) {
      console.log(formName);
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          let res = await this.$http.addProduct({
            productName: this.addForm.productName,
            productImg: this.addForm.productImg,
            productCategory: this.addForm.category,
            productPrice: this.addForm.price,
            productCount: this.addForm.count,
            productInfo: this.addForm.desc,
          });
          console.log(res);
          if(res.code == 0) {
            this.getDataList(1)
            this.addProductDialog = false
            this.$message({
              message: '恭喜你，这是一条成功消息',
              type: 'success'
            });
          }
        } else {
          return false;
        }
      });
    },
    updatePage(item) {
      console.log(item);
    },
    UpdateProduct(item) {
      console.log(item);
    },
  },
};
</script>

<style lang="scss">
.goodsManagement {
  margin: 0 auto;
  .el-card {
    height: 70%;
    margin-top: 20px;
    .search {
      margin-bottom: 10px;
      border-bottom: 1px solid #ccc;
    }
    .table {
      width: 1560px;
    }
  }
}
</style>
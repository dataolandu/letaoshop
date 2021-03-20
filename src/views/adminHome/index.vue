<template>
  <div>
    <el-container>
      <el-header>
        <div class="system-body">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            @select="handleSelect"
          >
            <div class="menu-body">
              <div class="system-name">后台管理系统</div>
              <el-menu-item
                v-for="(item, index) in menu"
                :key="index"
                :index="item.menuId"
                @click="getAsideMenu(item)"
                >{{ item.menuName }}</el-menu-item
              >
            </div>
            <div class="system-user">
              <el-dropdown>
                <span class="el-dropdown-link">
                  下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>黄金糕</el-dropdown-item>
                  <el-dropdown-item>狮子头</el-dropdown-item>
                  <el-dropdown-item>螺蛳粉</el-dropdown-item>
                  <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                  <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </el-menu>
        </div>
      </el-header>
      <el-container>
        <el-aside v-if="asideMenu.children" width="250px">
          <el-col :span="24">
            <el-menu
              default-active="1"
              class="el-menu-vertical-demo"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
            >
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>{{ asideMenu.menuName }}</span>
                </template>
                <el-menu-item
                  v-for="(item, index) in asideMenu.children"
                  :key="index"
                  :index="item.id"
                  @click="goAsideMenu(item)"
                  >{{ item.menuChildren }}</el-menu-item
                >
              </el-submenu>
            </el-menu>
          </el-col>
        </el-aside>
        <router-view></router-view>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1", //默认选择菜单
      asideMenu: {},
      menu: [
        {
          menuId: "1",
          menuName: "主页",
        },
        {
          menuId: "2",
          menuName: "人员管理",
          children: [
            { id: "2-1", menuChildren: "用户管理", router: 'userManagement' },
            { id: "2-2", menuChildren: "管理员列表", router: 'adminManagement'  },
          ],
        },
        {
          menuId: "3",
          menuName: "商品管理",
          children: [
            { id: "3-1", menuChildren: "商品管理", router: 'goodsManagement' },
            { id: "3-2", menuChildren: "分类管理", router: 'categoriesManagement' },
          ],
        },
        {
          menuId: "4",
          menuName: "订单管理",
          children: [{ id: "4-1", menuChildren: "订单管理", router: 'ordersManagement' }],
        },
      ],
    };
  },
  mounted() {
    this.getRouter()
  },
  methods: {
    getRouter() {
      console.log(this.$route.fullPath.split('/')[2]);
      this.menu.forEach(item => {
        if(item.children ) {
          item.children.forEach(item1 => {
            if(item1.router == this.$route.fullPath.split('/')[2]) {
              this.activeIndex = item.menuId
              this.asideMenu = item
            }
          })
        }
      })
    },
    getAsideMenu(item) {
      console.log(item);
      this.asideMenu = item;
    },
    goAsideMenu(item) {
      if(item.router == this.$route.fullPath.split('/')[2]) {
        return false
      }
      this.$router.push('/admin/' + item.router)
    },
    handleSelect(key, keypath) {
      console.log(key, keypath);
    },
  },
};
</script>

<style lang="scss">
.el-header {
  background-color: #b3c0d1;
  padding: 0 !important;
  color: #333;
  height: 56px !important;
  .system-body {
    display: inline-block;
    width: 100%;
    .el-menu {
      .menu-body {
        float: left;
        width: 700px;
        .system-name {
          float: left;
          height: 56px;
          line-height: 56px;
          color: #fff;
          font-size: 18px;
          padding: 0 70px;
        }
        .el-menu-item {
          float: left;
        }
      }
      .system-user {
        float: right;
        width: 100px;
        .el-dropdown-link {
          cursor: pointer;
          color: #409eff;
        }
        .el-icon-arrow-down {
          font-size: 12px;
        }
      }
    }
  }
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  height: 908px;
  .el-col {
      height: 100%;
    .el-menu {
      height: 100%;
      .el-submenu__title {
        text-align: center;
        padding-right: 50px;
      }
    }
  }
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
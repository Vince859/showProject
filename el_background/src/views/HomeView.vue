<template>
  <div class="index-heinght">
    <el-container>
      <el-header>
        欢迎来到智慧电子签后台管理系统
        <div style="float: left"><strong>智慧电子签管理后台</strong></div>
        <div style="float: right; cursor: pointer" @click="logout()">注销</div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu :default-openeds="['1', '3']" style="height: 100%">
            <el-menu-item-group>
              <router-link class="text-none" to="/data">
                <el-menu-item index="1"
                  ><i class="el-icon-s-data"></i>数据分析</el-menu-item
                >
              </router-link>
              <router-link class="text-none" to="user">
                <el-menu-item index="2"
                  ><i class="el-icon-user-solid"></i>用户管理</el-menu-item
                >
              </router-link>
            </el-menu-item-group>
            <el-submenu index="3">
              <template slot="title"
                ><div class="submenu">
                  <i class="el-icon-document"></i>模板管理
                </div></template
              >
              <el-menu-item-group>
                <router-link class="text-none" to="receiptModel">
                  <el-menu-item index="3-1"
                    ><i class="el-icon-receiving"></i>收据模板</el-menu-item
                  >
                </router-link>
                <router-link class="text-none" to="iouModel">
                  <el-menu-item index="3-2"
                    ><i class="el-icon-wallet"></i>借条模板</el-menu-item
                  >
                </router-link>
                <router-link class="text-none" to="tenancyModel">
                  <el-menu-item index="3-3"
                    ><i class="el-icon-files"></i>租房合同模板</el-menu-item
                  >
                </router-link>
                <router-link class="text-none" to="parttimeModel">
                  <el-menu-item index="3-4"
                    ><i class="el-icon-copy-document"></i
                    >兼职合同模板</el-menu-item
                  >
                </router-link>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <tagsView></tagsView>
          <div style="margin: 15px 0">
            <router-view />
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import tagsView from "../components/tagsView.vue";
export default {
  name: "HomeView",
  components: {
    tagsView,
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      if (!localStorage.getItem("token")) {
        this.$router.push("/");
      }
    },
  },
};
</script>
<style scoped>
.index-heinght {
  position: fixed;
  width: 100%;
  height: 100%;
}
.el-container {
  padding: 0;
  height: 100%;
}
.el-header {
  background-color: #2e3235;
  color: white;
  text-align: center;
  line-height: 60px;
}
.submenu {
  font-size: 15px;
  color: white;
}
.el-menu,
.el-menu-item-group,
.el-menu-item {
  background-color: #2e3235;
  color: white;
  font-size: 15px;
}
::v-deep.el-submenu.is-active > .el-submenu__title {
  color: white !important;
}
::v-deep .el-submenu.is-active > .el-submenu__title i {
  color: white !important;
}
.el-submenu__title:hover {
  outline: 0 !important;
  background-color: red !important;
}
.el-menu-item:focus,
.el-menu-item:hover {
  background-color: #4d5252;
}
.el-menu {
  border-right: none;
}
.el-menu-item.is-active {
  border-left: solid 3px #bb070c;
  color: white;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 20px;
}
.text-none {
  text-decoration: none;
}
</style>

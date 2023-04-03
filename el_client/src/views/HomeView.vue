<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">
        <div class="aside-header">
          <div class="loginName">{{ loginName }}</div>
        </div>
        <el-menu :default-openeds="['1', '6']" style="height: (100%-100px)">
          <el-menu-item-group>
            <router-link class="text-none" to="personCenter">
              <el-menu-item index="1"
                ><i class="el-icon-user-solid icon-color"></i
                >个人中心</el-menu-item
              >
            </router-link>

            <router-link class="text-none" to="floder">
              <el-menu-item index="2"
                ><i class="el-icon-s-data icon-color"></i>文件夹</el-menu-item
              >
            </router-link>
            <router-link class="text-none" to="sign">
              <el-menu-item index="3"
                ><i class="el-icon-s-check icon-color"></i
                >签名管理</el-menu-item
              >
            </router-link>
          </el-menu-item-group>
          <el-menu-item-group>
            <router-link class="text-none" to="receiptModel">
              <el-menu-item index="4"
                ><i class="el-icon-s-ticket icon-color"></i>小收据</el-menu-item
              >
            </router-link>
            <router-link class="text-none" to="iouModel">
              <el-menu-item index="5"
                ><i class="el-icon-s-order icon-color"></i>小借条</el-menu-item
              >
            </router-link>
          </el-menu-item-group>
          <el-submenu index="6">
            <template slot="title">
              <div class="submenu">
                <i class="el-icon-s-management icon-color"></i>小合同
              </div>
            </template>
            <el-menu-item-group>
              <router-link class="text-none" to="tenancyModel">
                <el-menu-item index="6-1"
                  ><i class="el-icon-s-finance icon-color"></i
                  >租房合同</el-menu-item
                >
              </router-link>
              <router-link class="text-none" to="parttimeModel">
                <el-menu-item index="6-2"
                  ><i class="el-icon-s-marketing icon-color"></i
                  >兼职合同</el-menu-item
                >
              </router-link>
            </el-menu-item-group>
          </el-submenu>
        </el-menu></el-aside
      >
      <el-main>
        <!-- <canvasBord></canvasBord> -->
        <div>
          <router-view />
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import canvasBord from "@/components/canvasBord.vue";
// @ is an alias to /src

export default {
  components: { canvasBord },
  name: "HomeView",
  data() {
    return {
      loginName: "",
    };
  },
  methods: {
    getName() {
      this.loginName = localStorage.getItem("loginName");
    },
  },
  mounted() {
    this.getName();
  },
};
</script>
<style scoped>
.home,
.el-container {
  width: 100%;
  height: 100%;
  position: fixed;
}
.el-aside {
  background-color: #4ba79c;
  color: white;
}
.el-menu,
.el-menu-item-group,
.el-menu-item {
  background-color: #4ba79c;
  color: white;
  font-size: 15px;
  text-decoration: none;
}
.el-menu {
  border-right: none;
}
.submenu {
  font-size: 15px;
  color: white;
}
.el-menu-item:focus,
.el-menu-item:hover {
  background-color: #179090;
}
::v-deep.el-submenu.is-active > .el-submenu__title {
  color: white !important;
}
::v-deep .el-submenu.is-active > .el-submenu__title i {
  color: white !important;
}
.el-menu-item.is-active {
  border-left: solid 3px white;
  color: white;
}
.el-main {
  padding: 0;
}
.icon-color {
  color: aqua;
}
.text-none {
  text-decoration: none;
}
.aside-header {
  width: 200px;
  height: 100px;
  position: relative;
}
.loginName {
  width: 80px;
  height: 80px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: #336699;
  border-radius: 50px;
  line-height: 80px;
  white-space: nowrap; /*强制内容在一行显示*/
  overflow: hidden; /*超出部分溢出*/
  text-overflow: ellipsis; /*溢出的部分使用省略号*/
}
</style>

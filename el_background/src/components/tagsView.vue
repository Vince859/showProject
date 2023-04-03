<template>
  <div class="tags" v-if="showTags">
    <ul>
      <li
        class="tags-li"
        v-for="(item, index) in tagsList"
        :class="{ active: isActive(item.path) }"
        :key="index"
      >
        <router-link :to="item.path" class="tags-li-title">
          {{ item.title }}
        </router-link>
        <span class="tags-li-icon" @click="closeTags(index)"
          ><i class="el-icon-close"></i
        ></span>
      </li>
    </ul>
    <!-- 其他操作按钮 -->
    <div class="tags-close-box">
      <el-dropdown @command="handleTags">
        <el-button size="mini">
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="other">关闭其他</el-dropdown-item>
          <el-dropdown-item command="all">关闭所有</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "tagsView",
  data() {
    return {
      tagsList: [],
    };
  },
  computed: {
    showTags() {
      return this.tagsList.length > 0;
    },
  },
  watch: {
    $route(newValue) {
      this.setTags(newValue);
    },
  },
  created() {
    this.setTags(this.$route);
  },
  methods: {
    isActive(path) {
      return path === this.$route.fullPath;
    },
    //关闭单个标签
    closeTags(index) {
      const delItem = this.tagsList.splice(index, 1)[0];
      const item = this.tagsList[index]
        ? this.tagsList[index]
        : this.tagsList[index - 1];
      if (item) {
        delItem.path === this.$route.fullPath && this.$router.push(item.path);
      } else {
        this.$router.push("/home");
      }
    },
    //关闭全部标签
    closeAll() {
      this.tagsList = [];
      this.$router.push("/home");
    },
    //关闭其他标签
    closeOther() {
      const curItem = this.tagsList.filter((item) => {
        return item.path === this.$route.fullPath;
      });
      this.tagsList = curItem;
    },
    //设置标签
    setTags(route) {
      const isExist = this.tagsList.some((item) => {
        return item.path === route.fullPath;
      });
      !isExist &&
        this.tagsList.push({
          title: route.meta.title,
          path: route.fullPath,
          name: route.matched[1].components.default.name,
        });
    },
    //当关闭所有页面时隐藏下拉菜单
    handleTags(command) {
      command === "other" ? this.closeOther() : this.closeAll();
    },
  },
};
</script>

<style scoped>
.tags {
  position: relative;
  height: 50px;
  overflow: hidden;
  background: #fff;
  padding-right: 120px;
  border-radius: 10px;
}

.tags ul {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin-top: 6px;
  padding-left: 10px;
  list-style-type: none;
}

.tags-li {
  height: 30px;
  float: left;
  margin: 3px 5px 2px 3px;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;
  line-height: 30px;
  border: 1px solid #e9eaec;
  background: #fff;
  padding: 0 5px 0 12px;
  /* vertical-align: middle; */
  color: #666;
  /*   -webkit-transition: all 0.3s ease-in;
  -moz-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in; */
}

.tags-li:not(.active):hover {
  background: #f8f8f8;
}

.tags-li-title {
  float: left;
  max-width: 100px;
  text-decoration: none;
  margin-right: 5px;
  color: #666;
}

.tags-li.active {
  color: #fff;
  border: 1px solid #bb070c;
  background-color: #bb070c;
}

.tags-li.active .tags-li-title {
  color: #fff;
}

.tags-close-box {
  position: fixed;
  right: 0;
  top: 90px;
  box-sizing: border-box;
  padding-top: 1px;
  margin-right: 40px;
  text-align: center;
  z-index: 10;
}
.el-dropdown {
  height: 20px;
}
</style>

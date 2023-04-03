<template>
  <div class="sign">
    <div class="header">
      <h1 style="display: inline">我的签名</h1>
    </div>
    <div class="search">
      <el-button style="margin-left: 5px" type="primary" @click="visible = true"
        >新增签名</el-button
      >
    </div>
    <div class="content">
      <template v-if="this.lists.length != 0">
        <div
          v-for="(item, i) in this.lists"
          :key="item.id"
          class="content_son"
          @mousemove="mouseOn(i)"
          @mouseout="mouseOut(i)"
        >
          <el-dropdown id="dro" style="margin: 5px 10px 0 0" trigger="click">
            <span class="el-dropdown-link">
              <i
                class="el-icon-arrow-down el-icon-more"
                ref="i"
                style="
                  background-color: #9b9aa7;
                  font-size: 20px;
                  color: #fff;
                  border-radius: 5px;
                  width: 30px;
                  display: none;
                "
              ></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="deleteSign(item.id)"
                >删除签名</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
          <div class="content_grand">
            <img :src="item.sign" alt="" />
          </div>
        </div>
      </template>
    </div>
    <el-dialog
      title="在线签名"
      width="800"
      :visible.sync="visible"
      :append-to-body="true"
    >
      <sign-canvas
        class="sign-canvas"
        ref="SignCanvas"
        :options="options"
        v-model="value"
      />
      <div class="btnList">
        <el-button
          type="danger"
          size="small"
          icon="el-icon-delete"
          @click="canvasClear()"
          >清空</el-button
        >
        <el-button
          type="primary"
          size="small"
          icon="el-icon-check"
          @click="saveAsImg()"
          >保存</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "sign",
  inject: ["reload"],
  data() {
    return {
      lists: [],
      user: {
        //图片信息Base64
        src: "",
        user_email: "",
        id: "",
      },
      //弹窗变量
      visible: false,
      value: null,
      options: {
        lastWriteSpeed: 1, //书写速度 [Number] 可选
        lastWriteWidth: 2, //下笔的宽度 [Number] 可选
        lineCap: "round", //线条的边缘类型 [butt]平直的边缘 [round]圆形线帽 [square]	正方形线帽
        lineJoin: "round", //线条交汇时边角的类型  [bevel]创建斜角 [round]创建圆角 [miter]创建尖角。
        canvasWidth: 700, //canvas宽高 [Number] 可选
        canvasHeight: 450, //高度  [Number] 可选
        isShowBorder: false, //是否显示边框 [可选]
        bgColor: "#e0e3e5", //背景色 [String] 可选
        borderWidth: 1, // 网格线宽度  [Number] 可选
        borderColor: "#ff787f", //网格颜色  [String] 可选
        writeWidth: 5, //基础轨迹宽度  [Number] 可选
        maxWriteWidth: 30, // 写字模式最大线宽  [Number] 可选
        minWriteWidth: 5, // 写字模式最小线宽  [Number] 可选
        writeColor: "#101010", // 轨迹颜色  [String] 可选
        isSign: true, //签名模式 [Boolean] 默认为非签名模式,有线框, 当设置为true的时候没有任何线框
        imgType: "png", //下载的图片格式  [String] 可选为 jpeg  canvas本是透明背景的
      },
    };
  },
  mounted() {
    this.selectSign();
  },
  methods: {
    mouseOn(i) {
      this.$refs.i[i].style.display = "block";
    },
    mouseOut(i) {
      this.$refs.i[i].style.display = "none";
    },
    canvasClear() {
      this.$refs.SignCanvas.canvasClear();
    },
    // 保存签名
    saveAsImg() {
      const img = this.$refs.SignCanvas.saveAsImg();
      this.user.src = img;
      this.user.user_email = localStorage.getItem("loginEmail");
      this.$axios.post("/addSign", this.user).then((res) => {
        this.$message({
          message: "新增签名成功",
          type: "success",
        });
      });
      this.reload();
      this.canvasClear();
      this.visible = false;
    },
    selectSign() {
      this.user.user_email = localStorage.getItem("loginEmail");
      this.$axios.post("/selectSign", this.user).then((res) => {
        this.lists = res.data.result;
      });
    },
    deleteSign(id) {
      this.user.id = id;
      this.$axios.post("/deleteSign", this.user).then((res) => {
        this.$message({
          message: "删除签名成功",
          type: "success",
        });
      });
      this.reload();
    },
  },
};
</script>
<style scoped>
.sign {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #eef2f3;
  overflow: scroll;
}
.header {
  padding-right: 10%;
  padding-top: 20px;
}
.search {
  /* width: 200px; */
  height: 30px;
  padding: 20px 0 0 30px;
  text-align: left;
}
.el-dropdown {
  border: 1px solid #eef1f4;
  float: right;
  margin-right: 18%;
  position: relative; /*这个是关键*/
  z-index: 2;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.content {
  width: 80%;
  height: 100% - 102px;
}
.content_son {
  width: 200px;
  height: 130px;
  border-radius: 10px;
  background-color: #fff;
  margin: 40px 0px 0px 40px;
  border-top: 2px solid #4ba79c;
  float: left;
  transition: All 0.4s ease-in-out;
  -webkit-transition: All 0.4s ease-in-out;
  -moz-transition: All 0.4s ease-in-out;
  -o-transition: All 0.4s ease-in-out;
}
.content_son:hover {
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -o-transform: scale(1.1);
  -ms-transform: scale(1.1);
  border: 1px solid #4ba79c;
}
.content_grand {
  width: 150px;
  height: 100px;
  margin: 30px 0 0 20px;
  font-size: 14px;
  color: #7f8586;
}
.content_grand img {
  width: 100%;
  height: 100%;
}
.sign >>> .el-dialog {
  background: #b4a078;
}
.sign >>> .el-dialog__header {
  padding: 2px 0px;
}

.sign >>> .el-dialog__body {
  padding: 0;
}
.sign >>> .el-button {
  /*font-family STXingkai*/
  font-size: 12px;
  font-weight: 400;
}
.btnList {
  padding: 10px 0 10px 40px;
}
.sign >>> .el-dialog__title {
  line-height: 32px;
  font-size: 24px;
  /*font-family STXingkai*/
  color: hsl(40, 28.57%, 30.82%);
  text-shadow: 0 0.03em 0.03em black;
}
.sign-canvas {
  display: block;
  margin: 0 auto;
  background: #f4f0ea;
  border-radius: 8px;
}
</style>

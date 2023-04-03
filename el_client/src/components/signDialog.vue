<template>
  <div class="sign">
    <el-dialog
      title="在线签名"
      width="800"
      :visible.sync="visible"
      :append-to-body="true"
    >
      <div class="sign-content" ref="sign" style="display: none">
        <el-carousel :interval="3000" height="450px">
          <el-carousel-item v-for="item in lists" :key="item.id">
            <div @click="querySign(item.sign)">
              <img :src="item.sign" alt="" />
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div ref="canvas">
        <sign-canvas
          class="sign-canvas"
          ref="SignCanvas"
          :options="options"
          v-model="value"
          style="display: block"
        />
      </div>
      <div class="btnList">
        <div ref="basicBtn" style="display: block; float: left">
          <el-button
            ref="clearBtn"
            type="danger"
            size="small"
            @click="canvasClear()"
            >清空</el-button
          >
          <el-button
            ref="saveBtn"
            type="primary"
            size="small"
            @click="saveAsImg()"
            >保存</el-button
          >
        </div>
        <div style="display: block; float: left; margin-left: 10px" ref="myBtn">
          <el-button type="primary" size="small" @click="mySign()"
            >我的签名</el-button
          >
        </div>
        <div
          ref="writeBtn"
          style="display: none; float: left; margin-left: 10px"
        >
          <el-button type="primary" size="small" @click="backSign()"
            >手写签名</el-button
          >
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "signDialog",
  props: {
    //弹窗变量
    visible: {
      type: Boolean,
      default: false,
    },
    //图片信息Base64
    src: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      lists: [],
      user: {
        user_email: "",
      },
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
  methods: {
    /**
     * 清除画板
     */
    canvasClear() {
      this.$refs.SignCanvas.canvasClear();
    },

    /**
     * 保存图片
     */
    saveAsImg() {
      const img = this.$refs.SignCanvas.saveAsImg();
      //alert(`image 的base64：${img}`);
      this.$emit("ImgData", img);
      this.$emit("update:visible", false);
      this.canvasClear();
    },
    mySign() {
      this.$refs.canvas.style.display = "none";
      this.$refs.sign.style.display = "block";
      this.$refs.basicBtn.style.display = "none";
      this.$refs.writeBtn.style.display = "block";
      this.$refs.myBtn.style.display = "none";
    },
    backSign() {
      this.$refs.canvas.style.display = "block";
      this.$refs.sign.style.display = "none";
      this.$refs.basicBtn.style.display = "block";
      this.$refs.writeBtn.style.display = "none";
      this.$refs.myBtn.style.display = "block";
    },
    selectSign() {
      this.user.user_email = localStorage.getItem("loginEmail");
      //console.log(123456);
      this.$axios.post("/selectSign", this.user).then((res) => {
        this.lists = res.data.result;
        if (res.data.result === "查询签名失败") {
          alert("您还没有创建我的签名");
        }
      });
    },
    querySign(sign) {
      this.$emit("ImgData", sign);
      this.$emit("update:visible", false);
      this.canvasClear();
    },
  },
  mounted() {
    this.selectSign();
  },
};
</script>

<style scoped>
.sign >>> .el-dialog {
  background: #b4a078;
}
.sign >>> .el-dialog__header {
  padding: 2px 0px;
}

.sign >>> .el-dialog__body {
  padding: 0px, 0px, 0px, 0px;
}
.sign >>> .el-button {
  /*font-family STXingkai*/
  font-size: 12px;
  font-weight: 400;
}
.btnList {
  padding: 10px 0 10px 20px;
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
.sign-content {
  width: 700px;
  height: 450px;
  background-color: #e0e3e5;
  margin-left: 10px;
  border-radius: 8px;
}
.el-carousel__item {
  color: #475669;
  opacity: 0.75;
  margin: 0;
}
</style>

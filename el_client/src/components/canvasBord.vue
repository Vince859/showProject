<template>
  <div class="sign-canvas">
    <canvas
      id="canvas"
      width="800"
      height="400"
      @mousedown="canvasDown($event)"
      @mousemove="canvasMove($event)"
      @mouseup="canvasUp()"
      @mouseleave="canvasLeave()"
      ref="canvas"
    >
      抱歉，您的浏览器暂不支持canvas元素
    </canvas>
    <div class="sign-btn">
      <el-button type="info" @click="clear">清空</el-button>
      <el-button type="primary" @click="save">保存</el-button>
    </div>
    <div style="width: 200px; height: 200px">
      <img :src="picture" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "canvasBord",
  data() {
    return {
      picture: "",
    };
  },
  mounted() {
    this.show();
  },
  methods: {
    show() {
      this.canvas = this.$refs.canvas; // 指定canvas
      console.log("122", this.canvas);
      this.ctx = this.canvas.getContext("2d"); // 设置2D渲染区域
      this.ctx.lineWidth = 5; // 设置线的宽度
    },
    canvasDown(e) {
      this.canvasMoveUse = true;
      const canvasX =
        e.clientX - e.target.offsetLeft + document.documentElement.scrollLeft;
      const canvasY =
        e.clientY - e.target.offsetTop + document.documentElement.scrollTop;
      this.ctx.beginPath(); // 移动的起点
      this.ctx.moveTo(canvasX, canvasY);
    },
    canvasMove(e) {
      // 只在移动是进行绘制图线
      if (this.canvasMoveUse) {
        const t = e.target;
        let canvasX;
        let canvasY;
        canvasX =
          e.clientX - t.offsetLeft + document.documentElement.scrollLeft;
        canvasY = e.clientY - t.offsetTop + document.documentElement.scrollTop;
        this.ctx.lineTo(canvasX, canvasY);
        this.ctx.stroke();
      }
    },
    canvasUp() {
      this.canvasMoveUse = false;
    },
    canvasLeave() {
      this.canvasMoveUse = false;
    },
    clear() {
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    },
    save() {
      const imgBase64 = this.$refs.canvas.toDataURL();
      this.picture = imgBase64;
      console.log("imgBase64", imgBase64);
    },
  },
};
</script>

<style scoped>
.sign-canvas {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  /* padding: 20px 30px; */
}
.sign-canvas canvas {
  border-radius: 15px;
  background-color: #e0e3e5;
}
.sign-btn {
  display: flex;
  margin: 20px 0;
}
.sign-btn div {
  width: 175px;
  text-align: center;
  height: 70px;
  line-height: 70px;
  color: #ffffff;
}
.sign-btn div:active {
  background-color: #cccccc;
  color: #333333;
}
</style>

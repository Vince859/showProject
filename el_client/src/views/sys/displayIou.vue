<template>
  <div class="iouComfire">
    <div class="header">
      <h1 style="display: inline">展示借条</h1>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <el-button type="primary" :disabled="!buttonStatus" @click="generatePDf"
        >下载借条</el-button
      >
    </div>
    <div class="content_father">
      <div class="content_son">
        <el-form label-width="320px" class="demo-ruleForm">
          <el-form-item label-width="200px" style="margin-bottom: 0px"
            ><el-col :span="16"
              ><h1 style="color: #4ba79c">借条</h1></el-col
            ></el-form-item
          >
          <div class="line">
            <span
              >..................................................................................................................................................................................</span
            >
          </div>
          <div class="text">
            {{ this.textArr[0] }} <strong> {{ this.iou.iou_incident }}</strong
            >，{{ this.textArr[1]
            }}<strong>
              {{
                iou.iou_leader_name === "" || iou.iou_leader_name === undefined
                  ? "待对方填写"
                  : leaderStr
              }}</strong
            >{{ this.textArr[3] }} <strong> {{ this.iou.iou_money }}</strong
            >，{{ this.textArr[4]
            }}<strong> {{ this.iou.iou_appoint_rate }}</strong
            >，{{ this.textArr[5]
            }}<strong> {{ this.iou.iou_startTime }} </strong
            >{{ this.textArr[6] }} <strong> {{ this.iou.iou_endTime }} </strong
            >{{ this.textArr[7]
            }}<strong>
              {{ this.iou.iou_endTime }} {{ this.iou.iou_repayment }}</strong
            >。<br />
            {{ this.textArr[8] }}
            <strong>
              {{
                iou.iou_leader_name === "" || iou.iou_leader_name === undefined
                  ? "待对方填写"
                  : iou.iou_leader_name
              }}
            </strong>
            {{ this.textArr[9] }}
            <strong> {{ this.iou.iou_borrower_name }} </strong>
            {{ this.textArr[10] }}
            <strong> {{ this.iou.iou_payment }} </strong>。{{
              this.textArr[11]
            }}
          </div>
          <el-form-item label="出 借 人:" class="item">
            <div class="sign" @click="handleReceiverFlag" v-if="leaderId">
              <strong
                ><span ref="leaderSign" style="display: block"
                  >点击签署</span
                ></strong
              >
              <img
                ref="leaderImg"
                style="width: 100px; height: 50px; display: none"
                :src="this.img.leaderPicture"
                alt=""
              />
            </div>
            <h3 style="text-align: left; padding-left: 10px" v-if="!leaderId">
              <strong>{{ iou.iou_leader_name }}</strong>
            </h3>
          </el-form-item>
          <el-form-item label="借 款 人:" class="item">
            <div class="sign" @click="handleReceiverFlag" v-if="borrowerId">
              <div ref="borrowerSign" style="display: block">
                <strong><span>点击签署</span></strong>
              </div>
              <div ref="borrowerImg" style="display: none">
                <img
                  style="width: 100px; height: 50px"
                  :src="this.img.borrowerPicture"
                  alt=""
                />
              </div>
            </div>
            <h3 style="text-align: left; padding-left: 10px" v-if="!borrowerId">
              <strong>{{ iou.iou_borrower_name }}</strong>
            </h3>
          </el-form-item>
          <el-form-item label="证件类型:" class="item">
            <h3 style="text-align: left; padding-left: 10px">
              <strong>{{ iou.iou_borrower_idtype }}</strong>
            </h3>
          </el-form-item>
          <el-form-item label="证 件 号:" class="item">
            <h3 style="text-align: left; padding-left: 10px">
              <strong>{{ iou.iou_borrower_idnumber }}</strong>
            </h3>
          </el-form-item>
          <el-form-item label="手 机 号:" class="item">
            <h3 style="text-align: left; padding-left: 10px">
              <strong>{{ iou.iou_borrower_phone }}</strong>
            </h3>
          </el-form-item>
          <el-form-item label="其他约定:" class="item">
            <h3 style="text-align: left; padding-left: 10px">
              <strong>{{
                iou.iou_other_appointment === "" ||
                iou.iou_other_appointment === undefined
                  ? "无"
                  : iou.iou_other_appointment
              }}</strong>
            </h3>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <!-- 签名对话框 -->
    <SignDialog
      :visible.sync="receiverSignFlag"
      @change="handleReceiverSign"
      @ImgData="ImgData"
    ></SignDialog>
  </div>
</template>
<script>
import SignDialog from "@/components/signDialog.vue";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default {
  components: { SignDialog },
  name: "displayIou",
  inject: ["reload"],
  data() {
    return {
      iou: {},
      iouId: {
        iou_id: "",
      },
      iouImg: {
        iouUserType: "",
        iou_id: "",
        iou_sign: "",
      },
      receiverSignFlag: false,
      img: {
        leaderPicture: "",
        borrowerPicture: "",
      },
      iouModel: {},
      textArr: [],
      url: "",
      buttonStatus: false,
      leaderId: false,
      borrowerId: false,
      signStatus: false,
    };
  },
  methods: {
    ImgData(data) {
      let userId = localStorage.getItem("loginIdNumber");
      this.signStatus = true;
      if (
        this.iou.iou_status === "2" &&
        this.iou.iou_borrower_idnumber === userId
      ) {
        this.img.borrowerPicture = data;
      }
      if (
        this.iou.iou_status === "2" &&
        this.iou.iou_leader_idnumber === userId
      ) {
        this.img.leaderPicture = data;
      }
      //console.log(124, this.img.picture);
    },
    handleReceiverSign() {
      this.receiverSignFlag = true;
    },
    handleReceiverFlag() {
      this.receiverSignFlag = true;
      //this.sign();
    },
    getIouModel() {
      this.$axios.post("/getIouModel", this.user).then((res) => {
        //console.log("res", res);
        this.iouModel = res.data.result[0];
        const str = this.iouModel.iou_textpart;
        this.textArr = str.split("XXX");
        //console.log("arr-", this.textArr);
      });
    },
    updateIou() {
      //添加签署状态,在借条，合同的签署过程中只有双方都签署了才将iou_status赋值3
      this.iouImg.iou_status = 3;
      this.iouImg.iouUserType = "";
      this.iouImg.iou_id = this.$route.params.id;
      //this.iouImg.iou_sign = this.img.picture;
      this.$axios.post("/signIou", this.iouImg).then((res) => {
        console.log("res-", res);
      });
    },
    getIouById() {
      //获取从文件夹传过来的借条ID
      this.iouId.iou_id = this.$route.params.id;
      this.$axios.post("/selectIouById", this.iouId).then((res) => {
        console.log("展示页面根据ID查询的借条", res.data.result[0]);
        this.iou = res.data.result[0];
        //处理日期格式
        let time = this.iou.iou_period.split(",");
        let dt1 = new Date(time[0]);
        let month1 =
          dt1.getMonth() + 1 < 10
            ? "0" + (dt1.getMonth() + 1)
            : dt1.getMonth() + 1;
        let date1 = dt1.getDate() < 10 ? "0" + dt1.getDate() : dt1.getDate();
        this.iou.iou_startTime = dt1.getFullYear() + "-" + month1 + "-" + date1;

        let dt2 = new Date(time[1]);
        let month2 =
          dt2.getMonth() + 1 < 10
            ? "0" + (dt2.getMonth() + 1)
            : dt2.getMonth() + 1;
        let date2 = dt2.getDate() < 10 ? "0" + dt2.getDate() : dt2.getDate();
        this.iou.iou_endTime = dt2.getFullYear() + "-" + month2 + "-" + date2;

        //处理出借人信息
        this.leaderStr = `${this.iou.iou_leader_name}（证件类型及号码：
            ${this.iou.iou_leader_idtype} ${this.iou.iou_leader_idnumber}）`;

        //处理身份
        let userId = localStorage.getItem("loginIdNumber");
        if (this.iou.iou_borrower_idnumber === userId) {
          this.borrowerId = true;
        }
        if (this.iou.iou_leader_idnumber === userId) {
          this.leaderId = true;
        }
        //处理下载合同按钮状态
        if (this.iou.iou_status === "3") {
          this.buttonStatus = true;
        }
        this.sign();
      });
    },
    sign() {
      //需要写三个接口，首先判断身份，再更新 1.更新a签名 2.更新签名 3. 判断ab都签名后更新文件状态
      //处理身份
      let userId = localStorage.getItem("loginIdNumber");
      this.iouImg.iou_id = this.$route.params.id;
      switch (this.iou.iou_status) {
        case "2":
          if (this.iou.iou_borrower_idnumber === userId) {
            //当出借人有签名时,查出出借人的签名同时将leaderId变为true
            if (this.iou.iou_leader_sign !== "undefined") {
              this.iouImg.iouUserType = "出借人";
              this.$axios
                .post("/selectIouSignById", this.iouImg)
                .then((res) => {
                  this.img.leaderPicture = res.data.result[0].iou_leader_sign;
                });
              this.leaderId = true;
              this.$refs.leaderImg.style.display = "block";
              this.$refs.leaderSign.style.display = "none";
            }
            //当借款人有签名时查出签名，渲染到页面
            if (this.iou.iou_borrower_sign !== "undefined") {
              this.iouImg.iouUserType = "借款人";
              this.$axios
                .post("/selectIouSignById", this.iouImg)
                .then((res) => {
                  this.img.borrowerPicture =
                    res.data.result[0].iou_borrower_sign;
                });
              this.$refs.borrowerImg.style.display = "block";
              this.$refs.borrowerSign.style.display = "none";
            }
            //当点击签署后才进行插入签名
            if (this.signStatus) {
              this.iouImg.iouUserType = "借款人";
              this.iouImg.iou_sign = this.img.borrowerPicture;
              this.$axios.post("/signIou", this.iouImg).then((res) => {
                this.$message({
                  message: "签署成功",
                  type: "success",
                });
              });
              this.$refs.borrowerImg.style.display = "block";
              this.$refs.borrowerSign.style.display = "none";
              this.reload();
            }
            //当两个都有签名时
            if (
              this.iou.iou_borrower_sign !== "undefined" &&
              this.iou.iou_leader_sign !== "undefined"
            ) {
              this.updateIou();
            }
          }
          if (this.iou.iou_leader_idnumber === userId) {
            //当借款人有签名时,查出借款人的签名同时将borrowerId变为true
            if (this.iou.iou_borrower_sign !== "undefined") {
              this.iouImg.iouUserType = "借款人";
              this.$axios
                .post("/selectIouSignById", this.iouImg)
                .then((res) => {
                  this.img.borrowerPicture =
                    res.data.result[0].iou_borrower_sign;
                });
              this.borrowerId = true;
              this.$refs.borrowerImg.style.display = "block";
              this.$refs.borrowerSign.style.display = "none";
            }
            if (this.iou.iou_leader_sign !== "undefined") {
              this.iouImg.iouUserType = "出借人";
              this.$refs.leaderImg.style.display = "block";
              this.$refs.leaderSign.style.display = "none";
              this.$axios
                .post("/selectIouSignById", this.iouImg)
                .then((res) => {
                  this.img.leaderPicture = res.data.result[0].iou_leader_sign;
                });
            }
            //当两个都有签名时
            if (
              this.iou.iou_borrower_sign !== "undefined" &&
              this.iou.iou_leader_sign !== "undefined"
            ) {
              this.updateIou();
            }
            if (this.signStatus) {
              this.iouImg.iouUserType = "出借人";
              this.iouImg.iou_sign = this.img.leaderPicture;
              this.$axios.post("/signIou", this.iouImg).then((res) => {
                this.$message({
                  message: "签署成功",
                  type: "success",
                });
              });
              this.$refs.leaderImg.style.display = "block";
              this.$refs.leaderSign.style.display = "none";
              this.reload();
            }
          }
          break;
        case "3":
          this.$axios.post("/selectIouSignById", this.iouImg).then((res) => {
            this.iouImg.iouUserType = "";
            this.leaderId = true;
            this.borrowerId = true;
            this.img.borrowerPicture = res.data.result[0].iou_borrower_sign;
            this.img.leaderPicture = res.data.result[0].iou_leader_sign;
          });
          this.$refs.leaderImg.style.display = "block";
          this.$refs.leaderSign.style.display = "none";
          this.$refs.borrowerImg.style.display = "block";
          this.$refs.borrowerSign.style.display = "none";

          break;
        default:
          break;
      }
    },
    generatePDf() {
      //获取HTML元素
      const pdfElement = document.getElementsByClassName("content_son");

      //创建jsPDF实例
      const pdf = new jsPDF("p", "pt", "a4");
      //将HTML元素转化为canvas
      html2canvas(pdfElement[0], { allowTaint: true }).then((canvas) => {
        //获取canvas内容
        const imgData = canvas.toDataURL("image/png");
        //添加图像到PDF中
        pdf.addImage(
          imgData,
          "PNG",
          0,
          0,
          pdf.internal.pageSize.width,
          pdf.internal.pageSize.height
        );
        //保存PDF
        pdf.save("借条.pdf");
      });
    },
  },
  mounted() {
    this.getIouById();
    this.getIouModel();
  },
  updated() {
    this.sign();
  },
};
</script>
<style scoped>
.iouComfire {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #eef2f3;
}
.header {
  padding-left: 8%;
  padding-top: 20px;
}
.content_father {
  position: relative;
}
.content_son {
  width: 800px;
  height: 600px;
  position: absolute;
  background-color: #fff;
  top: 330px;
  bottom: 0;
  left: 10%;
  right: 20%;
  margin: auto;
  border-top: 2px solid #4ba79c;
  border-radius: 15px;
}
.line {
  height: 15px;
  line-height: 5px;
  color: #4ba79c;
}
.el-form-item {
  margin-bottom: 5px;
}
.item .el-form-item__label {
  font-size: 15px;
  color: #6c6c6c;
}
.sign {
  width: 100px;
  height: 50px;
  text-align: left;
  padding-left: 10px;
  /* background-color: #eef2f3; */
}
.text {
  width: 500px;
  height: 180px;
  padding: 10px 0 0 160px;
  line-height: 30px;
  text-align: left;
}
</style>

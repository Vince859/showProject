<template>
  <div class="parttimeComfire">
    <div class="header">
      <h1 style="display: inline">展示合同</h1>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <el-button type="primary" :disabled="!buttonStatus" @click="generatePDf"
        >下载合同</el-button
      >
    </div>
    <div class="content_father">
      <!-- 第一页 -->
      <div
        class="content_son"
        style="top: 450px; border-top: 2px solid #4ba79c"
      >
        <el-form label-width="150px" class="demo-ruleForm">
          <el-form-item label-width="200px" style="margin-bottom: 0px"
            ><el-col :span="16"
              ><h1 style="color: #4ba79c">兼职合同</h1></el-col
            ></el-form-item
          >
          <div class="line">
            <span
              >..................................................................................................................................................................................</span
            >
          </div>

          <el-form-item label="甲方（雇佣方）：" class="item">
            <div class="underline">
              <span>
                <strong>
                  {{
                    parttime.parttime_employer_name === "" ||
                    parttime.parttime_employer_name === undefined
                      ? "待对方填写"
                      : parttime.parttime_employer_name
                  }}
                </strong>
              </span>
            </div>
          </el-form-item>
          <el-form-item label="证件类型：" class="item">
            <div class="underline">
              <span>
                <strong>
                  {{
                    parttime.parttime_employer_idtype === "" ||
                    parttime.parttime_employer_idtype === undefined
                      ? "待对方填写"
                      : parttime.parttime_employer_idtype
                  }}
                </strong>
              </span>
            </div>
          </el-form-item>
          <el-form-item label="证件号码：" class="item">
            <div class="underline">
              <span>
                <strong>
                  {{
                    parttime.parttime_employer_idnumber === "" ||
                    parttime.parttime_employer_idnumber === undefined
                      ? "待对方填写"
                      : parttime.parttime_employer_idnumber
                  }}
                </strong>
              </span>
            </div>
          </el-form-item>
          <el-form-item label="手机号码：" class="item">
            <div class="underline">
              <span>
                <strong>
                  {{
                    parttime.parttime_employer_phone === "" ||
                    parttime.parttime_employer_phone === undefined
                      ? "待对方填写"
                      : parttime.parttime_employer_phone
                  }}
                </strong>
              </span>
            </div>
          </el-form-item>
          <el-form-item label="" class="item"> </el-form-item>
          <el-form-item label="" class="item"> </el-form-item>
          <el-form-item label="乙方（兼职方）：" class="item">
            <div class="underline">
              <span>
                <strong>
                  {{
                    parttime.parttime_parttimer_name === "" ||
                    parttime.parttime_parttimer_name === undefined
                      ? "待对方填写"
                      : parttime.parttime_parttimer_name
                  }}
                </strong>
              </span>
            </div>
          </el-form-item>
          <el-form-item label="证件类型：" class="item">
            <div class="underline">
              <span>
                <strong>
                  {{
                    parttime.parttime_parttimer_idtype === "" ||
                    parttime.parttime_parttimer_idtype === undefined
                      ? "待对方填写"
                      : parttime.parttime_parttimer_idtype
                  }}
                </strong>
              </span>
            </div>
          </el-form-item>
          <el-form-item label="证件号码：" class="item">
            <div class="underline">
              <span>
                <strong>
                  {{
                    parttime.parttime_parttimer_idnumber === "" ||
                    parttime.parttime_parttimer_idnumber === undefined
                      ? "待对方填写"
                      : parttime.parttime_parttimer_idnumber
                  }}
                </strong>
              </span>
            </div>
          </el-form-item>
          <el-form-item label="手机号码：" class="item">
            <div class="underline">
              <span>
                <strong>
                  {{
                    parttime.parttime_parttimer_phone === "" ||
                    parttime.parttime_parttimer_phone === undefined
                      ? "待对方填写"
                      : parttime.parttime_parttimer_phone
                  }}
                </strong>
              </span>
            </div>
          </el-form-item>
        </el-form>
        <div class="foreword">
          <span>{{ partimeModel.parttime_foreword }}</span>
        </div>
        <div class="one">
          <div><strong>一、 兼职内容、地点及期限</strong></div>
          <div style="padding-top: 5px">1. {{ textArr.one[0] }}</div>
          <div style="margin-top: 5px; height: 30px">
            <strong
              ><span>
                {{ parttime.parttime_content }}
              </span></strong
            >
          </div>
          <div style="padding-top: 5px">
            2. {{ textArr.one[1] }}：
            <strong
              ><span class="underline">{{ this.time1 }}</span></strong
            >
            至
            <strong
              ><span class="underline">{{ this.time2 }}</span></strong
            >
          </div>
          <div style="margin-top: 5px">3. {{ textArr.one[2] }}：</div>
          <div style="margin-top: 5px; height: 40px">
            <strong
              ><span>
                {{ parttime.parttime_address }}
              </span></strong
            >
          </div>
        </div>
        <div class="two">
          <strong>二、 报酬与结算</strong>
          <div style="margin-top: 5px">
            1. {{ textArr.two[0] }}
            <span class="underline"
              ><strong
                ><span class="underline">{{
                  parttime.parttime_reword
                }}</span></strong
              ></span
            >
          </div>
          <div style="padding-top: 5px">
            2. {{ textArr.two[1] }}
            <span class="underline"
              ><strong
                ><span class="underline">{{
                  parttime.parttime_payment
                }}</span></strong
              ></span
            >
          </div>
          <div style="padding-top: 5px">
            3. {{ textArr.two[2] }}
            <span class="underline"
              ><strong
                ><span class="underline">{{
                  parttime.parttime_settle_period
                }}</span></strong
              ></span
            >
          </div>
          <div style="padding-top: 5px">
            4. {{ textArr.two[3] }}
            <span class="underline"
              ><strong
                ><span class="underline">{{
                  parttime.parttime_settle_time
                }}</span></strong
              ></span
            >
          </div>
        </div>
      </div>
      <!-- 第二页 -->
      <div class="content_son" style="top: 1320px">
        <div class="three">
          <div><strong>三、双方权利义务</strong></div>
          <div style="margin-top: 5px">1. {{ textArr.three[0] }}</div>
          <div style="margin-top: 5px">2. {{ textArr.three[1] }}</div>
          <div style="margin-top: 5px">3. {{ textArr.three[2] }}</div>
          <div style="margin-top: 5px">4. {{ textArr.three[3] }}</div>
          <div style="margin-top: 5px">5. {{ textArr.three[4] }}</div>
          <div style="margin-top: 5px">6. {{ textArr.three[5] }}</div>
          <div style="margin-top: 5px">7. {{ textArr.three[6] }}</div>
        </div>
        <div class="four">
          <div><strong>四、保密条款</strong></div>
          <div style="margin-top: 5px">1. {{ textArr.four[0] }}</div>
          <div style="margin-top: 5px">2. {{ textArr.four[1] }}</div>
          <div style="margin-top: 5px">3. {{ textArr.four[2] }}</div>
          <div style="margin-top: 5px">4. {{ textArr.four[3] }}</div>
          <div style="margin-top: 5px">5. {{ textArr.four[4] }}</div>
        </div>
      </div>
      <!-- 第三页 -->
      <div class="content_son" style="top: 2190px">
        <div class="five">
          <div><strong>五、不可抗力</strong></div>
          <div style="margin-top: 5px">1. {{ textArr.five[0] }}</div>
          <div style="margin-top: 5px">2. {{ textArr.five[1] }}</div>
          <div style="margin-top: 5px">3. {{ textArr.five[2] }}</div>
        </div>
        <div class="six">
          <div><strong>六、违约责任</strong></div>
          <div style="margin-top: 5px">1. {{ textArr.six[0] }}</div>
          <div style="margin-top: 5px">2. {{ textArr.six[1] }}</div>
        </div>
        <div class="seven">
          <strong>七、通知与送达</strong>
          <div style="margin-top: 5px">1. {{ textArr.seven[0] }}</div>
          <div style="margin-top: 5px">2. {{ textArr.seven[1] }}</div>
          <div style="margin-top: 5px">3. {{ textArr.seven[2] }}</div>
        </div>
        <div class="eight">
          <div><strong>八、法律适用与争议解决</strong></div>
          <div style="margin-top: 5px">1. {{ textArr.eight[0] }}</div>
          <div style="margin-top: 5px">2. {{ textArr.eight[1] }}</div>
        </div>
      </div>
      <!-- 第四页 -->
      <div class="content_son" style="top: 3060px">
        <div class="nine">
          <div><strong>九、其他</strong></div>
          <div style="margin-top: 5px">1. {{ textArr.nine[0] }}</div>
          <div style="margin-top: 5px">2. {{ textArr.nine[1] }}</div>
          <div style="margin-top: 5px">3. {{ textArr.nine[2] }}</div>
          <div style="margin-top: 5px">4. {{ textArr.nine[3] }}</div>
          <div style="margin-top: 5px">5. {{ textArr.nine[4] }}</div>
          <div style="margin-top: 5px">6. {{ textArr.nine[5] }}</div>
          <div style="margin-top: 5px; height: 50px">
            <strong
              ><span class="underline">
                {{
                  parttime.parttime_other_appoint === "" ||
                  parttime.parttime_other_appoint === undefined
                    ? "无"
                    : parttime.parttime_other_appoint
                }}
              </span></strong
            >
          </div>
        </div>
        <div class="sign">
          <div style="float: left">
            <div style="float: left"><strong>甲方(签字)：</strong></div>
            <div
              style="float: left; cursor: pointer"
              @click="handleReceiverFlag"
              v-if="employerId"
            >
              <div ref="employerSign" style="display: block">
                <strong><span>点击签署</span></strong>
              </div>
              <div ref="employerImg" style="display: none">
                <img
                  style="width: 100px; height: 50px"
                  :src="this.img.employerPicture"
                  alt=""
                />
              </div>
            </div>
            <div
              style="float: left; text-align: left; padding-left: 10px"
              v-if="!employerId"
            >
              <strong>{{
                parttime.parttime_employer_sign === "undefined"
                  ? "待对方签署"
                  : "文件已作废"
              }}</strong>
            </div>
          </div>
          <div style="float: left; margin-left: 200px">
            <div style="float: left"><strong>乙方(签字)：</strong></div>
            <div
              style="float: left; cursor: pointer"
              @click="handleReceiverFlag"
              v-if="parttimerId"
            >
              <div ref="parttimerSign" style="display: block">
                <strong><span>点击签署</span></strong>
              </div>
              <div ref="parttimerImg" style="display: none">
                <img
                  style="width: 100px; height: 50px"
                  :src="this.img.parttimerPicture"
                  alt=""
                />
              </div>
            </div>
            <div
              style="float: left; text-align: left; padding-left: 10px"
              v-if="!parttimerId"
            >
              <strong>{{
                parttime.parttime_parttimer_sign === "undefined"
                  ? "待对方签署"
                  : "文件已作废"
              }}</strong>
            </div>
          </div>
        </div>
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
  name: "displayParttime",
  inject: ["reload"],
  data() {
    return {
      parttime: {},
      parttimeId: {
        parttime_id: "",
      },
      parttimeImg: {
        parttimeUserType: "",
        parttime_id: "",
        parttime_sign: "",
      },
      receiverSignFlag: false,
      img: {
        employerPicture: "",
        parttimerPicture: "",
      },
      partimeModel: {},
      textArr: {
        one: [],
        two: [],
        three: [],
        four: [],
        five: [],
        six: [],
        seven: [],
        eight: [],
        nine: [],
      },
      time1: "",
      time2: "",
      buttonStatus: false,
      parttimerId: false,
      employerId: false,
      signStatus: false,
    };
  },
  methods: {
    ImgData(data) {
      let userId = localStorage.getItem("loginIdNumber");
      this.signStatus = true;
      if (
        this.parttime.parttime_status === "2" &&
        this.parttime.parttime_parttimer_idnumber === userId
      ) {
        this.img.parttimerPicture = data;
      }
      if (
        this.parttime.parttime_status === "2" &&
        this.parttime.parttime_employer_idnumber === userId
      ) {
        this.img.employerPicture = data;
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
    getParttimeModel() {
      this.$axios.post("/getParttimeModel", this.user).then((res) => {
        this.partimeModel = res.data.result[0];
        console.log("res", this.partimeModel);
        const str1 = this.partimeModel.parttime_site;
        this.textArr.one = str1.split("XXX");
        const str2 = this.partimeModel.parttime_reward;
        this.textArr.two = str2.split("XXX");
        const str3 = this.partimeModel.parttime_rightsobligations;
        this.textArr.three = str3.split("XXX");
        const str4 = this.partimeModel.parttime_secrecy;
        this.textArr.four = str4.split("XXX");
        const str5 = this.partimeModel.parttime_majeure;
        this.textArr.five = str5.split("XXX");
        const str6 = this.partimeModel.parttime_default;
        this.textArr.six = str6.split("XXX");
        const str7 = this.partimeModel.parttime_inform;
        this.textArr.seven = str7.split("XXX");
        const str8 = this.partimeModel.parttime_law;
        this.textArr.eight = str8.split("XXX");
        const str9 = this.partimeModel.parttime_other;
        this.textArr.nine = str9.split("XXX");
      });
    },
    updateParttime() {
      //添加签署状态,在借条，合同的签署过程中只有双方都签署了才将parttime_status赋值3
      this.parttimeImg.parttime_status = 3;
      this.parttimeImg.parttimeUserType = "";
      this.parttimeImg.parttime_id = this.$route.params.id;
      //this.parttimeImg.parttime_sign = this.img.picture;
      this.$axios.post("/signParttime", this.parttimeImg).then((res) => {
        console.log("res-", res);
      });
    },
    getParttimeById() {
      //获取从文件夹传过来的借条ID
      this.parttimeId.parttime_id = this.$route.params.id;
      this.$axios.post("/selectParttimeById", this.parttimeId).then((res) => {
        console.log("展示页面根据ID查询的借条", res.data.result[0]);
        this.parttime = res.data.result[0];
        //处理日期格式
        let time = this.parttime.parttime_timelimit.split(",");
        let dt1 = new Date(time[0]);
        let month1 =
          dt1.getMonth() + 1 < 10
            ? "0" + (dt1.getMonth() + 1)
            : dt1.getMonth() + 1;
        let date1 = dt1.getDate() < 10 ? "0" + dt1.getDate() : dt1.getDate();
        this.time1 = dt1.getFullYear() + "." + month1 + "." + date1;

        let dt2 = new Date(time[1]);
        let month2 =
          dt2.getMonth() + 1 < 10
            ? "0" + (dt2.getMonth() + 1)
            : dt2.getMonth() + 1;
        let date2 = dt2.getDate() < 10 ? "0" + dt2.getDate() : dt2.getDate();
        this.time2 = dt2.getFullYear() + "." + month2 + "." + date2;

        //处理身份
        let userId = localStorage.getItem("loginIdNumber");
        if (this.parttime.parttime_employer_idnumber === userId) {
          this.employerId = true;
        }
        if (this.parttime.parttime_parttimer_idnumber === userId) {
          this.parttimerId = true;
        }
        //处理下载合同按钮状态
        if (this.parttime.parttime_status === "3") {
          this.buttonStatus = true;
        }
        this.sign();
      });
    },
    sign() {
      //需要写三个接口，首先判断身份，再更新 1.更新a签名 2.更新签名 3. 判断ab都签名后更新文件状态
      //处理身份
      let userId = localStorage.getItem("loginIdNumber");
      this.parttimeImg.parttime_id = this.$route.params.id;
      switch (this.parttime.parttime_status) {
        case "2":
          if (this.parttime.parttime_employer_idnumber === userId) {
            //当兼职方有签名时,查出兼职方的签名同时将parttimerId变为true
            if (this.parttime.parttime_parttimer_sign !== "undefined") {
              this.parttimeImg.parttimeUserType = "兼职方";
              this.$axios
                .post("/selectParttimeSignById", this.parttimeImg)
                .then((res) => {
                  this.img.parttimerPicture =
                    res.data.result[0].parttime_parttimer_sign;
                });
              this.parttimerId = true;
              this.$refs.parttimerImg.style.display = "block";
              this.$refs.parttimerSign.style.display = "none";
            }
            //当雇佣方有签名时查出签名，渲染到页面
            if (this.parttime.parttime_employer_sign !== "undefined") {
              this.parttimeImg.parttimeUserType = "雇佣方";
              this.$axios
                .post("/selectParttimeSignById", this.parttimeImg)
                .then((res) => {
                  this.img.employerPicture =
                    res.data.result[0].parttime_employer_sign;
                });
              this.$refs.employerImg.style.display = "block";
              this.$refs.employerSign.style.display = "none";
            }
            //当点击签署后才进行插入签名
            if (this.signStatus) {
              this.parttimeImg.parttimeUserType = "雇佣方";
              this.parttimeImg.parttime_sign = this.img.employerPicture;
              this.$axios
                .post("/signParttime", this.parttimeImg)
                .then((res) => {
                  this.$message({
                    message: "签署成功",
                    type: "success",
                  });
                });
              this.$refs.employerImg.style.display = "block";
              this.$refs.employerSign.style.display = "none";
              this.reload();
            }
            //当两个都有签名时
            if (
              this.parttime.parttime_employer_sign !== "undefined" &&
              this.parttime.parttime_parttimer_sign !== "undefined"
            ) {
              this.updateParttime();
            }
          }
          if (this.parttime.parttime_parttimer_idnumber === userId) {
            //当雇佣方有签名时,查出雇佣方的签名同时将employerId变为true
            if (this.parttime.parttime_employer_sign !== "undefined") {
              this.parttimeImg.parttimeUserType = "雇佣方";
              this.$axios
                .post("/selectParttimeSignById", this.parttimeImg)
                .then((res) => {
                  this.img.employerPicture =
                    res.data.result[0].parttime_employer_sign;
                });
              this.employerId = true;
              this.$refs.employerImg.style.display = "block";
              this.$refs.employerSign.style.display = "none";
            }
            if (this.parttime.parttime_parttimer_sign !== "undefined") {
              this.parttimeImg.parttimeUserType = "兼职方";
              this.$refs.parttimerImg.style.display = "block";
              this.$refs.parttimerSign.style.display = "none";
              this.$axios
                .post("/selectParttimeSignById", this.parttimeImg)
                .then((res) => {
                  this.img.parttimerPicture =
                    res.data.result[0].parttime_parttimer_sign;
                });
            }
            //当两个都有签名时
            if (
              this.parttime.parttime_employer_sign !== "undefined" &&
              this.parttime.parttime_parttimer_sign !== "undefined"
            ) {
              this.updateParttime();
            }
            if (this.signStatus) {
              this.parttimeImg.parttimeUserType = "兼职方";
              this.parttimeImg.parttime_sign = this.img.parttimerPicture;
              this.$axios
                .post("/signParttime", this.parttimeImg)
                .then((res) => {
                  this.$message({
                    message: "签署成功",
                    type: "success",
                  });
                });
              this.$refs.parttimerImg.style.display = "block";
              this.$refs.parttimerSign.style.display = "none";
              this.reload();
            }
          }
          break;
        case "3":
          this.$axios
            .post("/selectParttimeSignById", this.parttimeImg)
            .then((res) => {
              this.parttimeImg.parttimeUserType = "";
              this.parttimerId = true;
              this.employerId = true;
              this.img.parttimerPicture =
                res.data.result[0].parttime_parttimer_sign;
              this.img.employerPicture =
                res.data.result[0].parttime_employer_sign;
            });
          this.$refs.parttimerImg.style.display = "block";
          this.$refs.parttimerSign.style.display = "none";
          this.$refs.employerImg.style.display = "block";
          this.$refs.employerSign.style.display = "none";

          break;
        default:
          break;
      }
    },
    async generatePDf() {
      //获取HTML元素
      const pdfElements = document.getElementsByClassName("content_son");

      //创建jsPDF实例
      const pdf = new jsPDF("p", "pt", "a4");
      for (let i = 0; i < pdfElements.length; i++) {
        const pdfElement = pdfElements[i];

        //将HTML元素转化为canvas
        const canvas = await html2canvas(pdfElement, { allowTaint: true });
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
        //判断只需添加3页空白页
        if (i <= pdfElements.length - 2) {
          pdf.addPage();
        }
        if (i === pdfElements.length - 1) {
          //保存PDF
          pdf.save("兼职合同.pdf");
        }
      }
    },
  },
  mounted() {
    this.getParttimeById();
    this.getParttimeModel();
  },
  updated() {
    this.sign();
  },
};
</script>
<style scoped>
.parttimeComfire {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #eef2f3;
  overflow: scroll;
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
  height: 860px;
  position: absolute;
  background-color: #fff;

  bottom: 0;
  left: 10%;
  right: 20%;
  margin: auto;

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
.underline {
  text-align: left;
  text-decoration: underline;
}
.foreword {
  padding: 20px 20px 0 35px;
  text-align: left;
  margin-bottom: 10px;
}
.one {
  text-align: left;
  padding: 10px 0 0 35px;
}
.two {
  text-align: left;
  padding: 30px 0 0 35px;
}
.three {
  text-align: left;
  padding: 10px 20px 0 35px;
  margin-top: 20px;
}
.four {
  text-align: left;
  padding: 10px 20px 0 35px;
  margin-top: 20px;
}
.five {
  text-align: left;
  padding: 10px 20px 0 35px;
  margin-top: 20px;
}
.six {
  text-align: left;
  padding: 10px 20px 0 35px;
  margin-top: 20px;
}
.seven {
  text-align: left;
  padding: 10px 20px 0 35px;
  margin-top: 20px;
}
.eight {
  text-align: left;
  padding: 10px 20px 0 35px;
  margin-top: 20px;
}
.nine {
  text-align: left;
  padding: 10px 20px 0 35px;
  margin-top: 20px;
}
.sign {
  text-align: left;
  padding: 10px 20px 0 35px;
}
</style>

<template>
  <div class="parttimeComfire">
    <div class="header">
      <h1 style="display: inline">预览合同</h1>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <el-button
        type="primary"
        @click="buttonMethods ? updateParttime() : comfirmParttime()"
        >确认开具</el-button
      >
    </div>
    <div class="content_father">
      <!-- 第一页 -->
      <div class="content_son">
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
      <div class="content_otherson" style="top: 1320px">
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
      <div class="content_otherson" style="top: 2190px">
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
      <div class="content_otherson" style="top: 3060px">
        <div class="nine">
          <div><strong>九、其他</strong></div>
          <div style="margin-top: 5px">1. {{ textArr.nine[0] }}</div>
          <div style="margin-top: 5px">2. {{ textArr.nine[1] }}</div>
          <div style="margin-top: 5px">3. {{ textArr.nine[2] }}</div>
          <div style="margin-top: 5px">4. {{ textArr.nine[3] }}</div>
          <div style="margin-top: 5px">5. {{ textArr.nine[4] }}</div>
          <div style="margin-top: 5px">6. {{ textArr.nine[5] }}</div>
          <div style="margin-top: 5px; height: 50px"></div>
        </div>
        <div class="sign">
          <div style="float: left"><strong>甲方(签字)：</strong></div>
          <div style="float: left; margin-left: 200px">
            <strong>乙方(签字)：</strong>
          </div>
        </div>
      </div>
      <!-- 提示对话框 -->
      <el-dialog
        title="合同状态信息"
        width="50%"
        :before-close="handleClose"
        :visible.sync="dialogFormVisible"
        :append-to-body="true"
      >
        <h3 style="padding: 0px 0px 20px 35px">
          {{
            this.parttime.parttime_next === undefined ||
            this.parttime.parttime_next === false
              ? "您已成功发起借条，需发送邮件通知对方补充信息"
              : "您已成功发起借条，需发送邮件通知对方确认收据"
          }}
        </h3>
        <el-form :model="form" :rules="rules" ref="form" class="demo-ruleForm">
          <el-form-item
            label="收件人邮箱"
            label-width="120px"
            prop="receiverEmail"
          >
            <el-input
              v-model="form.receiverEmail"
              autocomplete="off"
            ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <!-- <el-button @click="dialogFormVisible = false">重 置</el-button> -->
          <el-button type="primary" @click="sendEmail">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
export default {
  name: "parttimeComfire",
  inject: ["reload"],
  data() {
    return {
      form: {},
      rules: {
        receiverEmail: [
          { required: true, message: "请输入收件人邮箱", trigger: "blur" },
        ],
      },
      dialogFormVisible: false,
      parttime: {},
      userParttime: {}, //用户收据关系对象
      parttimeId: {
        parttime_id: "",
      },
      buttonMethods: false,
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
    };
  },
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleClose() {
      this.resetForm("form");
      this.dialogFormVisible = false;
    },

    comfirmParttime() {
      //添加确认状态
      this.$store.state.parttime.form.parttime_status = 1;
      //添加收据发起人ID，用于在文件夹中辨别用户身份
      this.$store.state.parttime.form.parttime_a =
        localStorage.getItem("loginId");
      this.$axios
        .post("/addParttime", this.$store.state.parttime.form)
        .then((res) => {
          this.$axios.post("/selectParttimeId", this.parttime).then((res) => {
            this.userParttime.parttime_id = res.data.result[0].parttime_id;
            this.dialogFormVisible = true;
          });
        });
    },
    updateParttime() {
      //添加确认状态
      this.parttime.parttime_status = 2;
      //添加收据发起人ID，用于在文件夹中辨别用户身份
      this.parttime.parttime_b = localStorage.getItem("loginId");
      //console.log("updateParttime-", this.receipt);
      this.$axios.post("/updateParttime", this.parttime).then((res) => {
        //console.log("updateParttime-res-", res);
        this.$message({
          message: "确认成功",
          type: "success",
        });
      });
    },
    getParttime() {
      //判断路由参数是否存在iouId，无则从Vuex中获取
      let parttimeId = this.$route.params.id;
      if (parttimeId === undefined) {
        this.parttime = this.$store.state.parttime.form;
        console.log("parttime", this.parttime);
        //处理日期格式
        let dt1 = new Date(this.parttime.parttime_timelimit[0]);
        let month1 =
          dt1.getMonth() + 1 < 10
            ? "0" + (dt1.getMonth() + 1)
            : dt1.getMonth() + 1;
        let date1 = dt1.getDate() < 10 ? "0" + dt1.getDate() : dt1.getDate();
        this.time1 = dt1.getFullYear() + "." + month1 + "." + date1;

        let dt2 = new Date(this.parttime.parttime_timelimit[1]);
        let month2 =
          dt2.getMonth() + 1 < 10
            ? "0" + (dt2.getMonth() + 1)
            : dt2.getMonth() + 1;
        let date2 = dt2.getDate() < 10 ? "0" + dt2.getDate() : dt2.getDate();
        this.time2 = dt2.getFullYear() + "." + month2 + "." + date2;
      } else {
        this.getParttimeById();
      }
      //console.log(55, this.receipt);
    },
    getParttimeById() {
      //获取从文件夹传过来的ID
      this.parttimeId.parttime_id = this.$route.params.id;
      this.$axios.post("/selectParttimeById", this.parttimeId).then((res) => {
        //console.log("根据ID查询的收据", res.data.result[0]);
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

        //判断是否需要填写用户信息
        let employerData =
          (this.parttime.parttime_employer_name === "undefined" &&
            this.parttime.parttime_employer_phone === "undefined" &&
            this.parttime.parttime_employer_idtype === "undefined" &&
            this.parttime.parttime_employer_idnumber === "undefined") ||
          (this.parttime.parttime_employer_name === "" &&
            this.parttime.parttime_employer_phone === "" &&
            this.parttime.parttime_employer_idtype === "" &&
            this.parttime.parttime_employer_idnumber === "");
        let parttimerData =
          (this.parttime.parttime_parttimer_name === "undefined" &&
            this.parttime.parttime_parttimer_idtype === "undefined" &&
            this.parttime.parttime_parttimer_idnumber === "undefined" &&
            this.parttime.parttime_parttimer_phone === "undefined") ||
          (this.parttime.parttime_parttimer_name === "" &&
            this.parttime.parttime_parttimer_idtype === "" &&
            this.parttime.parttime_parttimer_idnumber === "" &&
            this.parttime.parttime_parttimer_phone === "");
        if (parttimerData) {
          this.parttime.parttime_parttimer_name =
            localStorage.getItem("loginName");
          this.parttime.parttime_parttimer_idnumber =
            localStorage.getItem("loginIdNumber");
          this.parttime.parttime_parttimer_phone =
            localStorage.getItem("loginPhone");
          this.parttime.parttime_parttimer_idtype =
            localStorage.getItem("loginIdType");
        }
        if (employerData) {
          this.parttime.parttime_employer_name =
            localStorage.getItem("loginName");
          this.parttime.parttime_employer_idnumber =
            localStorage.getItem("loginIdNumber");
          this.parttime.parttime_employer_phone =
            localStorage.getItem("loginPhone");
          this.parttime.parttime_employer_idtype =
            localStorage.getItem("loginIdType");
        }
        let parttime_b = this.parttime.parttime_b;
        let parttime_status = this.parttime.parttime_status;
        if (parttime_b === null && parttime_status === "1") {
          this.buttonMethods = true;
        }
      });
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
    sendEmail() {
      //判断用户身份,插入用户收据关系
      let identity = this.$store.state.parttime.status;
      //console.log(11, identity);
      if (identity === "雇佣方") {
        this.userParttime.employer_email = localStorage.getItem("loginEmail");
        this.userParttime.parttimer_email = this.form.receiverEmail;
      } else {
        this.userParttime.parttimer_email = localStorage.getItem("loginEmail");
        this.userParttime.employer_email = this.form.receiverEmail;
      }
      this.$axios.post("/addUserParttime", this.userParttime).then((res) => {});
      //添加用户信息发送邮件
      let content = "http://127.0.0.1:8080/";
      this.form.senderName = localStorage.getItem("loginName");
      this.form.senderPhone = localStorage.getItem("loginPhone");
      this.form.senderEmail = localStorage.getItem("loginEmail");
      this.form.content = content;
      console.log("this.form-", this.form);
      this.$axios.post("/sendEmail", this.form).then((res) => {});
      this.dialogFormVisible = false;
    },
  },
  mounted() {
    this.getParttimeModel();
    this.getParttime();
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
  top: 450px;
  bottom: 0;
  left: 10%;
  right: 20%;
  margin: auto;
  border-top: 2px solid #4ba79c;
  border-radius: 15px;
}
.content_otherson {
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

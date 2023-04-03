<template>
  <div class="iouComfire">
    <div class="header">
      <h1 style="display: inline">预览借条</h1>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <el-button
        type="primary"
        @click="buttonMethods ? updateIou() : confirmIou()"
        >确认开具</el-button
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
          <el-form-item label="出 借 人" class="item">
            <h3 style="text-align: left; padding-left: 10px">
              <strong>{{
                iou.iou_leader_name === "" || iou.iou_leader_name === undefined
                  ? "待对方填写"
                  : iou.iou_leader_name
              }}</strong>
            </h3>
          </el-form-item>
          <el-form-item label="借 款 人" class="item">
            <h3 style="text-align: left; padding-left: 10px">
              <strong>{{
                iou.iou_borrower_name === "" ||
                iou.iou_borrower_name === undefined
                  ? "待对方填写"
                  : iou.iou_borrower_name
              }}</strong>
            </h3>
          </el-form-item>
          <el-form-item label="证件类型" class="item">
            <h3 style="text-align: left; padding-left: 10px">
              <strong>{{
                iou.iou_borrower_idtype === "" ||
                iou.iou_borrower_idtype === undefined
                  ? "待对方填写"
                  : iou.iou_borrower_idtype
              }}</strong>
            </h3>
          </el-form-item>
          <el-form-item label="证 件 号" class="item">
            <h3 style="text-align: left; padding-left: 10px">
              <strong>{{
                iou.iou_borrower_idnumber === "" ||
                iou.iou_borrower_idnumber === undefined
                  ? "待对方填写"
                  : iou.iou_borrower_idnumber
              }}</strong>
            </h3>
          </el-form-item>
          <el-form-item label="手 机 号" class="item">
            <h3 style="text-align: left; padding-left: 10px">
              <strong>{{
                iou.iou_borrower_phone === "" ||
                iou.iou_borrower_phone === undefined
                  ? "待对方填写"
                  : iou.iou_borrower_phone
              }}</strong>
            </h3>
          </el-form-item>
          <el-form-item label="其他约定" class="item">
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

        <!-- 提示对话框 -->
        <el-dialog
          title="借条状态信息"
          width="50%"
          :before-close="handleClose"
          :visible.sync="dialogFormVisible"
          :append-to-body="true"
        >
          <h3 style="padding: 0px 0px 20px 35px">
            {{
              this.iou.iou_next === undefined || this.iou.iou_next === false
                ? "您已成功发起借条，需发送邮件通知对方补充信息"
                : "您已成功发起借条，需发送邮件通知对方确认收据"
            }}
          </h3>
          <el-form
            :model="form"
            :rules="rules"
            ref="form"
            class="demo-ruleForm"
          >
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
  </div>
</template>
<script>
export default {
  name: "iouComfire",
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
      iou: {},
      userIou: {}, //用户收据关系对象
      iouId: {
        iou_id: "",
      },
      buttonMethods: false,
      iouModel: {},
      textArr: [],
      leaderStr: "",
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

    confirmIou() {
      //添加确认状态
      this.$store.state.iou.form.iou_status = 1;
      //添加收据发起人ID，用于在文件夹中辨别用户身份
      this.$store.state.iou.form.iou_a = localStorage.getItem("loginId");
      this.$axios.post("/addIou", this.$store.state.iou.form).then((res) => {
        this.$axios.post("/selectIouId", this.iou).then((res) => {
          this.userIou.iou_id = res.data.result[0].iou_id;
          this.dialogFormVisible = true;
        });
      });
    },
    updateIou() {
      //添加确认状态
      this.iou.iou_status = 2;
      //添加收据发起人ID，用于在文件夹中辨别用户身份
      this.iou.iou_b = localStorage.getItem("loginId");
      console.log("updateIou-", this.iou);
      this.$axios.post("/updateIou", this.iou).then((res) => {
        //console.log("updateIou-res-", res);
        this.$message({
          message: "确认成功",
          type: "success",
        });
      });
    },
    getIou() {
      //判断路由参数是否存在iouId，无则从Vuex中获取
      let iouId = this.$route.params.id;
      if (iouId === undefined) {
        this.iou = this.$store.state.iou.form;
        //console.log("iou", this.iou);
        //处理日期格式
        let dt1 = new Date(this.iou.iou_period[0]);
        let month1 =
          dt1.getMonth() + 1 < 10
            ? "0" + (dt1.getMonth() + 1)
            : dt1.getMonth() + 1;
        let date1 = dt1.getDate() < 10 ? "0" + dt1.getDate() : dt1.getDate();
        this.iou.iou_startTime = dt1.getFullYear() + "-" + month1 + "-" + date1;

        let dt2 = new Date(this.iou.iou_period[1]);
        let month2 =
          dt2.getMonth() + 1 < 10
            ? "0" + (dt2.getMonth() + 1)
            : dt2.getMonth() + 1;
        let date2 = dt2.getDate() < 10 ? "0" + dt2.getDate() : dt2.getDate();
        this.iou.iou_endTime = dt2.getFullYear() + "-" + month2 + "-" + date2;
        //处理金额格式
        this.iou.iou_money =
          this.intToChinese(this.iou.iou_money) +
          "元整" +
          "\n（￥" +
          this.iou.iou_money +
          ")";
        //处理出借人信息
        this.iou.iou_leader_name =
          this.iou.iou_leader_name === "" ||
          this.iou.iou_leader_name === undefined
            ? "待对方填写"
            : this.iou.iou_leader_name;
        this.iou.iou_leader_idtype =
          this.iou.iou_leader_idtype === "" ||
          this.iou.iou_leader_idtype === undefined
            ? "待对方填写"
            : this.iou.iou_leader_idtype;
        this.iou.iou_leader_idnumber =
          this.iou.iou_leader_idnumber === "" ||
          this.iou.iou_leader_idnumber === undefined
            ? "待对方填写"
            : this.iou.iou_leader_idnumber;
        this.iou.iou_leader_phone =
          this.iou.iou_leader_phone === "" ||
          this.iou.iou_leader_phone === undefined
            ? "待对方填写"
            : this.iou.iou_leader_phone;
        this.leaderStr = `${this.iou.iou_leader_name}（证件类型及号码：
            ${this.iou.iou_leader_idtype} ${this.iou.iou_leader_idnumber}）`;
      } else {
        this.getIouById();
      }
      //console.log(55, this.receipt);
    },
    getIouById() {
      //获取从文件夹传过来的ID
      this.iouId.iou_id = this.$route.params.id;
      this.$axios.post("/selectIouById", this.iouId).then((res) => {
        console.log("根据ID查询的收据", res.data.result[0]);
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

        //判断是否需要填写用户信息
        let leaderData =
          (this.iou.iou_leader_name === "undefined" &&
            this.iou.iou_leader_idnumber === "undefined" &&
            this.iou.iou_leader_phone === "undefined" &&
            this.iou.iou_leader_idtype === "undefined") ||
          (this.iou.iou_leader_name === "待对方填写" &&
            this.iou.iou_leader_idnumber === "待对方填写" &&
            this.iou.iou_leader_phone === "待对方填写" &&
            this.iou.iou_leader_idtype === "待对方填写") ||
          (this.iou.iou_leader_name === "" &&
            this.iou.iou_leader_idnumber === "" &&
            this.iou.iou_leader_phone === "" &&
            this.iou.iou_leader_idtype === "");
        let borrowerData =
          (this.iou.iou_borrower_name === "undefined" &&
            this.iou.iou_borrower_idnumber === "undefined" &&
            this.iou.iou_borrower_phone === "undefined" &&
            this.iou.iou_borrower_idtype === "undefined") ||
          (this.iou.iou_borrower_name === "待对方填写" &&
            this.iou.iou_borrower_idnumber === "待对方填写" &&
            this.iou.iou_borrower_phone === "待对方填写" &&
            this.iou.iou_borrower_idtype === "待对方填写") ||
          (this.iou.iou_borrower_name === "" &&
            this.iou.iou_borrower_idnumber === "" &&
            this.iou.iou_borrower_phone === "" &&
            this.iou.iou_borrower_idtype === "");
        if (borrowerData) {
          this.iou.iou_borrower_name = localStorage.getItem("loginName");
          this.iou.iou_borrower_idnumber =
            localStorage.getItem("loginIdNumber");
          this.iou.iou_borrower_phone = localStorage.getItem("loginPhone");
          this.iou.iou_borrower_idtype = localStorage.getItem("loginIdType");
        }
        if (leaderData) {
          this.iou.iou_leader_name = localStorage.getItem("loginName");
          this.iou.iou_leader_idnumber = localStorage.getItem("loginIdNumber");
          this.iou.iou_leader_phone = localStorage.getItem("loginPhone");
          this.iou.iou_leader_idtype = localStorage.getItem("loginIdType");
        }
        //处理出借人信息
        this.leaderStr = `${this.iou.iou_leader_name}（证件类型及号码：
            ${this.iou.iou_leader_idtype} ${this.iou.iou_leader_idnumber}）`;
        let iou_b = this.iou.iou_b;
        let iou_status = this.iou.iou_status;
        if (iou_b === null && iou_status === "1") {
          this.buttonMethods = true;
        }
      });
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
    sendEmail() {
      //判断用户身份,插入用户收据关系
      let identity = this.$store.state.iou.status;
      //console.log(11, identity);
      if (identity === "借款人") {
        this.userIou.borrower_email = localStorage.getItem("loginEmail");
        this.userIou.leader_email = this.form.receiverEmail;
      } else {
        this.userIou.leader_email = localStorage.getItem("loginEmail");
        this.userIou.borrower_email = this.form.receiverEmail;
      }
      this.$axios.post("/addUserIou", this.userIou).then((res) => {});
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
    intToChinese(str) {
      str = str + "";
      let len = str.length - 1;
      var idxs = [
        "",
        "十",
        "百",
        "千",
        "万",
        "十",
        "百",
        "千",
        "亿",
        "十",
        "百",
        "千",
        "万",
        "十",
        "百",
        "千",
        "亿",
      ];
      var num = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
      return str.replace(/([1-9]|0+)/g, function ($, $1, idx, full) {
        var pos = 0;
        if ($1[0] != "0") {
          pos = len - idx;
          if (idx == 0 && $1[0] == 1 && idxs[len - idx] == "十") {
            return idxs[len - idx];
          }
          return num[$1[0]] + idxs[len - idx];
        } else {
          var left = len - idx;
          var right = len - idx + $1.length;
          if (Math.floor(right / 4) - Math.floor(left / 4) < 10) {
            pos = left - (left % 4);
          }
          if (pos) {
            return idxs[pos] + num[$1[0]];
          } else if (idx + $1.length >= len) {
            return "";
          } else {
            return num[$1[0]];
          }
        }
      });
    },
  },
  mounted() {
    this.getIou();
    this.getIouModel();
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
.text {
  width: 500px;
  height: 180px;
  padding: 10px 0 0 160px;
  line-height: 30px;
  text-align: left;
}
</style>

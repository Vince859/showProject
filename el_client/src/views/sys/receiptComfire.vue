<template>
  <div class="receiptComfire">
    <div class="header">
      <h1 style="display: inline">预览收据</h1>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <el-button
        type="primary"
        @click="buttonMethods ? updateReceipt() : confirmReceipt()"
        >确认开具</el-button
      >
    </div>
    <div class="content_father">
      <div class="content_son">
        <el-form label-width="320px" class="demo-ruleForm">
          <el-form-item label-width="200px" style="margin-bottom: 0px"
            ><el-col :span="16"
              ><h1 style="color: #4ba79c">收据</h1></el-col
            ></el-form-item
          >
          <div class="line">
            <span
              >..................................................................................................................................................................................</span
            >
          </div>
          <el-form-item label="付 款 人" class="item">
            <h3 style="text-align: left; padding-left: 10px">
              <strong>{{
                receipt.receipt_payer_name === "" ||
                receipt.receipt_payer_name === undefined
                  ? "待对方填写"
                  : receipt.receipt_payer_name
              }}</strong>
            </h3>
          </el-form-item>
          <el-form-item label="证 件 类 型" class="item">
            <h3 style="text-align: left; padding-left: 10px">
              <strong>{{
                receipt.receipt_payer_idtype === "" ||
                receipt.receipt_payer_idtype === undefined
                  ? "待对方填写"
                  : "居民身份证"
              }}</strong>
            </h3>
          </el-form-item>
          <el-form-item label="证 件 号" class="item">
            <h3 style="text-align: left; padding-left: 10px">
              <strong>{{
                receipt.receipt_payer_idnumber === "" ||
                receipt.receipt_payer_idnumber === undefined
                  ? "待对方填写"
                  : receipt.receipt_payer_idnumber
              }}</strong>
            </h3>
          </el-form-item>
          <el-form-item label="收 款 人" class="item">
            <h3 style="text-align: left; padding-left: 10px">
              <strong>{{
                receipt.receipt_receiver_name === "" ||
                receipt.receipt_receiver_name === undefined
                  ? "待对方填写"
                  : receipt.receipt_receiver_name
              }}</strong>
            </h3>
          </el-form-item>
          <el-form-item label="证 件 类 型" class="item">
            <h3 style="text-align: left; padding-left: 10px">
              <strong>{{
                receipt.receipt_receiver_idtype === "" ||
                receipt.receipt_receiver_idtype === undefined
                  ? "待对方填写"
                  : "居民身份证"
              }}</strong>
            </h3>
          </el-form-item>
          <el-form-item label="证 件 号" class="item">
            <h3 style="text-align: left; padding-left: 10px">
              <strong>{{
                receipt.receipt_receiver_idnumber === "" ||
                receipt.receipt_receiver_idnumber === undefined
                  ? "待对方填写"
                  : receipt.receipt_receiver_idnumber
              }}</strong>
            </h3>
          </el-form-item>
          <el-form-item label="手 机 号" class="item">
            <h3 style="text-align: left; padding-left: 10px">
              <strong>{{
                receipt.receipt_receiver_phone === "" ||
                receipt.receipt_receiver_phone === undefined
                  ? "待对方填写"
                  : receipt.receipt_receiver_phone
              }}</strong>
            </h3>
          </el-form-item>
          <el-form-item label="收 据 事 由" class="item">
            <h3 style="text-align: left; padding-left: 10px">
              <strong>{{ receipt.receipt_incident }}</strong>
            </h3>
          </el-form-item>
          <el-form-item label="收 据 金 额" class="item">
            <h3 style="text-align: left; padding-left: 10px">
              <strong>{{ receipt.receipt_money }}</strong>
            </h3>
          </el-form-item>
          <el-form-item label="收 据 日 期" class="item">
            <h3 style="text-align: left; padding-left: 10px">
              <strong>{{ receipt.receipt_receive_time }}</strong>
            </h3>
          </el-form-item>
          <el-form-item label="备 注" class="item">
            <h3 style="text-align: left; padding-left: 10px">
              <strong>{{
                receipt.receipt_remark === "" ||
                receipt.receipt_remark === undefined
                  ? "无"
                  : receipt.receipt_remark
              }}</strong>
            </h3>
          </el-form-item>
          <el-form-item label="收 款 人 签 署" class="item">
            <h3 style="text-align: left; padding-left: 10px">
              <strong></strong>
            </h3>
          </el-form-item>
        </el-form>

        <!-- 提示对话框 -->
        <el-dialog
          title="收据状态信息"
          width="50%"
          :before-close="handleClose"
          :visible.sync="dialogFormVisible"
          :append-to-body="true"
        >
          <h3 style="padding: 0px 0px 20px 35px">
            {{
              this.receipt.receipt_next === undefined ||
              this.receipt.receipt_next === false
                ? "您已成功发起收据，需发送邮件通知对方补充信息"
                : "您已成功发起收据，需发送邮件通知对方确认收据"
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
  name: "receiptComfire",
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
      receipt: {},
      userReceipt: {}, //用户收据关系对象
      receiptId: {
        receipt_id: "",
      },
      buttonMethods: false,
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

    confirmReceipt() {
      //添加确认状态
      this.$store.state.receipt.form.receipt_status = 1;
      //添加收据发起人ID，用于在文件夹中辨别用户身份
      this.$store.state.receipt.form.receipt_a =
        localStorage.getItem("loginId");
      this.$axios
        .post("/addReceipt", this.$store.state.receipt.form)
        .then((res) => {
          this.$axios.post("/selectReceiptId", this.receipt).then((res) => {
            this.userReceipt.receipt_id = res.data.result[0].receipt_id;
            this.dialogFormVisible = true;
          });
        });
    },
    updateReceipt() {
      //添加确认状态
      this.receipt.receipt_status = 2;
      //添加收据发起人ID，用于在文件夹中辨别用户身份
      this.receipt.receipt_b = localStorage.getItem("loginId");
      //console.log("updateReceipt-", this.receipt);
      this.$axios.post("/updateReceipt", this.receipt).then((res) => {
        //console.log("updateReceipt-res-", res);
        this.$message({
          message: "确认成功",
          type: "success",
        });
      });
    },
    getReceipt() {
      //console.log(33, this.$store.state.receipt.status);
      //console.log(44, this.$store.state.receipt.form);
      //判断路由参数是否存在receiptId，无则从Vuex中获取
      let receiptId = this.$route.params.id;
      if (receiptId === undefined) {
        this.receipt = this.$store.state.receipt.form;
        //处理日期格式
        let dt = new Date(this.receipt.receipt_receive_time);
        let month =
          dt.getMonth() + 1 < 10
            ? "0" + (dt.getMonth() + 1)
            : dt.getMonth() + 1;
        let date = dt.getDate() < 10 ? "0" + dt.getDate() : dt.getDate();
        this.receipt.receipt_receive_time =
          dt.getFullYear() + "-" + month + "-" + date;
        //处理金额格式
        this.receipt.receipt_money =
          this.intToChinese(this.receipt.receipt_money) +
          "元" +
          "\n￥" +
          this.receipt.receipt_money;
      } else {
        this.getReceiptById();
      }
      //console.log(55, this.receipt);
    },
    getReceiptById() {
      //获取从文件夹传过来的收据ID
      this.receiptId.receipt_id = this.$route.params.id;
      this.$axios.post("/selectReceiptById", this.receiptId).then((res) => {
        //console.log("根据ID查询的收据", res.data.result[0]);
        this.receipt = res.data.result[0];
        //处理日期格式
        let dt = new Date(this.receipt.receipt_receive_time);
        let month =
          dt.getMonth() + 1 < 10
            ? "0" + (dt.getMonth() + 1)
            : dt.getMonth() + 1;
        let date = dt.getDate() < 10 ? "0" + dt.getDate() : dt.getDate();
        this.receipt.receipt_receive_time =
          dt.getFullYear() + "-" + month + "-" + date;
        //判断是否需要填写用户信息
        let receiptData =
          this.receipt.receipt_receiver_name === "undefined" &&
          this.receipt.receipt_receiver_idnumber === "undefined" &&
          this.receipt.receipt_receiver_phone === "undefined" &&
          this.receipt.receipt_receiver_idtype === "undefined";
        let payerData =
          this.receipt.receipt_payer_name === "undefined" &&
          this.receipt.receipt_payer_idnumber === "undefined" &&
          this.receipt.receipt_payer_phone === "undefined" &&
          this.receipt.receipt_payer_idtype === "undefined";
        if (payerData) {
          this.receipt.receipt_payer_name = localStorage.getItem("loginName");
          this.receipt.receipt_payer_idnumber =
            localStorage.getItem("loginIdNumber");
          this.receipt.receipt_payer_phone = localStorage.getItem("loginPhone");
          this.receipt.receipt_payer_idtype =
            localStorage.getItem("loginIdType");
        }
        if (receiptData) {
          this.receipt.receipt_receiver_name =
            localStorage.getItem("loginName");
          this.receipt.receipt_receiver_idnumber =
            localStorage.getItem("loginIdNumber");
          this.receipt.receipt_receiver_phone =
            localStorage.getItem("loginPhone");
          this.receipt.receipt_receiver_idtype =
            localStorage.getItem("loginIdType");
        }
        let receipt_b = this.receipt.receipt_b;
        let receipt_status = this.receipt.receipt_status;
        if (receipt_b === null && receipt_status === "1") {
          this.buttonMethods = true;
        }
      });
    },
    sendEmail() {
      //判断用户身份,插入用户收据关系
      let identity = this.$store.state.receipt.status;
      if (identity === "付款人") {
        this.userReceipt.payer_email = localStorage.getItem("loginEmail");
        this.userReceipt.receiver_email = this.form.receiverEmail;
      } else {
        this.userReceipt.receiver_email = localStorage.getItem("loginEmail");
        this.userReceipt.payer_email = this.form.receiverEmail;
      }
      this.$axios.post("/addUserReceipt", this.userReceipt).then((res) => {});
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
    this.getReceipt();
  },
};
</script>
<style scoped>
.receiptComfire {
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
</style>

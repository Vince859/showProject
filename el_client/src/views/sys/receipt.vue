<template>
  <div class="receipt">
    <div class="header">
      <h1 style="display: inline">创建收据</h1>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <el-button
        type="primary"
        :disabled="!buttonStatus"
        @click="submitForm('form')"
        >下一步</el-button
      >
    </div>
    <div class="content_father">
      <div class="content_son">
        <el-page-header
          @back="ToReceipt"
          content="选择身份并填写收据信息完毕后即可发起签署收据"
        >
        </el-page-header>

        <!-- 选项卡 -->
        <el-tabs type="border-card" @tab-click="handleClick">
          <el-tab-pane label="我收款">
            <div class="receiver">
              <el-form
                :model="form"
                :rules="rules"
                ref="form"
                class="demo-ruleForm"
              >
                <el-form-item
                  label="付款人"
                  :label-width="formLabelWidth"
                  style="padding: 10px 0 0 0"
                >
                  <div class="position">
                    <span v-show="!value">待对方填写</span>
                    <el-button
                      type="primary"
                      @click="dialogFormVisible = true"
                      v-show="value"
                      >点击填写</el-button
                    >
                    &nbsp;&nbsp;
                    <el-switch
                      v-model="value"
                      active-color="#13ce66"
                      inactive-color="#c0e5ef"
                    >
                    </el-switch>
                    <el-input
                      v-model="form.receipt_next"
                      autocomplete="off"
                      style="display: none"
                    ></el-input>
                  </div>
                </el-form-item>
                <el-form-item label="收款人" :label-width="formLabelWidth">
                  <h3 class="position">
                    <strong>{{ userData }}</strong>
                  </h3>
                </el-form-item>
                <el-form-item
                  label="收款事由"
                  :label-width="formLabelWidth"
                  prop="receipt_incident"
                >
                  <div class="position">
                    <el-select
                      v-model="form.receipt_incident"
                      placeholder="请选择事由"
                    >
                      <el-option label="租金" value="租金"></el-option>
                      <el-option label="贷款" value="贷款"></el-option>
                      <el-option label="学费" value="学费"></el-option>
                      <el-option label="押金" value="押金"></el-option>
                      <el-option label="预付款" value="预付款"></el-option>
                      <el-option label="定金" value="定金"></el-option>
                      <el-option label="合同款" value="合同款"></el-option>
                      <el-option label="其他" value="其他"></el-option>
                    </el-select>
                  </div>
                </el-form-item>
                <el-form-item
                  label="收款金额"
                  :label-width="formLabelWidth"
                  prop="receipt_money"
                >
                  <div class="position">
                    <el-input
                      v-model="form.receipt_money"
                      autocomplete="off"
                      placeholder="请输入收款金额      元"
                    ></el-input>
                  </div>
                </el-form-item>
                <el-form-item
                  label="收款日期"
                  :label-width="formLabelWidth"
                  prop="receipt_receive_time"
                >
                  <div class="position">
                    <el-date-picker
                      v-model="form.receipt_receive_time"
                      type="date"
                      placeholder="选择日期"
                    >
                    </el-date-picker>
                  </div>
                </el-form-item>
                <el-form-item label="备注" :label-width="formLabelWidth">
                  <div class="position">
                    <el-input
                      v-model="form.receipt_remark"
                      autocomplete="off"
                      placeholder="（选填）"
                    ></el-input>
                  </div>
                </el-form-item>
              </el-form>
            </div>
          </el-tab-pane>
          <el-tab-pane label="我付款">
            <div class="payer">
              <el-form
                :model="form"
                :rules="rules"
                ref="form"
                class="demo-ruleForm"
              >
                <el-form-item
                  label="付款人"
                  :label-width="formLabelWidth"
                  style="padding-top: 10px"
                >
                  <h3 class="position">
                    <strong>{{ userData }}</strong>
                  </h3>
                </el-form-item>
                <el-form-item label="收款人" :label-width="formLabelWidth">
                  <div class="position">
                    <span v-show="!value">待对方填写</span>
                    <el-button
                      type="primary"
                      @click="ReceiverdialogFormVisible = true"
                      v-show="value"
                      >点击填写</el-button
                    >
                    &nbsp;&nbsp;
                    <el-switch
                      v-model="value"
                      active-color="#13ce66"
                      inactive-color="#c0e5ef"
                    >
                    </el-switch>
                    <el-input
                      v-model="form.receipt_next"
                      autocomplete="off"
                      style="display: none"
                    ></el-input>
                  </div>
                </el-form-item>
                <el-form-item
                  label="收款事由"
                  :label-width="formLabelWidth"
                  prop="receipt_incident"
                >
                  <div class="position">
                    <el-select
                      v-model="form.receipt_incident"
                      placeholder="请选择事由"
                    >
                      <el-option label="租金" value="租金"></el-option>
                      <el-option label="贷款" value="贷款"></el-option>
                      <el-option label="学费" value="学费"></el-option>
                      <el-option label="押金" value="押金"></el-option>
                      <el-option label="预付款" value="预付款"></el-option>
                      <el-option label="定金" value="定金"></el-option>
                      <el-option label="合同款" value="合同款"></el-option>
                      <el-option label="其他" value="其他"></el-option>
                    </el-select>
                  </div>
                </el-form-item>
                <el-form-item
                  label="收款金额"
                  :label-width="formLabelWidth"
                  prop="receipt_money"
                >
                  <div class="position">
                    <el-input
                      v-model="form.receipt_money"
                      autocomplete="off"
                      placeholder="请输入收款金额      元"
                    ></el-input>
                  </div>
                </el-form-item>
                <el-form-item
                  label="收款日期"
                  :label-width="formLabelWidth"
                  prop="receipt_receive_time"
                >
                  <div class="position">
                    <el-date-picker
                      v-model="form.receipt_receive_time"
                      type="date"
                      placeholder="选择日期"
                    >
                    </el-date-picker>
                  </div>
                </el-form-item>
                <el-form-item label="备注" :label-width="formLabelWidth">
                  <div class="position">
                    <el-input
                      v-model="form.receipt_remark"
                      autocomplete="off"
                      placeholder="（选填）"
                    ></el-input>
                  </div>
                </el-form-item>
              </el-form>
            </div>
          </el-tab-pane>
        </el-tabs>
        <!-- 付款人对话框 -->
        <el-dialog
          title="付款人信息"
          width="50%"
          :before-close="handleClose"
          :visible.sync="dialogFormVisible"
          :append-to-body="true"
        >
          <el-form
            :model="form"
            :rules="rules"
            ref="form"
            class="demo-ruleForm"
          >
            <el-form-item
              label="付 款 人"
              :label-width="formLabelWidth"
              prop="receipt_payer_name"
            >
              <div class="position">
                <el-input
                  v-model="form.receipt_payer_name"
                  autocomplete="off"
                ></el-input>
              </div>
            </el-form-item>
            <el-form-item
              label="证 件 类 型"
              :label-width="formLabelWidth"
              prop="receipt_payer_idtype"
            >
              <div class="position">
                <el-select
                  v-model="form.receipt_payer_idtype"
                  placeholder="请选择证件类型"
                >
                  <el-option label="居民身份证" value="居民身份证"></el-option>
                </el-select>
              </div>
            </el-form-item>
            <el-form-item
              label="证 件 号"
              :label-width="formLabelWidth"
              prop="receipt_payer_idnumber"
            >
              <div class="position">
                <el-input
                  v-model="form.receipt_payer_idnumber"
                  autocomplete="off"
                ></el-input>
              </div>
            </el-form-item>
            <el-form-item
              label="手 机 号"
              :label-width="formLabelWidth"
              prop="receipt_payer_phone"
            >
              <div class="position">
                <el-input
                  v-model="form.receipt_payer_phone"
                  autocomplete="off"
                ></el-input>
              </div>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <!-- <el-button @click="dialogFormVisible = false">重 置</el-button> -->
            <el-button type="primary" @click="dialogFormVisible = false"
              >确 定</el-button
            >
          </div>
        </el-dialog>
        <!-- 收款人对话框 -->
        <el-dialog
          title="收款人信息"
          width="50%"
          :before-close="handleClose"
          :visible.sync="ReceiverdialogFormVisible"
          :append-to-body="true"
        >
          <el-form
            :model="form"
            :rules="rules"
            ref="form"
            class="demo-ruleForm"
          >
            <el-form-item
              label="收 款 人"
              :label-width="formLabelWidth"
              prop="receipt_receiver_name"
            >
              <div class="position">
                <el-input
                  v-model="form.receipt_receiver_name"
                  autocomplete="off"
                ></el-input>
              </div>
            </el-form-item>
            <el-form-item
              label="证 件 类 型"
              :label-width="formLabelWidth"
              prop="receipt_receiver_idtype"
            >
              <div class="position">
                <el-select
                  v-model="form.receipt_receiver_idtype"
                  placeholder="请选择证件类型"
                >
                  <el-option label="居民身份证" value="居民身份证"></el-option>
                </el-select>
              </div>
            </el-form-item>
            <el-form-item
              label="证 件 号"
              :label-width="formLabelWidth"
              prop="receipt_receiver_idnumber"
            >
              <div class="position">
                <el-input
                  v-model="form.receipt_receiver_idnumber"
                  autocomplete="off"
                ></el-input>
              </div>
            </el-form-item>
            <el-form-item
              label="手 机 号"
              :label-width="formLabelWidth"
              prop="receipt_receiver_phone"
            >
              <div class="position">
                <el-input
                  v-model="form.receipt_receiver_phone"
                  autocomplete="off"
                ></el-input>
              </div>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <!-- <el-button @click="dialogFormVisible = false">重 置</el-button> -->
            <el-button type="primary" @click="ReceiverdialogFormVisible = false"
              >确 定</el-button
            >
          </div>
        </el-dialog>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "receipt",
  inject: ["reload"],
  data() {
    return {
      form: {},
      rules: {
        receipt_payer_name: [
          { required: true, message: "请输入付款人", trigger: "blur" },
        ],
        receipt_payer_phone: [
          { required: true, message: "请输入付款人手机号", trigger: "blur" },
        ],
        receipt_payer_idtype: [
          { required: true, message: "请输入证件类型", trigger: "blur" },
        ],
        receipt_payer_idnumber: [
          { required: true, message: "请输入证件号", trigger: "blur" },
        ],
        receipt_receiver_name: [
          { required: true, message: "请输入收款人", trigger: "blur" },
        ],
        receipt_receiver_idtype: [
          { required: true, message: "请输入证件类型", trigger: "blur" },
        ],
        receipt_receiver_idnumber: [
          { required: true, message: "请输入证件号", trigger: "blur" },
        ],
        receipt_receiver_phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
        ],
        receipt_incident: [
          { required: true, message: "请输入收款事由", trigger: "blur" },
        ],
        receipt_receive_time: [
          { required: true, message: "请选择收款日期", trigger: "blur" },
        ],
        receipt_money: [
          { required: true, message: "请选择收款金额", trigger: "blur" },
        ],
      },
      formLabelWidth: "180px",
      user: {
        name: "",
        idNumber: "",
        phone: "",
        IdType: "",
      },
      userData: "",
      tabId: "",
      value: false,
      dialogFormVisible: false,
      ReceiverdialogFormVisible: false,
      buttonStatus: false,
    };
  },
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleClose() {
      this.resetForm("form");
      this.dialogFormVisible = false;
      this.ReceiverdialogFormVisible = false;
    },
    ToReceipt() {
      this.$router.push({ path: "/receiptModel", replace: true });
    },
    //获取选中tab页ID
    handleClick(tab, event) {
      this.tabId = event.target.getAttribute("id");
      console.log("this.tabId-", this.tabId);
      //判断用户属于什么身份,赋值
      if (this.tabId === "tab-1") {
        this.form.receipt_payer_name = localStorage.getItem("loginName");
        this.form.receipt_payer_idnumber =
          localStorage.getItem("loginIdNumber");
        this.form.receipt_payer_phone = localStorage.getItem("loginPhone");
        this.form.receipt_payer_idtype = localStorage.getItem("loginIdType");
        this.form.receipt_receiver_name = "";
        this.form.receipt_receiver_idnumber = "";
        this.form.receipt_receiver_phone = "";
        this.form.receipt_receiver_idtype = "";
        //防止赋空值后input框不能输入
        this.form = JSON.stringify(this.form);
        this.form = JSON.parse(this.form);
        this.$store.commit("SET_RSTATUS", "付款人");
        console.log(11, this.$store.state.receipt.status);
      } else {
        this.form.receipt_payer_name = "";
        this.form.receipt_payer_idnumber = "";
        this.form.receipt_payer_phone = "";
        this.form.receipt_payer_idtype = "";
        this.form.receipt_receiver_name = localStorage.getItem("loginName");
        this.form.receipt_receiver_idnumber =
          localStorage.getItem("loginIdNumber");
        this.form.receipt_receiver_phone = localStorage.getItem("loginPhone");
        this.form.receipt_receiver_idtype = localStorage.getItem("loginIdType");
        this.form = JSON.stringify(this.form);
        this.form = JSON.parse(this.form);
        this.$store.commit("SET_RSTATUS", "收款人");
        console.log(22, this.$store.state.receipt.status);
      }
    },
    getUser() {
      this.form = {};
      this.user.name = localStorage.getItem("loginName");
      this.user.idNumber = localStorage.getItem("loginIdNumber");
      this.user.phone = localStorage.getItem("loginPhone");
      this.user.IdType = localStorage.getItem("loginIdType");
      console.log(11, this.user);
      this.$store.commit("SET_RSTATUS", "收款人");
      //判断用户属于什么身份
      if (this.tabId === "") {
        this.form.receipt_receiver_name = this.user.name;
        this.form.receipt_receiver_phone = this.user.phone;
        this.form.receipt_receiver_idnumber = this.user.idNumber;
        this.form.receipt_receiver_idtype = this.user.IdType;
        console.log(22, this.form);
      }
      //隐藏部分手机号码
      this.user.phone = this.user.phone.replace(
        /^(\d{3})\d+(\d{4})$/,
        "$1****$2"
      );
      //隐藏部分身份证号码
      this.user.idNumber = this.user.idNumber.replace(
        /(.{6}).*(.{4})/,
        "$1********$2"
      );
      //整理用户信息
      this.userData =
        this.user.name + " " + this.user.phone + " | " + this.user.idNumber;
    },
    submitForm(formName) {
      //获取当前时间作为开具时间
      let time = new Date();
      this.form.receipt_time = time.toLocaleString();
      this.$store.commit("SET_FORM", this.form);
      this.$router.push({ path: "/receiptComfire", replace: true });
      /* this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios.post("/addReceipt", this.form).then((res) => {
            this.$message({
              showClose: true,
              message: "成功",
              type: "success",
            });
            console.log(11, res);
            this.resetForm("form");

          });
        } else {
          console.log("error submit!!");
          return false;
        }
      }); */
    },
  },
  watch: {
    form(newValue, oldValue) {
      //当等对方填写时
      const basicFormStatus =
        newValue.receipt_incident !== undefined &&
        newValue.receipt_money !== undefined &&
        newValue.receipt_receive_time !== undefined;
      //用户填写时
      const receiverFormStatus =
        newValue.receipt_receiver_name !== undefined &&
        newValue.receipt_receiver_idtype !== undefined &&
        newValue.receipt_receiver_idnumber !== undefined &&
        newValue.receipt_receiver_phone !== undefined &&
        basicFormStatus;
      const payerFormStatus =
        newValue.receipt_payer_name !== undefined &&
        newValue.receipt_payer_idtype !== undefined &&
        newValue.receipt_payer_idnumber !== undefined &&
        newValue.receipt_payer_phone !== undefined &&
        basicFormStatus;
      //首先判断状态开关谁来填写，再判断form表单有没有填写完毕
      if (newValue.receipt_next === "true") {
        if (receiverFormStatus || payerFormStatus) {
          this.buttonStatus = true;
        } else {
          this.buttonStatus = false;
        }
      } else {
        if (basicFormStatus) {
          this.buttonStatus = true;
        } else {
          this.buttonStatus = false;
        }
      }
    },
    value(newValue, oldValue) {
      //通过填写开关的值来判断
      newValue
        ? (this.form.receipt_next = "true")
        : (this.form.receipt_next = "false");
    },
    immediate: true, // 立即执行
    deep: true, // 深度监听复杂类型内变化
  },
  mounted() {
    this.getUser();
  },
};
</script>
<style scoped>
.receipt {
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
  border-radius: 15px;
}
.line {
  height: 15px;
  line-height: 5px;
  color: #4ba79c;
}
.el-form-item {
  margin-bottom: 20px;
}
.item .el-form-item__label {
  font-size: 15px;
  color: #6c6c6c;
}
.content_son .el-page-header {
  padding: 10px 0 10px 10px;
  font-size: 20px;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  background-color: #4ba79c;
}
.login .el-page-header__content {
  color: #4ba79c;
}
.el-input {
  /* margin-left: 15px; */
  width: 480px;
}
.receiver,
.payer {
  background-color: #f6f6f6;
  width: 700px;
  height: 500px;
  margin-left: 30px;
  border-radius: 20px;
}
.position {
  text-align: left;
  padding-left: 20px;
}
</style>

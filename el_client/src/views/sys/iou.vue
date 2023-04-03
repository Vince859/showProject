<template>
  <div class="iou">
    <div class="header">
      <h1 style="display: inline">创建借条</h1>
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
          @back="ToIou"
          content="选择身份并填写借条信息完毕后即可发起签署借条"
        >
        </el-page-header>

        <!-- 选项卡 -->
        <el-tabs type="border-card" @tab-click="handleClick">
          <el-tab-pane label="借给我">
            <div class="receiver">
              <el-form
                :model="form"
                :rules="rules"
                ref="form"
                class="demo-ruleForm"
              >
                <el-form-item
                  label="出借人"
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
                      v-model="form.iou_next"
                      autocomplete="off"
                      style="display: none"
                    ></el-input>
                  </div>
                </el-form-item>
                <el-form-item label="借款人" :label-width="formLabelWidth">
                  <h3 class="position">
                    <strong>{{ userData }}</strong>
                  </h3>
                </el-form-item>
                <el-form-item
                  label="借款事由"
                  :label-width="formLabelWidth"
                  prop="iou_incident"
                >
                  <div class="position">
                    <el-select
                      v-model="form.iou_incident"
                      placeholder="请选择事由"
                    >
                      <el-option label="购买房屋" value="购买房屋"></el-option>
                      <el-option label="购买汽车" value="购买汽车"></el-option>
                      <el-option label="家庭装修" value="家庭装修"></el-option>
                      <el-option
                        label="生产经营需要"
                        value="生产经营需要"
                      ></el-option>
                      <el-option label="其他事由" value="其他事由"></el-option>
                    </el-select>
                  </div>
                </el-form-item>
                <el-form-item
                  label="借款金额"
                  :label-width="formLabelWidth"
                  prop="iou_money"
                >
                  <div class="position">
                    <el-input
                      v-model="form.iou_money"
                      autocomplete="off"
                      placeholder="请输入收款金额      元"
                    ></el-input>
                  </div>
                </el-form-item>
                <el-form-item
                  label="借款期间"
                  :label-width="formLabelWidth"
                  prop="iou_period"
                >
                  <div class="position">
                    <el-date-picker
                      v-model="form.iou_period"
                      type="daterange"
                      align="right"
                      unlink-panels
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                      :picker-options="pickerOptions"
                    >
                    </el-date-picker>
                  </div>
                </el-form-item>
                <el-form-item
                  label="约定利率"
                  :label-width="formLabelWidth"
                  prop="iou_appoint_rate"
                >
                  <div class="position">
                    <el-select
                      v-model="form.iou_appoint_rate"
                      placeholder="请选择"
                    >
                      <el-option label="0%" value="0%"></el-option>
                      <el-option label="1%" value="1%"></el-option>
                      <el-option label="2%" value="2%"></el-option>
                      <el-option label="3%" value="3%"></el-option>
                      <el-option label="4%" value="4%"></el-option>
                      <el-option label="5%" value="5%"></el-option>
                      <el-option label="6%" value="6%"></el-option>
                      <el-option label="7%" value="7%"></el-option>
                      <el-option label="8%" value="8%"></el-option>
                      <el-option label="9%" value="9%"></el-option>
                      <el-option label="10%" value="10%"></el-option>
                      <el-option label="11%" value="11%"></el-option>
                      <el-option label="12%" value="12%"></el-option>
                    </el-select>
                  </div>
                </el-form-item>
                <el-form-item
                  label="支付方式"
                  :label-width="formLabelWidth"
                  prop="iou_payment"
                >
                  <div class="position">
                    <el-select v-model="form.iou_payment" placeholder="请选择">
                      <el-option label="微信转账" value="微信转账"></el-option>
                      <el-option
                        label="银行账户转账"
                        value="银行账户转账"
                      ></el-option>
                      <el-option
                        label="其他转账方式"
                        value="其他转账方式"
                      ></el-option>
                    </el-select>
                  </div>
                </el-form-item>
                <el-form-item
                  label="还款方式"
                  :label-width="formLabelWidth"
                  prop="iou_repayment"
                >
                  <div class="position">
                    <el-input
                      v-model="form.iou_repayment"
                      autocomplete="off"
                      placeholder="一次性还本付息"
                    ></el-input>
                  </div>
                </el-form-item>
                <el-form-item label="其他约定" :label-width="formLabelWidth">
                  <div class="position">
                    <el-input
                      v-model="form.iou_other_appointment"
                      autocomplete="off"
                      placeholder="（选填）"
                    ></el-input>
                  </div>
                </el-form-item>
              </el-form>
            </div>
          </el-tab-pane>
          <el-tab-pane label="我出借">
            <div class="payer">
              <el-form
                :model="form"
                :rules="rules"
                ref="form"
                class="demo-ruleForm"
              >
                <el-form-item
                  label="出 借 人"
                  :label-width="formLabelWidth"
                  style="padding-top: 10px"
                >
                  <h3 class="position">
                    <strong>{{ userData }}</strong>
                  </h3>
                </el-form-item>
                <el-form-item label="借 款 人" :label-width="formLabelWidth">
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
                      v-model="form.iou_next"
                      autocomplete="off"
                      style="display: none"
                    ></el-input>
                  </div>
                </el-form-item>
                <el-form-item
                  label="借款事由"
                  :label-width="formLabelWidth"
                  prop="iou_incident"
                >
                  <div class="position">
                    <el-select
                      v-model="form.iou_incident"
                      placeholder="请选择事由"
                    >
                      <el-option label="购买房屋" value="购买房屋"></el-option>
                      <el-option label="购买汽车" value="购买汽车"></el-option>
                      <el-option label="家庭装修" value="家庭装修"></el-option>
                      <el-option
                        label="生产经营需要"
                        value="生产经营需要"
                      ></el-option>
                      <el-option label="其他事由" value="其他事由"></el-option>
                    </el-select>
                  </div>
                </el-form-item>
                <el-form-item
                  label="借款金额"
                  :label-width="formLabelWidth"
                  prop="iou_money"
                >
                  <div class="position">
                    <el-input
                      v-model="form.iou_money"
                      autocomplete="off"
                      placeholder="请输入收款金额      元"
                    ></el-input>
                  </div>
                </el-form-item>
                <el-form-item
                  label="借款期间"
                  :label-width="formLabelWidth"
                  prop="iou_period"
                >
                  <div class="position">
                    <el-date-picker
                      v-model="form.iou_period"
                      type="daterange"
                      align="right"
                      unlink-panels
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                      :picker-options="pickerOptions"
                    >
                    </el-date-picker>
                  </div>
                </el-form-item>
                <el-form-item
                  label="约定利率"
                  :label-width="formLabelWidth"
                  prop="iou_appoint_rate"
                >
                  <div class="position">
                    <el-select
                      v-model="form.iou_appoint_rate"
                      placeholder="请选择"
                    >
                      <el-option label="0%" value="0%"></el-option>
                      <el-option label="1%" value="1%"></el-option>
                      <el-option label="2%" value="2%"></el-option>
                      <el-option label="3%" value="3%"></el-option>
                      <el-option label="4%" value="4%"></el-option>
                      <el-option label="5%" value="5%"></el-option>
                      <el-option label="6%" value="6%"></el-option>
                      <el-option label="7%" value="7%"></el-option>
                      <el-option label="8%" value="8%"></el-option>
                      <el-option label="9%" value="9%"></el-option>
                      <el-option label="10%" value="10%"></el-option>
                      <el-option label="11%" value="11%"></el-option>
                      <el-option label="12%" value="12%"></el-option>
                    </el-select>
                  </div>
                </el-form-item>
                <el-form-item
                  label="支付方式"
                  :label-width="formLabelWidth"
                  prop="iou_payment"
                >
                  <div class="position">
                    <el-select v-model="form.iou_payment" placeholder="请选择">
                      <el-option label="微信转账" value="微信转账"></el-option>
                      <el-option
                        label="银行账户转账"
                        value="银行账户转账"
                      ></el-option>
                      <el-option
                        label="其他转账方式"
                        value="其他转账方式"
                      ></el-option>
                    </el-select>
                  </div>
                </el-form-item>
                <el-form-item
                  label="还款方式"
                  :label-width="formLabelWidth"
                  prop="iou_repayment"
                >
                  <div class="position">
                    <el-input
                      v-model="form.iou_repayment"
                      autocomplete="off"
                      placeholder="一次性还本付息"
                    ></el-input>
                  </div>
                </el-form-item>
                <el-form-item label="其他约定" :label-width="formLabelWidth">
                  <div class="position">
                    <el-input
                      v-model="form.iou_other_appointment"
                      autocomplete="off"
                      placeholder="（选填）"
                    ></el-input>
                  </div>
                </el-form-item>
              </el-form>
            </div>
          </el-tab-pane>
        </el-tabs>
        <!-- 出借人对话框 -->
        <el-dialog
          title="出借人信息"
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
              label="出 借 人"
              :label-width="formLabelWidth"
              prop="iou_leader_name"
            >
              <div class="position">
                <el-input
                  v-model="form.iou_leader_name"
                  autocomplete="off"
                ></el-input>
              </div>
            </el-form-item>
            <el-form-item
              label="证 件 类 型"
              :label-width="formLabelWidth"
              prop="iou_leader_idtype"
            >
              <div class="position">
                <el-select
                  v-model="form.iou_leader_idtype"
                  placeholder="请选择证件类型"
                >
                  <el-option label="居民身份证" value="居民身份证"></el-option>
                </el-select>
              </div>
            </el-form-item>
            <el-form-item
              label="证 件 号"
              :label-width="formLabelWidth"
              prop="iou_leader_idnumber"
            >
              <div class="position">
                <el-input
                  v-model="form.iou_leader_idnumber"
                  autocomplete="off"
                ></el-input>
              </div>
            </el-form-item>
            <el-form-item
              label="手 机 号"
              :label-width="formLabelWidth"
              prop="iou_leader_phone"
            >
              <div class="position">
                <el-input
                  v-model="form.iou_leader_phone"
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
        <!-- 借款人对话框 -->
        <el-dialog
          title="借款人信息"
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
              label="借 款 人"
              :label-width="formLabelWidth"
              prop="iou_borrower_name"
            >
              <div class="position">
                <el-input
                  v-model="form.iou_borrower_name"
                  autocomplete="off"
                ></el-input>
              </div>
            </el-form-item>
            <el-form-item
              label="证 件 类 型"
              :label-width="formLabelWidth"
              prop="iou_borrower_idtype"
            >
              <div class="position">
                <el-select
                  v-model="form.iou_borrower_idtype"
                  placeholder="请选择证件类型"
                >
                  <el-option label="居民身份证" value="居民身份证"></el-option>
                </el-select>
              </div>
            </el-form-item>
            <el-form-item
              label="证 件 号"
              :label-width="formLabelWidth"
              prop="iou_borrower_idnumber"
            >
              <div class="position">
                <el-input
                  v-model="form.iou_borrower_idnumber"
                  autocomplete="off"
                ></el-input>
              </div>
            </el-form-item>
            <el-form-item
              label="手 机 号"
              :label-width="formLabelWidth"
              prop="iou_borrower_phone"
            >
              <div class="position">
                <el-input
                  v-model="form.iou_borrower_phone"
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
  name: "iou",
  inject: ["reload"],
  data() {
    return {
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      form: {},
      rules: {
        iou_leader_name: [
          { required: true, message: "请输入出借人", trigger: "blur" },
        ],
        iou_leader_phone: [
          { required: true, message: "请输入出借人手机号", trigger: "blur" },
        ],
        iou_leader_idtype: [
          { required: true, message: "请输入证件类型", trigger: "blur" },
        ],
        iou_leader_idnumber: [
          { required: true, message: "请输入证件号", trigger: "blur" },
        ],
        iou_borrower_name: [
          { required: true, message: "请输入借款人", trigger: "blur" },
        ],
        iou_borrower_idtype: [
          { required: true, message: "请输入证件类型", trigger: "blur" },
        ],
        iou_borrower_idnumber: [
          { required: true, message: "请输入证件号", trigger: "blur" },
        ],
        iou_borrower_phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
        ],
        iou_incident: [
          { required: true, message: "请输入借款事由", trigger: "blur" },
        ],
        iou_period: [
          { required: true, message: "请选择借款期间", trigger: "blur" },
        ],
        iou_money: [
          { required: true, message: "请选择借款金额", trigger: "blur" },
        ],
        iou_appoint_rate: [
          { required: true, message: "请选择约定利率", trigger: "blur" },
        ],
        iou_payment: [
          { required: true, message: "请选择支付方式", trigger: "blur" },
        ],
        iou_repayment: [
          { required: true, message: "请选择还款方式", trigger: "blur" },
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
    ToIou() {
      this.$router.push({ path: "/iouModel", replace: true });
    },
    //获取选中tab页ID
    handleClick(tab, event) {
      this.tabId = event.target.getAttribute("id");
      console.log("this.tabId-", this.tabId);
      //判断用户属于什么身份,赋值
      if (this.tabId === "tab-1") {
        this.form.iou_leader_name = localStorage.getItem("loginName");
        this.form.iou_leader_idnumber = localStorage.getItem("loginIdNumber");
        this.form.iou_leader_phone = localStorage.getItem("loginPhone");
        this.form.iou_leader_idtype = localStorage.getItem("loginIdType");
        this.form.iou_borrower_name = "";
        this.form.iou_borrower_idnumber = "";
        this.form.iou_borrower_phone = "";
        this.form.iou_borrower_idtype = "";
        //防止赋空值后input框不能输入
        this.form = JSON.stringify(this.form);
        this.form = JSON.parse(this.form);
        this.$store.commit("SET_ISTATUS", "出借人");
        console.log(11, this.$store.state.iou.status);
      } else {
        this.form.iou_leader_name = "";
        this.form.iou_leader_idnumber = "";
        this.form.iou_leader_phone = "";
        this.form.iou_leader_idtype = "";
        this.form.iou_borrower_name = localStorage.getItem("loginName");
        this.form.iou_borrower_idnumber = localStorage.getItem("loginIdNumber");
        this.form.iou_borrower_phone = localStorage.getItem("loginPhone");
        this.form.iou_borrower_idtype = localStorage.getItem("loginIdType");
        this.form = JSON.stringify(this.form);
        this.form = JSON.parse(this.form);
        this.$store.commit("SET_ISTATUS", "借款人");
        console.log(22, this.$store.state.iou.status);
      }
    },
    getUser() {
      this.form = {};
      this.user.name = localStorage.getItem("loginName");
      this.user.idNumber = localStorage.getItem("loginIdNumber");
      this.user.phone = localStorage.getItem("loginPhone");
      this.user.IdType = localStorage.getItem("loginIdType");
      console.log(11, this.user);
      this.$store.commit("SET_ISTATUS", "借款人");
      //判断用户属于什么身份
      if (this.tabId === "") {
        this.form.iou_borrower_name = this.user.name;
        this.form.iou_borrower_phone = this.user.phone;
        this.form.iou_borrower_idnumber = this.user.idNumber;
        this.form.iou_borrower_idtype = this.user.IdType;
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
      this.form.iou_time = time.toLocaleString();
      this.$store.commit("SET_IFORM", this.form);
      this.$router.push({ path: "/iouComfire", replace: true });
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
        newValue.iou_incident !== undefined &&
        newValue.iou_period !== undefined &&
        newValue.iou_money !== undefined &&
        newValue.iou_appoint_rate !== undefined &&
        newValue.iou_payment !== undefined &&
        newValue.iou_repayment !== undefined;
      //用户填写时
      const receiverFormStatus =
        newValue.iou_leader_name !== undefined &&
        newValue.iou_leader_phone !== undefined &&
        newValue.iou_leader_idtype !== undefined &&
        newValue.iou_leader_idnumber !== undefined &&
        basicFormStatus;
      const payerFormStatus =
        newValue.iou_borrower_name !== undefined &&
        newValue.iou_borrower_idtype !== undefined &&
        newValue.iou_borrower_idnumber !== undefined &&
        newValue.iou_borrower_phone !== undefined &&
        basicFormStatus;
      //首先判断状态开关谁来填写，再判断form表单有没有填写完毕
      if (newValue.iou_next === "true") {
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
      newValue ? (this.form.iou_next = "true") : (this.form.iou_next = "false");
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
.iou {
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
  height: 550px;
  margin-left: 30px;
  border-radius: 20px;
}
.position {
  text-align: left;
  padding-left: 20px;
}
</style>

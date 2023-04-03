<template>
  <div class="parttime">
    <div class="header">
      <h1 style="display: inline">创建合同</h1>
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
          @back="ToParttime"
          content="选择身份并填写合同信息完毕后即可发起签署合同"
        >
        </el-page-header>

        <!-- 选项卡 -->
        <el-tabs type="border-card" @tab-click="handleClick">
          <el-tab-pane label="我雇佣">
            <div class="receiver">
              <el-form
                :model="form"
                :rules="rules"
                ref="form"
                class="demo-ruleForm"
              >
                <el-form-item label="雇 佣 方" :label-width="formLabelWidth">
                  <h3 class="position">
                    <strong>{{ userData }}</strong>
                  </h3>
                </el-form-item>
                <el-form-item
                  label="兼 职 方"
                  :label-width="formLabelWidth"
                  style="padding: 10px 0 0 0"
                >
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
                      v-model="form.parttime_next"
                      autocomplete="off"
                      style="display: none"
                    ></el-input>
                  </div>
                </el-form-item>
                <el-form-item
                  label="兼职内容"
                  :label-width="formLabelWidth"
                  prop="parttime_content"
                >
                  <div class="position">
                    <el-input
                      type="textarea"
                      v-model="form.parttime_content"
                      autocomplete="off"
                      placeholder="请输入兼职内容及要求，如文本校对，文件翻译等。"
                    ></el-input>
                  </div>
                </el-form-item>
                <el-form-item
                  label="兼职期限"
                  :label-width="formLabelWidth"
                  prop="parttime_timelimit"
                >
                  <div class="position">
                    <el-date-picker
                      v-model="form.parttime_timelimit"
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
                  label="兼职地址"
                  :label-width="formLabelWidth"
                  prop="parttime_address"
                >
                  <div class="position">
                    <el-input
                      v-model="form.parttime_address"
                      autocomplete="off"
                      placeholder="请输入兼职地址"
                    ></el-input>
                  </div>
                </el-form-item>
                <el-form-item
                  label="兼职报酬"
                  :label-width="formLabelWidth"
                  prop="parttime_reword"
                >
                  <div class="position">
                    <el-input
                      v-model="form.parttime_reword"
                      autocomplete="off"
                      placeholder="如：100元/天；50元一篇；200元/次"
                    ></el-input>
                  </div>
                </el-form-item>
                <el-form-item
                  label="支付方式"
                  :label-width="formLabelWidth"
                  prop="parttime_payment"
                >
                  <div class="position">
                    <el-select
                      v-model="form.parttime_payment"
                      placeholder="请选择支付方式"
                    >
                      <el-option label="银行转账" value="银行转账"></el-option>
                      <el-option label="微信转账" value="微信转账"></el-option>
                      <el-option
                        label="其他线上转账"
                        value="其他线上转账"
                      ></el-option>
                    </el-select>
                  </div>
                </el-form-item>
                <el-form-item
                  label="结算周期"
                  :label-width="formLabelWidth"
                  prop="parttime_settle_period"
                >
                  <div class="position">
                    <el-select
                      v-model="form.parttime_settle_period"
                      placeholder="请选择结算周期"
                    >
                      <el-option label="按日结算" value="按日结算"></el-option>
                      <el-option label="按周结算" value="按周结算"></el-option>
                      <el-option label="按月结算" value="按月结算"></el-option>
                      <el-option
                        label="每完成一次兼职任务结算一次"
                        value="每完成一次兼职任务结算一次"
                      ></el-option>
                      <el-option
                        label="兼职期满后结算一次性结算"
                        value="兼职期满后结算一次性结算"
                      ></el-option>
                    </el-select>
                  </div>
                </el-form-item>
                <el-form-item
                  label="结算时间"
                  :label-width="formLabelWidth"
                  prop="parttime_settle_time"
                >
                  <div class="position">
                    <el-input
                      v-model="form.parttime_settle_time"
                      autocomplete="off"
                      placeholder="如：每周五；每月5日；2022年1月1日"
                    ></el-input>
                  </div>
                </el-form-item>
                <el-form-item label="其他约定" :label-width="formLabelWidth">
                  <div class="position">
                    <el-input
                      v-model="form.parttime_other_appoint"
                      autocomplete="off"
                      placeholder="（选填）"
                    ></el-input>
                  </div>
                </el-form-item>
              </el-form>
            </div>
          </el-tab-pane>
          <el-tab-pane label="我兼职">
            <div class="payer">
              <el-form
                :model="form"
                :rules="rules"
                ref="form"
                class="demo-ruleForm"
              >
                <el-form-item
                  label="兼 职 方"
                  :label-width="formLabelWidth"
                  style="padding-top: 10px"
                >
                  <h3 class="position">
                    <strong>{{ userData }}</strong>
                  </h3>
                </el-form-item>
                <el-form-item label="雇 佣 方" :label-width="formLabelWidth">
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
                      v-model="form.parttime_next"
                      autocomplete="off"
                      style="display: none"
                    ></el-input>
                  </div>
                </el-form-item>
                <el-form-item
                  label="兼职内容"
                  :label-width="formLabelWidth"
                  prop="parttime_content"
                >
                  <div class="position">
                    <el-input
                      type="textarea"
                      v-model="form.parttime_content"
                      autocomplete="off"
                      placeholder="请输入兼职内容及要求，如文本校对，文件翻译等。"
                    ></el-input>
                  </div>
                </el-form-item>
                <el-form-item
                  label="兼职期限"
                  :label-width="formLabelWidth"
                  prop="parttime_timelimit"
                >
                  <div class="position">
                    <el-date-picker
                      v-model="form.parttime_timelimit"
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
                  label="兼职地址"
                  :label-width="formLabelWidth"
                  prop="parttime_address"
                >
                  <div class="position">
                    <el-input
                      v-model="form.parttime_address"
                      autocomplete="off"
                      placeholder="请输入兼职地址"
                    ></el-input>
                  </div>
                </el-form-item>
                <el-form-item
                  label="兼职报酬"
                  :label-width="formLabelWidth"
                  prop="parttime_reword"
                >
                  <div class="position">
                    <el-input
                      v-model="form.parttime_reword"
                      autocomplete="off"
                      placeholder="如：100元/天；50元一篇；200元/次"
                    ></el-input>
                  </div>
                </el-form-item>
                <el-form-item
                  label="支付方式"
                  :label-width="formLabelWidth"
                  prop="parttime_payment"
                >
                  <div class="position">
                    <el-select
                      v-model="form.parttime_payment"
                      placeholder="请选择支付方式"
                    >
                      <el-option label="银行转账" value="银行转账"></el-option>
                      <el-option label="微信转账" value="微信转账"></el-option>
                      <el-option
                        label="其他线上转账"
                        value="其他线上转账"
                      ></el-option>
                    </el-select>
                  </div>
                </el-form-item>
                <el-form-item
                  label="结算周期"
                  :label-width="formLabelWidth"
                  prop="parttime_settle_period"
                >
                  <div class="position">
                    <el-select
                      v-model="form.parttime_settle_period"
                      placeholder="请选择结算周期"
                    >
                      <el-option label="按日结算" value="按日结算"></el-option>
                      <el-option label="按周结算" value="按周结算"></el-option>
                      <el-option label="按月结算" value="按月结算"></el-option>
                      <el-option
                        label="每完成一次兼职任务结算一次"
                        value="每完成一次兼职任务结算一次"
                      ></el-option>
                      <el-option
                        label="兼职期满后结算一次性结算"
                        value="兼职期满后结算一次性结算"
                      ></el-option>
                    </el-select>
                  </div>
                </el-form-item>
                <el-form-item
                  label="结算时间"
                  :label-width="formLabelWidth"
                  prop="parttime_settle_time"
                >
                  <div class="position">
                    <el-input
                      v-model="form.parttime_settle_time"
                      autocomplete="off"
                      placeholder="如：每周五；每月5日；2022年1月1日"
                    ></el-input>
                  </div>
                </el-form-item>
                <el-form-item label="其他约定" :label-width="formLabelWidth">
                  <div class="position">
                    <el-input
                      v-model="form.parttime_other_appoint"
                      autocomplete="off"
                      placeholder="（选填）"
                    ></el-input>
                  </div>
                </el-form-item>
              </el-form>
            </div>
          </el-tab-pane>
        </el-tabs>
        <!-- 雇佣方对话框 -->
        <el-dialog
          title="雇佣方信息"
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
              label="雇 佣 方"
              :label-width="formLabelWidth"
              prop="parttime_employer_name"
            >
              <div class="position">
                <el-input
                  v-model="form.parttime_employer_name"
                  autocomplete="off"
                ></el-input>
              </div>
            </el-form-item>
            <el-form-item
              label="证 件 类 型"
              :label-width="formLabelWidth"
              prop="parttime_employer_idtype"
            >
              <div class="position">
                <el-select
                  v-model="form.parttime_employer_idtype"
                  placeholder="请选择证件类型"
                >
                  <el-option label="居民身份证" value="居民身份证"></el-option>
                </el-select>
              </div>
            </el-form-item>
            <el-form-item
              label="证 件 号"
              :label-width="formLabelWidth"
              prop="parttime_employer_idnumber"
            >
              <div class="position">
                <el-input
                  v-model="form.parttime_employer_idnumber"
                  autocomplete="off"
                ></el-input>
              </div>
            </el-form-item>
            <el-form-item
              label="手 机 号"
              :label-width="formLabelWidth"
              prop="parttime_employer_phone"
            >
              <div class="position">
                <el-input
                  v-model="form.parttime_employer_phone"
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
        <!-- 兼职方对话框 -->
        <el-dialog
          title="兼职方信息"
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
              label="兼 职 方"
              :label-width="formLabelWidth"
              prop="parttime_parttimer_name"
            >
              <div class="position">
                <el-input
                  v-model="form.parttime_parttimer_name"
                  autocomplete="off"
                ></el-input>
              </div>
            </el-form-item>
            <el-form-item
              label="证 件 类 型"
              :label-width="formLabelWidth"
              prop="parttime_parttimer_idtype"
            >
              <div class="position">
                <el-select
                  v-model="form.parttime_parttimer_idtype"
                  placeholder="请选择证件类型"
                >
                  <el-option label="居民身份证" value="居民身份证"></el-option>
                </el-select>
              </div>
            </el-form-item>
            <el-form-item
              label="证 件 号"
              :label-width="formLabelWidth"
              prop="parttime_parttimer_idnumber"
            >
              <div class="position">
                <el-input
                  v-model="form.parttime_parttimer_idnumber"
                  autocomplete="off"
                ></el-input>
              </div>
            </el-form-item>
            <el-form-item
              label="手 机 号"
              :label-width="formLabelWidth"
              prop="parttime_parttimer_phone"
            >
              <div class="position">
                <el-input
                  v-model="form.parttime_parttimer_phone"
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
  name: "parttime",
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
        parttime_employer_name: [
          { required: true, message: "请输入雇佣方名字", trigger: "blur" },
        ],
        parttime_employer_phone: [
          { required: true, message: "请输入雇佣方手机号", trigger: "blur" },
        ],
        parttime_employer_idtype: [
          { required: true, message: "请输入证件类型", trigger: "blur" },
        ],
        parttime_employer_idnumber: [
          { required: true, message: "请输入证件号", trigger: "blur" },
        ],
        parttime_parttimer_name: [
          { required: true, message: "请输入兼职方名字", trigger: "blur" },
        ],
        parttime_parttimer_idtype: [
          { required: true, message: "请输入证件类型", trigger: "blur" },
        ],
        parttime_parttimer_idnumber: [
          { required: true, message: "请输入证件号", trigger: "blur" },
        ],
        parttime_parttimer_phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
        ],
        parttime_content: [
          { required: true, message: "请输入兼职内容", trigger: "blur" },
        ],
        parttime_timelimit: [
          { required: true, message: "请输入兼职期限", trigger: "blur" },
        ],
        parttime_address: [
          { required: true, message: "请选择兼职地址", trigger: "blur" },
        ],
        parttime_reword: [
          { required: true, message: "请输入报酬标准", trigger: "blur" },
        ],
        parttime_payment: [
          { required: true, message: "请选择支付方式", trigger: "blur" },
        ],
        parttime_settle_period: [
          { required: true, message: "请输入结算周期", trigger: "blur" },
        ],
        parttime_settle_time: [
          { required: true, message: "请选择结算时间", trigger: "blur" },
        ],
        /* parttime_other_appoint: [
          { required: true, message: "请输入其他约定", trigger: "blur" },
        ], */
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
    ToParttime() {
      this.$router.push({ path: "/parttimeModel", replace: true });
    },
    //获取选中tab页ID
    handleClick(tab, event) {
      this.tabId = event.target.getAttribute("id");
      console.log("this.tabId-", this.tabId);
      //判断用户属于什么身份,赋值
      if (this.tabId === "tab-1") {
        this.form.parttime_parttimer_name = localStorage.getItem("loginName");
        this.form.parttime_parttimer_idnumber =
          localStorage.getItem("loginIdNumber");
        this.form.parttime_parttimer_phone = localStorage.getItem("loginPhone");
        this.form.parttime_parttimer_idtype =
          localStorage.getItem("loginIdType");
        this.form.parttime_employer_name = "";
        this.form.parttime_employer_idnumber = "";
        this.form.parttime_employer_phone = "";
        this.form.parttime_employer_idtype = "";
        //防止赋空值后input框不能输入
        this.form = JSON.stringify(this.form);
        this.form = JSON.parse(this.form);
        this.$store.commit("SET_PSTATUS", "兼职方");
        console.log(11, this.$store.state.parttime.status);
      } else {
        this.form.parttime_parttimer_name = "";
        this.form.parttime_parttimer_idnumber = "";
        this.form.parttime_parttimer_phone = "";
        this.form.parttime_parttimer_idtype = "";
        this.form.parttime_employer_name = localStorage.getItem("loginName");
        this.form.parttime_employer_idnumber =
          localStorage.getItem("loginIdNumber");
        this.form.parttime_employer_phone = localStorage.getItem("loginPhone");
        this.form.parttime_employer_idtype =
          localStorage.getItem("loginIdType");
        this.form = JSON.stringify(this.form);
        this.form = JSON.parse(this.form);
        this.$store.commit("SET_PSTATUS", "雇佣方");
        console.log(22, this.$store.state.parttime.status);
      }
    },
    getUser() {
      this.form = {};
      this.user.name = localStorage.getItem("loginName");
      this.user.idNumber = localStorage.getItem("loginIdNumber");
      this.user.phone = localStorage.getItem("loginPhone");
      this.user.IdType = localStorage.getItem("loginIdType");
      console.log(11, this.user);
      this.$store.commit("SET_PSTATUS", "雇佣方");
      //判断用户属于什么身份
      if (this.tabId === "") {
        this.form.parttime_employer_name = this.user.name;
        this.form.parttime_employer_phone = this.user.phone;
        this.form.parttime_employer_idnumber = this.user.idNumber;
        this.form.parttime_employer_idtype = this.user.IdType;
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
      this.form.parttime_time = time.toLocaleString();
      this.$store.commit("SET_PFORM", this.form);
      console.log(33, this.$store.state.parttime.form);
      this.$router.push({ path: "/parttimeComfire", replace: true });
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
        newValue.parttime_content !== undefined &&
        newValue.parttime_timelimit !== undefined &&
        newValue.parttime_address !== undefined &&
        newValue.parttime_reword !== undefined &&
        newValue.parttime_payment !== undefined &&
        newValue.parttime_settle_period !== undefined &&
        newValue.parttime_settle_time !== undefined;

      //用户填写时
      const employerFormStatus =
        newValue.parttime_employer_name !== undefined &&
        newValue.parttime_employer_phone !== undefined &&
        newValue.parttime_employer_idtype !== undefined &&
        newValue.parttime_employer_idnumber !== undefined &&
        basicFormStatus;
      const parttimerFormStatus =
        newValue.parttime_parttimer_name !== undefined &&
        newValue.parttime_parttimer_idtype !== undefined &&
        newValue.parttime_parttimer_idnumber !== undefined &&
        newValue.parttime_parttimer_phone !== undefined &&
        basicFormStatus;

      //首先判断状态开关谁来填写，再判断form表单有没有填写完毕
      if (newValue.parttime_next === "true") {
        if (employerFormStatus || parttimerFormStatus) {
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
        ? (this.form.parttime_next = "true")
        : (this.form.parttime_next = "false");
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
.parttime {
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
  height: 620px;
  margin-left: 30px;
  border-radius: 20px;
}
.position {
  text-align: left;
  padding-left: 20px;
}
</style>

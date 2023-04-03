<template>
  <div id="box" :style="Login">
    <div id="loginForm">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item>
          <h1 style="color: white">智慧电子签系统</h1>
        </el-form-item>
        <el-form-item prop="userLoginno">
          <el-input
            type="text"
            v-model="ruleForm.userLoginno"
            autocomplete="off"
            placeholder="账号"
          ></el-input>
        </el-form-item>
        <el-form-item prop="userPwd">
          <el-input
            type="password"
            v-model="ruleForm.userPwd"
            autocomplete="off"
            placeholder="密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >登录</el-button
          >
          <el-button type="primary" plain @click="toRegister">注册</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    var validateLogin = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      Login: {
        backgroundImage: "url(" + require("../assets/login.jpg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      },
      ruleForm: {
        userLoginno: "",
        userPwd: "",
      },
      rules: {
        userLoginno: [{ validator: validateLogin, trigger: "blur" }],
        userPwd: [{ validator: validatePass, trigger: "blur" }],
      },
      loginName: "",
      loginId: "",
      loginIdNumber: "",
      loginPhone: "",
      loginIdType: "",
      loginEmail: "",
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios.post("/login", this.ruleForm).then((res) => {
            const token = res.data.token;
            this.loginName = res.data.result[0].user_name;
            this.loginId = res.data.result[0].user_id;
            this.loginIdNumber = res.data.result[0].user_id_number;
            this.loginPhone = res.data.result[0].user_phone;
            this.loginIdType = res.data.result[0].user_id_type;
            this.loginEmail = res.data.result[0].user_email;
            //存入本地
            localStorage.setItem("loginId", this.loginId);
            localStorage.setItem("loginName", this.loginName);
            localStorage.setItem("loginIdNumber", this.loginIdNumber);
            localStorage.setItem("loginPhone", this.loginPhone);
            localStorage.setItem("loginIdType", this.loginIdType);
            localStorage.setItem("loginEmail", this.loginEmail);
            localStorage.setItem("token", token);
            if (localStorage.getItem("token") !== null) {
              this.$router.push({ path: "/home", replace: true });
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    toRegister() {
      this.$router.push({ path: "/register", replace: true });
    },
  },
};
</script>

<style scoped>
#box {
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#loginForm {
  width: 25%;
}
</style>

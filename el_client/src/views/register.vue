<template>
  <div id="register">
    <div class="nav">
      <div class="nav_title">
        <h2>智慧电子签系统</h2>
      </div>
    </div>
    <div class="content_father">
      <div class="content_son">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="220px"
          class="demo-ruleForm"
        >
          <el-form-item></el-form-item>
          <el-form-item label="用户名" prop="user_name">
            <el-col :span="16">
              <el-input
                v-model="ruleForm.user_name"
                autocomplete="off"
              ></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="账号" prop="user_loginno">
            <el-col :span="16">
              <el-input
                v-model="ruleForm.user_loginno"
                autocomplete="off"
              ></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="密码" prop="user_pwd">
            <el-col :span="16">
              <el-input
                type="password"
                v-model="ruleForm.user_pwd"
                autocomplete="off"
              ></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="邮箱地址" prop="user_email">
            <el-col :span="16">
              <el-input
                v-model="ruleForm.user_email"
                autocomplete="off"
              ></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="证件类型" prop="user_id_type">
            <el-col :span="8">
              <el-select
                v-model="ruleForm.user_id_type"
                placeholder="请选择证件类型"
                autocomplete="off"
              >
                <el-option label="居民身份证" value="居民身份证"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item label="证件号" prop="user_id_number">
            <el-col :span="16">
              <el-input
                v-model="ruleForm.user_id_number"
                autocomplete="off"
              ></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="手机号" prop="user_phone">
            <el-col :span="16">
              <el-input
                v-model="ruleForm.user_phone"
                autocomplete="off"
              ></el-input>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-col :span="16">
              <el-button type="primary" @click="submitForm('ruleForm')"
                >注册</el-button
              >
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-col :span="16">
              <span
                >已有账号？<span
                  style="color: #4ba79c; cursor: pointer"
                  @click="Tologin"
                  >直接登录</span
                ></span
              >
            </el-col>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "register",
  inject: ["reload"],
  data() {
    return {
      ruleForm: {},
      rules: {
        user_name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 1, max: 8, message: "长度在 1 到 8 个字符", trigger: "blur" },
        ],
        user_loginno: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 5, max: 8, message: "长度在 5 到 8 个字符", trigger: "blur" },
        ],
        user_pwd: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 8, message: "长度在 6 到 8 个字符", trigger: "blur" },
        ],
        user_email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"],
          },
        ],
        user_id_type: [
          { required: true, message: "请输入证件类型", trigger: "blur" },
        ],
        user_id_number: [
          { required: true, message: "请输入证件号", trigger: "blur" },
        ],
        user_phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios.post("/addUser", this.ruleForm).then((res) => {
            this.$message({
              showClose: true,
              message: "注册成功，请登录",
              type: "success",
            });
            this.resetForm("ruleForm");
            this.$router.push({ path: "/", replace: true });
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.ruleForm = {};
    },
    Tologin() {
      this.$router.push({ path: "/", replace: true });
    },
  },
};
</script>
<style scoped>
#register {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #eef2f3;
}
.nav {
  height: 50px;
  background-color: #4ba79c;
}
.nav_title {
  padding-left: 10px;
  line-height: 50px;
  float: left;
  color: white;
}
.content_father {
  position: relative;
}
.content_son {
  width: 800px;
  height: 600px;
  position: absolute;
  background-color: #fff;
  top: 350px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  border-top: 2px solid #4ba79c;
  border-radius: 15px;
}
</style>

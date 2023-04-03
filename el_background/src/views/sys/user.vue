<template slot-scope="scope">
  <div>
    <div class="selectForm">
      <el-form :inline="true">
        <el-form-item>
          <el-input
            v-model="paging.userName"
            placeholder="用户名"
            clearable=""
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button @click="getUser">搜索</el-button>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="dialogVisible = true"
            >新增</el-button
          >
        </el-form-item>
        <el-form-item>
          <el-popconfirm
            confirm-button-text="好的"
            cancel-button-text="不用了"
            title="这是确定批量删除吗？"
            @confirm="deleteUser(null)"
          >
            <el-button type="danger" slot="reference">批量删除</el-button>
          </el-popconfirm>
        </el-form-item>
      </el-form>
    </div>
    <!-- 表单数据 -->
    <el-table
      :data="tableData"
      border
      stripe
      style="width: 100%"
      :header-cell-style="{ 'text-align': 'center' }"
      :cell-style="{ 'text-align': 'center' }"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column prop="user_name" label="用户名" width="180">
      </el-table-column>
      <el-table-column prop="user_loginno" label="账号" width="180">
      </el-table-column>
      <el-table-column
        prop="user_pwd"
        label="密码"
        width="180"
        :show-overflow-tooltip="true"
      >
      </el-table-column>
      <el-table-column prop="user_email" label="邮箱地址" width="200">
      </el-table-column>
      <el-table-column prop="user_id_type" label="证件类型" width="180">
      </el-table-column>
      <el-table-column prop="user_id_number" label="证件号" width="180">
      </el-table-column>
      <el-table-column prop="user_phone" label="手机号" width="180">
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button
            type="text"
            style="color: #bb070c"
            @click="editUser(scope.row.user_id)"
            >编辑</el-button
          >
          <el-divider direction="vertical"></el-divider>
          <template>
            <el-popconfirm
              confirm-button-text="好的"
              cancel-button-text="不用了"
              icon="el-icon-info"
              icon-color="red"
              title="确定删除这条数据吗？"
              @confirm="deleteUser(scope.row.user_id)"
            >
              <el-button type="text" slot="reference" style="color: #bb070c"
                >删除</el-button
              >
            </el-popconfirm>
          </template>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="paging">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        layout="total, sizes, prev, pager, next, jumper"
        :page-sizes="[5]"
        :current-page="paging.current"
        :page-size="paging.size"
        :total="total"
      >
      </el-pagination>
    </div>
    <!-- 对话框 -->
    <el-dialog
      title="用户管理"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
      :append-to-body="true"
    >
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="user_name">
          <el-input v-model="ruleForm.user_name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="账号" prop="user_loginno">
          <el-input
            v-model="ruleForm.user_loginno"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="user_pwd">
          <el-input
            type="password"
            v-model="ruleForm.user_pwd"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="邮箱地址" prop="user_email">
          <el-input v-model="ruleForm.user_email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="证件类型" prop="user_id_type">
          <el-select
            v-model="ruleForm.user_id_type"
            placeholder="请选择证件类型"
            autocomplete="off"
          >
            <el-option label="居民身份证" value="居民身份证"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="证件号" prop="user_id_number">
          <el-input
            v-model="ruleForm.user_id_number"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="user_phone">
          <el-input v-model="ruleForm.user_phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "user",
  inject: ["reload"],
  data() {
    return {
      multipleSelection: [],
      //searchName: {},
      user: {
        userId: "",
      },
      total: 0, //数据总条数
      paging: {
        userName: "",
        size: 5, //每页条数
        current: 1, //当前页
      },
      dialogVisible: false,
      tableData: [],
      ruleForm: {
        /* userId: "",
        userName: "",
        userLoginno: "",
        userPwd: "",
        userEmail: "",
        userIdType: "",
        userIdNumber: "",
        userPhone: "", */
      },
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
    handleSelectionChange(val) {
      console.log("勾选");
      console.log(val);
      this.multipleSelection = val;
    },
    // 每页显示条数改变 就会触发这个函数
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.paging.size = val;
      this.getUser();
    },
    // 当前页码改变 就会触发这个函数
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.paging.current = val;
      this.getUser();
    },
    handleClose() {
      this.resetForm("ruleForm");
      this.dialogVisible = false;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios
            .post(
              this.ruleForm.user_id ? "/updateUser" : "/addUser",
              this.ruleForm
            )
            .then((res) => {
              this.$message({
                showClose: true,
                message: "成功",
                type: "success",
                onClose: () => {
                  this.getUser();
                },
              });
              this.dialogVisible = false;
              this.resetForm("ruleForm");
            });
        } else {
          console.log("error submit!!");
          return false;
        }
        this.getUser();
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.ruleForm = {};
    },
    getUser() {
      this.$axios.post("/selectUser", this.paging).then((res) => {
        console.log("对应页码的数据:", res);
        // 接收后端返回的数据总条数 total 和 对应页码的数据 data
        // 赋值给对应的变量即可
        this.total = res.data.total;
        this.tableData = res.data.results;

        // 如果当前页没有数据 且 排除第一页
        if (!res.data.results.length && this.paging.current !== 1) {
          // 页码减去 1
          this.paging.current -= 1;
          // 再调用自己
          this.getUser();
        }
      });
    },
    editUser(id) {
      this.user.userId = id;
      this.$axios.post("/selectUpdateUser", this.user).then((res) => {
        /* this.ruleForm.userId = res.data.result[0].user_id;
        this.ruleForm.userName = res.data.result[0].user_name;
        this.ruleForm.userLoginno = res.data.result[0].user_loginno;
        this.ruleForm.userPwd = res.data.result[0].user_pwd;
        this.ruleForm.userEmail = res.data.result[0].user_email;
        this.ruleForm.userIdType = res.data.result[0].user_id_type;
        this.ruleForm.userIdNumber = res.data.result[0].user_id_number;
        this.ruleForm.userPhone = res.data.result[0].user_phone; */
        this.ruleForm = res.data.result[0];
        this.dialogVisible = true;
        /* console.log(55, res.data.result[0]);
        console.log(44, this.ruleForm); */
      });
    },
    /* getUserName() {
      this.$axios.post("/selectUserName", this.searchName).then((res) => {
        this.tableData = res.data.result;
        // console.log(11, this.tableData);
      });
    }, */
    deleteUser(id) {
      let ids = [];
      if (id) {
        ids.push(id);
      } else {
        this.multipleSelection.forEach((row) => {
          ids.push(row.user_id);
        });
      }
      this.$axios.post("/deleteUser", ids).then((res) => {
        this.$message({
          showClose: true,
          message: "恭喜你，操作成功",
          type: "success",
        });
      });
      this.getUser();
      this.reload();
    },
  },
  mounted() {
    this.getUser();
  },
};
</script>

<style scoped>
.selectForm {
  float: left;
}
.paging {
  float: right;
}
</style>

<template>
  <div class="parttimeModel">
    <!-- 头部 -->
    <div class="selectForm">
      <el-form :inline="true">
        <el-form-item>
          <el-button type="primary" @click="dialog = true">新增</el-button>
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
    >
      <el-table-column prop="parttime_foreword" label="前言" width="500">
      </el-table-column>
      <el-table-column
        prop="parttime_site"
        label="兼职内容地点及期限"
        width="500"
      >
      </el-table-column>
      <el-table-column prop="parttime_reward" label="报酬与结算" width="500">
      </el-table-column>
      <el-table-column
        prop="parttime_rightsobligations"
        label="双方权利和义务"
        width="1000"
      >
      </el-table-column>
      <el-table-column prop="parttime_secrecy" label="保密条款" width="800">
      </el-table-column>
      <el-table-column prop="parttime_majeure" label="不可抗力" width="700">
      </el-table-column>
      <el-table-column prop="parttime_default" label="违约责任" width="500">
      </el-table-column>
      <el-table-column prop="parttime_inform" label="通知与送达" width="500">
      </el-table-column>
      <el-table-column
        prop="parttime_law"
        label="法律适用与争议解决"
        width="500"
      >
      </el-table-column>
      <el-table-column prop="parttime_other" label="其他" width="500">
      </el-table-column>
      <el-table-column
        prop="parttime_status"
        label="使用状态"
        width="250"
        :formatter="formatStatus"
      >
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button
            type="text"
            style="color: #bb070c"
            @click="editParttime(scope.row.parttime_id)"
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
              @confirm="deleteParttime(scope.row.parttime_id)"
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
        :current-page.sync="paging.current"
        :page-size="paging.size"
        :total="total"
      >
      </el-pagination>
    </div>
    <!-- 抽屉对话框 -->
    <el-drawer
      title="租房合同管理"
      :before-close="handleClose"
      :visible.sync="dialog"
      :append-to-body="true"
      :show-close="false"
      :wrapperClosable="true"
      size="40%"
      direction="rtl"
      custom-class="demo-drawer"
      ref="drawer"
    >
      <div class="demo-drawer__content">
        <el-form :model="form" :rules="rules" ref="form" class="demo-ruleForm">
          <el-form-item
            label="前言"
            :label-width="formLabelWidth"
            prop="parttime_foreword"
          >
            <el-input
              type="textarea"
              v-model="form.parttime_foreword"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="兼职内容地点及期限"
            :label-width="formLabelWidth"
            prop="parttime_site"
          >
            <el-input
              type="textarea"
              v-model="form.parttime_site"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="报酬与结算"
            :label-width="formLabelWidth"
            prop="parttime_reward"
          >
            <el-input
              type="textarea"
              v-model="form.parttime_reward"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="双方权利和义务"
            :label-width="formLabelWidth"
            prop="parttime_rightsobligations"
          >
            <el-input
              type="textarea"
              v-model="form.parttime_rightsobligations"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="保密条款"
            :label-width="formLabelWidth"
            prop="parttime_secrecy"
          >
            <el-input
              type="textarea"
              v-model="form.parttime_secrecy"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="不可抗力"
            :label-width="formLabelWidth"
            prop="parttime_majeure"
          >
            <el-input
              type="textarea"
              v-model="form.parttime_majeure"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="违约责任"
            :label-width="formLabelWidth"
            prop="parttime_default"
          >
            <el-input
              type="textarea"
              v-model="form.parttime_default"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="通知与送达"
            :label-width="formLabelWidth"
            prop="parttime_inform"
          >
            <el-input
              type="textarea"
              v-model="form.parttime_inform"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="法律适用与争议解决"
            :label-width="formLabelWidth"
            prop="parttime_law"
          >
            <el-input
              type="textarea"
              v-model="form.parttime_law"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="其他"
            :label-width="formLabelWidth"
            prop="parttime_other"
          >
            <el-input
              type="textarea"
              v-model="form.parttime_other"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="使用状态"
            :label-width="formLabelWidth"
            prop="parttime_status"
          >
            <el-switch
              v-model="form.parttime_status"
              active-color="#13ce66"
              inactive-color="#ff4949"
            >
            </el-switch>
          </el-form-item>
        </el-form>
        <div class="demo-drawer__footer">
          <el-button @click="cancelForm()">退 出</el-button>
          <el-button
            type="primary"
            @click="$refs.drawer.closeDrawer()"
            :loading="loading"
            >{{ loading ? "提交中 ..." : "提 交" }}</el-button
          >
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: "parttimeModel",
  inject: ["reload"],
  data() {
    return {
      dialog: false,
      loading: false,
      parttime: {
        parttimeId: "",
      },
      form: {},
      formLabelWidth: "210px",
      timer: null,
      total: 0, //数据总条数
      paging: {
        size: 5, //每页条数
        current: 1, //当前页
      },
      tableData: [],
      rules: {
        parttime_foreword: [
          { required: true, message: "请输入前言", trigger: "blur" },
        ],
        parttime_site: [
          {
            required: true,
            message: "请输入兼职内容地点及期限",
            trigger: "blur",
          },
        ],
        parttime_reward: [
          { required: true, message: "请输入报酬与结算", trigger: "blur" },
        ],
        parttime_rightsobligations: [
          { required: true, message: "请输入双方权利和义务", trigger: "blur" },
        ],
        parttime_secrecy: [
          { required: true, message: "请输入保密条款", trigger: "blur" },
        ],
        parttime_majeure: [
          { required: true, message: "请输入不可抗力", trigger: "blur" },
        ],
        parttime_default: [
          { required: true, message: "请输入违约责任", trigger: "blur" },
        ],
        parttime_inform: [
          { required: true, message: "请输入通知与送达", trigger: "blur" },
        ],
        parttime_law: [
          {
            required: true,
            message: "请输入法律适用与争议解决",
            trigger: "blur",
          },
        ],
        parttime_other: [
          { required: true, message: "请输入其他", trigger: "blur" },
        ],
        parttime_status: [
          { required: true, message: "请选择使用状态", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.form = {};
    },
    handleClose(done) {
      if (this.loading) {
        return;
      }
      this.$confirm("确定要提交表单吗？")
        .then((_) => {
          this.loading = true;
          this.timer = setTimeout(() => {
            done();
            // 动画关闭需要一定的时间
            setTimeout(() => {
              this.loading = false;
            }, 400);
            this.submitForm("form");
            this.resetForm("form");
          }, 2000);
        })
        .catch((_) => {});
    },
    cancelForm() {
      this.loading = false;
      this.dialog = false;
      this.resetForm("form");
      clearTimeout(this.timer);
    },
    // 每页显示条数改变 就会触发这个函数
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.paging.size = val;
      this.getParttime();
    },
    // 当前页码改变 就会触发这个函数
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.paging.current = val;
      this.getParttime();
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios
            .post(
              this.form.parttime_id
                ? "/updateParttimeTemplate"
                : "/addParttimeTemplate",
              this.form
            )
            .then((res) => {
              this.$message({
                showClose: true,
                message: "成功",
                type: "success",
                onClose: () => {
                  this.getParttime();
                },
              });
              this.dialog = false;
              this.resetForm("form");
            });
        } else {
          console.log("error submit!!");
          return false;
        }
        this.getParttime();
      });
    },
    getParttime() {
      this.$axios.post("/selectParttimeTemplate", this.paging).then((res) => {
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
          this.getParttime();
        }
      });
    },
    editParttime(id) {
      this.parttime.parttimeId = id;
      this.$axios
        .post("/selectUpdateParttimeTemplate", this.parttime)
        .then((res) => {
          this.form = res.data.result[0];
          this.dialog = true;
        });
    },
    deleteParttime(id) {
      this.parttime.parttimeId = id;
      this.$axios.post("/deleteParttimeTemplate", this.parttime).then((res) => {
        this.$message({
          showClose: true,
          message: "恭喜你，操作成功",
          type: "success",
        });
      });
      this.getParttime();
      this.reload();
    },
    formatStatus(row, column) {
      let status = row[column.property];
      return status === "true" ? "在用" : "未用";
    },
  },
  mounted() {
    this.getParttime();
  },
};
</script>

<style scoped>
.parttimeModel {
  width: 100%;
  height: 100%;
  /* position: fixed; */
  overflow: scroll;
}
.selectForm {
  float: left;
}
.paging {
  float: right;
}

.demo-drawer__footer {
  justify-content: center;
  text-align: center;
}
</style>

<template>
  <div class="tenancyModel">
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
      <el-table-column prop="tenancy_foreword" label="前言" width="500">
      </el-table-column>
      <el-table-column prop="tenancy_baseinfo" label="房屋基本情况" width="500">
      </el-table-column>
      <el-table-column prop="tenancy_deadline" label="租聘期限" width="500">
      </el-table-column>
      <el-table-column prop="tenancy_rent" label="租金" width="500">
      </el-table-column>
      <el-table-column prop="tenancy_pledge" label="押金" width="500">
      </el-table-column>
      <el-table-column prop="tenancy_otherpay" label="其他费用" width="500">
      </el-table-column>
      <el-table-column
        prop="tenancy_deliveryreturn"
        label="房屋交付与返还"
        width="500"
      >
      </el-table-column>
      <el-table-column prop="tenancy_decorate" label="装修装饰" width="500">
      </el-table-column>
      <el-table-column
        prop="tenancy_device"
        label="附属设施设备的使用与维护"
        width="500"
      >
      </el-table-column>
      <el-table-column prop="tenancy_relet" label="续租" width="500">
      </el-table-column>
      <el-table-column
        prop="tenancy_rightsobligations"
        label="出租方和承租方其他权利义务"
        width="500"
      >
      </el-table-column>
      <el-table-column
        prop="tenancy_termination"
        label="合同的变更解除和终止"
        width="500"
      >
      </el-table-column>
      <el-table-column prop="tenancy_default" label="违约责任" width="500">
      </el-table-column>
      <el-table-column prop="tenancy_inform" label="通知与送达" width="500">
      </el-table-column>
      <el-table-column
        prop="tenancy_law"
        label="法律适用与争议解决"
        width="500"
      >
      </el-table-column>
      <el-table-column prop="tenancy_other" label="其他" width="500">
      </el-table-column>
      <el-table-column
        prop="tenancy_status"
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
            @click="editTenancy(scope.row.tenancy_id)"
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
              @confirm="deleteTenancy(scope.row.tenancy_id)"
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
            prop="tenancy_foreword"
          >
            <el-input
              type="textarea"
              v-model="form.tenancy_foreword"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="房屋基本情况"
            :label-width="formLabelWidth"
            prop="tenancy_baseinfo"
          >
            <el-input
              type="textarea"
              v-model="form.tenancy_baseinfo"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="租聘期限"
            :label-width="formLabelWidth"
            prop="tenancy_deadline"
          >
            <el-input
              type="textarea"
              v-model="form.tenancy_deadline"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="租金"
            :label-width="formLabelWidth"
            prop="tenancy_rent"
          >
            <el-input
              type="textarea"
              v-model="form.tenancy_rent"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="押金"
            :label-width="formLabelWidth"
            prop="tenancy_pledge"
          >
            <el-input
              type="textarea"
              v-model="form.tenancy_pledge"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="其他费用"
            :label-width="formLabelWidth"
            prop="tenancy_otherpay"
          >
            <el-input
              type="textarea"
              v-model="form.tenancy_otherpay"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="房屋交付与返还"
            :label-width="formLabelWidth"
            prop="tenancy_deliveryreturn"
          >
            <el-input
              type="textarea"
              v-model="form.tenancy_deliveryreturn"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="装修装饰"
            :label-width="formLabelWidth"
            prop="tenancy_decorate"
          >
            <el-input
              type="textarea"
              v-model="form.tenancy_decorate"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="附属设施设备的使用与维护"
            :label-width="formLabelWidth"
            prop="tenancy_device"
          >
            <el-input
              type="textarea"
              v-model="form.tenancy_device"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="续租"
            :label-width="formLabelWidth"
            prop="tenancy_relet"
          >
            <el-input
              type="textarea"
              v-model="form.tenancy_relet"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="出租方和承租方其他权利义务"
            :label-width="formLabelWidth"
            prop="tenancy_rightsobligations"
          >
            <el-input
              type="textarea"
              v-model="form.tenancy_rightsobligations"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="合同的变更解除和终止"
            :label-width="formLabelWidth"
            prop="tenancy_termination"
          >
            <el-input
              type="textarea"
              v-model="form.tenancy_termination"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="违约责任"
            :label-width="formLabelWidth"
            prop="tenancy_default"
          >
            <el-input
              type="textarea"
              v-model="form.tenancy_default"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="通知与送达"
            :label-width="formLabelWidth"
            prop="tenancy_inform"
          >
            <el-input
              type="textarea"
              v-model="form.tenancy_inform"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="法律适用与争议解决"
            :label-width="formLabelWidth"
            prop="tenancy_law"
          >
            <el-input
              type="textarea"
              v-model="form.tenancy_law"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="其他"
            :label-width="formLabelWidth"
            prop="tenancy_other"
          >
            <el-input
              type="textarea"
              v-model="form.tenancy_other"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="使用状态"
            :label-width="formLabelWidth"
            prop="tenancy_status"
          >
            <el-switch
              v-model="form.tenancy_status"
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
  name: "tenancyModel",
  inject: ["reload"],
  data() {
    return {
      dialog: false,
      loading: false,
      tenancy: {
        tenancyId: "",
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
        tenancy_foreword: [
          { required: true, message: "请输入前言", trigger: "blur" },
        ],
        tenancy_baseinfo: [
          { required: true, message: "请输入房屋基本情况", trigger: "blur" },
        ],
        tenancy_deadline: [
          { required: true, message: "请输入租聘期限", trigger: "blur" },
        ],
        tenancy_rent: [
          { required: true, message: "请输入租金", trigger: "blur" },
        ],
        tenancy_pledge: [
          { required: true, message: "请输入押金", trigger: "blur" },
        ],
        tenancy_otherpay: [
          { required: true, message: "请输入其他费用", trigger: "blur" },
        ],
        tenancy_deliveryreturn: [
          { required: true, message: "请输入房屋交付与返还", trigger: "blur" },
        ],
        tenancy_decorate: [
          { required: true, message: "请输入装修装饰", trigger: "blur" },
        ],
        tenancy_device: [
          {
            required: true,
            message: "请输入附属设施设备的使用与维护",
            trigger: "blur",
          },
        ],
        tenancy_relet: [
          { required: true, message: "请输入续租", trigger: "blur" },
        ],
        tenancy_rightsobligations: [
          {
            required: true,
            message: "请输入出租方和承租方其他权利义务",
            trigger: "blur",
          },
        ],
        tenancy_termination: [
          {
            required: true,
            message: "请输入合同的变更解除和终止",
            trigger: "blur",
          },
        ],
        tenancy_default: [
          { required: true, message: "请输入违约责任", trigger: "blur" },
        ],
        tenancy_inform: [
          { required: true, message: "请输入通知与送达", trigger: "blur" },
        ],
        tenancy_law: [
          {
            required: true,
            message: "请输入法律适用与争议解决",
            trigger: "blur",
          },
        ],
        tenancy_other: [
          { required: true, message: "请输入其他", trigger: "blur" },
        ],
        tenancy_status: [
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
      this.getTenancy();
    },
    // 当前页码改变 就会触发这个函数
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.paging.current = val;
      this.getTenancy();
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios
            .post(
              this.form.tenancy_id
                ? "/updateTenancyTemplate"
                : "/addTenancyTemplate",
              this.form
            )
            .then((res) => {
              this.$message({
                showClose: true,
                message: "成功",
                type: "success",
                onClose: () => {
                  this.getTenancy();
                },
              });
              this.dialog = false;
              this.resetForm("form");
            });
        } else {
          console.log("error submit!!");
          return false;
        }
        this.getTenancy();
      });
    },
    getTenancy() {
      this.$axios.post("/selectTenancyTemplate", this.paging).then((res) => {
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
          this.getTenancy();
        }
      });
    },
    editTenancy(id) {
      this.tenancy.tenancyId = id;
      this.$axios
        .post("/selectUpdateTenancyTemplate", this.tenancy)
        .then((res) => {
          this.form = res.data.result[0];
          this.dialog = true;
        });
    },
    deleteTenancy(id) {
      this.tenancy.tenancyId = id;
      this.$axios.post("/deleteTenancyTemplate", this.tenancy).then((res) => {
        this.$message({
          showClose: true,
          message: "恭喜你，操作成功",
          type: "success",
        });
      });
      this.getTenancy();
      this.reload();
    },
    formatStatus(row, column) {
      let status = row[column.property];
      return status === "true" ? "在用" : "未用";
    },
  },
  mounted() {
    this.getTenancy();
  },
};
</script>

<style scoped>
.tenancyModel {
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

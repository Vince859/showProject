<template>
  <div class="iouModel">
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
      <el-table-column prop="iou_textpart" label="正文" width="300">
      </el-table-column>
      <el-table-column prop="iou_leader" label="出借人" width="180">
      </el-table-column>
      <el-table-column prop="iou_borrower" label="借款人" width="200">
      </el-table-column>
      <el-table-column
        prop="iou_borrower_idtype"
        label="借款人证件类型"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="iou_borrower_idnumber"
        label="借款人证件号"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="iou_borrower_phone"
        label="借款人手机号"
        width="180"
      >
      </el-table-column>
      <el-table-column prop="iou_otherpromises" label="其他约定" width="180">
      </el-table-column>
      <el-table-column
        prop="iou_status"
        label="使用状态"
        width="180"
        :formatter="formatStatus"
      >
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button
            type="text"
            style="color: #bb070c"
            @click="editIou(scope.row.iou_id)"
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
              @confirm="deleteIou(scope.row.iou_id)"
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
      title="借条管理"
      :before-close="handleClose"
      :visible.sync="dialog"
      :append-to-body="true"
      :show-close="false"
      :wrapperClosable="true"
      size="30%"
      direction="rtl"
      custom-class="demo-drawer"
      ref="drawer"
    >
      <div class="demo-drawer__content">
        <el-form :model="form" :rules="rules" ref="form" class="demo-ruleForm">
          <el-form-item
            label="正文"
            :label-width="formLabelWidth"
            prop="iou_textpart"
          >
            <el-input
              type="textarea"
              v-model="form.iou_textpart"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="出借人"
            :label-width="formLabelWidth"
            prop="iou_leader"
          >
            <el-input v-model="form.iou_leader" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item
            label="借款人"
            :label-width="formLabelWidth"
            prop="iou_borrower"
          >
            <el-input v-model="form.iou_borrower" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item
            label="借款人证件类型"
            :label-width="formLabelWidth"
            prop="iou_borrower_idtype"
          >
            <el-select
              v-model="form.iou_borrower_idtype"
              placeholder="请选择证件类型"
            >
              <el-option label="居民身份证" value="居民身份证"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            label="借款人证件号"
            :label-width="formLabelWidth"
            prop="iou_borrower_idnumber"
          >
            <el-input
              v-model="form.iou_borrower_idnumber"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="借款人手机号"
            :label-width="formLabelWidth"
            prop="iou_borrower_phone"
          >
            <el-input
              v-model="form.iou_borrower_phone"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="其他约定"
            :label-width="formLabelWidth"
            prop="iou_otherpromises"
          >
            <el-input
              type="textarea"
              v-model="form.iou_otherpromises"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="使用状态"
            :label-width="formLabelWidth"
            prop="iou_status"
          >
            <el-switch
              v-model="form.iou_status"
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
  name: "receiptModel",
  inject: ["reload"],
  data() {
    return {
      dialog: false,
      loading: false,
      iou: {
        iouId: "",
      },
      form: {},
      formLabelWidth: "130px",
      timer: null,
      total: 0, //数据总条数
      paging: {
        size: 5, //每页条数
        current: 1, //当前页
      },
      tableData: [],
      rules: {
        iou_textpart: [
          { required: true, message: "请输入正文", trigger: "blur" },
        ],
        iou_leader: [
          { required: true, message: "请输入出借人", trigger: "blur" },
        ],
        iou_borrower: [
          { required: true, message: "请输入借款人", trigger: "blur" },
        ],
        receipt_receiver: [
          { required: true, message: "请输入收款人", trigger: "blur" },
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
        iou_otherpromises: [
          { required: true, message: "请输入其他约定", trigger: "blur" },
        ],
        iou_status: [
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
      this.getIou();
    },
    // 当前页码改变 就会触发这个函数
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.paging.current = val;
      this.getIou();
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios
            .post(
              this.form.iou_id ? "/updateIouTemplate" : "/addIouTemplate",
              this.form
            )
            .then((res) => {
              this.$message({
                showClose: true,
                message: "成功",
                type: "success",
                onClose: () => {
                  this.getIou();
                },
              });
              this.dialog = false;
              this.resetForm("form");
            });
        } else {
          console.log("error submit!!");
          return false;
        }
        this.getIou();
      });
    },
    getIou() {
      this.$axios.post("/selectIouTemplate", this.paging).then((res) => {
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
          this.getIou();
        }
      });
    },
    editIou(id) {
      this.iou.iouId = id;
      this.$axios.post("/selectUpdateIouTemplate", this.iou).then((res) => {
        this.form = res.data.result[0];
        this.dialog = true;
      });
    },
    deleteIou(id) {
      this.iou.iouId = id;
      this.$axios.post("/deleteIouTemplate", this.iou).then((res) => {
        this.$message({
          showClose: true,
          message: "恭喜你，操作成功",
          type: "success",
        });
      });
      this.getIou();
      this.reload();
    },
    formatStatus(row, column) {
      let status = row[column.property];
      return status === "true" ? "在用" : "未用";
    },
  },
  mounted() {
    this.getIou();
  },
};
</script>

<style scoped>
.iouModel {
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

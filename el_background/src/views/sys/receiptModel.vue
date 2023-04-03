<template>
  <div class="receiptModel">
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
      <el-table-column prop="receipt_payer" label="付款人" width="180">
      </el-table-column>
      <el-table-column
        prop="receipt_payer_idtype"
        label="付款人证件类型"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="receipt_payer_idnumber"
        label="付款人证件号"
        width="200"
      >
      </el-table-column>
      <el-table-column prop="receipt_receiver" label="收款人" width="180">
      </el-table-column>
      <el-table-column
        prop="receipt_receiver_idtype"
        label="收款人证件类型"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="receipt_receiver_idnumber"
        label="收款人证件号"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="receipt_receiver_phone"
        label="收款人手机号"
        width="180"
      >
      </el-table-column>
      <el-table-column prop="receipt_incident" label="收款事由" width="180">
      </el-table-column>
      <el-table-column prop="receipt_money" label="收款金额" width="180">
      </el-table-column>
      <el-table-column
        prop="receipt_date"
        label="收款日期"
        width="180"
        :formatter="formatDate"
      >
      </el-table-column>
      <el-table-column prop="receipt_remark" label="备注" width="180">
      </el-table-column>
      <el-table-column
        prop="receipt_status"
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
            @click="editReceipt(scope.row.receipt_id)"
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
              @confirm="deleteReceipt(scope.row.receipt_id)"
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
      title="收据管理"
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
            label="付款人"
            :label-width="formLabelWidth"
            prop="receipt_payer"
          >
            <el-input
              v-model="form.receipt_payer"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="付款人证件类型"
            :label-width="formLabelWidth"
            prop="receipt_payer_idtype"
          >
            <el-select
              v-model="form.receipt_payer_idtype"
              placeholder="请选择证件类型"
            >
              <el-option label="居民身份证" value="居民身份证"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            label="付款人证件号"
            :label-width="formLabelWidth"
            prop="receipt_payer_idnumber"
          >
            <el-input
              v-model="form.receipt_payer_idnumber"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="收款人"
            :label-width="formLabelWidth"
            prop="receipt_receiver"
          >
            <el-input
              v-model="form.receipt_receiver"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="收款人证件类型"
            :label-width="formLabelWidth"
            prop="receipt_receiver_idtype"
          >
            <el-select
              v-model="form.receipt_receiver_idtype"
              placeholder="请选择证件类型"
            >
              <el-option label="居民身份证" value="居民身份证"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            label="收款人证件号"
            :label-width="formLabelWidth"
            prop="receipt_receiver_idnumber"
          >
            <el-input
              v-model="form.receipt_receiver_idnumber"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="收款人手机号"
            :label-width="formLabelWidth"
            prop="receipt_receiver_phone"
          >
            <el-input
              v-model="form.receipt_receiver_phone"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="收款事由"
            :label-width="formLabelWidth"
            prop="receipt_incident"
          >
            <el-select v-model="form.receipt_incident" placeholder="请选择事由">
              <el-option label="租金" value="租金"></el-option>
              <el-option label="贷款" value="贷款"></el-option>
              <el-option label="学费" value="学费"></el-option>
              <el-option label="押金" value="押金"></el-option>
              <el-option label="预付款" value="预付款"></el-option>
              <el-option label="定金" value="定金"></el-option>
              <el-option label="合同款" value="合同款"></el-option>
              <el-option label="其他" value="其他"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            label="收款金额"
            :label-width="formLabelWidth"
            prop="receipt_money"
          >
            <el-input
              v-model="form.receipt_money"
              autocomplete="off"
              placeholder="元"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="收款日期"
            :label-width="formLabelWidth"
            prop="receipt_date"
          >
            <el-date-picker
              v-model="form.receipt_date"
              type="date"
              placeholder="选择日期"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item
            label="备注"
            :label-width="formLabelWidth"
            prop="receipt_remark"
          >
            <el-input
              v-model="form.receipt_remark"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="使用状态"
            :label-width="formLabelWidth"
            prop="receipt_status"
          >
            <el-switch
              v-model="form.receipt_status"
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
      receipt: {
        receiptId: "",
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
        receipt_payer: [
          { required: true, message: "请输入付款人", trigger: "blur" },
        ],
        receipt_payer_idtype: [
          { required: true, message: "请输入证件类型", trigger: "blur" },
        ],
        receipt_payer_idnumber: [
          { required: true, message: "请输入证件号", trigger: "blur" },
        ],
        receipt_receiver: [
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
        receipt_status: [
          { required: true, message: "请选择使用状态", trigger: "blur" },
        ],
        receipt_money: [
          { required: true, message: "请输入收款金额", trigger: "blur" },
        ],
        receipt_date: [
          { required: true, message: "请选择收款日期", trigger: "blur" },
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
      this.getReceipt();
    },
    // 当前页码改变 就会触发这个函数
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.paging.current = val;
      this.getReceipt();
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios
            .post(
              this.form.receipt_id
                ? "/updateReceiptTemplate"
                : "/addReceiptTemplate",
              this.form
            )
            .then((res) => {
              this.$message({
                showClose: true,
                message: "成功",
                type: "success",
                onClose: () => {
                  this.getReceipt();
                },
              });
              this.dialog = false;
              this.resetForm("form");
            });
        } else {
          console.log("error submit!!");
          return false;
        }
        this.getReceipt();
      });
    },
    getReceipt() {
      this.$axios.post("/selectReceiptTemplate", this.paging).then((res) => {
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
          this.getReceipt();
        }
      });
    },
    editReceipt(id) {
      this.receipt.receiptId = id;
      this.$axios
        .post("/selectUpdateReceiptTemplate", this.receipt)
        .then((res) => {
          this.form = res.data.result[0];
          this.dialog = true;
        });
    },
    deleteReceipt(id) {
      this.receipt.receiptId = id;
      this.$axios.post("/deleteReceiptTemplate", this.receipt).then((res) => {
        this.$message({
          showClose: true,
          message: "恭喜你，操作成功",
          type: "success",
        });
      });
      this.getReceipt();
      this.reload();
    },
    formatDate(row, column) {
      //获取单元格数据
      let data = row[column.property];
      if (data == null) {
        return null;
      }
      let dt = new Date(data);
      return dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate();
    },
    formatStatus(row, column) {
      let status = row[column.property];
      return status === "true" ? "在用" : "未用";
    },
  },
  mounted() {
    this.getReceipt();
  },
};
</script>

<style scoped>
.receiptModel {
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

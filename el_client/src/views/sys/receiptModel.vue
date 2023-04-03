<template>
  <div class="receiptModel">
    <div class="header">
      <h1 style="display: inline">预览模板</h1>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <el-button type="primary" @click="ToReceipt">创建收据</el-button>
    </div>
    <div class="content_father">
      <div class="content_son">
        <el-form label-width="320px" class="demo-ruleForm">
          <el-form-item label-width="200px" style="margin-bottom: 0px"
            ><el-col :span="16"
              ><h1 style="color: #4ba79c">收据模板</h1></el-col
            ></el-form-item
          >
          <div class="line">
            <span
              >..................................................................................................................................................................................</span
            >
          </div>
          <el-form-item label="付 款 人" class="item">
            <h3 style="text-align: left; padding-left: 10px">
              <strong>{{ receiptModel.receipt_payer }}</strong>
            </h3>
          </el-form-item>
          <el-form-item label="证 件 类 型" class="item">
            <h3 style="text-align: left; padding-left: 10px">
              <strong>{{ receiptModel.receipt_payer_idtype }}</strong>
            </h3>
          </el-form-item>
          <el-form-item label="证 件 号" class="item">
            <h3 style="text-align: left; padding-left: 10px">
              <strong>{{ receiptModel.receipt_payer_idnumber }}</strong>
            </h3>
          </el-form-item>
          <el-form-item label="收 款 人" class="item">
            <h3 style="text-align: left; padding-left: 10px">
              <strong>{{ receiptModel.receipt_receiver }}</strong>
            </h3>
          </el-form-item>
          <el-form-item label="证 件 类 型" class="item">
            <h3 style="text-align: left; padding-left: 10px">
              <strong>{{ receiptModel.receipt_receiver_idtype }}</strong>
            </h3>
          </el-form-item>
          <el-form-item label="证 件 号" class="item">
            <h3 style="text-align: left; padding-left: 10px">
              <strong>{{ receiptModel.receipt_receiver_idnumber }}</strong>
            </h3>
          </el-form-item>
          <el-form-item label="手 机 号" class="item">
            <h3 style="text-align: left; padding-left: 10px">
              <strong>{{ receiptModel.receipt_receiver_phone }}</strong>
            </h3>
          </el-form-item>
          <el-form-item label="收 据 事 由" class="item">
            <h3 style="text-align: left; padding-left: 10px">
              <strong>{{ receiptModel.receipt_incident }}</strong>
            </h3>
          </el-form-item>
          <el-form-item label="收 据 金 额" class="item">
            <h3 style="text-align: left; padding-left: 10px">
              <strong>{{ receiptModel.receipt_money }}</strong>
            </h3>
          </el-form-item>
          <el-form-item label="收 据 日 期" class="item">
            <h3 style="text-align: left; padding-left: 10px">
              <strong>{{ receiptModel.receipt_date }}</strong>
            </h3>
          </el-form-item>
          <el-form-item label="备 注" class="item">
            <h3 style="text-align: left; padding-left: 10px">
              <strong>{{ receiptModel.receipt_remark }}</strong>
            </h3>
          </el-form-item>
          <el-form-item label="收 款 人 签 署" class="item">
            <h3 style="text-align: left; padding-left: 10px">
              <strong></strong>
            </h3>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "receiptModel",
  inject: ["reload"],
  data() {
    return {
      receiptModel: {},
    };
  },
  methods: {
    ToReceipt() {
      this.$router.push({ path: "/receipt", replace: true });
    },
    getReceiptModel() {
      this.$axios.post("/getReceiptModel", this.user).then((res) => {
        this.receiptModel = res.data.result[0];
        //处理日期格式
        let dt = new Date(this.receiptModel.receipt_date);
        let month =
          dt.getMonth() + 1 > 0 ? "0" + (dt.getMonth() + 1) : dt.getMonth() + 1;
        let date = dt.getDate() < 10 ? "0" + dt.getDate() : dt.getDate();
        this.receiptModel.receipt_date =
          dt.getFullYear() + "-" + month + "-" + date;
        //处理金额格式
        this.receiptModel.receipt_money =
          this.intToChinese(this.receiptModel.receipt_money) +
          "元" +
          "\n￥" +
          this.receiptModel.receipt_money;
      });
    },
    intToChinese(str) {
      str = str + "";
      let len = str.length - 1;
      var idxs = [
        "",
        "十",
        "百",
        "千",
        "万",
        "十",
        "百",
        "千",
        "亿",
        "十",
        "百",
        "千",
        "万",
        "十",
        "百",
        "千",
        "亿",
      ];
      var num = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
      return str.replace(/([1-9]|0+)/g, function ($, $1, idx, full) {
        var pos = 0;
        if ($1[0] != "0") {
          pos = len - idx;
          if (idx == 0 && $1[0] == 1 && idxs[len - idx] == "十") {
            return idxs[len - idx];
          }
          return num[$1[0]] + idxs[len - idx];
        } else {
          var left = len - idx;
          var right = len - idx + $1.length;
          if (Math.floor(right / 4) - Math.floor(left / 4) > 0) {
            pos = left - (left % 4);
          }
          if (pos) {
            return idxs[pos] + num[$1[0]];
          } else if (idx + $1.length >= len) {
            return "";
          } else {
            return num[$1[0]];
          }
        }
      });
    },
  },
  mounted() {
    this.getReceiptModel();
  },
};
</script>
<style scoped>
.receiptModel {
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
  border-top: 2px solid #4ba79c;
  border-radius: 15px;
}
.line {
  height: 15px;
  line-height: 5px;
  color: #4ba79c;
}
.el-form-item {
  margin-bottom: 5px;
}
.item .el-form-item__label {
  font-size: 15px;
  color: #6c6c6c;
}
</style>

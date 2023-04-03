<template>
  <div class="receiptComfire">
    <div class="header">
      <h1 style="display: inline">展示收据</h1>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <el-button type="primary" :disabled="!buttonStatus" @click="generatePDf"
        >下载收据</el-button
      >
    </div>
    <div class="content_father">
      <div class="content_son">
        <el-form label-width="320px" class="demo-ruleForm">
          <el-form-item label-width="200px" style="margin-bottom: 0px"
            ><el-col :span="16"
              ><h1 style="color: #4ba79c">收据</h1></el-col
            ></el-form-item
          >
          <div class="line">
            <span
              >..................................................................................................................................................................................</span
            >
          </div>
          <el-form-item label="付 款 人:" class="item">
            <h3 style="text-align: left; padding-left: 10px">
              <strong>{{ receipt.receipt_payer_name }}</strong>
            </h3>
          </el-form-item>
          <el-form-item label="证 件 类 型:" class="item">
            <h3 style="text-align: left; padding-left: 10px">
              <strong>{{ receipt.receipt_payer_idtype }}</strong>
            </h3>
          </el-form-item>
          <el-form-item label="证 件 号:" class="item">
            <h3 style="text-align: left; padding-left: 10px">
              <strong>{{ receipt.receipt_payer_idnumber }}</strong>
            </h3>
          </el-form-item>
          <el-form-item label="收 款 人:" class="item">
            <h3 style="text-align: left; padding-left: 10px">
              <strong>{{ receipt.receipt_receiver_name }}</strong>
            </h3>
          </el-form-item>
          <el-form-item label="证 件 类 型:" class="item">
            <h3 style="text-align: left; padding-left: 10px">
              <strong>{{ receipt.receipt_receiver_idtype }}</strong>
            </h3>
          </el-form-item>
          <el-form-item label="证 件 号:" class="item">
            <h3 style="text-align: left; padding-left: 10px">
              <strong>{{ receipt.receipt_receiver_idnumber }}</strong>
            </h3>
          </el-form-item>
          <el-form-item label="手 机 号:" class="item">
            <h3 style="text-align: left; padding-left: 10px">
              <strong>{{ receipt.receipt_receiver_phone }}</strong>
            </h3>
          </el-form-item>
          <el-form-item label="收 据 事 由:" class="item">
            <h3 style="text-align: left; padding-left: 10px">
              <strong>{{ receipt.receipt_incident }}</strong>
            </h3>
          </el-form-item>
          <el-form-item label="收 据 金 额:" class="item">
            <h3 style="text-align: left; padding-left: 10px">
              <strong>{{ receipt.receipt_money }}</strong>
            </h3>
          </el-form-item>
          <el-form-item label="收 据 日 期:" class="item">
            <h3 style="text-align: left; padding-left: 10px">
              <strong>{{ receipt.receipt_receive_time }}</strong>
            </h3>
          </el-form-item>
          <el-form-item label="备 注:" class="item">
            <h3 style="text-align: left; padding-left: 10px">
              <strong>{{
                receipt.receipt_remark === "" ||
                receipt.receipt_remark === undefined
                  ? "无"
                  : receipt.receipt_remark
              }}</strong>
            </h3>
          </el-form-item>
          <el-form-item label="收 款 人 签 署:" class="item">
            <div class="sign" @click="handleReceiverFlag">
              <strong
                ><span ref="sign" style="display: block">点击签署</span></strong
              >
              <img
                ref="img"
                style="width: 100px; height: 50px; display: none"
                :src="this.img.picture"
                alt=""
              />
            </div>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <!-- 签名对话框 -->
    <SignDialog
      :visible.sync="receiverSignFlag"
      @change="handleReceiverSign"
      @ImgData="ImgData"
    ></SignDialog>
  </div>
</template>
<script>
import SignDialog from "@/components/signDialog.vue";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default {
  components: { SignDialog },
  name: "displayReceipt",
  inject: ["reload"],
  data() {
    return {
      receipt: {},
      receiptId: {
        receipt_id: "",
      },
      receiptImg: {
        receipt_id: "",
        receipt_sign: "",
      },
      receiverSignFlag: false,
      img: {
        picture: "",
      },
      url: "",
      buttonStatus: false,
    };
  },
  methods: {
    ImgData(data) {
      if (this.receipt.receipt_status === "2") {
        this.img.picture = data;
      }
      //console.log(124, this.img.picture);
    },
    handleReceiverSign() {
      this.receiverSignFlag = true;
    },
    handleReceiverFlag() {
      this.receiverSignFlag = true;
    },
    updateReceipt() {
      //添加签署状态,在借条，合同的签署过程中只有双方都签署了才将receipt_status赋值3
      //需要写三个接口，首先判断身份，再更新 1.更新a签名 2.更新签名 3. 判断ab都签名后更新文件状态
      this.receiptImg.receipt_status = 3;
      this.receiptImg.receipt_id = this.$route.params.id;
      this.receiptImg.receipt_sign = this.img.picture;
      this.$axios.post("/signReceipt", this.receiptImg).then((res) => {
        console.log("res-", res);
        this.$message({
          message: "签署成功",
          type: "success",
        });
      });
    },
    getReceiptById() {
      //获取从文件夹传过来的收据ID
      this.receiptId.receipt_id = this.$route.params.id;
      this.$axios.post("/selectReceiptById", this.receiptId).then((res) => {
        console.log("展示页面根据ID查询的收据", res.data.result[0]);
        this.receipt = res.data.result[0];
        //处理日期格式
        let dt = new Date(this.receipt.receipt_receive_time);
        let month =
          dt.getMonth() + 1 < 10
            ? "0" + (dt.getMonth() + 1)
            : dt.getMonth() + 1;
        let date = dt.getDate() < 10 ? "0" + dt.getDate() : dt.getDate();
        this.receipt.receipt_receive_time =
          dt.getFullYear() + "-" + month + "-" + date;
        //处理下载合同按钮状态
        if (this.receipt.receipt_status === "3") {
          this.buttonStatus = true;
        }
        this.sign();
      });
    },
    sign() {
      if (this.img.picture !== "" || this.receipt.receipt_status === "3") {
        this.$refs.img.style.display = "block";
        this.$refs.sign.style.display = "none";
        if (this.receipt.receipt_status === "2") {
          this.updateReceipt();
        }
        if (this.receipt.receipt_status === "3") {
          this.$axios
            .post("/selectReceiptSignById", this.receiptId)
            .then((res) => {
              //console.log(1122, res.data);
              this.img.picture = res.data.result[0].receipt_sign;
            });
        }
      }
    },
    generatePDf() {
      //获取HTML元素
      const pdfElement = document.getElementsByClassName("content_son");

      //创建jsPDF实例
      const pdf = new jsPDF("p", "pt", "a4");
      //将HTML元素转化为canvas
      html2canvas(pdfElement[0], { allowTaint: true }).then((canvas) => {
        //获取canvas内容
        const imgData = canvas.toDataURL("image/png");
        //添加图像到PDF中
        pdf.addImage(
          imgData,
          "PNG",
          0,
          0,
          pdf.internal.pageSize.width,
          pdf.internal.pageSize.height
        );
        //保存PDF
        pdf.save("收据.pdf");
      });
    },
  },
  mounted() {
    this.getReceiptById();
    //this.sign();
  },
  updated() {
    this.sign();
  },
};
</script>
<style scoped>
.receiptComfire {
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
  top: 310px;
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
.sign {
  width: 100px;
  height: 50px;
  text-align: left;
  padding-left: 10px;
  /* background-color: #eef2f3; */
}
</style>

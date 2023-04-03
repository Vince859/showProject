<template>
  <div class="iouModel">
    <div class="header">
      <h1 style="display: inline">预览模板</h1>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <el-button type="primary" @click="ToIou">创建借条</el-button>
    </div>
    <div class="content_father">
      <div class="content_son">
        <el-form label-width="300px" class="demo-ruleForm">
          <el-form-item label-width="200px" style="margin-bottom: 0px"
            ><el-col :span="16"
              ><h1 style="color: #4ba79c">借条模板</h1></el-col
            ></el-form-item
          >
          <div class="line">
            <span
              >..................................................................................................................................................................................</span
            >
          </div>
          <div class="text">
            {{ this.textArr[0] }} <strong> 购买房屋</strong>，{{
              this.textArr[1]
            }}<strong> 典子谦</strong>（{{ this.textArr[2] }}：<strong>
              居民身份证 123456789012131415</strong
            >）{{ this.textArr[3] }}
            <strong> 玖万玖千玖佰（￥99900）</strong>，{{ this.textArr[4]
            }}<strong> 12%</strong>，{{ this.textArr[5]
            }}<strong> 2022年3月1日 </strong>{{ this.textArr[6] }}
            <strong> 2023年9月1日 </strong>{{ this.textArr[7]
            }}<strong> 2023年9月1日 一次性还本付息</strong>。<br />
            {{ this.textArr[8] }} <strong> 典子谦 </strong>
            {{ this.textArr[9] }} <strong> 何规 </strong>
            {{ this.textArr[10] }} <strong> 微信支付 </strong>。{{
              this.textArr[11]
            }}
          </div>
          <el-form-item label="出 借 人" class="item">
            <h3 style="text-align: left; padding-left: 10px">
              <strong>{{ iouModel.iou_leader }}</strong>
            </h3>
          </el-form-item>
          <el-form-item label="借 款 人" class="item">
            <h3 style="text-align: left; padding-left: 10px">
              <strong>{{ iouModel.iou_borrower }}</strong>
            </h3>
          </el-form-item>
          <el-form-item label="证件类型" class="item">
            <h3 style="text-align: left; padding-left: 10px">
              <strong>{{ iouModel.iou_borrower_idtype }}</strong>
            </h3>
          </el-form-item>
          <el-form-item label="证 件 号" class="item">
            <h3 style="text-align: left; padding-left: 10px">
              <strong>{{ iouModel.iou_borrower_idnumber }}</strong>
            </h3>
          </el-form-item>
          <el-form-item label="手 机 号" class="item">
            <h3 style="text-align: left; padding-left: 10px">
              <strong>{{ iouModel.iou_borrower_phone }}</strong>
            </h3>
          </el-form-item>
          <el-form-item label="其他约定" class="item">
            <h3 style="text-align: left; padding-left: 10px">
              <strong>{{ iouModel.iou_otherpromises }}</strong>
            </h3>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "IouModel",
  inject: ["reload"],
  data() {
    return {
      iouModel: {},
      textArr: [],
    };
  },
  methods: {
    ToIou() {
      this.$router.push({ path: "/iou", replace: true });
    },
    getIouModel() {
      this.$axios.post("/getIouModel", this.user).then((res) => {
        //console.log("res", res);
        this.iouModel = res.data.result[0];
        const str = this.iouModel.iou_textpart;
        this.textArr = str.split("XXX");
      });
    },
  },
  mounted() {
    this.getIouModel();
  },
};
</script>
<style scoped>
.iouModel {
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
.text {
  width: 500px;
  height: 200px;
  padding: 10px 0 0 160px;
  line-height: 30px;
  text-align: left;
}
</style>

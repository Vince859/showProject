<template>
  <div class="floder">
    <div class="header">
      <h1 style="display: inline">我的文件</h1>
    </div>
    <div class="search">
      <el-input
        v-model="search"
        placeholder="请输入内容"
        style="width: 200px"
        clearable
      ></el-input>
      <el-button style="margin-left: 5px" type="primary">搜索</el-button>

      <el-dropdown>
        <span class="el-dropdown-link">
          <i
            class="el-icon-arrow-down el-icon-menu"
            style="color: #9b9aa7; font-size: 20px"
          ></i>
        </span>

        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="getReceiptFile()"
            >收据</el-dropdown-item
          >
          <el-dropdown-item @click.native="getIouFile()">借条</el-dropdown-item>
          <el-dropdown-item @click.native="getTenancyFile()"
            >租房合同</el-dropdown-item
          >
          <el-dropdown-item @click.native="getParttimeFile()"
            >兼职合同</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="content">
      <template v-if="this.lists.length != 0">
        <div
          v-for="(item, i) in this.lists"
          :key="item.id"
          class="content_son"
          @mousemove="mouseOn(i)"
          @mouseout="mouseOut(i)"
        >
          <span
            style="
              float: left;
              font-size: 14px;
              margin: 5px 0 0 10px;
              color: #4ba79c;
            "
          >
            {{ item.fileType }}
          </span>
          <el-dropdown id="dro" style="margin: 5px 10px 0 0" trigger="click">
            <span class="el-dropdown-link">
              <i
                class="el-icon-arrow-down el-icon-more"
                ref="i"
                style="
                  background-color: #9b9aa7;
                  font-size: 20px;
                  color: #fff;
                  border-radius: 5px;
                  width: 30px;
                  display: none;
                "
              ></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                @click.native="dowmloadFile(item.fileType, item.fileId)"
                >下载文件</el-dropdown-item
              >
              <el-dropdown-item
                @click.native="
                  RevokeFile(item.fileStatus, item.fileType, item.fileId)
                "
                >撤销文件</el-dropdown-item
              >
              <el-dropdown-item
                @click.native="
                  rejectFile(
                    item.fileStatus,
                    item.fileType,
                    item.fileId,
                    item.Receiver
                  )
                "
                >拒签文件</el-dropdown-item
              >
              <el-dropdown-item
                @click.native="
                  ridFile(item.fileStatus, item.fileType, item.fileId)
                "
                >解除文件</el-dropdown-item
              >
              <el-dropdown-item
                @click.native="
                  deleteFile(item.fileStatus, item.fileType, item.fileId)
                "
                >删除文件</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
          <div class="content_grand">
            <el-row :gutter="20">
              <el-col :span="10" style="text-align: left; padding: 5px 0 0 0"
                >{{ item.paticipant }} ：</el-col
              >
              <el-col :span="10" style="text-align: left; padding: 5px 0 0 0">
                {{ item.msg }}
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="11" style="text-align: left; padding: 5px 0 0 0">
                {{ item.createdTime }} ：</el-col
              >
              <el-col
                :span="12"
                style="padding: 8px 0px 0px; text-align: left; font-size: 14px"
                >{{ item.time }}</el-col
              >
            </el-row>
          </div>
          <el-button
            type="primary"
            size="mini"
            round
            ref="comfire"
            :disabled="!item.buttonStatus"
            style="float: right; margin-right: 10px; display: block"
            @click="ToSign(item.fileName, item.filePath, item.fileId)"
            >{{ item.comfireButtonName }}</el-button
          >
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: "floder",
  inject: ["reload"],
  data() {
    return {
      search: "",
      lists: [],
      user: {
        user_email: "",
      },
      comfireButtonName: false,
      buttonMethod: true,
      file: {},
    };
  },
  mounted() {
    this.getReceipt();
    this.getIou();
    this.getTenancy();
    this.getParttime();
  },
  methods: {
    mouseOn(i) {
      this.$refs.i[i].style.display = "block";
    },
    mouseOut(i) {
      this.$refs.i[i].style.display = "none";
    },
    ToSign(name, path, i) {
      this.$router.push({
        name: name,
        path: path,
        params: { id: i },
        replace: true,
      });
    },
    getReceipt() {
      this.user.user_email = localStorage.getItem("loginEmail");
      this.$axios.post("/getReceiptData", this.user).then((res) => {
        //this.lists = res.data.result;
        for (let i = 0; i < res.data.result.length; i++) {
          this.lists.push(res.data.result[i]);
        }
        //判断用户身份来决定显示什么按钮
        /* for (let i = 0; i < this.lists.length; i++) {
          console.log("list", this.lists);
          let loginId = localStorage.getItem("loginId");
          if (this.lists[i].receipt_a === loginId) {
            this.comfireButtonName = false;
            this.buttonMethod = false;
          }
          if (this.lists[i].receipt_b === loginId) {
            this.comfireButtonName = true;
            this.buttonMethod = true;
          }
        } */
        //console.log(11, this.lists);
        this.getLists();
      });
    },
    getIou() {
      this.user.user_email = localStorage.getItem("loginEmail");
      this.$axios.post("/getIouData", this.user).then((res) => {
        //console.log("iouRes-", res);
        for (let i = 0; i < res.data.result.length; i++) {
          this.lists.push(res.data.result[i]);
        }
        // console.log(22, this.lists);
        this.getLists();
      });
    },
    getTenancy() {
      this.user.user_email = localStorage.getItem("loginEmail");
      this.$axios.post("/getTenancyData", this.user).then((res) => {
        //console.log("tenancyRes-", res);
        for (let i = 0; i < res.data.result.length; i++) {
          this.lists.push(res.data.result[i]);
        }
        //console.log(33, this.lists);
        this.getLists();
      });
    },
    getParttime() {
      this.user.user_email = localStorage.getItem("loginEmail");
      this.$axios.post("/getParttimeData", this.user).then((res) => {
        //console.log("parttimeRes-", res);
        for (let i = 0; i < res.data.result.length; i++) {
          this.lists.push(res.data.result[i]);
        }
        // console.log(44, this.lists);
        this.getLists();
      });
    },
    getReceiptFile() {
      //将列表变为空
      this.lists = [];
      //再查询
      this.getReceipt();
    },
    getIouFile() {
      //将列表变为空
      this.lists = [];
      //再查询
      this.getIou();
    },
    getParttimeFile() {
      //将列表变为空
      this.lists = [];
      //再查询
      this.getParttime();
    },
    getTenancyFile() {
      //将列表变为空
      this.lists = [];
      //再查询
      this.getTenancy();
    },
    getLists() {
      //循环this.lists对象
      //判断对象中的对象里是否具有receipt_id、iou_id、parttime_id、tenanacy_id，根据是否包含这些属性来判断fileType、paticipant、createdTime
      //this.lists.i.fileType、this.lists.i.paticipant、this.lists.i.createdTime
      //this.lists[i].receipt_status 0-解除 ，1-发起人已确认，2-另一方已确认，3-签署完成，4-撤销
      for (let i = 0; i < this.lists.length; i++) {
        for (const key in this.lists[i]) {
          let loginId = localStorage.getItem("loginId");
          //console.log(55, key);
          switch (key) {
            case "receipt_id":
              this.lists[i].fileType = "收据";
              this.lists[i].paticipant = "付款方";
              this.lists[i].createdTime = "开据时间";
              //处理名称
              this.lists[i].msg =
                this.lists[i].receipt_payer_name === "undefined"
                  ? "待对方填写"
                  : this.lists[i].receipt_payer_name;
              //处理日期格式
              let dt = new Date(this.lists[i].receipt_time);
              let month =
                dt.getMonth() + 1 < 10
                  ? "0" + (dt.getMonth() + 1)
                  : dt.getMonth() + 1;
              let date = dt.getDate() < 10 ? "0" + dt.getDate() : dt.getDate();
              this.lists[i].time = dt.getFullYear() + "-" + month + "-" + date;
              //添加fileId,用于跳转获取数据
              this.lists[i].fileId = this.lists[i].receipt_id;
              //添加文件状态
              this.lists[i].fileStatus = this.lists[i].receipt_status;

              //添加收据发起人id
              this.lists[i].Receiver = this.lists[i].receipt_receiver_idnumber;
              //处理按钮显示逻辑
              if (
                this.lists[i].receipt_a === loginId &&
                this.lists[i].receipt_b !== loginId
              ) {
                switch (this.lists[i].receipt_status) {
                  case "0":
                    this.lists[i].comfireButtonName = "已解除";
                    this.lists[i].buttonStatus = false;
                    break;
                  case "1":
                    this.lists[i].comfireButtonName = "待确认";
                    this.lists[i].buttonStatus = false;
                    break;
                  case "2":
                    this.lists[i].comfireButtonName = "待签署";
                    this.lists[i].buttonStatus = true;
                    break;
                  case "3":
                    this.lists[i].comfireButtonName = "已签署";
                    this.lists[i].buttonStatus = false;
                    break;
                  case "4":
                    this.lists[i].comfireButtonName = "已撤销";
                    this.lists[i].buttonStatus = false;
                    break;
                  case "5":
                    this.lists[i].comfireButtonName = "已拒签";
                    this.lists[i].buttonStatus = false;
                    break;
                  default:
                    break;
                }
                //处理页面跳转路劲
                this.lists[i].fileName = "displayReceipt";
                this.lists[i].filePath = "/displayReceipt";
              }
              if (
                (this.lists[i].receipt_a !== loginId &&
                  this.lists[i].receipt_b === loginId) ||
                (this.lists[i].receipt_a !== loginId &&
                  this.lists[i].receipt_b === null)
              ) {
                switch (this.lists[i].receipt_status) {
                  case "0":
                    this.lists[i].comfireButtonName = "已解除";
                    this.lists[i].buttonStatus = false;
                    break;
                  case "1":
                    this.lists[i].comfireButtonName = "待确认";
                    this.lists[i].buttonStatus = true;
                    break;
                  case "2":
                    this.lists[i].comfireButtonName = "待签署";
                    this.lists[i].buttonStatus = false;
                    break;
                  case "3":
                    this.lists[i].comfireButtonName = "已签署";
                    this.lists[i].buttonStatus = false;
                    break;
                  case "4":
                    this.lists[i].comfireButtonName = "已撤销";
                    this.lists[i].buttonStatus = false;
                    break;
                  case "5":
                    this.lists[i].comfireButtonName = "已拒签";
                    this.lists[i].buttonStatus = false;
                    break;
                  default:
                    break;
                }
                //处理页面跳转路劲
                this.lists[i].fileName = "receiptComfire";
                this.lists[i].filePath = "/receiptComfire";
              }

              //console.log(66, this.lists[i]);
              break;
            case "iou_id":
              this.lists[i].fileType = "借条";
              this.lists[i].paticipant = "出借方";
              this.lists[i].createdTime = "出借时间";
              //处理名称
              this.lists[i].msg =
                this.lists[i].iou_leader_name === "undefined"
                  ? "待对方填写"
                  : this.lists[i].iou_leader_name;
              //处理日期格式
              let dt1 = new Date(this.lists[i].iou_time);
              let month1 =
                dt1.getMonth() + 1 < 10
                  ? "0" + (dt1.getMonth() + 1)
                  : dt1.getMonth() + 1;
              let date1 =
                dt1.getDate() < 10 ? "0" + dt1.getDate() : dt1.getDate();
              this.lists[i].time =
                dt1.getFullYear() + "-" + month1 + "-" + date1;

              //添加fileId,用于跳转获取数据
              this.lists[i].fileId = this.lists[i].iou_id;
              //添加文件状态
              this.lists[i].fileStatus = this.lists[i].iou_status;

              //处理按钮显示逻辑
              if (
                this.lists[i].iou_a === loginId &&
                this.lists[i].iou_b !== loginId
              ) {
                switch (this.lists[i].iou_status) {
                  case "0":
                    this.lists[i].comfireButtonName = "已解除";
                    this.lists[i].buttonStatus = false;
                    break;
                  case "1":
                    this.lists[i].comfireButtonName = "待确认";
                    this.lists[i].buttonStatus = false;
                    break;
                  case "2":
                    this.lists[i].comfireButtonName = "待签署";
                    this.lists[i].buttonStatus = true;
                    break;
                  case "3":
                    this.lists[i].comfireButtonName = "已签署";
                    this.lists[i].buttonStatus = false;
                    break;
                  case "4":
                    this.lists[i].comfireButtonName = "已撤销";
                    this.lists[i].buttonStatus = false;
                    break;
                  case "5":
                    this.lists[i].comfireButtonName = "已拒签";
                    this.lists[i].buttonStatus = false;
                    break;
                  default:
                    break;
                }
                //处理页面跳转路劲
                this.lists[i].fileName = "displayIou";
                this.lists[i].filePath = "/displayIou";
              }
              if (
                (this.lists[i].iou_a !== loginId &&
                  this.lists[i].iou_b === loginId) ||
                (this.lists[i].iou_a !== loginId &&
                  this.lists[i].iou_b === null)
              ) {
                switch (this.lists[i].iou_status) {
                  case "0":
                    this.lists[i].comfireButtonName = "已解除";
                    this.lists[i].buttonStatus = false;
                    break;
                  case "1":
                    this.lists[i].comfireButtonName = "待确认";
                    this.lists[i].buttonStatus = true;
                    //处理页面跳转路劲
                    this.lists[i].fileName = "iouComfire";
                    this.lists[i].filePath = "/iouComfire";
                    break;
                  case "2":
                    this.lists[i].comfireButtonName = "待签署";
                    this.lists[i].buttonStatus = true;
                    //处理页面跳转路劲
                    this.lists[i].fileName = "displayIou";
                    this.lists[i].filePath = "/displayIou";
                    break;
                  case "3":
                    this.lists[i].comfireButtonName = "已签署";
                    this.lists[i].buttonStatus = false;
                    break;
                  case "4":
                    this.lists[i].comfireButtonName = "已撤销";
                    this.lists[i].buttonStatus = false;
                    break;
                  case "5":
                    this.lists[i].comfireButtonName = "已拒签";
                    this.lists[i].buttonStatus = false;
                    break;
                  default:
                    break;
                }
              }
              break;
            case "parttime_id":
              this.lists[i].fileType = "兼职合同";
              this.lists[i].paticipant = "兼职方";
              this.lists[i].createdTime = "签订时间";
              //处理名称
              this.lists[i].msg =
                this.lists[i].parttime_parttimer_name === "undefined"
                  ? "待对方填写"
                  : this.lists[i].parttime_parttimer_name;
              //处理日期格式
              let dt2 = new Date(this.lists[i].parttime_time);
              let month2 =
                dt2.getMonth() + 1 < 10
                  ? "0" + (dt2.getMonth() + 1)
                  : dt2.getMonth() + 1;
              let date2 =
                dt2.getDate() < 10 ? "0" + dt2.getDate() : dt2.getDate();
              this.lists[i].time =
                dt2.getFullYear() + "-" + month2 + "-" + date2;
              //添加fileId,用于跳转获取数据
              this.lists[i].fileId = this.lists[i].parttime_id;
              //添加文件状态
              this.lists[i].fileStatus = this.lists[i].parttime_status;

              //处理按钮显示逻辑
              if (
                this.lists[i].parttime_a === loginId &&
                this.lists[i].parttime_b !== loginId
              ) {
                switch (this.lists[i].parttime_status) {
                  case "0":
                    this.lists[i].comfireButtonName = "已解除";
                    this.lists[i].buttonStatus = false;
                    break;
                  case "1":
                    this.lists[i].comfireButtonName = "待确认";
                    this.lists[i].buttonStatus = false;
                    break;
                  case "2":
                    this.lists[i].comfireButtonName = "待签署";
                    this.lists[i].buttonStatus = true;
                    break;
                  case "3":
                    this.lists[i].comfireButtonName = "已签署";
                    this.lists[i].buttonStatus = false;
                    break;
                  case "4":
                    this.lists[i].comfireButtonName = "已撤销";
                    this.lists[i].buttonStatus = false;
                    break;
                  case "5":
                    this.lists[i].comfireButtonName = "已拒签";
                    this.lists[i].buttonStatus = false;
                    break;
                  default:
                    break;
                }
                //处理页面跳转路劲
                this.lists[i].fileName = "displayParttime";
                this.lists[i].filePath = "/displayParttime";
              }
              if (
                (this.lists[i].parttime_a !== loginId &&
                  this.lists[i].parttime_b === loginId) ||
                (this.lists[i].parttime_a !== loginId &&
                  this.lists[i].parttime_b === null)
              ) {
                switch (this.lists[i].parttime_status) {
                  case "0":
                    this.lists[i].comfireButtonName = "已解除";
                    this.lists[i].buttonStatus = false;
                    break;
                  case "1":
                    this.lists[i].comfireButtonName = "待确认";
                    this.lists[i].buttonStatus = true;
                    //处理页面跳转路劲
                    this.lists[i].fileName = "parttimeComfire";
                    this.lists[i].filePath = "/parttimeComfire";
                    break;
                  case "2":
                    this.lists[i].comfireButtonName = "待签署";
                    this.lists[i].buttonStatus = true;
                    //处理页面跳转路劲
                    this.lists[i].fileName = "displayParttime";
                    this.lists[i].filePath = "/displayParttime";
                    break;
                  case "3":
                    this.lists[i].comfireButtonName = "已签署";
                    this.lists[i].buttonStatus = false;
                    break;
                  case "4":
                    this.lists[i].comfireButtonName = "已撤销";
                    this.lists[i].buttonStatus = false;
                    break;
                  case "5":
                    this.lists[i].comfireButtonName = "已拒签";
                    this.lists[i].buttonStatus = false;
                    break;
                  default:
                    break;
                }
              }

              break;
            case "tenancy_id":
              this.lists[i].fileType = "租房合同";
              this.lists[i].paticipant = "房客";
              this.lists[i].createdTime = "签订时间";
              //处理名称
              this.lists[i].msg =
                this.lists[i].tenancy_tenant_name === "undefined"
                  ? "待对方填写"
                  : this.lists[i].tenancy_tenant_name;
              //处理日期格式
              let dt3 = new Date(this.lists[i].tenancy_time);
              let month3 =
                dt3.getMonth() + 1 < 10
                  ? "0" + (dt3.getMonth() + 1)
                  : dt3.getMonth() + 1;
              let date3 =
                dt3.getDate() < 10 ? "0" + dt3.getDate() : dt3.getDate();
              this.lists[i].time =
                dt3.getFullYear() + "-" + month3 + "-" + date3;
              //添加fileId,用于跳转获取数据
              this.lists[i].fileId = this.lists[i].tenancy_id;
              //添加文件状态
              this.lists[i].fileStatus = this.lists[i].tenancy_status;

              //处理按钮显示逻辑
              if (
                this.lists[i].tenancy_a === loginId &&
                this.lists[i].tenancy_b !== loginId
              ) {
                switch (this.lists[i].tenancy_status) {
                  case "0":
                    this.lists[i].comfireButtonName = "已解除";
                    this.lists[i].buttonStatus = false;
                    break;
                  case "1":
                    this.lists[i].comfireButtonName = "待确认";
                    this.lists[i].buttonStatus = false;
                    break;
                  case "2":
                    this.lists[i].comfireButtonName = "待签署";
                    this.lists[i].buttonStatus = true;
                    break;
                  case "3":
                    this.lists[i].comfireButtonName = "已签署";
                    this.lists[i].buttonStatus = false;
                    break;
                  case "4":
                    this.lists[i].comfireButtonName = "已撤销";
                    this.lists[i].buttonStatus = false;
                    break;
                  case "5":
                    this.lists[i].comfireButtonName = "已拒签";
                    this.lists[i].buttonStatus = false;
                    break;
                  default:
                    break;
                }
                //处理页面跳转路劲
                this.lists[i].fileName = "displayTenancy";
                this.lists[i].filePath = "/displayTenancy";
              }
              if (
                (this.lists[i].tenancy_a !== loginId &&
                  this.lists[i].tenancy_b === loginId) ||
                (this.lists[i].tenancy_a !== loginId &&
                  this.lists[i].tenancy_b === null)
              ) {
                switch (this.lists[i].tenancy_status) {
                  case "0":
                    this.lists[i].comfireButtonName = "已解除";
                    this.lists[i].buttonStatus = false;
                    break;
                  case "1":
                    this.lists[i].comfireButtonName = "待确认";
                    this.lists[i].buttonStatus = true;
                    //处理页面跳转路劲
                    this.lists[i].fileName = "tenancyComfire";
                    this.lists[i].filePath = "/tenancyComfire";
                    break;
                  case "2":
                    this.lists[i].comfireButtonName = "待签署";
                    this.lists[i].buttonStatus = true;
                    //处理页面跳转路劲
                    this.lists[i].fileName = "displayTenancy";
                    this.lists[i].filePath = "/displayTenancy";
                    break;
                  case "3":
                    this.lists[i].comfireButtonName = "已签署";
                    this.lists[i].buttonStatus = false;
                    break;
                  case "4":
                    this.lists[i].comfireButtonName = "已撤销";
                    this.lists[i].buttonStatus = false;
                    break;
                  case "5":
                    this.lists[i].comfireButtonName = "已拒签";
                    this.lists[i].buttonStatus = false;
                    break;
                  default:
                    break;
                }
              }

              break;
            default:
              break;
          }
        }
      }
    },
    dowmloadFile(fileType, id) {
      console.log("download", fileType, id);
      switch (fileType) {
        case "借条":
          //console.log(11);
          this.$router.push({
            name: "displayIou",
            path: "/displayIou",
            params: { id: id },
            replace: true,
          });
          break;
        case "收据":
          //console.log(22);
          this.$router.push({
            name: "displayReceipt",
            path: "/displayReceipt",
            params: { id: id },
            replace: true,
          });
          break;
        case "租房合同":
          //console.log(33);
          this.$router.push({
            name: "displayTenancy",
            path: "/displayTenancy",
            params: { id: id },
            replace: true,
          });
          break;
        case "兼职合同":
          //console.log(44);
          this.$router.push({
            name: "displayParttime",
            path: "/displayParttime",
            params: { id: id },
            replace: true,
          });
          break;
        default:
          break;
      }
    },
    RevokeFile(status, fileType, id) {
      console.log("RevokeFile", status, fileType, id);
      this.file.fileType = fileType;
      this.file.id = id;
      if (status === "1" || status === "2") {
        this.$axios.post("/RevokeFile", this.file).then((res) => {
          this.$message({
            message: "撤销成功",
            type: "success",
          });
        });
      } else {
        alert("基于当前文件状态不能撤销！");
      }
      this.reload();
    },
    ridFile(status, fileType, id) {
      console.log("ridFile", status, fileType, id);
      this.file.fileType = fileType;
      this.file.id = id;
      if (status === "3") {
        this.$axios.post("/ridFile", this.file).then((res) => {
          this.$message({
            message: "解除成功",
            type: "success",
          });
        });
      } else {
        alert("基于当前文件状态不能解除！");
      }
      this.reload();
    },
    rejectFile(status, fileType, id, Receiver) {
      console.log("rejectFile", status, fileType, id);
      this.file.fileType = fileType;
      this.file.id = id;
      let userIdnumber = localStorage.getItem("loginIdNumber");
      if (fileType === "收据") {
        if (userIdnumber === Receiver && status === "2") {
          this.$axios.post("/rejectFile", this.file).then((res) => {
            this.$message({
              message: "拒签成功",
              type: "success",
            });
          });
        } else {
          alert("基于当前收据状态或用户身份不能拒签！");
        }
      } else {
        if (status === "2") {
          this.$axios.post("/rejectFile", this.file).then((res) => {
            this.$message({
              message: "拒签成功",
              type: "success",
            });
          });
        } else {
          alert("基于当前文件状态不能拒签！");
        }
      }
      this.reload();
    },
    deleteFile(status, fileType, id) {
      console.log("ridFile", status, fileType, id);
      this.file.fileType = fileType;
      this.file.id = id;
      if (status === "0" || status === "4") {
        this.$axios.post("/deleteFile", this.file).then((res) => {
          this.$message({
            message: "删除成功",
            type: "success",
          });
        });
      } else {
        alert("基于当前文件状态不能删除！");
      }
      this.reload();
    },
  },
};
</script>
<style scoped>
.floder {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #eef2f3;
  overflow: scroll;
}
.header {
  padding-right: 10%;
  padding-top: 20px;
}
.search {
  /* width: 200px; */
  height: 30px;
  padding: 20px 0 0 30px;
  text-align: left;
}
.el-dropdown {
  border: 1px solid #eef1f4;
  float: right;
  margin-right: 18%;
  position: relative; /*这个是关键*/
  z-index: 2;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.content {
  width: 80%;
  height: 100% - 102px;
}
.content_son {
  width: 200px;
  height: 130px;
  border-radius: 10px;
  background-color: #fff;
  margin: 40px 0px 0px 40px;
  border-top: 2px solid #4ba79c;
  float: left;
  transition: All 0.4s ease-in-out;
  -webkit-transition: All 0.4s ease-in-out;
  -moz-transition: All 0.4s ease-in-out;
  -o-transition: All 0.4s ease-in-out;
}
.content_son:hover {
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -o-transform: scale(1.1);
  -ms-transform: scale(1.1);
  border: 1px solid #4ba79c;
}
.content_grand {
  width: 150px;
  height: 60px;
  margin: 30px 0 0 20px;
  font-size: 14px;
  color: #7f8586;
}
</style>

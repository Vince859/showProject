<template>
  <div class="tenancyComfire">
    <div class="header">
      <h1 style="display: inline">展示合同</h1>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <el-button type="primary" :disabled="!buttonStatus" @click="generatePDf"
        >下载合同</el-button
      >
    </div>
    <div class="content_father">
      <!-- 第一页 -->
      <div
        class="content_son"
        style="top: 450px; border-top: 2px solid #4ba79c"
      >
        <el-form label-width="130px" class="demo-ruleForm">
          <el-form-item label-width="200px" style="margin-bottom: 0px"
            ><el-col :span="16"
              ><h1 style="color: #4ba79c">租房合同</h1></el-col
            ></el-form-item
          >
          <div class="line">
            <span
              >..................................................................................................................................................................................</span
            >
          </div>

          <el-form-item label="出租方姓名：" class="item">
            <div class="underline">
              <span>
                <strong>
                  {{
                    tenancy.tenancy_landlord_name === "" ||
                    tenancy.tenancy_landlord_name === undefined
                      ? "待对方填写"
                      : tenancy.tenancy_landlord_name
                  }}
                </strong>
              </span>
            </div>
          </el-form-item>
          <el-form-item label="证件类型：" class="item">
            <div class="underline">
              <span>
                <strong>
                  {{
                    tenancy.tenancy_landlord_idtype === "" ||
                    tenancy.tenancy_landlord_idtype === undefined
                      ? "待对方填写"
                      : tenancy.tenancy_landlord_idtype
                  }}
                </strong>
              </span>
            </div>
          </el-form-item>
          <el-form-item label="证件号码：" class="item">
            <div class="underline">
              <span>
                <strong>
                  {{
                    tenancy.tenancy_landlord_idnumber === "" ||
                    tenancy.tenancy_landlord_idnumber === undefined
                      ? "待对方填写"
                      : tenancy.tenancy_landlord_idnumber
                  }}
                </strong>
              </span>
            </div>
          </el-form-item>
          <el-form-item label="联系电话：" class="item">
            <div class="underline">
              <span>
                <strong>
                  {{
                    tenancy.tenancy_landload_phone === "" ||
                    tenancy.tenancy_landload_phone === undefined
                      ? "待对方填写"
                      : tenancy.tenancy_landload_phone
                  }}
                </strong>
              </span>
            </div>
          </el-form-item>
          <el-form-item label="" class="item"> </el-form-item>
          <el-form-item label="" class="item"> </el-form-item>
          <el-form-item label="承租方姓名：" class="item">
            <div class="underline">
              <span>
                <strong>
                  {{
                    tenancy.tenancy_tenant_name === "" ||
                    tenancy.tenancy_tenant_name === undefined
                      ? "待对方填写"
                      : tenancy.tenancy_tenant_name
                  }}
                </strong>
              </span>
            </div>
          </el-form-item>
          <el-form-item label="证件类型：" class="item">
            <div class="underline">
              <span>
                <strong>
                  {{
                    tenancy.tenancy_tenant_idtype === "" ||
                    tenancy.tenancy_tenant_idtype === undefined
                      ? "待对方填写"
                      : tenancy.tenancy_tenant_idtype
                  }}
                </strong>
              </span>
            </div>
          </el-form-item>
          <el-form-item label="证件号码：" class="item">
            <div class="underline">
              <span>
                <strong>
                  {{
                    tenancy.tenancy_tenant_idnumber === "" ||
                    tenancy.tenancy_tenant_idnumber === undefined
                      ? "待对方填写"
                      : tenancy.tenancy_tenant_idnumber
                  }}
                </strong>
              </span>
            </div>
          </el-form-item>
          <el-form-item label="联系电话：" class="item">
            <div class="underline">
              <span>
                <strong>
                  {{
                    tenancy.tenancy_tenant_phone === "" ||
                    tenancy.tenancy_tenant_phone === undefined
                      ? "待对方填写"
                      : tenancy.tenancy_tenant_phone
                  }}
                </strong>
              </span>
            </div>
          </el-form-item>
        </el-form>
        <div class="foreword">
          <span>{{ tenancyModel.tenancy_foreword }}</span>
        </div>
        <div class="one">
          <div><strong>第一条 租聘房屋基本情况</strong></div>
          <div style="padding-top: 5px">1.1 {{ textArr.one[0] }}</div>
          <div style="margin-top: 5px; height: 50px">
            <strong>{{ tenancy.tenancy_house_address }}</strong>
          </div>
          <div style="padding-top: 5px">
            1.2 {{ textArr.one[1] }}
            <strong
              ><span class="underline">{{
                tenancy.tenancy_building_area
              }}</span></strong
            >
            {{ textArr.one[2] }}
          </div>
          <div style="margin-top: 5px">1.3 {{ textArr.one[3] }}</div>
          <div style="margin-top: 5px; height: 50px">
            <strong>{{ tenancy.tenancy_furniture }}</strong>
          </div>
          <div style="margin-top: 5px">1.4 {{ textArr.one[4] }}</div>
          <div style="margin-top: 5px; height: 50px">
            <strong>{{ tenancy.tenancy_decoration_style }}</strong>
          </div>
          <div style="margin-top: 5px">1.5 {{ textArr.one[5] }}</div>
        </div>
      </div>
      <!-- 第二页 -->
      <div class="content_son" style="top: 1320px">
        <div class="two">
          <strong>第二条 租聘期限</strong>
          <div style="margin-top: 5px">
            2.1 {{ textArr.two[0] }}
            <strong
              ><span class="underline">{{ timelimt }}</span></strong
            >
          </div>
        </div>
        <div class="three">
          <div><strong>第三条 租金</strong></div>
          <div style="margin-top: 5px">
            3.1 {{ textArr.three[0] }}
            <span class="underline"
              ><strong> {{ tenancy.tenancy_rent_standard }} </strong></span
            >{{ textArr.three[1] }}
          </div>
          <div style="margin-top: 5px">
            3.2 {{ textArr.three[2] }}
            <span class="underline"
              ><strong> {{ tenancy.tenancy_payment_cycle }} </strong></span
            >{{ textArr.three[3] }}
            <span class="underline"
              ><strong> {{ tenancy.tenancy_payment }} </strong></span
            >{{ textArr.three[4] }}
          </div>
          <div style="margin-top: 5px; padding-right: 20px">
            3.3 {{ textArr.three[5] }}
            <span class="underline">
              <strong> {{ tenancy.tenancy_pay_time }} </strong></span
            >{{ textArr.three[6] }}
          </div>
        </div>
        <div class="four">
          <div><strong>第四条 押金</strong></div>
          <div style="margin-top: 5px">
            4.1 {{ textArr.four[0] }}
            <span class="underline">
              <strong> {{ tenancy.tenancy_cashpledge_standard }} </strong></span
            >{{ textArr.four[1] }}
          </div>
          <div style="margin-top: 5px">
            4.2 {{ textArr.four[2] }}
            <span class="underline">
              <strong> {{ tenancy.tenancy_payment }} </strong></span
            >{{ textArr.four[3] }}
          </div>
          <div style="margin-top: 5px">
            4.3 {{ textArr.four[4] }}
            <span class="underline">
              <strong> {{ tenancy.tenancy_cashpledge_paytime }} </strong></span
            >{{ textArr.four[5] }}
          </div>
          <div style="margin-top: 5px">4.4 {{ textArr.four[6] }}</div>
        </div>
        <div class="five">
          <div><strong>第五条 其他费用</strong></div>
          <div style="margin-top: 5px">5.1 {{ textArr.five[0] }}</div>
          <div style="margin-top: 5px; height: 50px">
            <strong>无应承担费用</strong>
          </div>
          <div style="margin-top: 5px">5.2 {{ textArr.five[1] }}</div>
          <div style="margin-top: 5px; height: 50px">
            <strong>{{ tenancy.tenancy_pay_piper }}</strong>
          </div>
        </div>
        <div class="six">
          <div><strong>第六条 房屋的交付与返还</strong></div>
          <div style="margin-top: 5px">
            6.1 {{ textArr.six[0] }}
            <strong
              ><span class="underline"> {{ time3 }} </span></strong
            >{{ textArr.six[1] }}
          </div>
          <div style="margin-top: 5px">
            6.2 {{ textArr.six[2] }}
            <strong
              ><span class="underline"> {{ time2 }} </span></strong
            >{{ textArr.six[3] }}
          </div>
        </div>
      </div>
      <!-- 第三页 -->
      <div class="content_son" style="top: 2190px">
        <div class="seven">
          <strong>第七条 装修装饰</strong>
          <div style="margin-top: 5px">
            7.1 {{ textArr.seven[0] }}
            <strong>
              <span class="underline"> {{ this.decorate.allow }} </span></strong
            >{{ textArr.seven[1]
            }}<strong
              ><span class="underline">
                {{ this.decorate.content }}
              </span></strong
            >。
          </div>
        </div>
        <div class="eight">
          <div><strong>第八条 附属设施、设备的使用及维护</strong></div>
          <div style="margin-top: 5px">8.1 {{ textArr.eight[0] }}</div>
          <div style="margin-top: 5px">8.2 {{ textArr.eight[1] }}</div>
        </div>
        <div class="nine">
          <div><strong>第九条 续租</strong></div>
          <div style="margin-top: 5px">
            9.1 {{ textArr.nine[0] }}
            <strong
              ><span class="underline">
                {{ tenancy.tenancy_sublet }}
              </span></strong
            >{{ textArr.nine[1] }}。
          </div>
          <div style="margin-top: 5px">
            9.2 {{ textArr.nine[2] }}
            <strong>
              <span class="underline">
                {{ tenancy.tenancy_relet }}
              </span></strong
            >{{ textArr.nine[3] }}
          </div>
        </div>
        <div class="ten">
          <div><strong>第十条 出租方、承租方其他权利义务</strong></div>
          <div style="margin-top: 5px">10.1 {{ textArr.ten[0] }}</div>

          <div style="margin-top: 5px">
            10.2 {{ textArr.ten[1]
            }}<strong
              ><span class="underline">
                {{ tenancy.tenancy_house_pledge }}
              </span></strong
            >{{ textArr.ten[2] }}
          </div>
          <div style="margin-top: 5px">10.3 {{ textArr.ten[3] }}</div>
          <div style="margin-top: 5px">10.4 {{ textArr.ten[4] }}</div>
          <div style="margin-top: 5px">10.5 {{ textArr.ten[5] }}</div>
          <div style="margin-top: 5px">10.6 {{ textArr.ten[6] }}</div>
        </div>
        <div class="eleven">
          <div><strong>第十一条 合同的变更、解除与终止</strong></div>
          <div style="margin-top: 5px">11.1 {{ textArr.eleven[0] }}</div>
          <div style="margin-top: 5px">11.2 {{ textArr.eleven[1] }}</div>
        </div>
      </div>
      <!-- 第四页 -->
      <div class="content_son" style="top: 3060px">
        <div class="eleven">
          <div style="margin-top: 5px">11.3 {{ textArr.eleven[2] }}</div>
          <div style="margin-top: 5px">11.4 {{ textArr.eleven[3] }}</div>
        </div>
        <div class="twelve">
          <div><strong>第十二条 违约责任</strong></div>
          <div style="margin-top: 5px">
            12.1 {{ textArr.twelve[0]
            }}<strong
              ><span class="underline">
                {{ tenancy.tenancy_damage_standard }}
              </span></strong
            >{{ textArr.twelve[1] }}
          </div>
        </div>
        <div class="thirteen">
          <div><strong>第十三条 通知与送达</strong></div>
          <div style="margin-top: 5px">13.1 {{ textArr.thirteen[0] }}</div>
          <div style="margin-top: 5px">13.2 {{ textArr.thirteen[1] }}</div>
        </div>
        <div class="fourteen">
          <div><strong>第十四条 法律适用与争议解决</strong></div>
          <div style="margin-top: 5px">14.1 {{ textArr.fourteen[0] }}</div>
          <div style="margin-top: 5px">14.2 {{ textArr.fourteen[1] }}</div>
        </div>
        <div class="fifteen">
          <div><strong>第十五条 其他</strong></div>
          <div style="margin-top: 5px">15.1 {{ textArr.fifteen[0] }}</div>
          <div style="margin-top: 5px">15.2 {{ textArr.fifteen[1] }}</div>
          <div style="margin-top: 5px">15.3 {{ textArr.fifteen[2] }}</div>
          <div style="margin-top: 5px">15.4 {{ textArr.fifteen[3] }}</div>
          <div style="margin-top: 5px">15.5 {{ textArr.fifteen[4] }}</div>
          <div style="margin-top: 5px; height: 50px">
            <strong
              ><span class="underline">
                {{
                  tenancy.tenancy_supplement === "" ||
                  tenancy.tenancy_supplement === undefined
                    ? "无"
                    : tenancy.tenancy_supplement
                }}
              </span></strong
            >
          </div>
        </div>
        <div class="sign">
          <div style="float: left">
            <div style="float: left"><strong>出租方(签字)：</strong></div>
            <div
              style="float: left; cursor: pointer"
              @click="handleReceiverFlag"
              v-if="lanlordId"
            >
              <div ref="lanlordSign" style="display: block">
                <strong><span>点击签署</span></strong>
              </div>
              <div ref="lanlordImg" style="display: none">
                <img
                  style="width: 100px; height: 50px"
                  :src="this.img.lanlordPicture"
                  alt=""
                />
              </div>
            </div>
            <div
              style="float: left; text-align: left; padding-left: 10px"
              v-if="!lanlordId"
            >
              <strong>{{
                tenancy.tenancy_lanlord_sign === "undefined"
                  ? "待对方签署"
                  : "文件已作废"
              }}</strong>
            </div>
          </div>
          <div style="float: left; margin-left: 200px">
            <div style="float: left"><strong>承租方(签字)：</strong></div>
            <div
              style="float: left; cursor: pointer"
              @click="handleReceiverFlag"
              v-if="tenantId"
            >
              <div ref="tenantSign" style="display: block">
                <strong><span>点击签署</span></strong>
              </div>
              <div ref="tenantImg" style="display: none">
                <img
                  style="width: 100px; height: 50px"
                  :src="this.img.tenantPicture"
                  alt=""
                />
              </div>
            </div>
            <div
              style="float: left; text-align: left; padding-left: 10px"
              v-if="!tenantId"
            >
              <strong>{{
                tenancy.tenancy_tenant_sign === "undefined"
                  ? "待对方签署"
                  : "文件已作废"
              }}</strong>
            </div>
          </div>
        </div>
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
  name: "displayTenancy",
  inject: ["reload"],
  data() {
    return {
      tenancy: {},
      tenancyId: {
        tenancy_id: "",
      },
      tenancyImg: {
        tenancyUserType: "",
        tenancy_id: "",
        tenancy_sign: "",
      },
      receiverSignFlag: false,
      img: {
        lanlordPicture: "",
        tenantPicture: "",
      },
      tenancyModel: {},
      textArr: {
        one: [],
        two: [],
        three: [],
        four: [],
        five: [],
        six: [],
        seven: [],
        eight: [],
        nine: [],
        ten: [],
        eleven: [],
        twelve: [],
        thirteen: [],
        fourteen: [],
        fifteen: [],
      },
      leaderStr: "",
      timelimt: "",
      time1: "",
      time2: "",
      time3: "",
      decorate: {
        allow: "",
        content: "",
      },
      url: "",
      buttonStatus: false,
      tenantId: false,
      lanlordId: false,
      signStatus: false,
    };
  },
  methods: {
    ImgData(data) {
      let userId = localStorage.getItem("loginIdNumber");
      this.signStatus = true;
      if (
        this.tenancy.tenancy_status === "2" &&
        this.tenancy.tenancy_tenant_idnumber === userId
      ) {
        this.img.tenantPicture = data;
      }
      if (
        this.tenancy.tenancy_status === "2" &&
        this.tenancy.tenancy_landlord_idnumber === userId
      ) {
        this.img.lanlordPicture = data;
      }
      //console.log(124, this.img.picture);
    },
    handleReceiverSign() {
      this.receiverSignFlag = true;
    },
    handleReceiverFlag() {
      this.receiverSignFlag = true;
      //this.sign();
    },
    getTenancyModel() {
      this.$axios.post("/getTenancyModel", this.user).then((res) => {
        this.tenancyModel = res.data.result[0];
        //console.log("res", this.tenancyModel);
        const str1 = this.tenancyModel.tenancy_baseinfo;
        this.textArr.one = str1.split("XXX");
        const str2 = this.tenancyModel.tenancy_deadline;
        this.textArr.two = str2.split("XXX");
        const str3 = this.tenancyModel.tenancy_rent;
        this.textArr.three = str3.split("XXX");
        const str4 = this.tenancyModel.tenancy_pledge;
        this.textArr.four = str4.split("XXX");
        const str5 = this.tenancyModel.tenancy_otherpay;
        this.textArr.five = str5.split("XXX");
        const str6 = this.tenancyModel.tenancy_deliveryreturn;
        this.textArr.six = str6.split("XXX");
        const str7 = this.tenancyModel.tenancy_decorate;
        this.textArr.seven = str7.split("XXX");
        const str8 = this.tenancyModel.tenancy_device;
        this.textArr.eight = str8.split("XXX");
        const str9 = this.tenancyModel.tenancy_relet;
        this.textArr.nine = str9.split("XXX");
        const str10 = this.tenancyModel.tenancy_rightsobligations;
        this.textArr.ten = str10.split("XXX");
        const str11 = this.tenancyModel.tenancy_termination;
        this.textArr.eleven = str11.split("XXX");
        const str12 = this.tenancyModel.tenancy_default;
        this.textArr.twelve = str12.split("XXX");
        const str13 = this.tenancyModel.tenancy_inform;
        this.textArr.thirteen = str13.split("XXX");
        const str14 = this.tenancyModel.tenancy_law;
        this.textArr.fourteen = str14.split("XXX");
        const str15 = this.tenancyModel.tenancy_other;
        this.textArr.fifteen = str15.split("XXX");
      });
    },
    updateTenancy() {
      //添加签署状态,在借条，合同的签署过程中只有双方都签署了才将tenancy_status赋值3
      this.tenancyImg.tenancy_status = 3;
      this.tenancyImg.tenancyUserType = "";
      this.tenancyImg.tenancy_id = this.$route.params.id;
      //this.tenancyImg.tenancy_sign = this.img.picture;
      this.$axios.post("/signTenancy", this.tenancyImg).then((res) => {
        console.log("res-", res);
      });
    },
    getTenancyById() {
      //获取从文件夹传过来的借条ID
      this.tenancyId.tenancy_id = this.$route.params.id;
      this.$axios.post("/selectTenancyById", this.tenancyId).then((res) => {
        console.log("展示页面根据ID查询的借条", res.data.result[0]);
        this.tenancy = res.data.result[0];
        //处理日期格式
        let dTime = this.tenancy.tenancy_timelimit.split(",");
        let dt1 = new Date(dTime[0]);
        let month1 =
          dt1.getMonth() + 1 < 10
            ? "0" + (dt1.getMonth() + 1)
            : dt1.getMonth() + 1;
        let date1 = dt1.getDate() < 10 ? "0" + dt1.getDate() : dt1.getDate();
        this.time1 = dt1.getFullYear() + "." + month1 + "." + date1;

        let Time = this.tenancy.tenancy_house_deliverytime.split(",");
        let dt3 = new Date(Time[1]);
        let mont3 =
          dt3.getMonth() + 1 < 10
            ? "0" + (dt3.getMonth() + 1)
            : dt3.getMonth() + 1;
        let date3 = dt3.getDate() < 10 ? "0" + dt3.getDate() : dt3.getDate();
        this.time3 = dt3.getFullYear() + "." + mont3 + "." + date3;

        let dt2 = new Date(dTime[1]);
        let month2 =
          dt2.getMonth() + 1 < 10
            ? "0" + (dt2.getMonth() + 1)
            : dt2.getMonth() + 1;
        let date2 = dt2.getDate() < 10 ? "0" + dt2.getDate() : dt2.getDate();
        this.time2 = dt2.getFullYear() + "." + month2 + "." + date2;

        this.timelimt = this.time1 + "-" + this.time2;
        //处理装修装饰
        let decText = this.tenancy.tenancy_allow_decorate.split(":");
        this.decorate.allow = decText[0];
        this.decorate.content = decText[1];

        //处理身份
        let userId = localStorage.getItem("loginIdNumber");
        if (this.tenancy.tenancy_landlord_idnumber === userId) {
          this.lanlordId = true;
        }
        if (this.tenancy.tenancy_tenant_idnumber === userId) {
          this.tenantId = true;
        }
        //处理下载合同按钮状态
        if (this.tenancy.tenancy_status === "3") {
          this.buttonStatus = true;
        }
        this.sign();
      });
    },
    sign() {
      //需要写三个接口，首先判断身份，再更新 1.更新a签名 2.更新签名 3. 判断ab都签名后更新文件状态
      //处理身份
      let userId = localStorage.getItem("loginIdNumber");
      this.tenancyImg.tenancy_id = this.$route.params.id;
      switch (this.tenancy.tenancy_status) {
        case "2":
          if (this.tenancy.tenancy_landlord_idnumber === userId) {
            //当租客有签名时,查出租客的签名同时将tenantId变为true
            if (this.tenancy.tenancy_tenant_sign !== "undefined") {
              this.tenancyImg.tenancyUserType = "租客";
              this.$axios
                .post("/selectTenancySignById", this.tenancyImg)
                .then((res) => {
                  this.img.tenantPicture =
                    res.data.result[0].tenancy_tenant_sign;
                });
              this.tenantId = true;
              this.$refs.tenantImg.style.display = "block";
              this.$refs.tenantSign.style.display = "none";
            }
            //当房东有签名时查出签名，渲染到页面
            if (this.tenancy.tenancy_lanlord_sign !== "undefined") {
              this.tenancyImg.tenancyUserType = "房东";
              this.$axios
                .post("/selectTenancySignById", this.tenancyImg)
                .then((res) => {
                  this.img.lanlordPicture =
                    res.data.result[0].tenancy_lanlord_sign;
                });
              this.$refs.lanlordImg.style.display = "block";
              this.$refs.lanlordSign.style.display = "none";
            }
            //当点击签署后才进行插入签名
            if (this.signStatus) {
              this.tenancyImg.tenancyUserType = "房东";
              this.tenancyImg.tenancy_sign = this.img.lanlordPicture;
              this.$axios.post("/signTenancy", this.tenancyImg).then((res) => {
                this.$message({
                  message: "签署成功",
                  type: "success",
                });
              });
              this.$refs.lanlordImg.style.display = "block";
              this.$refs.lanlordSign.style.display = "none";
              this.reload();
            }
            //当两个都有签名时
            if (
              this.tenancy.tenancy_lanlord_sign !== "undefined" &&
              this.tenancy.tenancy_tenant_sign !== "undefined"
            ) {
              this.updateTenancy();
            }
          }
          if (this.tenancy.tenancy_tenant_idnumber === userId) {
            //当房东有签名时,查出房东的签名同时将lanlordId变为true
            if (this.tenancy.tenancy_lanlord_sign !== "undefined") {
              this.tenancyImg.tenancyUserType = "房东";
              this.$axios
                .post("/selectTenancySignById", this.tenancyImg)
                .then((res) => {
                  this.img.lanlordPicture =
                    res.data.result[0].tenancy_lanlord_sign;
                });
              this.lanlordId = true;
              this.$refs.lanlordImg.style.display = "block";
              this.$refs.lanlordSign.style.display = "none";
            }
            if (this.tenancy.tenancy_tenant_sign !== "undefined") {
              this.tenancyImg.tenancyUserType = "租客";
              this.$refs.tenantImg.style.display = "block";
              this.$refs.tenantSign.style.display = "none";
              this.$axios
                .post("/selectTenancySignById", this.tenancyImg)
                .then((res) => {
                  this.img.tenantPicture =
                    res.data.result[0].tenancy_tenant_sign;
                });
            }
            //当两个都有签名时
            if (
              this.tenancy.tenancy_lanlord_sign !== "undefined" &&
              this.tenancy.tenancy_tenant_sign !== "undefined"
            ) {
              this.updateTenancy();
            }
            if (this.signStatus) {
              this.tenancyImg.tenancyUserType = "租客";
              this.tenancyImg.tenancy_sign = this.img.tenantPicture;
              this.$axios.post("/signTenancy", this.tenancyImg).then((res) => {
                this.$message({
                  message: "签署成功",
                  type: "success",
                });
              });
              this.$refs.tenantImg.style.display = "block";
              this.$refs.tenantSign.style.display = "none";
              this.reload();
            }
          }
          break;
        case "3":
          this.$axios
            .post("/selectTenancySignById", this.tenancyImg)
            .then((res) => {
              this.tenancyImg.tenancyUserType = "";
              this.tenantId = true;
              this.lanlordId = true;
              this.img.tenantPicture = res.data.result[0].tenancy_tenant_sign;
              this.img.lanlordPicture = res.data.result[0].tenancy_lanlord_sign;
            });
          this.$refs.tenantImg.style.display = "block";
          this.$refs.tenantSign.style.display = "none";
          this.$refs.lanlordImg.style.display = "block";
          this.$refs.lanlordSign.style.display = "none";

          break;
        default:
          break;
      }
    },
    async generatePDf() {
      //获取HTML元素
      const pdfElements = document.getElementsByClassName("content_son");

      //创建jsPDF实例
      const pdf = new jsPDF("p", "pt", "a4");
      for (let i = 0; i < pdfElements.length; i++) {
        const pdfElement = pdfElements[i];

        //将HTML元素转化为canvas
        const canvas = await html2canvas(pdfElement, { allowTaint: true });
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
        //判断只需添加3页空白页
        if (i <= pdfElements.length - 2) {
          pdf.addPage();
        }
        if (i === pdfElements.length - 1) {
          //保存PDF
          pdf.save("租房合同.pdf");
        }
      }
    },
  },
  mounted() {
    this.getTenancyById();
    this.getTenancyModel();
  },
  updated() {
    this.sign();
  },
};
</script>
<style scoped>
.tenancyComfire {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #eef2f3;
  overflow: scroll;
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
  height: 860px;
  position: absolute;
  background-color: #fff;
  top: 450px;
  bottom: 0;
  left: 10%;
  right: 20%;
  margin: auto;
  border-top: 2px solid #4ba79c;
  border-radius: 15px;
}
.content_son {
  width: 800px;
  height: 860px;
  position: absolute;
  background-color: #fff;
  bottom: 0;
  left: 10%;
  right: 20%;
  margin: auto;
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
.underline {
  text-align: left;
  text-decoration: underline;
}
.foreword {
  padding: 20px 20px 0 35px;
  text-align: left;
  margin-bottom: 10px;
}
.one {
  text-align: left;
  padding: 10px 0 0 35px;
}
.two {
  text-align: left;
  padding: 30px 0 0 35px;
}
.three {
  text-align: left;
  padding: 10px 20px 0 35px;
  margin-top: 20px;
}
.four {
  text-align: left;
  padding: 10px 20px 0 35px;
  margin-top: 20px;
}
.five {
  text-align: left;
  padding: 10px 20px 0 35px;
  margin-top: 20px;
}
.six {
  text-align: left;
  padding: 10px 20px 0 35px;
  margin-top: 20px;
}
.seven {
  text-align: left;
  padding: 10px 20px 0 35px;
  margin-top: 20px;
}
.eight {
  text-align: left;
  padding: 10px 20px 0 35px;
  margin-top: 20px;
}
.nine {
  text-align: left;
  padding: 10px 20px 0 35px;
  margin-top: 20px;
}
.ten {
  text-align: left;
  padding: 10px 20px 0 35px;
  margin-top: 20px;
}
.eleven {
  text-align: left;
  padding: 10px 20px 0 35px;
  margin-top: 20px;
}
.twelve {
  text-align: left;
  padding: 10px 20px 0 35px;
  margin-top: 20px;
}
.thirteen {
  text-align: left;
  padding: 10px 20px 0 35px;
  margin-top: 20px;
}
.fourteen {
  text-align: left;
  padding: 10px 20px 0 35px;
  margin-top: 20px;
}
.fifteen {
  text-align: left;
  padding: 10px 20px 0 35px;
  margin-top: 20px;
}
.sign {
  text-align: left;
  padding: 10px 20px 0 35px;
}
</style>

<template>
  <div class="tenancyModel">
    <div class="header">
      <h1 style="display: inline">预览模板</h1>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <el-button type="primary" @click="ToIou">创建合同</el-button>
    </div>
    <div class="content_father">
      <!-- 第一页 -->
      <div class="content_son">
        <el-form label-width="130px" class="demo-ruleForm">
          <el-form-item label-width="200px" style="margin-bottom: 0px"
            ><el-col :span="16"
              ><h1 style="color: #4ba79c">租房合同模板</h1></el-col
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
                {{ this.text }}
              </span>
            </div>
          </el-form-item>
          <el-form-item label="证件类型：" class="item">
            <div class="underline">
              <span>
                {{ this.text }}
              </span>
            </div>
          </el-form-item>
          <el-form-item label="证件号码：" class="item">
            <div class="underline">
              <span>
                {{ this.text }}
              </span>
            </div>
          </el-form-item>
          <el-form-item label="联系电话：" class="item">
            <div class="underline">
              <span>
                {{ this.text }}
              </span>
            </div>
          </el-form-item>
          <el-form-item label="" class="item"> </el-form-item>
          <el-form-item label="" class="item"> </el-form-item>
          <el-form-item label="承租方姓名：" class="item">
            <div class="underline">
              <span>
                {{ this.text }}
              </span>
            </div>
          </el-form-item>
          <el-form-item label="证件类型：" class="item">
            <div class="underline">
              <span>
                {{ this.text }}
              </span>
            </div>
          </el-form-item>
          <el-form-item label="证件号码：" class="item">
            <div class="underline">
              <span>
                {{ this.text }}
              </span>
            </div>
          </el-form-item>
          <el-form-item label="联系电话：" class="item">
            <div class="underline">
              <span>
                {{ this.text }}
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
          <div style="margin-top: 5px; height: 50px"></div>
          <div style="padding-top: 5px">
            1.2 {{ textArr.one[1] }} <span class="underline">{{ text1 }}</span
            >{{ textArr.one[2] }}
          </div>
          <div style="margin-top: 5px">1.3 {{ textArr.one[3] }}</div>
          <div style="margin-top: 5px; height: 50px"></div>
          <div style="margin-top: 5px">1.4 {{ textArr.one[4] }}</div>
          <div style="margin-top: 5px; height: 50px"></div>
          <div style="margin-top: 5px">1.5 {{ textArr.one[5] }}</div>
        </div>
      </div>
      <!-- 第二页 -->
      <div class="content_otherson" style="top: 1320px">
        <div class="two">
          <strong>第二条 租聘期限</strong>
          <div style="margin-top: 5px">
            2.1 {{ textArr.two[0] }} <span class="underline">{{ text1 }}</span>
          </div>
        </div>
        <div class="three">
          <div><strong>第三条 租金</strong></div>
          <div style="margin-top: 5px">
            3.1 {{ textArr.three[0] }} <span class="underline">{{ text1 }}</span
            >{{ textArr.three[1] }}
          </div>
          <div style="margin-top: 5px">
            3.2 {{ textArr.three[2] }} <span class="underline">{{ text1 }}</span
            >{{ textArr.three[3] }} <span class="underline">{{ text1 }}</span
            >{{ textArr.three[4] }}
          </div>
          <div style="margin-top: 5px; padding-right: 20px">
            3.3 {{ textArr.three[5] }}
            <span class="underline">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
            >{{ textArr.three[6] }}
          </div>
        </div>
        <div class="four">
          <div><strong>第四条 押金</strong></div>
          <div style="margin-top: 5px">
            4.1 {{ textArr.four[0] }} <span class="underline">{{ text1 }}</span
            >{{ textArr.four[1] }}
          </div>
          <div style="margin-top: 5px">
            4.2 {{ textArr.four[2] }} <span class="underline">{{ text1 }}</span
            >{{ textArr.four[3] }}
          </div>
          <div style="margin-top: 5px">
            4.3 {{ textArr.four[4] }} <span class="underline">{{ text1 }}</span
            >{{ textArr.four[5] }}
          </div>
          <div style="margin-top: 5px">4.4 {{ textArr.four[6] }}</div>
        </div>
        <div class="five">
          <div><strong>第五条 其他费用</strong></div>
          <div style="margin-top: 5px">5.1 {{ textArr.five[0] }}</div>
          <div style="margin-top: 5px; height: 50px"></div>
          <div style="margin-top: 5px">5.2 {{ textArr.five[1] }}</div>
          <div style="margin-top: 5px; height: 50px"></div>
        </div>
        <div class="six">
          <div><strong>第六条 房屋的交付与返还</strong></div>
          <div style="margin-top: 5px">
            6.1 {{ textArr.six[0] }} <span class="underline">{{ text1 }}</span
            >{{ textArr.six[1] }}
          </div>
          <div style="margin-top: 5px">
            6.2 {{ textArr.six[2] }} <span class="underline">{{ text1 }}</span
            >{{ textArr.six[3] }}
          </div>
        </div>
      </div>
      <!-- 第三页 -->
      <div class="content_otherson" style="top: 2190px">
        <div class="seven">
          <strong>第七条 装修装饰</strong>
          <div style="margin-top: 5px">
            7.1 {{ textArr.seven[0] }}
            <span class="underline"
              >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
            >{{ textArr.seven[1]
            }}<span class="underline"
              >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
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
            9.1 {{ textArr.nine[0] }} <span class="underline">{{ text1 }}</span
            >{{ textArr.nine[1] }}。
          </div>
          <div style="margin-top: 5px">
            9.2 {{ textArr.nine[2] }} <span class="underline">{{ text1 }}</span
            >{{ textArr.nine[3] }}
          </div>
        </div>
        <div class="ten">
          <div><strong>第十条 出租方、承租方其他权利义务</strong></div>
          <div style="margin-top: 5px">10.1 {{ textArr.ten[0] }}</div>

          <div style="margin-top: 5px">
            10.2 {{ textArr.ten[1]
            }}<span class="underline"
              >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
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
      <div class="content_otherson" style="top: 3060px">
        <div class="eleven">
          <div style="margin-top: 5px">11.3 {{ textArr.eleven[2] }}</div>
          <div style="margin-top: 5px">11.4 {{ textArr.eleven[3] }}</div>
        </div>
        <div class="twelve">
          <div><strong>第十二条 违约责任</strong></div>
          <div style="margin-top: 5px">
            12.1 {{ textArr.twelve[0]
            }}<span class="underline"
              >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
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
          <div style="margin-top: 5px; height: 50px"></div>
        </div>
        <div class="sign">
          <div style="float: left"><strong>出租方(签字)：</strong></div>
          <div style="float: left; margin-left: 200px">
            <strong>承租方(签字)：</strong>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "tenancyModel",
  inject: ["reload"],
  data() {
    return {
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
      text: "\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000 ",
      text1:
        "\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000",
    };
  },
  methods: {
    ToIou() {
      this.$router.push({ path: "/tenancy", replace: true });
    },
    getTenancyModel() {
      this.$axios.post("/getTenancyModel", this.user).then((res) => {
        this.tenancyModel = res.data.result[0];
        console.log("res", this.tenancyModel);
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
  },
  mounted() {
    this.getTenancyModel();
  },
};
</script>
<style scoped>
.tenancyModel {
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
.content_otherson {
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

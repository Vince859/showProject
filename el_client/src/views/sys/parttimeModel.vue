<template>
  <div class="partimeModel">
    <div class="header">
      <h1 style="display: inline">预览模板</h1>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <el-button type="primary" @click="ToParttime">创建合同</el-button>
    </div>
    <div class="content_father">
      <!-- 第一页 -->
      <div class="content_son">
        <el-form label-width="150px" class="demo-ruleForm">
          <el-form-item label-width="200px" style="margin-bottom: 0px"
            ><el-col :span="16"
              ><h1 style="color: #4ba79c">兼职合同模板</h1></el-col
            ></el-form-item
          >
          <div class="line">
            <span
              >..................................................................................................................................................................................</span
            >
          </div>

          <el-form-item label="甲方（雇佣方）：" class="item">
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
          <el-form-item label="手机号码：" class="item">
            <div class="underline">
              <span>
                {{ this.text }}
              </span>
            </div>
          </el-form-item>
          <el-form-item label="" class="item"> </el-form-item>
          <el-form-item label="" class="item"> </el-form-item>
          <el-form-item label="乙方（兼职方）：" class="item">
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
          <el-form-item label="手机号码：" class="item">
            <div class="underline">
              <span>
                {{ this.text }}
              </span>
            </div>
          </el-form-item>
        </el-form>
        <div class="foreword">
          <span>{{ partimeModel.parttime_foreword }}</span>
        </div>
        <div class="one">
          <div><strong>一、 兼职内容、地点及期限</strong></div>
          <div style="padding-top: 5px">1. {{ textArr.one[0] }}</div>
          <div style="margin-top: 5px; height: 30px"></div>
          <div style="padding-top: 5px">
            2. {{ textArr.one[1] }}：
            <span class="underline">{{ text1 }}</span>
          </div>
          <div style="margin-top: 5px">3. {{ textArr.one[2] }}：</div>
          <div style="margin-top: 5px; height: 40px"></div>
        </div>
        <div class="two">
          <strong>二、 报酬与结算</strong>
          <div style="margin-top: 5px">
            1. {{ textArr.two[0] }} <span class="underline">{{ text1 }}</span>
          </div>
          <div style="padding-top: 5px">
            2. {{ textArr.two[1] }}
            <span class="underline">{{ text1 }}</span>
          </div>
          <div style="padding-top: 5px">
            3. {{ textArr.two[2] }}
            <span class="underline">{{ text1 }}</span>
          </div>
          <div style="padding-top: 5px">
            4. {{ textArr.two[3] }}
            <span class="underline">{{ text1 }}</span>
          </div>
        </div>
      </div>
      <!-- 第二页 -->
      <div class="content_otherson" style="top: 1320px">
        <div class="three">
          <div><strong>三、双方权利义务</strong></div>
          <div style="margin-top: 5px">1. {{ textArr.three[0] }}</div>
          <div style="margin-top: 5px">2. {{ textArr.three[1] }}</div>
          <div style="margin-top: 5px">3. {{ textArr.three[2] }}</div>
          <div style="margin-top: 5px">4. {{ textArr.three[3] }}</div>
          <div style="margin-top: 5px">5. {{ textArr.three[4] }}</div>
          <div style="margin-top: 5px">6. {{ textArr.three[5] }}</div>
          <div style="margin-top: 5px">7. {{ textArr.three[6] }}</div>
        </div>
        <div class="four">
          <div><strong>四、保密条款</strong></div>
          <div style="margin-top: 5px">1. {{ textArr.four[0] }}</div>
          <div style="margin-top: 5px">2. {{ textArr.four[1] }}</div>
          <div style="margin-top: 5px">3. {{ textArr.four[2] }}</div>
          <div style="margin-top: 5px">4. {{ textArr.four[3] }}</div>
          <div style="margin-top: 5px">5. {{ textArr.four[4] }}</div>
        </div>
      </div>
      <!-- 第三页 -->
      <div class="content_otherson" style="top: 2190px">
        <div class="five">
          <div><strong>五、不可抗力</strong></div>
          <div style="margin-top: 5px">1. {{ textArr.five[0] }}</div>
          <div style="margin-top: 5px">2. {{ textArr.five[1] }}</div>
          <div style="margin-top: 5px">3. {{ textArr.five[2] }}</div>
        </div>
        <div class="six">
          <div><strong>六、违约责任</strong></div>
          <div style="margin-top: 5px">1. {{ textArr.six[0] }}</div>
          <div style="margin-top: 5px">2. {{ textArr.six[1] }}</div>
        </div>
        <div class="seven">
          <strong>七、通知与送达</strong>
          <div style="margin-top: 5px">1. {{ textArr.seven[0] }}</div>
          <div style="margin-top: 5px">2. {{ textArr.seven[1] }}</div>
          <div style="margin-top: 5px">3. {{ textArr.seven[2] }}</div>
        </div>
        <div class="eight">
          <div><strong>八、法律适用与争议解决</strong></div>
          <div style="margin-top: 5px">1. {{ textArr.eight[0] }}</div>
          <div style="margin-top: 5px">2. {{ textArr.eight[1] }}</div>
        </div>
      </div>
      <!-- 第四页 -->
      <div class="content_otherson" style="top: 3060px">
        <div class="nine">
          <div><strong>九、其他</strong></div>
          <div style="margin-top: 5px">1. {{ textArr.nine[0] }}</div>
          <div style="margin-top: 5px">2. {{ textArr.nine[1] }}</div>
          <div style="margin-top: 5px">3. {{ textArr.nine[2] }}</div>
          <div style="margin-top: 5px">4. {{ textArr.nine[3] }}</div>
          <div style="margin-top: 5px">5. {{ textArr.nine[4] }}</div>
          <div style="margin-top: 5px">6. {{ textArr.nine[5] }}</div>
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
  name: "partimeModel",
  inject: ["reload"],
  data() {
    return {
      partimeModel: {},
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
      },
      text: "\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000 ",
      text1:
        "\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000",
    };
  },
  methods: {
    ToParttime() {
      this.$router.push({ path: "/parttime", replace: true });
    },
    getParttimeModel() {
      this.$axios.post("/getParttimeModel", this.user).then((res) => {
        this.partimeModel = res.data.result[0];
        console.log("res", this.partimeModel);
        const str1 = this.partimeModel.parttime_site;
        this.textArr.one = str1.split("XXX");
        const str2 = this.partimeModel.parttime_reward;
        this.textArr.two = str2.split("XXX");
        const str3 = this.partimeModel.parttime_rightsobligations;
        this.textArr.three = str3.split("XXX");
        const str4 = this.partimeModel.parttime_secrecy;
        this.textArr.four = str4.split("XXX");
        const str5 = this.partimeModel.parttime_majeure;
        this.textArr.five = str5.split("XXX");
        const str6 = this.partimeModel.parttime_default;
        this.textArr.six = str6.split("XXX");
        const str7 = this.partimeModel.parttime_inform;
        this.textArr.seven = str7.split("XXX");
        const str8 = this.partimeModel.parttime_law;
        this.textArr.eight = str8.split("XXX");
        const str9 = this.partimeModel.parttime_other;
        this.textArr.nine = str9.split("XXX");
      });
    },
  },
  mounted() {
    this.getParttimeModel();
  },
};
</script>
<style scoped>
.partimeModel {
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
.sign {
  text-align: left;
  margin-top: 20px;
  padding: 10px 20px 0 35px;
}
</style>

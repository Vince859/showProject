<template>
  <div class="tenancy">
    <div class="header">
      <h1 style="display: inline">创建合同</h1>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <el-button
        type="primary"
        :disabled="!buttonStatus"
        @click="submitForm('form')"
        >下一步</el-button
      >
    </div>
    <div class="content_father">
      <div class="content_son">
        <el-page-header
          @back="Totenancy"
          content="选择身份并填写合同信息完毕后即可发起签署合同"
        >
        </el-page-header>

        <!-- 选项卡 -->
        <el-tabs type="border-card" @tab-click="handleClick">
          <el-tab-pane label="我是房东">
            <div class="receiver">
              <el-form
                :model="form"
                :rules="rules"
                ref="form"
                class="demo-ruleForm"
              >
                <el-form-item label="房 东" :label-width="formLabelWidth">
                  <h3 class="position">
                    <strong>{{ userData }}</strong>
                  </h3>
                </el-form-item>
                <el-form-item
                  label="租 客"
                  :label-width="formLabelWidth"
                  style="padding: 10px 0 0 0"
                >
                  <div class="position">
                    <span v-show="!value">待对方填写</span>
                    <el-button
                      type="primary"
                      @click="ReceiverdialogFormVisible = true"
                      v-show="value"
                      >点击填写</el-button
                    >
                    &nbsp;&nbsp;
                    <el-switch
                      v-model="value"
                      active-color="#13ce66"
                      inactive-color="#c0e5ef"
                    >
                    </el-switch>
                    <el-input
                      v-model="form.tenancy_next"
                      autocomplete="off"
                      style="display: none"
                    ></el-input>
                  </div>
                </el-form-item>
                <el-form-item
                  label="房屋地址"
                  :label-width="formLabelWidth"
                  prop="tenancy_house_address"
                >
                  <div class="position">
                    <el-input
                      v-model="form.tenancy_house_address"
                      autocomplete="off"
                      placeholder="请输入房屋地址"
                    ></el-input>
                  </div>
                </el-form-item>
                <el-form-item
                  label="建筑面积"
                  :label-width="formLabelWidth"
                  prop="tenancy_building_area"
                >
                  <div class="position">
                    <el-input
                      v-model="form.tenancy_building_area"
                      autocomplete="off"
                      placeholder="请输入建筑面积   平方米"
                    ></el-input>
                  </div>
                </el-form-item>
                <el-form-item
                  label="装修风格"
                  :label-width="formLabelWidth"
                  prop="tenancy_decoration_style"
                >
                  <div class="position">
                    <el-select
                      v-model="form.tenancy_decoration_style"
                      placeholder="请选择装修风格"
                    >
                      <el-option label="毛坯" value="毛坯"></el-option>
                      <el-option label="简装" value="简装"></el-option>
                      <el-option label="精装" value="精装"></el-option>
                    </el-select>
                  </div>
                </el-form-item>
                <el-form-item
                  label="家具家私"
                  :label-width="formLabelWidth"
                  prop="tenancy_furniture"
                >
                  <div class="position">
                    <el-input
                      v-model="form.tenancy_furniture"
                      autocomplete="off"
                      placeholder="请输入包含家具家私"
                    ></el-input>
                  </div>
                </el-form-item>
                <el-form-item
                  label="租聘期限"
                  :label-width="formLabelWidth"
                  prop="tenancy_timelimit"
                >
                  <div class="position">
                    <el-date-picker
                      v-model="form.tenancy_timelimit"
                      type="daterange"
                      align="right"
                      unlink-panels
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                      :picker-options="pickerOptions"
                    >
                    </el-date-picker>
                  </div>
                </el-form-item>
                <el-form-item
                  label="租金标准"
                  :label-width="formLabelWidth"
                  prop="tenancy_rent_standard"
                >
                  <div class="position">
                    <el-input
                      v-model="form.tenancy_rent_standard"
                      autocomplete="off"
                      placeholder="请输入租金标准   元/月"
                    ></el-input>
                  </div>
                </el-form-item>
                <el-form-item
                  label="支付方式"
                  :label-width="formLabelWidth"
                  prop="tenancy_payment"
                >
                  <div class="position">
                    <el-select
                      v-model="form.tenancy_payment"
                      placeholder="请选择支付方式"
                    >
                      <el-option label="银行转账" value="银行转账"></el-option>
                      <el-option label="微信转账" value="微信转账"></el-option>
                      <el-option
                        label="其他线上转账"
                        value="其他线上转账"
                      ></el-option>
                    </el-select>
                  </div>
                </el-form-item>
                <el-form-item
                  label="支付周期"
                  :label-width="formLabelWidth"
                  prop="tenancy_payment_cycle"
                >
                  <div class="position">
                    <el-select
                      v-model="form.tenancy_payment_cycle"
                      placeholder="请选择支付周期"
                    >
                      <el-option label="按月支付" value="月"></el-option>
                      <el-option label="按季度支付" value="季度"></el-option>
                      <el-option label="按半年支付" value="半年"></el-option>
                      <el-option label="按年支付" value="年"></el-option>
                    </el-select>
                  </div>
                </el-form-item>
                <el-form-item
                  label="支付时间"
                  :label-width="formLabelWidth"
                  prop="tenancy_pay_time"
                >
                  <div class="position">
                    <el-select
                      v-model="form.tenancy_pay_time"
                      placeholder="请选择支付时间"
                    >
                      <el-option label="每月1日" value="每月1日"></el-option>
                      <el-option label="每月2日" value="每月2日"></el-option>
                      <el-option label="每月3日" value="每月3日"></el-option>
                      <el-option label="每月4日" value="每月4日"></el-option>
                      <el-option label="每月5日" value="每月5日"></el-option>
                      <el-option label="每月6日" value="每月6日"></el-option>
                      <el-option label="每月7日" value="每月7日"></el-option>
                      <el-option label="每月8日" value="每月8日"></el-option>
                      <el-option label="每月9日" value="每月9日"></el-option>
                      <el-option label="每月10日" value="每月10日"></el-option>
                      <el-option label="每月11日" value="每月11日"></el-option>
                      <el-option label="每月12日" value="每月12日"></el-option>
                      <el-option label="每月13日" value="每月13日"></el-option>
                      <el-option label="每月14日" value="每月14日"></el-option>
                      <el-option label="每月15日" value="每月15日"></el-option>
                      <el-option label="每月16日" value="每月16日"></el-option>
                      <el-option label="每月17日" value="每月17日"></el-option>
                      <el-option label="每月18日" value="每月18日"></el-option>
                      <el-option label="每月19日" value="每月19日"></el-option>
                      <el-option label="每月20日" value="每月20日"></el-option>
                      <el-option label="每月21日" value="每月21日"></el-option>
                      <el-option label="每月22日" value="每月22日"></el-option>
                      <el-option label="每月23日" value="每月23日"></el-option>
                      <el-option label="每月24日" value="每月24日"></el-option>
                      <el-option label="每月25日" value="每月25日"></el-option>
                      <el-option label="每月26日" value="每月26日"></el-option>
                      <el-option label="每月27日" value="每月27日"></el-option>
                      <el-option label="每月28日" value="每月28日"></el-option>
                    </el-select>
                  </div>
                </el-form-item>
                <el-form-item
                  label="押金标准"
                  :label-width="formLabelWidth"
                  prop="tenancy_cashpledge_standard"
                >
                  <div class="position">
                    <el-input
                      v-model="form.tenancy_cashpledge_standard"
                      autocomplete="off"
                      placeholder="请输入押金标准    元/月"
                    ></el-input>
                  </div>
                </el-form-item>
                <el-form-item
                  label="押金支付时间"
                  :label-width="formLabelWidth"
                  prop="tenancy_cashpledge_paytime"
                >
                  <div class="position">
                    <el-select
                      v-model="form.tenancy_cashpledge_paytime"
                      placeholder="请选择押金支付时间"
                    >
                      <el-option label="租前7日" value="7"></el-option>
                      <el-option label="租前15日" value="15"></el-option>
                      <el-option label="租前30日" value="30"></el-option>
                      <el-option label="起租当日" value="当"></el-option>
                    </el-select>
                  </div>
                </el-form-item>
                <el-form-item
                  label="房屋交付时间"
                  :label-width="formLabelWidth"
                  prop="tenancy_house_deliverytime"
                >
                  <div class="position">
                    <el-date-picker
                      v-model="form.tenancy_house_deliverytime"
                      type="daterange"
                      align="right"
                      unlink-panels
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                      :picker-options="pickerOptions"
                    >
                    </el-date-picker>
                  </div>
                </el-form-item>
                <el-form-item
                  label="租客需承担的费用"
                  :label-width="formLabelWidth"
                  prop="tenancy_pay_piper"
                >
                  <div class="position">
                    <el-input
                      v-model="form.tenancy_pay_piper"
                      autocomplete="off"
                      placeholder="请输入租客需承担的费用"
                    ></el-input>
                  </div>
                </el-form-item>
                <el-form-item
                  label="租聘期内是否允许装修"
                  :label-width="formLabelWidth"
                  prop="tenancy_allow_decorate"
                >
                  <div class="position">
                    <el-select
                      v-model="form.tenancy_allow_decorate"
                      placeholder="请选择是否允许装修"
                    >
                      <el-option label="不允许" value="不允许: "></el-option>
                      <el-option
                        label="允许:租聘期满由租客拆除并恢复原状"
                        value="允许:租聘期满由租客拆除并恢复原状"
                      ></el-option>
                      <el-option
                        label="允许:租聘期满后装修无偿归房东所有"
                        value="允许:租聘期满后装修无偿归房东所有"
                      ></el-option>
                    </el-select>
                  </div>
                </el-form-item>
                <el-form-item
                  label="租聘期内是否支持转租"
                  :label-width="formLabelWidth"
                  prop="tenancy_sublet"
                >
                  <div class="position">
                    <el-select
                      v-model="form.tenancy_sublet"
                      placeholder="请选择是否支持转租"
                    >
                      <el-option label="允许" value="允许"></el-option>
                      <el-option label="不允许" value="不允许"></el-option>
                    </el-select>
                  </div>
                </el-form-item>
                <el-form-item
                  label="续租告知时间"
                  :label-width="formLabelWidth"
                  prop="tenancy_relet"
                >
                  <div class="position">
                    <el-select
                      v-model="form.tenancy_relet"
                      placeholder="请选择续租告知时间"
                    >
                      <el-option label="租聘期满前15日" value="15"></el-option>
                      <el-option label="租聘期满前30日" value="30"></el-option>
                      <el-option label="租聘期满前60日" value="60"></el-option>
                      <el-option label="租聘期满前90日" value="90"></el-option>
                    </el-select>
                  </div>
                </el-form-item>
                <el-form-item
                  label="房屋是否抵押"
                  :label-width="formLabelWidth"
                  prop="tenancy_house_pledge"
                >
                  <div class="position">
                    <el-select
                      v-model="form.tenancy_house_pledge"
                      placeholder="请选择房屋是否抵押"
                    >
                      <el-option label="未抵押" value="未"></el-option>
                      <el-option label="已抵押" value="已"></el-option>
                    </el-select>
                  </div>
                </el-form-item>
                <el-form-item
                  label="违约金标准"
                  :label-width="formLabelWidth"
                  prop="tenancy_damage_standard"
                >
                  <div class="position">
                    <el-select
                      v-model="form.tenancy_damage_standard"
                      placeholder="请选择违约金标准"
                    >
                      <el-option
                        label="半个月租金"
                        value="半个月租金"
                      ></el-option>
                      <el-option
                        label="一个月租金"
                        value="一个月租金"
                      ></el-option>
                      <el-option
                        label="两个月租金"
                        value="两个月租金"
                      ></el-option>
                      <el-option
                        label="三个月租金"
                        value="三个月租金"
                      ></el-option>
                    </el-select>
                  </div>
                </el-form-item>
                <el-form-item label="补充约定" :label-width="formLabelWidth">
                  <div class="position">
                    <el-input
                      v-model="form.tenancy_supplement"
                      autocomplete="off"
                      placeholder="（选填）"
                    ></el-input>
                  </div>
                </el-form-item>
              </el-form>
            </div>
          </el-tab-pane>
          <el-tab-pane label="我是租客">
            <div class="payer">
              <el-form
                :model="form"
                :rules="rules"
                ref="form"
                class="demo-ruleForm"
              >
                <el-form-item
                  label="租 客"
                  :label-width="formLabelWidth"
                  style="padding-top: 10px"
                >
                  <h3 class="position">
                    <strong>{{ userData }}</strong>
                  </h3>
                </el-form-item>
                <el-form-item label="房 东" :label-width="formLabelWidth">
                  <div class="position">
                    <span v-show="!value">待对方填写</span>
                    <el-button
                      type="primary"
                      @click="dialogFormVisible = true"
                      v-show="value"
                      >点击填写</el-button
                    >
                    &nbsp;&nbsp;
                    <el-switch
                      v-model="value"
                      active-color="#13ce66"
                      inactive-color="#c0e5ef"
                    >
                    </el-switch>
                    <el-input
                      v-model="form.tenancy_next"
                      autocomplete="off"
                      style="display: none"
                    ></el-input>
                  </div>
                </el-form-item>
                <el-form-item
                  label="房屋地址"
                  :label-width="formLabelWidth"
                  prop="tenancy_house_address"
                >
                  <div class="position">
                    <el-input
                      v-model="form.tenancy_house_address"
                      autocomplete="off"
                      placeholder="请输入房屋地址"
                    ></el-input>
                  </div>
                </el-form-item>
                <el-form-item
                  label="建筑面积"
                  :label-width="formLabelWidth"
                  prop="tenancy_building_area"
                >
                  <div class="position">
                    <el-input
                      v-model="form.tenancy_building_area"
                      autocomplete="off"
                      placeholder="请输入建筑面积   平方米"
                    ></el-input>
                  </div>
                </el-form-item>
                <el-form-item
                  label="装修风格"
                  :label-width="formLabelWidth"
                  prop="tenancy_decoration_style"
                >
                  <div class="position">
                    <el-select
                      v-model="form.tenancy_decoration_style"
                      placeholder="请选择装修风格"
                    >
                      <el-option label="毛坯" value="毛坯"></el-option>
                      <el-option label="简装" value="简装"></el-option>
                      <el-option label="精装" value="精装"></el-option>
                    </el-select>
                  </div>
                </el-form-item>
                <el-form-item
                  label="家具家私"
                  :label-width="formLabelWidth"
                  prop="tenancy_furniture"
                >
                  <div class="position">
                    <el-input
                      v-model="form.tenancy_furniture"
                      autocomplete="off"
                      placeholder="请输入包含家具家私"
                    ></el-input>
                  </div>
                </el-form-item>
                <el-form-item
                  label="租聘期限"
                  :label-width="formLabelWidth"
                  prop="tenancy_timelimit"
                >
                  <div class="position">
                    <el-date-picker
                      v-model="form.tenancy_timelimit"
                      type="daterange"
                      align="right"
                      unlink-panels
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                      :picker-options="pickerOptions"
                    >
                    </el-date-picker>
                  </div>
                </el-form-item>
                <el-form-item
                  label="租金标准"
                  :label-width="formLabelWidth"
                  prop="tenancy_rent_standard"
                >
                  <div class="position">
                    <el-input
                      v-model="form.tenancy_rent_standard"
                      autocomplete="off"
                      placeholder="请输入租金标准   元/月"
                    ></el-input>
                  </div>
                </el-form-item>
                <el-form-item
                  label="支付方式"
                  :label-width="formLabelWidth"
                  prop="tenancy_payment"
                >
                  <div class="position">
                    <el-select
                      v-model="form.tenancy_payment"
                      placeholder="请选择支付方式"
                    >
                      <el-option label="银行转账" value="银行转账"></el-option>
                      <el-option label="微信转账" value="微信转账"></el-option>
                      <el-option
                        label="其他线上转账"
                        value="其他线上转账"
                      ></el-option>
                    </el-select>
                  </div>
                </el-form-item>
                <el-form-item
                  label="支付周期"
                  :label-width="formLabelWidth"
                  prop="tenancy_payment_cycle"
                >
                  <div class="position">
                    <el-select
                      v-model="form.tenancy_payment_cycle"
                      placeholder="请选择支付周期"
                    >
                      <el-option label="按月支付" value="月"></el-option>
                      <el-option label="按季度支付" value="季度"></el-option>
                      <el-option label="按半年支付" value="半年"></el-option>
                      <el-option label="按年支付" value="年"></el-option>
                    </el-select>
                  </div>
                </el-form-item>
                <el-form-item
                  label="支付时间"
                  :label-width="formLabelWidth"
                  prop="tenancy_pay_time"
                >
                  <div class="position">
                    <el-select
                      v-model="form.tenancy_pay_time"
                      placeholder="请选择支付时间"
                    >
                      <el-option label="每月1日" value="每月1日"></el-option>
                      <el-option label="每月2日" value="每月2日"></el-option>
                      <el-option label="每月3日" value="每月3日"></el-option>
                      <el-option label="每月4日" value="每月4日"></el-option>
                      <el-option label="每月5日" value="每月5日"></el-option>
                      <el-option label="每月6日" value="每月6日"></el-option>
                      <el-option label="每月7日" value="每月7日"></el-option>
                      <el-option label="每月8日" value="每月8日"></el-option>
                      <el-option label="每月9日" value="每月9日"></el-option>
                      <el-option label="每月10日" value="每月10日"></el-option>
                      <el-option label="每月11日" value="每月11日"></el-option>
                      <el-option label="每月12日" value="每月12日"></el-option>
                      <el-option label="每月13日" value="每月13日"></el-option>
                      <el-option label="每月14日" value="每月14日"></el-option>
                      <el-option label="每月15日" value="每月15日"></el-option>
                      <el-option label="每月16日" value="每月16日"></el-option>
                      <el-option label="每月17日" value="每月17日"></el-option>
                      <el-option label="每月18日" value="每月18日"></el-option>
                      <el-option label="每月19日" value="每月19日"></el-option>
                      <el-option label="每月20日" value="每月20日"></el-option>
                      <el-option label="每月21日" value="每月21日"></el-option>
                      <el-option label="每月22日" value="每月22日"></el-option>
                      <el-option label="每月23日" value="每月23日"></el-option>
                      <el-option label="每月24日" value="每月24日"></el-option>
                      <el-option label="每月25日" value="每月25日"></el-option>
                      <el-option label="每月26日" value="每月26日"></el-option>
                      <el-option label="每月27日" value="每月27日"></el-option>
                      <el-option label="每月28日" value="每月28日"></el-option>
                    </el-select>
                  </div>
                </el-form-item>
                <el-form-item
                  label="押金标准"
                  :label-width="formLabelWidth"
                  prop="tenancy_cashpledge_standard"
                >
                  <div class="position">
                    <el-input
                      v-model="form.tenancy_cashpledge_standard"
                      autocomplete="off"
                      placeholder="请输入押金标准    元/月"
                    ></el-input>
                  </div>
                </el-form-item>
                <el-form-item
                  label="押金支付时间"
                  :label-width="formLabelWidth"
                  prop="tenancy_cashpledge_paytime"
                >
                  <div class="position">
                    <el-select
                      v-model="form.tenancy_cashpledge_paytime"
                      placeholder="请选择押金支付时间"
                    >
                      <el-option label="租前7日" value="租前7日"></el-option>
                      <el-option label="租前15日" value="租前15日"></el-option>
                      <el-option label="租前30日" value="租前30日"></el-option>
                      <el-option label="起租当日" value="起租当日"></el-option>
                    </el-select>
                  </div>
                </el-form-item>
                <el-form-item
                  label="房屋交付时间"
                  :label-width="formLabelWidth"
                  prop="tenancy_house_deliverytime"
                >
                  <div class="position">
                    <el-date-picker
                      v-model="form.tenancy_house_deliverytime"
                      type="daterange"
                      align="right"
                      unlink-panels
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                      :picker-options="pickerOptions"
                    >
                    </el-date-picker>
                  </div>
                </el-form-item>
                <el-form-item
                  label="租客需承担的费用"
                  :label-width="formLabelWidth"
                  prop="tenancy_pay_piper"
                >
                  <div class="position">
                    <el-input
                      v-model="form.tenancy_pay_piper"
                      autocomplete="off"
                      placeholder="请输入租客需承担的费用"
                    ></el-input>
                  </div>
                </el-form-item>
                <el-form-item
                  label="租聘期内是否允许装修"
                  :label-width="formLabelWidth"
                  prop="tenancy_allow_decorate"
                >
                  <div class="position">
                    <el-select
                      v-model="form.tenancy_allow_decorate"
                      placeholder="请选择是否允许装修"
                    >
                      <el-option label="不允许" value="不允许: "></el-option>
                      <el-option
                        label="允许:租聘期满由租客拆除并恢复原状"
                        value="允许:租聘期满由租客拆除并恢复原状"
                      ></el-option>
                      <el-option
                        label="允许:租聘期满后装修无偿归房东所有"
                        value="允许:租聘期满后装修无偿归房东所有"
                      ></el-option>
                    </el-select>
                  </div>
                </el-form-item>
                <el-form-item
                  label="租聘期内是否支持转租"
                  :label-width="formLabelWidth"
                  prop="tenancy_sublet"
                >
                  <div class="position">
                    <el-select
                      v-model="form.tenancy_sublet"
                      placeholder="请选择是否支持转租"
                    >
                      <el-option label="允许" value="允许"></el-option>
                      <el-option label="不允许" value="不允许"></el-option>
                    </el-select>
                  </div>
                </el-form-item>
                <el-form-item
                  label="续租告知时间"
                  :label-width="formLabelWidth"
                  prop="tenancy_relet"
                >
                  <div class="position">
                    <el-select
                      v-model="form.tenancy_relet"
                      placeholder="请选择续租告知时间"
                    >
                      <el-option
                        label="租聘期满前15日"
                        value="租聘期满前15日"
                      ></el-option>
                      <el-option
                        label="租聘期满前30日"
                        value="租聘期满前30日"
                      ></el-option>
                      <el-option
                        label="租聘期满前60日"
                        value="租聘期满前60日"
                      ></el-option>
                      <el-option
                        label="租聘期满前90日"
                        value="租聘期满前90日"
                      ></el-option>
                    </el-select>
                  </div>
                </el-form-item>
                <el-form-item
                  label="房屋是否抵押"
                  :label-width="formLabelWidth"
                  prop="tenancy_house_pledge"
                >
                  <div class="position">
                    <el-select
                      v-model="form.tenancy_house_pledge"
                      placeholder="请选择房屋是否抵押"
                    >
                      <el-option label="未抵押" value="未抵押"></el-option>
                      <el-option label="已抵押" value="已抵押"></el-option>
                    </el-select>
                  </div>
                </el-form-item>
                <el-form-item
                  label="违约金标准"
                  :label-width="formLabelWidth"
                  prop="tenancy_damage_standard"
                >
                  <div class="position">
                    <el-select
                      v-model="form.tenancy_damage_standard"
                      placeholder="请选择违约金标准"
                    >
                      <el-option
                        label="半个月租金"
                        value="半个月租金"
                      ></el-option>
                      <el-option
                        label="一个月租金"
                        value="一个月租金"
                      ></el-option>
                      <el-option
                        label="两个月租金"
                        value="两个月租金"
                      ></el-option>
                      <el-option
                        label="三个月租金"
                        value="三个月租金"
                      ></el-option>
                    </el-select>
                  </div>
                </el-form-item>
                <el-form-item label="补充约定" :label-width="formLabelWidth">
                  <div class="position">
                    <el-input
                      v-model="form.tenancy_supplement"
                      autocomplete="off"
                      placeholder="（选填）"
                    ></el-input>
                  </div>
                </el-form-item>
              </el-form>
            </div>
          </el-tab-pane>
        </el-tabs>
        <!-- 房东对话框 -->
        <el-dialog
          title="房东信息"
          width="50%"
          :before-close="handleClose"
          :visible.sync="dialogFormVisible"
          :append-to-body="true"
        >
          <el-form
            :model="form"
            :rules="rules"
            ref="form"
            class="demo-ruleForm"
          >
            <el-form-item
              label="房  东"
              :label-width="formLabelWidth"
              prop="tenancy_landlord_name"
            >
              <div class="position">
                <el-input
                  v-model="form.tenancy_landlord_name"
                  autocomplete="off"
                ></el-input>
              </div>
            </el-form-item>
            <el-form-item
              label="证 件 类 型"
              :label-width="formLabelWidth"
              prop="tenancy_landlord_idtype"
            >
              <div class="position">
                <el-select
                  v-model="form.tenancy_landlord_idtype"
                  placeholder="请选择证件类型"
                >
                  <el-option label="居民身份证" value="居民身份证"></el-option>
                </el-select>
              </div>
            </el-form-item>
            <el-form-item
              label="证 件 号"
              :label-width="formLabelWidth"
              prop="tenancy_landlord_idnumber"
            >
              <div class="position">
                <el-input
                  v-model="form.tenancy_landlord_idnumber"
                  autocomplete="off"
                ></el-input>
              </div>
            </el-form-item>
            <el-form-item
              label="手 机 号"
              :label-width="formLabelWidth"
              prop="tenancy_landload_phone"
            >
              <div class="position">
                <el-input
                  v-model="form.tenancy_landload_phone"
                  autocomplete="off"
                ></el-input>
              </div>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <!-- <el-button @click="dialogFormVisible = false">重 置</el-button> -->
            <el-button type="primary" @click="dialogFormVisible = false"
              >确 定</el-button
            >
          </div>
        </el-dialog>
        <!-- 租客对话框 -->
        <el-dialog
          title="租客信息"
          width="50%"
          :before-close="handleClose"
          :visible.sync="ReceiverdialogFormVisible"
          :append-to-body="true"
        >
          <el-form
            :model="form"
            :rules="rules"
            ref="form"
            class="demo-ruleForm"
          >
            <el-form-item
              label="租 客"
              :label-width="formLabelWidth"
              prop="tenancy_tenant_name"
            >
              <div class="position">
                <el-input
                  v-model="form.tenancy_tenant_name"
                  autocomplete="off"
                ></el-input>
              </div>
            </el-form-item>
            <el-form-item
              label="证 件 类 型"
              :label-width="formLabelWidth"
              prop="tenancy_tenant_idtype"
            >
              <div class="position">
                <el-select
                  v-model="form.tenancy_tenant_idtype"
                  placeholder="请选择证件类型"
                >
                  <el-option label="居民身份证" value="居民身份证"></el-option>
                </el-select>
              </div>
            </el-form-item>
            <el-form-item
              label="证 件 号"
              :label-width="formLabelWidth"
              prop="tenancy_tenant_idnumber"
            >
              <div class="position">
                <el-input
                  v-model="form.tenancy_tenant_idnumber"
                  autocomplete="off"
                ></el-input>
              </div>
            </el-form-item>
            <el-form-item
              label="手 机 号"
              :label-width="formLabelWidth"
              prop="tenancy_tenant_phone"
            >
              <div class="position">
                <el-input
                  v-model="form.tenancy_tenant_phone"
                  autocomplete="off"
                ></el-input>
              </div>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <!-- <el-button @click="dialogFormVisible = false">重 置</el-button> -->
            <el-button type="primary" @click="ReceiverdialogFormVisible = false"
              >确 定</el-button
            >
          </div>
        </el-dialog>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "tenancy",
  inject: ["reload"],
  data() {
    return {
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      form: {},
      rules: {
        tenancy_landlord_name: [
          { required: true, message: "请输入房东名字", trigger: "blur" },
        ],
        tenancy_landload_phone: [
          { required: true, message: "请输入房东手机号", trigger: "blur" },
        ],
        tenancy_landlord_idtype: [
          { required: true, message: "请输入证件类型", trigger: "blur" },
        ],
        tenancy_landlord_idnumber: [
          { required: true, message: "请输入证件号", trigger: "blur" },
        ],
        tenancy_tenant_name: [
          { required: true, message: "请输入租客名字", trigger: "blur" },
        ],
        tenancy_tenant_idtype: [
          { required: true, message: "请输入证件类型", trigger: "blur" },
        ],
        tenancy_tenant_idnumber: [
          { required: true, message: "请输入证件号", trigger: "blur" },
        ],
        tenancy_tenant_phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
        ],
        tenancy_house_address: [
          { required: true, message: "请输入房屋地址", trigger: "blur" },
        ],
        tenancy_building_area: [
          { required: true, message: "请输入建筑面积", trigger: "blur" },
        ],
        tenancy_decoration_style: [
          { required: true, message: "请选择装修风格", trigger: "blur" },
        ],
        tenancy_furniture: [
          { required: true, message: "请输入家具家私", trigger: "blur" },
        ],
        tenancy_timelimit: [
          { required: true, message: "请选择租聘期限", trigger: "blur" },
        ],
        tenancy_rent_standard: [
          { required: true, message: "请输入租金标准", trigger: "blur" },
        ],
        tenancy_payment: [
          { required: true, message: "请选择支付方式", trigger: "blur" },
        ],
        tenancy_payment_cycle: [
          { required: true, message: "请选择支付周期", trigger: "blur" },
        ],
        tenancy_pay_time: [
          { required: true, message: "请选择支付时间", trigger: "blur" },
        ],
        tenancy_cashpledge_standard: [
          { required: true, message: "请输入押金标准", trigger: "blur" },
        ],
        tenancy_cashpledge_paytime: [
          { required: true, message: "请选择押金支付时间", trigger: "blur" },
        ],
        tenancy_house_deliverytime: [
          { required: true, message: "请选择房屋交付时间", trigger: "blur" },
        ],
        tenancy_pay_piper: [
          {
            required: true,
            message: "请输入租客需承担的费用",
            trigger: "blur",
          },
        ],
        tenancy_allow_decorate: [
          { required: true, message: "请选择是否允许装修", trigger: "blur" },
        ],
        tenancy_sublet: [
          { required: true, message: "请选择是否支持转租", trigger: "blur" },
        ],
        tenancy_relet: [
          { required: true, message: "请选择续租告知时间", trigger: "blur" },
        ],
        tenancy_house_pledge: [
          { required: true, message: "请选择房屋是否抵押", trigger: "blur" },
        ],
        tenancy_damage_standard: [
          { required: true, message: "请选择违约金标准", trigger: "blur" },
        ],
        /* tenancy_supplement: [
          { required: true, message: "请输入补充说明", trigger: "blur" },
        ], */
      },
      formLabelWidth: "180px",
      user: {
        name: "",
        idNumber: "",
        phone: "",
        IdType: "",
      },
      userData: "",
      tabId: "",
      value: false,
      dialogFormVisible: false,
      ReceiverdialogFormVisible: false,
      buttonStatus: false,
    };
  },
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleClose() {
      this.resetForm("form");
      this.dialogFormVisible = false;
      this.ReceiverdialogFormVisible = false;
    },
    Totenancy() {
      this.$router.push({ path: "/tenancyModel", replace: true });
    },
    //获取选中tab页ID
    handleClick(tab, event) {
      this.tabId = event.target.getAttribute("id");
      console.log("this.tabId-", this.tabId);
      //判断用户属于什么身份,赋值
      if (this.tabId === "tab-1") {
        this.form.tenancy_tenant_name = localStorage.getItem("loginName");
        this.form.tenancy_tenant_idnumber =
          localStorage.getItem("loginIdNumber");
        this.form.tenancy_tenant_phone = localStorage.getItem("loginPhone");
        this.form.tenancy_tenant_idtype = localStorage.getItem("loginIdType");
        this.form.tenancy_landlord_name = "";
        this.form.tenancy_landlord_idnumber = "";
        this.form.tenancy_landload_phone = "";
        this.form.tenancy_landlord_idtype = "";
        //防止赋空值后input框不能输入
        this.form = JSON.stringify(this.form);
        this.form = JSON.parse(this.form);
        this.$store.commit("SET_TSTATUS", "租客");
        console.log(11, this.$store.state.tenancy.status);
      } else {
        this.form.tenancy_tenant_name = "";
        this.form.tenancy_tenant_idnumber = "";
        this.form.tenancy_tenant_phone = "";
        this.form.tenancy_tenant_idtype = "";
        this.form.tenancy_landlord_name = localStorage.getItem("loginName");
        this.form.tenancy_landlord_idnumber =
          localStorage.getItem("loginIdNumber");
        this.form.tenancy_landload_phone = localStorage.getItem("loginPhone");
        this.form.tenancy_landlord_idtype = localStorage.getItem("loginIdType");
        this.form = JSON.stringify(this.form);
        this.form = JSON.parse(this.form);
        this.$store.commit("SET_TSTATUS", "房东");
        console.log(22, this.$store.state.tenancy.status);
      }
    },
    getUser() {
      this.form = {};
      this.user.name = localStorage.getItem("loginName");
      this.user.idNumber = localStorage.getItem("loginIdNumber");
      this.user.phone = localStorage.getItem("loginPhone");
      this.user.IdType = localStorage.getItem("loginIdType");
      console.log(11, this.user);
      this.$store.commit("SET_TSTATUS", "房东");
      //判断用户属于什么身份
      if (this.tabId === "") {
        this.form.tenancy_landlord_name = this.user.name;
        this.form.tenancy_landload_phone = this.user.phone;
        this.form.tenancy_landlord_idnumber = this.user.idNumber;
        this.form.tenancy_landlord_idtype = this.user.IdType;
        console.log(22, this.form);
      }
      //隐藏部分手机号码
      this.user.phone = this.user.phone.replace(
        /^(\d{3})\d+(\d{4})$/,
        "$1****$2"
      );
      //隐藏部分身份证号码
      this.user.idNumber = this.user.idNumber.replace(
        /(.{6}).*(.{4})/,
        "$1********$2"
      );
      //整理用户信息
      this.userData =
        this.user.name + " " + this.user.phone + " | " + this.user.idNumber;
    },
    submitForm(formName) {
      //获取当前时间作为开具时间
      let time = new Date();
      this.form.tenancy_time = time.toLocaleString();
      this.$store.commit("SET_TFORM", this.form);
      this.$router.push({ path: "/tenancyComfire", replace: true });
      /* this.$refs[formName].validate((valid) => {
            if (valid) {
              this.$axios.post("/addReceipt", this.form).then((res) => {
                this.$message({
                  showClose: true,
                  message: "成功",
                  type: "success",
                });
                console.log(11, res);
                this.resetForm("form");
    
              });
            } else {
              console.log("error submit!!");
              return false;
            }
          }); */
    },
  },
  watch: {
    form(newValue, oldValue) {
      //当等对方填写时
      const basicFormStatus =
        newValue.tenancy_house_address !== undefined &&
        newValue.tenancy_building_area !== undefined &&
        newValue.tenancy_decoration_style !== undefined &&
        newValue.tenancy_furniture !== undefined &&
        newValue.tenancy_timelimit !== undefined &&
        newValue.tenancy_rent_standard !== undefined &&
        newValue.tenancy_payment !== undefined &&
        newValue.tenancy_payment_cycle !== undefined &&
        newValue.tenancy_pay_time !== undefined &&
        newValue.tenancy_cashpledge_standard !== undefined &&
        newValue.tenancy_cashpledge_paytime !== undefined &&
        newValue.tenancy_house_deliverytime !== undefined &&
        newValue.tenancy_pay_piper !== undefined &&
        newValue.tenancy_sublet !== undefined &&
        newValue.tenancy_relet !== undefined &&
        newValue.tenancy_house_pledge !== undefined &&
        newValue.tenancy_damage_standard !== undefined &&
        newValue.tenancy_allow_decorate !== undefined;

      //用户填写时
      const landlordFormStatus =
        newValue.tenancy_landlord_name !== undefined &&
        newValue.tenancy_landload_phone !== undefined &&
        newValue.tenancy_landlord_idtype !== undefined &&
        newValue.tenancy_landlord_idnumber !== undefined &&
        basicFormStatus;
      const tenantFormStatus =
        newValue.tenancy_tenant_name !== undefined &&
        newValue.tenancy_tenant_idtype !== undefined &&
        newValue.tenancy_tenant_idnumber !== undefined &&
        newValue.tenancy_tenant_phone !== undefined &&
        basicFormStatus;
      //首先判断状态开关谁来填写，再判断form表单有没有填写完毕
      if (newValue.tenancy_next === "true") {
        if (landlordFormStatus || tenantFormStatus) {
          this.buttonStatus = true;
        } else {
          this.buttonStatus = false;
        }
      } else {
        if (basicFormStatus) {
          this.buttonStatus = true;
        } else {
          this.buttonStatus = false;
        }
      }
    },
    value(newValue, oldValue) {
      //通过填写开关的值来判断
      newValue
        ? (this.form.tenancy_next = "true")
        : (this.form.tenancy_next = "false");
    },
    immediate: true, // 立即执行
    deep: true, // 深度监听复杂类型内变化
  },
  mounted() {
    this.getUser();
  },
};
</script>
<style scoped>
.tenancy {
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
  height: 600px;
  position: absolute;
  background-color: #fff;
  top: 330px;
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
  margin-bottom: 20px;
}
.item .el-form-item__label {
  font-size: 15px;
  color: #6c6c6c;
}
.content_son .el-page-header {
  padding: 10px 0 10px 10px;
  font-size: 20px;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  background-color: #4ba79c;
}
.login .el-page-header__content {
  color: #4ba79c;
}
.el-input {
  /* margin-left: 15px; */
  width: 480px;
}
.receiver,
.payer {
  background-color: #f6f6f6;
  width: 700px;
  height: 1260px;
  margin-left: 30px;
  border-radius: 20px;
}
.position {
  text-align: left;
  padding-left: 20px;
}
</style>

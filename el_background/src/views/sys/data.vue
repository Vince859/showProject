<template>
  <div>
    <div ref="chart" style="width: 100%; height: 600px"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "fileDta",
  data() {
    return {
      fileData: [
        { name: "借条量", value: 0 },
        { name: "收据量", value: 0 },
        { name: "租房合同量", value: 0 },
        { name: "兼职合同量", value: 0 },
      ],
    };
  },
  methods: {
    setEchart(data) {
      const chart = echarts.init(this.$refs.chart);

      // 配置项
      const option = {
        title: {
          text: "电子票据数据分析",
          textStyle: {
            color: "#333",
            fontSize: 24,
            fontWeight: "bold",
          },
          left: "center",
          top: 20,
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: data.map((item) => item.name),
          textStyle: {
            color: "#666",
            fontSize: 16,
          },
          top: 60,
        },
        series: [
          {
            name: "电子票据数量",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: data,
            label: {
              formatter: "{b} : {c} ({d}%)",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "18",
                fontWeight: "bold",
              },
            },
          },
        ],
      };

      // 渲染图表
      chart.setOption(option);
    },
    getData() {
      this.$axios.post("/selectFile", {}).then((res) => {
        //console.log(11, res);
        this.fileData[0].value = res.data.result[0].fileData;
        this.fileData[1].value = res.data.result[1].fileData;
        this.fileData[2].value = res.data.result[2].fileData;
        this.fileData[3].value = res.data.result[3].fileData;

        this.setEchart(this.fileData);
        //console.log(22, this.fileData);
      });
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style></style>

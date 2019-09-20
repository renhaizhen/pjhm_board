<template>
  <div ref="mychart" class="chart" :style="{width:chartWidth,height:chartHeight}"></div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "LeftEcharts",
  data() {
    return {
      chartWidth: "",
      chartHeight: ""
    };
  },
  created() {
    this.generatorWidthAndHeight();
  },
  mounted() {
    this.drawChart();
  },
  methods: {
    //生成图标的宽度和高度
    generatorWidthAndHeight() {
      this.chartWidth = `${document.body.offsetWidth * 0.3}px`;
      this.chartHeight = `${document.body.offsetHeight * 0.4}px`;
    },
    drawChart() {
      let Chart = echarts.init(this.$refs.mychart);
      Chart.setOption({
        title: {
          text: "奇迹花园区",
          left:'center',
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [" ", "9时", "11时", "13时", "15时", "实时"],
          axisLabel: {
            textStyle: {
              color: "#ffffff"
            }
          },
           axisLine: {
                show: true,
                lineStyle: {
                    color: "rgba(219,225,255,1)",
                    width: 0,
                    type: "solid"
                }
            },
        },
        yAxis: {
          type: "value",
          minInterval: 0,
          interval: 250,
          max: 1000,
          axisLabel: {
            textStyle: {
              color: "#ffffff"
            }
          },
          splitArea: {
            show: true
          },
           axisLine: {
                show: true,
                lineStyle: {
                    color: "rgba(219,225,255,1)",
                    width: 0,
                    type: "solid"
                }
            },
        },
        series: [
          {
            symbol: "none", //拐点样式
            smooth: true,
            itemStyle: {
              color: "#cc9966"
            },
            data: [180, 502, 601, 555, 900, 1005],
            type: "line",
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "red" },
                  { offset: 0.5, color: "pink" },
                  { offset: 1, color: "#ddd" }
                ])
              }
            }
          }
        ]
      });
    }
  }
};
</script>

<style scoped>
</style>

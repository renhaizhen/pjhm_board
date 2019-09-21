<template>
  <div>
    <span class="text">实时客流量</span>
    <div class="mycharts">
      <div ref="qiji" class="chart" :style="{width:chartWidth,height:chartHeight}"></div>
      <div ref="huoli" class="chart" :style="{width:chartWidth,height:chartHeight}"></div>
      <div ref="liujiu" class="chart" :style="{width:chartWidth,height:chartHeight}"></div>
      <div ref="binjiang" class="chart binjiang" :style="{width:chartWidth,height:chartHeight}"></div>
      <div ref="senlin" class="chart senlin" :style="{width:chartWidth,height:chartHeight}"></div>
    </div>
  </div>
</template>
<script>
import echarts from "echarts";
export default {
  name: "LeftEcharts",
  data() {
    return {
      chartWidth: "250px",
      chartHeight: "250px"
    };
  },
  created() {},
  mounted() {
    this.drawChartQiji();
    this.drawChartHuoli();
    this.drawChartLiujiu();
    this.drawChartBinjiang();
    this.drawChartSenlin();
  },
  methods: {
    drawChartQiji() {
      let Chart = echarts.init(this.$refs.qiji);
      Chart.setOption({
        grid: {
          x: 40,
          y: 30,
          x2: 10,
          y2: 30
        },
        title: {
          text: "奇迹花园区",
          left: "center",
          textStyle: {
            fontSize: 20,
            fontFamily: "SHSCNMidium",
            color: "#ffffff"
          }
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
          splitLine: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(219,225,255,1)",
              width: 0,
              type: "solid"
            }
          }
        },
        yAxis: {
          type: "value",
          minInterval: 0,
          interval: 250,
          max: 1000,
          splitLine: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: "#ffffff"
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(219,225,255,1)",
              width: 1,
              type: "solid"
            }
          }
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
                  { offset: 0, color: "#ffffff" },
                  { offset: 0.5, color: "#fbfaf6" },
                  { offset: 1, color: "#2d6d3f" }
                ])
              }
            }
          }
        ]
      });
    },
    drawChartHuoli() {
      let Chart = echarts.init(this.$refs.huoli);
      Chart.setOption({
        grid: {
          x: 40,
          y: 30,
          x2: 10,
          y2: 30
        },
        title: {
          text: "活力花园区",
          left: "center",
          textStyle: {
            fontSize: 20,
            fontFamily: "SHSCNMidium",
            color: "#ffffff"
          }
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
          splitLine: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(219,225,255,1)",
              width: 0,
              type: "solid"
            }
          }
        },
        yAxis: {
          type: "value",
          minInterval: 0,
          interval: 250,
          max: 1000,
          splitLine: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: "#ffffff"
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(219,225,255,1)",
              width: 1,
              type: "solid"
            }
          }
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
                  { offset: 0, color: "#5bb472" },
                  { offset: 0.5, color: "#5db874" },
                  { offset: 1, color: "#2d6d3f" }
                ])
              }
            }
          }
        ]
      });
    },
    drawChartLiujiu() {
      let Chart = echarts.init(this.$refs.liujiu);
      Chart.setOption({
        grid: {
          x: 40,
          y: 30,
          x2: 10,
          y2: 30
        },
        title: {
          text: "柳鹫花园区",
          left: "center",
          textStyle: {
            fontSize: 20,
            fontFamily: "SHSCNMidium",
            color: "#ffffff"
          }
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
          splitLine: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(219,225,255,1)",
              width: 0,
              type: "solid"
            }
          }
        },
        yAxis: {
          type: "value",
          minInterval: 0,
          interval: 250,
          max: 1000,
          splitLine: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: "#ffffff"
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(219,225,255,1)",
              width: 1,
              type: "solid"
            }
          }
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
                  { offset: 0, color: "#a0bd44" },
                  { offset: 0.5, color: "#729d42" },
                  { offset: 1, color: "#2d6d3f" }
                ])
              }
            }
          }
        ]
      });
    },
    drawChartBinjiang() {
      let Chart = echarts.init(this.$refs.binjiang);
      Chart.setOption({
        grid: {
          x: 40,
          y: 30,
          x2: 10,
          y2: 30
        },
        title: {
          text: "滨江花园区",
          left: "center",
          textStyle: {
            fontSize: 20,
            fontFamily: "SHSCNMidium",
            color: "#ffffff"
          }
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
          splitLine: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(219,225,255,1)",
              width: 0,
              type: "solid"
            }
          }
        },
        yAxis: {
          type: "value",
          minInterval: 0,
          interval: 250,
          max: 1000,
          splitLine: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: "#ffffff"
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(219,225,255,1)",
              width: 1,
              type: "solid"
            }
          }
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
                  { offset: 0, color: "#86ccd6" },
                  { offset: 0.5, color: "#86ccd6" },
                  { offset: 1, color: "#2d6d3f" }
                ])
              }
            }
          }
        ]
      });
    },
    drawChartSenlin() {
      let Chart = echarts.init(this.$refs.senlin);
      Chart.setOption({
        grid: {
          x: 40,
          y: 30,
          x2: 10,
          y2: 30
        },
        title: {
          text: "森林花园区",
          left: "center",
          textStyle: {
            fontSize: 20,
            fontFamily: "SHSCNMidium",
            color: "#ffffff"
          }
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
          splitLine: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(219,225,255,1)",
              width: 0,
              type: "solid"
            }
          }
        },
        yAxis: {
          type: "value",
          minInterval: 0,
          interval: 250,
          max: 1000,
          splitLine: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: "#ffffff"
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(219,225,255,1)",
              width: 1,
              type: "solid"
            }
          }
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
                  { offset: 0, color: "#e4c64c" },
                  { offset: 0.5, color: "#e4c64c" },
                  { offset: 1, color: "#2d6d3f" }
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
.text {
  display: inline-block;
  width: 190px;
  height: 69px;
  text-align: center;
  line-height: 69px;
  font-size: 24px;
  font-family: "SHSCNBold";
  background-color: #51a769;
  border-radius: 30px;
  margin-top: 32px;
  margin-left: 55px;
}
.chart {
  display: inline-block;
  padding-left: 5px;
  padding-top: 30px;
}
.mycharts {
  overflow: hidden;
}
.binjiang {
  margin-left: 140px;
  margin-right: 5px;
}
</style>

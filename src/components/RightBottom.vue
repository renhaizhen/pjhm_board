<template>
  <div>
    <div ref="myChart" class="chart" :style="{width:chartWidth,height:chartHeight}"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "RightBottom",
  data() {
    return {
      chartWidth: "1054px",
      chartHeight: "207px"
    };
  },
  mounted() {
    this.drawChartMyChart();
  },
  methods: {
    drawChartMyChart() {
      let Chart = echarts.init(this.$refs.myChart);
      Chart.setOption({
        backgroundColor: "#2d6d3e",
        grid: {
          left: "1%",
          right: "4%",
          bottom: "6%",
          top: 30,
          padding: "0 0 10 0",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: true, //坐标轴两边留白
            data: [
              "9/10",
              "9/11",
              "9/12",
              "9/13",
              "9/14",
              "9/15",
              "9/16",
              "9/17"
            ],
            axisLabel: {
              //坐标轴刻度标签的相关设置。
              interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
              margin: 15,
              textStyle: {
                color: "#ffffff",
                fontStyle: "normal",
                fontFamily: "SHSCNMidium",
                fontSize: 20
              }
            },
            axisTick: {
              //坐标轴刻度相关设置。
              show: false
            },
            axisLine: {
              //坐标轴轴线相关设置
              lineStyle: {
                color: "#fff",
                opacity: 0.2
              }
            },
            splitLine: {
              //坐标轴在 grid 区域中的分隔线。
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: "value",
             minInterval: 0,
          interval: 250,
          max: 1000,
            axisLabel: {
              textStyle: {
                color: "#ffffff",
                fontStyle: "normal",
                fontFamily: "SHSCNMidium",
                fontSize: 20
              }
            },
            axisLine: {
              show: true,
               lineStyle: {
                color: ["#fff"],
                opacity: 0.06
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: ["#fff"],
                opacity: 0.06
              }
            }
          }
        ],
        series: [
          {
            name: "奇迹花园区",
            type: "bar",
            data: [600, 400, 930, 500, 400, 300, 300, 300],
            barWidth: 10,
            barGap: 0, //柱间距离
            label: {
              //图形上的文本标签
              normal: {
                show: false,
                position: "top",
                textStyle: {
                  color: "#a8aab0",
                  fontStyle: "normal",
                  fontFamily: "微软雅黑",
                  fontSize: 12
                }
              }
            },
            itemStyle: {
              //图形样式
              normal: {
                barBorderRadius: [5, 5, 0, 0],
                color: '#ffffff'
              }
            }
          },
          {
            name: "柳鹫田园区",
            type: "bar",
            data: [850, 720, 600, 830, 630, 630, 630, 630],
            barWidth: 10,
            barGap: 0.2, //柱间距离
            label: {
              //图形上的文本标签
              normal: {
                show: false,
                position: "top",
                textStyle: {
                  color: "#a8aab0",
                  fontStyle: "normal",
                  fontFamily: "微软雅黑",
                  fontSize: 12
                }
              }
            },
            itemStyle: {
              //图形样式
              normal: {
                barBorderRadius: [5, 5, 0, 0],
                color: '#a0bd44'
              }
            }
          },
          {
            name: "森林游憩区",
            type: "bar",
            data: [550, 420, 300, 730, 230, 430, 430, 430],
            barWidth: 10,
            barGap: 0.2, //柱间距离
            label: {
              //图形上的文本标签
              normal: {
                show: false,
                position: "top",
                textStyle: {
                  color: "#a8aab0",
                  fontStyle: "normal",
                  fontFamily: "微软雅黑",
                  fontSize: 12
                }
              }
            },
            itemStyle: {
              //图形样式
              normal: {
                barBorderRadius: [5, 5, 0, 0],
                color: '#e4c64c'
              }
            }
          },
           {
            name: "森林游憩区",
            type: "bar",
            data: [300, 120, 88, 91, 50, 40, 99, 51],
            barWidth: 10,
            barGap: 0.2, //柱间距离
            label: {
              //图形上的文本标签
              normal: {
                show: false,
                position: "top",
                textStyle: {
                  color: "#a8aab0",
                  fontStyle: "normal",
                  fontFamily: "微软雅黑",
                  fontSize: 12
                }
              }
            },
            itemStyle: {
              //图形样式
              normal: {
                barBorderRadius: [5, 5, 0, 0],
                color: '#5db874'
              }
            }
          },
           {
            name: "滨江漫步区",
            type: "bar",
            data: [99, 88, 110, 130, 150, 163, 180, 170],
            barWidth: 10,
            barGap: 0.2, //柱间距离
            label: {
              //图形上的文本标签
              normal: {
                show: false,
                position: "top",
                textStyle: {
                  color: "#a8aab0",
                  fontStyle: "normal",
                  fontFamily: "微软雅黑",
                  fontSize: 12
                }
              }
            },
            itemStyle: {
              //图形样式
              normal: {
                barBorderRadius: [5, 5, 0, 0],
                color: '#86ccd6'
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

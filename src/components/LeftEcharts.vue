<template>
  <div>
    <span class="text">实时客流量</span>
    <div class="mycharts">
      <div
        ref="qiji"
        :data-title="allTitle.qiji"
        class="chart qiji"
        :style="{width:chartWidth,height:chartHeight}"
      ></div>
      <div
        ref="huoli"
        :data-title="allTitle.huoli"
        class="chart"
        :style="{width:chartWidth,height:chartHeight}"
      ></div>
      <div
        ref="liujiu"
        :data-title="allTitle.liujiu"
        class="chart"
        :style="{width:chartWidth,height:chartHeight}"
      ></div>
      <div
        ref="binjiang"
        :data-title="allTitle.binjiang"
        class="chart binjiang"
        :style="{width:chartWidth,height:chartHeight}"
      ></div>
      <div
        ref="senlin"
        :data-title="allTitle.senlin"
        class="chart senlin"
        :style="{width:chartWidth,height:chartHeight}"
      ></div>
      <span class="iconqiji" :style="iconImg.qiji">{{countPeople.qiji}}</span>
      <span class="iconhuoli" :style="iconImg.huoli">{{countPeople.huoli}}</span>
      <span class="iconliujiu" :style="iconImg.liujiu">{{countPeople.liujiu}}</span>
      <span class="iconbinjiang" :style="iconImg.binjiang">{{countPeople.binjiang}}</span>
      <span class="iconsenlin" :style="iconImg.senlin">{{countPeople.senlin}}</span>
    </div>
  </div>
</template>
<script>
import echarts from "echarts";
export default {
  name: "LeftEcharts",
  data() {
    return {
      chartWidth: "240px",
      chartHeight: "240px",
      iconImg: {
        qiji: {
          backgroundImage: "url(" + require("../assets/qiji.png") + ")",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat"
        },
        huoli: {
          backgroundImage: "url(" + require("../assets/huoli.png") + ")",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat"
        },
        liujiu: {
          backgroundImage: "url(" + require("../assets/liujiu.png") + ")",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat"
        },
        binjiang: {
          backgroundImage: "url(" + require("../assets/binjiang.png") + ")",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat"
        },
        senlin: {
          backgroundImage: "url(" + require("../assets/senlin.png") + ")",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat"
        }
      },
      options: {
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
              color: "rgba(219,225,255,.5)",
              width: 1,
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
              color: "rgba(219,225,255,.5)",
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
      },
      allTitle: {
        qiji: "奇迹花园区",
        huoli: "活力花园区",
        liujiu: "柳鹫花园区",
        binjiang: "滨江花园区",
        senlin: "森林花园区"
      },
      countPeople:{
        qiji:'1005',
        huoli:'1005',
        liujiu:'1005',
        binjiang:'1005',
        senlin:'1005'
      }
    };
  },
  created() {
    this.showData()
  },
  mounted() {
    this.drawChartQiji();
    this.drawChartHuoli();
    this.drawChartLiujiu();
    this.drawChartBinjiang();
    this.drawChartSenlin();
    console.log(this.$refs.senlin.dataset.title);
  },
  methods: {
    drawChartQiji() {
      let Chart = echarts.init(this.$refs.qiji);
      Chart.setOption({
        grid: this.options.grid,
        title: {
          text: this.$refs.qiji.dataset.title,
          left: "center",
          textStyle: {
            fontSize: 20,
            fontFamily: "SHSCNMidium",
            color: "#ffffff",
          }
        },
        xAxis: this.options.xAxis,
        yAxis: this.options.yAxis,
        series: [
          {
            symbol: "none", //拐点样式
            smooth: true,
            itemStyle: {
              color: "transparent"
            },
            data: [180, 502, 601, 555, 850, 900],
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
        grid: this.options.grid,
        title: {
          text: this.$refs.huoli.dataset.title,
          left: "center",
          textStyle: {
            fontSize: 20,
            fontFamily: "SHSCNMidium",
            color: "#ffffff"
          }
        },
        xAxis: this.options.xAxis,
        yAxis: this.options.yAxis,
        series: [
          {
            symbol: "none", //拐点样式
            smooth: true,
            itemStyle: {
              color: "transparent"
            },
            data: [180, 502, 601, 555, 850, 900],
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
        grid: this.options.grid,
        title: {
          text: this.$refs.liujiu.dataset.title,
          left: "center",
          textStyle: {
            fontSize: 20,
            fontFamily: "SHSCNMidium",
            color: "#ffffff"
          }
        },
        xAxis: this.options.xAxis,
        yAxis: this.options.yAxis,
        series: [
          {
            symbol: "none", //拐点样式
            smooth: true,
            itemStyle: {
              color: "transparent"
            },
            data: [180, 502, 601, 555, 850, 900],
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
        grid: this.options.grid,
        title: {
          text: this.$refs.binjiang.dataset.title,
          left: "center",
          textStyle: {
            fontSize: 20,
            fontFamily: "SHSCNMidium",
            color: "#ffffff"
          }
        },
        xAxis: this.options.xAxis,
        yAxis: this.options.yAxis,
        series: [
          {
            symbol: "none", //拐点样式
            smooth: true,
            itemStyle: {
              color: "transparent"
            },
            data: [180, 502, 601, 555, 850, 900],
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
        grid: this.options.grid,
        title: {
          text: this.$refs.senlin.dataset.title,
          left: "center",
          textStyle: {
            fontSize: 20,
            fontFamily: "SHSCNMidium",
            color: "#ffffff"
          }
        },
        xAxis: this.options.xAxis,
        yAxis: this.options.yAxis,
        series: [
          {
            symbol: "none", //拐点样式
            smooth: true,
            itemStyle: {
              color: "transparent"
            },
            data: [180, 502, 601, 555, 850, 900],
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
    },
    //获取数据
    showData(){
       this.$http.post('/api/home/tourNum').then(data=>{
			console.log(data.body)
		})
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
  position: relative;
}
.mycharts span {
  position: absolute;
  width: 46px;
  height: 30px;
  font-size: 14px;
  font-family: 'SHSCNHeavy';
  color: #ffffff;
  text-align: center;
  line-height: 37px;
}
.mycharts .iconqiji {
  top: 38px;
  left: 205px;
  color: #2d6d3f;
}
.iconhuoli {
  top: 38px;
  left: 453px;
}
.iconliujiu {
  top: 38px;
  left: 700px;
}
.iconbinjiang {
  top: 310px;
  left: 330px;
}
.iconsenlin {
  top: 310px;
  left: 583px;
}
.qiji{
  margin-left: 15px;
}
.binjiang {
  margin-left: 140px;
  margin-right: 5px;
}
</style>

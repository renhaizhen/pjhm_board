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
      chartHeight: "207px",
      setOption: {
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
              "9/15",
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
            interval: 1000,
            max: 4000,
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
            data: [850, 720, 5000, 830, 630, 630, 630, 630],
            barWidth: 10,
            barGap: 0, //柱间距离
            itemStyle: {
              //图形样式
              normal: {
                barBorderRadius: [5, 5, 0, 0],
                color: "#ffffff"
              }
            }
          },
          {
            name: "柳鹫田园区",
            type: "bar",
            data: [850, 720, 600, 830, 5000, 630, 630, 630],
            barWidth: 10,
            barGap: 0, //柱间距离
            itemStyle: {
              //图形样式
              normal: {
                barBorderRadius: [5, 5, 0, 0],
                color: "#a0bd44"
              }
            }
          },
          {
            name: "森林游憩区",
            type: "bar",
            data: [850, 720, 600, 830, 630, 630, 630, 630],
            barWidth: 10,
            barGap: 0.2, //柱间距离
            itemStyle: {
              //图形样式
              normal: {
                barBorderRadius: [5, 5, 0, 0],
                color: "#e4c64c"
              }
            }
          },
          {
            name: "活力游憩区",
            type: "bar",
            data: [850, 720, 600, 830, 630, 630, 630, 630],
            barWidth: 10,
            barGap: 0, //柱间距离
            itemStyle: {
              //图形样式
              normal: {
                barBorderRadius: [5, 5, 0, 0],
                color: "#5db874"
              }
            }
          },
          {
            name: "滨江漫步区",
            type: "bar",
            data: [300, 720, 600, 830, 630, 630, 630, 630],
            barWidth: 10,
            barGap: 0, //柱间距离
            itemStyle: {
              //图形样式
              normal: {
                barBorderRadius: [5, 5, 0, 0],
                color: "#86ccd6"
              }
            }
          }
        ]
      },
      seriesData:null
    };
  },
  created() {
    this.getAllDayData();
  },
  mounted() {
    // this.drawChartMyChart();
    this.init();
    this.eightDayData()
  },
  watch: {
    //观察option的变化
    setOption: {
      handler(newVal, oldVal) {
        if (this.myChart) {
          if (newVal) {
            this.myChart.setOption(newVal);
          } else {
            this.myChart.setOption(oldVal);
          }
        } else {
          this.init();
        }
      },
      deep: true //对象内部属性的监听，关键。
    }
  },
  methods: {
    init() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(this.$refs.myChart);
      // 绘制图表，this.echarts1_option是数据
      myChart.setOption(this.setOption, true);
    },
    //处理时间
    renderTime(date) {
      var dateee = new Date(date).toJSON();
      return new Date(+new Date(dateee) + 8 * 3600 * 1000)
        .toISOString()
        .replace(/T/g, " ")
        .replace(/\.[\d]{3}Z/, "");
    },
    //获取近8天的所有历史数据
    getAllDayData() {
      this.$http.post("/api/home/rightQiji").then(data => {
        //提取出x轴的日期
        this.setOption.xAxis[0].data = data.body.map((item, index) => {
          return this.renderTime(item.time)
            .slice(5, item.time.lastIndexOf(" "))
            .split(" ")[0]
            .replace("-", "/");
        });
        // console.log(this.setOption.series[0].data, "before");
        this.setOption.series[0].data = data.body.map(item => {
          return item.value;
        });
        console.log(data.body,'1');
        this.seriesData = this.setOption.series.map((item,index)=>{
          return item.data
        })
      });
      this.$http.post("/api/home/rightLiujiu").then(data => {
        console.log(data.body,'2')
        this.seriesData[1] = data.body.map(item=>{
          return item.value
        })
      });
      this.$http.post("/api/home/rightSenlin").then(data => {
         console.log(data.body,'3')
        this.seriesData[2] = data.body.map(item=>{
          return item.value
        })
      });
      this.$http.post("/api/home/rightHuoli").then(data => {
         console.log(data.body,'4')
        this.seriesData[3] = data.body.map(item=>{
          return item.value
        })
      });
      this.$http.post("/api/home/rightBinjiang").then(data => {
         console.log(data.body,'5',this.seriesData,this.setOption.series)
        this.seriesData[4] = data.body.map(item=>{
          return item.value
        })
        this.setOption.series.forEach((item,index,arr)=>{
          console.log(item,index,arr[index].data,this.seriesData[index])
          
          arr[index].data = this.seriesData[index]
        })
        console.log(this.seriesData,this.setOption.series)
      });
    },
    eightDayData(){
      setInterval(() => {
        this.getAllDayData()
      }, 43200000);
    }
  }
};
</script>

<style scoped>
</style>

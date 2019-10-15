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
            interval: 1750,
            max: 7000,
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
            data: [],
            barWidth:15,
            barGap: 0, //柱间距离
            itemStyle: {
              //图形样式
              normal: {
                barBorderRadius: [10, 10, 0, 0],
                color: "#ffffff"
              }
            }
          },
          {
            name: "柳鹫田园区",
            type: "bar",
            data: [],
            barWidth: 15,
            barGap: 0, //柱间距离
            itemStyle: {
              //图形样式
              normal: {
                barBorderRadius: [10, 10, 0, 0],
                color: "#a0bd44"
              }
            }
          },
          {
            name: "森林游憩区",
            type: "bar",
            data: [],
            barWidth: 15,
            barGap: 0.2, //柱间距离
            itemStyle: {
              //图形样式
              normal: {
                barBorderRadius: [10, 10, 0, 0],
                color: "#e4c64c"
              }
            }
          },
          {
            name: "活力森林区",
            type: "bar",
            data: [],
            barWidth: 15,
            barGap: 0, //柱间距离
            itemStyle: {
              //图形样式
              normal: {
                barBorderRadius: [10, 10, 0, 0],
                color: "#5db874"
              }
            }
          },
          {
            name: "滨江漫步区",
            type: "bar",
            data: [],
            barWidth: 15,
            barGap: 0, //柱间距离
            itemStyle: {
              //图形样式
              normal: {
                barBorderRadius: [10, 10, 0, 0],
                color: "#86ccd6"
              }
            }
          }
        ]
      },
      seriesData:[[],[],[],[],[]],
      yTableData:{
        qiji:4000,
        qijiInterval:1000
      }
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
         //先设置
      this.seriesData = this.setOption.series.map((item,index)=>{
          return item.data
        })
      this.$http.post("/api/home/rightQiji").then(data => {
        //提取出x轴的日期
        this.setOption.xAxis[0].data = data.body.map((item, index) => {
          return this.renderTime(item.create_time)
            .slice(5, item.create_time.lastIndexOf(" "))
            .split(" ")[0]
            .replace("-", "/");
        });
        //奇迹数据设置
        this.seriesData[0]= data.body.map(item => {
          return item.value;
        });
        var yValue = Math.max(...this.seriesData[0])
        this.yTableData.qiji = yValue
        this.yTableData.qijiInterval = Math.ceil(yValue/4)
        // console.log(this.setOption.yAxis.max,this.setOption.yAxis.interval)
         this.setOption.series.forEach((item,index,arr)=>{
          arr[index].data = this.seriesData[index]
        })
      });
      this.$http.post("/api/home/rightLiujiu").then(data => {
        this.seriesData[1] = data.body.map(item=>{
          return item.value
        })       
         this.setOption.series.forEach((item,index,arr)=>{
          arr[index].data = this.seriesData[index]
        })
      });
      this.$http.post("/api/home/rightSenlin").then(data => {
        this.seriesData[2] = data.body.map(item=>{
          return item.value
        })
         this.setOption.series.forEach((item,index,arr)=>{
          arr[index].data = this.seriesData[index]
        })
      });
      this.$http.post("/api/home/rightHuoli").then(data => {
        this.seriesData[3] = data.body.map(item=>{
          return item.value
        })
         this.setOption.series.forEach((item,index,arr)=>{
          arr[index].data = this.seriesData[index]
        })
      });
      this.$http.post("/api/home/rightBinjiang").then(data => {
        // console.log(data.body,'body')
        this.seriesData[4] = data.body.map(item=>{
          return item.value
        })
        this.setOption.series.forEach((item,index,arr)=>{
          arr[index].data = this.seriesData[index]
        })
        // console.log(this.seriesData,this.setOption.series,'右侧数据')
      });
      this.setOption.yAxis.max=this.yTableData.qiji
      this.setOption.yAxis.interval = this.yTableData.qijiInterval
    },
    eightDayData(){
      setInterval(() => {
        //10:10请求数据更新当日数据
        var newDate = new Date();
        var hours = newDate.getHours();
        var minutes = Number(newDate.getMinutes());
        hours = hours < 10 ? "0" + hours : hours;
        // minutes = minutes < 10 ? "0" + minutes : minutes;
        console.log(hours,minutes)
        if(hours==10&&minutes==10){
          this.getAllDayData()
        }
      }, 20000);
    }
  }
};
</script>

<style scoped>
</style>
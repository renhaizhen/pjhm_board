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
          data: [" ", "2时", "4时","6时","8时","实时"],
          axisLabel: {
             interval:0,
            textStyle: {
              color: "#ffffff"
            },
            fontSize:12,
            fontFamily:'MONLight'
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
          interval: 125,
          max: 500,
          splitLine: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: "#ffffff"
            },
              fontSize:14,
            fontFamily:'MONLight'
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
      },
      allTitle: {
        qiji: "奇迹花园区",
        huoli: "活力森林区",
        liujiu: "柳鹭田园区",
        binjiang: "滨江漫步区",
        senlin: "森林游憩区"
      },
      countPeople:{
        qiji:1005,
        huoli:1005,
        liujiu:1005,
        binjiang:1005,
        senlin:1005
      },
      qijiData:[],
      huoliData:[],
      liujiuData:[],
      binjiangData:[],
      senlinData:[],
      currentAllPeople:2500,
      timeTableData:{
        qijiTime:[],
        huoliTime:[],
        liujiuTime:[],
        binjiangTime:[],
        senlinTime:[]
      }
    };
  },
   watch: {
    //观察seriesData的变化
    qijiData: {
      handler(newVal, oldVal) {
        if (this.qijiChart) {
          if (newVal) {
            this.qijiChart.setOption(newVal);
          } else {
            this.qijiChart.setOption(oldVal);
          }
        } else {
          this.drawChartQiji();
        }
      },
      deep: true //对象内部属性的监听，关键。
    },
    huoliData: {
      handler(newVal, oldVal) {
        if (this.huoliChart) {
          if (newVal) {
            this.huoliChart.setOption(newVal);
          } else {
            this.huoliChart.setOption(oldVal);
          }
        } else {
          this.drawChartHuoli();
        }
      },
      deep: true //对象内部属性的监听，关键。
    },
     liujiuData: {
      handler(newVal, oldVal) {
        if (this.liujiuChart) {
          if (newVal) {
            this.liujiuChart.setOption(newVal);
          } else {
            this.liujiuChart.setOption(oldVal);
          }
        } else {
          this.drawChartLiujiu();
        }
      },
      deep: true //对象内部属性的监听，关键。
    },
    binjiangData: {
      handler(newVal, oldVal) {
        if (this.binjiangChart) {
          if (newVal) {
            this.binjiangChart.setOption(newVal);
          } else {
            this.binjiangChart.setOption(oldVal);
          }
        } else {
          this.drawChartBinjiang();
        }
      },
      deep: true //对象内部属性的监听，关键。
    },
    senlinData: {
      handler(newVal, oldVal) {
        if (this.senlinChart) {
          if (newVal) {
            this.senlinChart.setOption(newVal);
          } else {
            this.senlinChart.setOption(oldVal);
          }
        } else {
          this.drawChartSenlin();
        }
      },
      deep: true //对象内部属性的监听，关键。
    },
    countPeople:{
      handler(newVal, oldVal) {
          this.currentPeople()
      },
      deep: true 
    }
  },
  created() {
    this.timeTable()
    this.showData()
  },
  mounted() {
    this.drawChartQiji();
    this.drawChartHuoli();
    this.drawChartLiujiu();
    this.drawChartBinjiang();
    this.drawChartSenlin();
    this.currentPeople()
    this.yanTime()
  },
  methods: {
    //获取各个园区的开园时间 这里集中处理横轴时间问题
    timeTable(){
      this.$http.post("/api/home/timeTable").then(data => {
        console.log(data.body)
        data.body.map(item=>{
          if(item.quyu=='奇迹花园区'){          
            let startTime = Number(item.open_time.substring(0,2))
            let endTime = Number(item.close_time.substring(0,2))
            for(let i=startTime;i<=endTime;i++){
              this.timeTableData.qijiTime.push(i+'时')
            }
          }else if(item.quyu=='活力森林区'){
             let startTime = Number(item.open_time.substring(0,2))
            let endTime = Number(item.close_time.substring(0,2))
              for(let i=startTime;i<=endTime;i++){
              this.timeTableData.huoliTime.push(i+'时')
            }
          }else if(item.quyu=='柳鹭田园区'){
              let startTime = Number(item.open_time.substring(0,2))
            let endTime = Number(item.close_time.substring(0,2))
              for(let i=startTime;i<=endTime;i++){
              this.timeTableData.liujiuTime.push(i+'时')
            }
          }else if(item.quyu=='滨江漫步区'){
             let startTime = Number(item.open_time.substring(0,2))
            let endTime = Number(item.close_time.substring(0,2))
              for(let i=startTime;i<=endTime;i++){
              this.timeTableData.binjiangTime.push(i+'时')
            }
          }else if(item.quyu=='森林游憩区'){
             let startTime = Number(item.open_time.substring(0,2))
            let endTime = Number(item.close_time.substring(0,2))
              for(let i=startTime;i<=endTime;i++){
              this.timeTableData.senlinTime.push(i+'时')
            }
          }
        })
      });
    },
    //获取数据
    showData(){
       //获取当前时间
        var newDate = new Date();
        var hours = newDate.getHours();
        hours = hours < 10 ? "0" + hours : hours;
       this.$http.post("/api/home/leftQiji").then(data => {
        var qiji = data.body.map(item=>{
          return item.value
        })
        if(hours<10){
          var b = qiji.slice(5,11)
          this.options.xAxis.data= this.timeTableData.qijiTime.slice(0,6)
          this.qijiData = b
         this.countPeople.qiji = b[b.length-1]
        } if(10<hours<16){
          var b = qiji.slice(11,17)
          this.options.xAxis.data= this.timeTableData.qijiTime.slice(6,12)
          this.qijiData = b
         this.countPeople.qiji = b[b.length-1]
        } if(hours>=16){
          var b = qiji.slice(17,22)
          this.options.xAxis.data= this.timeTableData.qijiTime.slice(12,17)
          this.qijiData = b
         this.countPeople.qiji = b[b.length-1]
        }
      });
      this.$http.post("/api/home/leftHuoli").then(data => {
        var huoli = data.body.map(item=>{
          return item.value
        })
         if(hours<10){
          var b = huoli.slice(5,11)
          this.options.xAxis.data= this.timeTableData.huoliTime.slice(0,6)
          this.huoliData = b
         this.countPeople.huoli = b[b.length-1]
        } if(10<hours<16){
          var b = huoli.slice(11,17)
          this.options.xAxis.data= this.timeTableData.huoliTime.slice(6,12)
          this.huoliData = b
         this.countPeople.huoli = b[b.length-1]
        } if(hours>=16){
          var b = huoli.slice(17,22)
          this.options.xAxis.data= this.timeTableData.huoliTime.slice(12,17)
          this.huoliData = b
         this.countPeople.huoli = b[b.length-1]
        }
      });
      this.$http.post("/api/home/leftLiujiu").then(data => {
        var liujiu = data.body.map(item=>{
          return item.value
        })
        console.log(this.timeTableData.liujiuTime)
        if(hours<10){
          var b = liujiu.slice(5,11)
          this.options.xAxis.data= this.timeTableData.liujiuTime.slice(0,6)
          this.liujiuData = b
         this.countPeople.liujiu = b[b.length-1]
        } if(10<hours<16){
          var b = liujiu.slice(11,17)
          this.options.xAxis.data= this.timeTableData.liujiuTime.slice(6,12)
          this.liujiuData = b
         this.countPeople.liujiu = b[b.length-1]
        } if(hours>=16){
          var b = liujiu.slice(14,19)
          this.options.xAxis.data= this.timeTableData.liujiuTime.slice(9,14)
          this.liujiuData = b
         this.countPeople.liujiu = b[b.length-1]
        }
      });
      this.$http.post("/api/home/leftBinjiang").then(data => {
        var binjiang = data.body.map(item=>{
          return item.value
        })
        if(hours<10){
          var b = binjiang.slice(5,11)
          this.options.xAxis.data= this.timeTableData.binjiangTime.slice(0,6)
          this.binjiangData = b
         this.countPeople.binjiang = b[b.length-1]
        } if(10<hours<16){
          var b = binjiang.slice(11,17)
          this.options.xAxis.data= this.timeTableData.binjiangTime.slice(6,12)
          this.binjiangData = b
         this.countPeople.binjiang = b[b.length-1]
        } if(hours>=16){
          var b = binjiang.slice(17,22)
          this.options.xAxis.data= this.timeTableData.binjiangTime.slice(12,17)
          this.binjiangData = b
          console.log(b,777777)
         this.countPeople.binjiang = b[b.length-1]
        }
      });
      this.$http.post("/api/home/leftSenlin").then(data => {
        var senlin = data.body.map(item=>{
          return item.value
        })
        if(hours<10){
          var b = senlin.slice(5,11)
          this.options.xAxis.data= this.timeTableData.senlinTime.slice(0,6)
          this.senlinData = b
         this.countPeople.senlin = b[b.length-1]
        } if(10<hours<16){
          var b = senlin.slice(11,17)
          this.options.xAxis.data= this.timeTableData.senlinTime.slice(6,12)
          this.senlinData = b
         this.countPeople.binjiang = b[b.length-1]
        } if(hours>=16){
          var b = senlin.slice(17,22)
          this.options.xAxis.data= this.timeTableData.senlinTime.slice(12,17)
          this.senlinData = b
         this.countPeople.senlin = b[b.length-1]
        }
      });
    },
    drawChartQiji() {
      let qijiChart = echarts.init(this.$refs.qiji);
      qijiChart.setOption({
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
            data: this.qijiData,
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
            data: this.huoliData,
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
      let liujiuChart = echarts.init(this.$refs.liujiu);
      liujiuChart.setOption({
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
            data: this.liujiuData,
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
      let binjiangChart = echarts.init(this.$refs.binjiang);
      binjiangChart.setOption({
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
        yAxis: {
          type: "value",
          minInterval: 0,
          interval: 500,
          max: 2500,
          splitLine: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: "#ffffff"
            },
              fontSize:12,
            fontFamily:'MONLight'
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
              color: "transparent"
            },
            data: this.binjiangData,
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
      let senlinChart = echarts.init(this.$refs.senlin);
      senlinChart.setOption({
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
            data: this.senlinData,
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
    //计算当前在园总人数
    currentPeople(){
      if(this.binjiangData){
      this.countPeople.binjiang = this.binjiangData[this.binjiangData.length-1]
      }
      this.currentAllPeople = this.countPeople.qiji+this.countPeople.huoli+this.countPeople.liujiu+this.countPeople.binjiang+this.countPeople.senlin
      console.log(this.currentAllPeople,'当前在园总人数')
      this.$store.state.count = this.currentAllPeople
      console.log(this.$store.state.count)
    },
    //延时执行测试
    yanTime(){
       setInterval(() => {
        var newDate = new Date();
        var hours = newDate.getHours();
        var minutes = newDate.getMinutes();
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        //这里暂时定为20s请求一次数据
        if(hours%2==0 && 7<Number(minutes)<45){
          this.showData()
          console.log('我请求了一次数据')
        }
      }, 1000000);
    },
    // yanTimes(){
    //   setInterval(() => {
    //     this.showData()
    //   }, 100000);
    // },
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
  box-sizing: border-box;
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

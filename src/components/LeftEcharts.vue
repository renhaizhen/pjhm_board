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
        class="chart huoli"
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
      chartWidth: "350px",
      chartHeight: "250px",
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
          x: 50,
          y: 30,
          x2: 20,
          y2: 40
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
          data: ["5时", "", "", "", "", "", "6时", "", "", "", "", "", "7时", "", "", "", "", "", "8时", "", "", "", "", "", "9时", "", "", "", "", "", "10时"],
          axisLabel: {
             interval:0,
            textStyle: {
              color: "#ffffff"
            },
            fontSize:16,
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
            fontSize:16,
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
      yTableData:{
        qiji:500,
        qijiInterval:100,
        huoli:500,
        huoliInterval:100,
        liujiu:500,
        liujiuInterval:100,
        binjiang:2500,
        binjiangInterval:100,
        senlin:500,
        senlinInterval:100
      },
       X10:["5时", "", "", "", "", "", "6时", "", "", "", "", "", "7时", "", "", "", "", "", "8时", "", "", "", "", "", "9时", "", "", "", "", "", "10时"]
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
    //时间转换
     resolvingDate(date){
    let d = new Date(date);
    let month = (d.getMonth() + 1) < 10 ? '0'+(d.getMonth() + 1) : (d.getMonth() + 1);
    let day = d.getDate()<10 ? '0'+d.getDate() : d.getDate();
    let hours = d.getHours()<10 ? '0'+d.getHours() : d.getHours();
    let min = d.getMinutes()<10 ? '0'+d.getMinutes() : d.getMinutes();
    let times=d.getFullYear() + '-' + month + '-' + day + ' ' + hours + ':' + min 
  return times
  },
    //获取数据
    showData(){
       //获取当前时间
        var newDate = new Date();
        var hours = newDate.getHours();
       this.$http.post("/api/home/leftQiji").then(data => {
        // console.log(data.body, "奇迹数据",88888);
        var dataXValue = data.body.map(item=>{
          return this.resolvingDate(item.time)
        })
        //对整点进行赋值修改
         for (var i = 0; i < dataXValue.length ; i++) {
          let judgeA = Number(dataXValue[i].substring(11,13))
          let judgeB = Number(dataXValue[i].substring(14,15))
          if (judgeB == 0) {
            dataXValue[i] = Number(dataXValue[i].substring(11,13))+'时'
          }else{
            dataXValue[i]=''
          }
        }
        //处理y轴
        var dataYValue = data.body.map(item => {
          return item.value;
        });
        this.countPeople.qiji = dataYValue[dataYValue.length-1]
        //处理y轴时间区间
          let yValue = Math.max(...dataYValue);
          this.yTableData.qiji = yValue;
          this.yTableData.qijiInterval = Math.ceil(yValue / 4);
        if (hours >= 0 && hours < 5) {
          this.countPeople.qiji = 0
          this.options.xAxis.data = this.X10
        }else if(hours>=5 && hours<10){
          this.options.xAxis.data = this.X10
          this.qijiData = dataYValue
          //处理y轴时间区间
        }else if(hours>=10 && hours<=23){
          this.qijiData = dataYValue
          this.options.xAxis.data = dataXValue
        }
      });
       this.$http.post("/api/home/leftHuoli").then(data => {
        //处理x轴
        var dataXValue = data.body.map(item=>{
          return this.resolvingDate(item.time)
        })
        //对整点进行赋值修改
        for (var i = 0; i < dataXValue.length ; i++) {
          let judgeA = Number(dataXValue[i].substring(11,13))
          let judgeB = Number(dataXValue[i].substring(14,15))
          if (judgeB == 0) {
            dataXValue[i] = Number(dataXValue[i].substring(11,13))+'时'
          }else{
            dataXValue[i]=' '
          }
        }
        //处理y轴
        var dataYValue = data.body.map(item => {
          return item.value;
        });
        this.countPeople.huoli = dataYValue[dataYValue.length-1]
        //处理y轴时间区间
          let yValue = Math.max(...dataYValue);
          this.yTableData.huoli = yValue;
          this.yTableData.huoliInterval = Math.ceil(yValue / 4);
        if (hours >= 0 && hours < 5) {
          this.countPeople.huoli = 0
          this.options.xAxis.data = this.X10
        }else if(hours>=5 && hours<10){
          this.options.xAxis.data = this.X10
          this.huoliData = dataYValue
          //处理y轴时间区间
        }else if(hours>=10 && hours<=23){
          this.huoliData = dataYValue        
          this.options.xAxis.data = dataXValue
          }
      });
      this.$http.post("/api/home/leftLiujiu").then(data => {
        // console.log(data.body, "柳鹭数据",88888);
        //处理x轴
        var dataXValue = data.body.map(item=>{
          return this.resolvingDate(item.time)
        })
        //对整点进行赋值修改
         for (var i = 0; i < dataXValue.length ; i++) {
          let judgeA = Number(dataXValue[i].substring(11,13))
          let judgeB = Number(dataXValue[i].substring(14,15))
          if (judgeB == 0) {
            dataXValue[i] = Number(dataXValue[i].substring(11,13))+'时'
          }else{
            dataXValue[i]=' '
          }
        }
        //处理y轴
        var dataYValue = data.body.map(item => {
          return item.value;
        });
        this.countPeople.liujiu = dataYValue[dataYValue.length-1]
        //处理y轴时间区间
          let yValue = Math.max(...dataYValue);
          this.yTableData.liujiu = yValue;
          this.yTableData.liujiuInterval = Math.ceil(yValue / 4);
        if (hours >= 0 && hours < 5) {
          this.countPeople.liujiu = 0
          this.options.xAxis.data = this.X10
        }else if(hours>=5 && hours<10){
          this.options.xAxis.data = this.X10
          this.liujiuData = dataYValue
          //处理y轴时间区间
        }else if(hours>=10 && hours<=23){
          this.liujiuData = dataYValue
          this.options.xAxis.data = dataXValue
        }
      });
      this.$http.post("/api/home/leftBinjiang").then(data => {
        //处理x轴
        var dataXValue = data.body.map(item=>{
          return this.resolvingDate(item.time)
        })
        //对整点进行赋值修改
         for (var i = 0; i < dataXValue.length ; i++) {
          let judgeA = Number(dataXValue[i].substring(11,13))
          let judgeB = Number(dataXValue[i].substring(14,15))
          if (judgeB == 0) {
            dataXValue[i] = Number(dataXValue[i].substring(11,13))+'时'
          }else{
            dataXValue[i]=' '
          }
        }
        //处理y轴
        var dataYValue = data.body.map(item => {
          return item.value;
        });
        this.countPeople.binjiang = dataYValue[dataYValue.length-1]
        //处理y轴时间区间
          let yValue = Math.max(...dataYValue);
          this.yTableData.binjiang = yValue;
          this.yTableData.binjiangInterval = Math.ceil(yValue / 4);
        if (hours >= 0 && hours < 5) {
        this.countPeople.binjiang = 0
          this.options.xAxis.data = this.X10
        }else if(hours>=5 && hours<10){
          this.options.xAxis.data = this.X10
          this.binjiangData = dataYValue
          //处理y轴时间区间
        }else if(hours>=10 && hours<=23){
          this.binjiangData = dataYValue
          this.options.xAxis.data = dataXValue
        }
      });
      this.$http.post("/api/home/leftSenlin").then(data => {
        // console.log(data.body, "森林数据",88888);
        //处理x轴
        var dataXValue = data.body.map(item=>{
          return this.resolvingDate(item.time)
        })
        //对整点进行赋值修改
        for (var i = 0; i < dataXValue.length ; i++) {
          let judgeA = Number(dataXValue[i].substring(11,13))
          let judgeB = Number(dataXValue[i].substring(14,15))
          if (judgeB == 0) {
            dataXValue[i] = Number(dataXValue[i].substring(11,13))+'时'
          }else{
            dataXValue[i]=' '
          }
        }
        //处理y轴
        var dataYValue = data.body.map(item => {
          return item.value;
        });
        this.countPeople.senlin = dataYValue[dataYValue.length-1]
        //处理y轴时间区间
          let yValue = Math.max(...dataYValue);
          this.yTableData.senlin = yValue;
          this.yTableData.senlinInterval = Math.ceil(yValue / 4);
        if (hours >= 0 && hours < 5) {
          this.countPeople.senlin = 0
          this.options.xAxis.data = this.X10
        }else if(hours>=5 && hours<10){
          this.options.xAxis.data = this.X10
          this.senlinData = dataYValue
          //处理y轴时间区间
        }else if(hours>=10 && hours<=23){
          this.senlinData = dataYValue
          this.options.xAxis.data = dataXValue
        }
      });
    },
    drawChartQiji() {
      let qijiChart = echarts.init(this.$refs.qiji);
      this.options.yAxis.max=this.yTableData.qiji
      this.options.yAxis.interval = this.yTableData.qijiInterval
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
       this.options.yAxis.max=this.yTableData.huoli
      this.options.yAxis.interval = this.yTableData.huoliInterval
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
       this.options.yAxis.max=this.yTableData.liujiu
      this.options.yAxis.interval = this.yTableData.liujiuInterval
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
          interval: this.yTableData.binjiangInterval,
          max: this.yTableData.binjiang,
          splitLine: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: "#ffffff"
            },
            fontSize:16,
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
       this.options.yAxis.max=this.yTableData.senlin
      this.options.yAxis.interval = this.yTableData.senlinInterval
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
      this.currentAllPeople = this.countPeople.qiji+this.countPeople.huoli+this.countPeople.liujiu+this.countPeople.binjiang+this.countPeople.senlin
      // console.log(this.currentAllPeople,'当前在园总人数')
      this.$store.state.count = this.currentAllPeople
      // console.log(this.$store.state.count)
    },
    //延时执行测试
    yanTime(){
       setInterval(() => {
        var newDate = new Date();
        var hours = newDate.getHours();
        var minutes = newDate.getMinutes();
        hours = hours < 10 ? "0" + hours : hours;
        // console.log(minutes%10)
        //这里暂时定为10分钟请求一次数据
        if(hours&&minutes%5==1){
          this.showData()
          console.log('请求了一次数据')
        }
      }, 30000);
    },
  }
};
</script>

<style scoped>
.text {
  position: absolute;
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
  left: 0;
  top: -65px;
}
.chart {
  display: inline-block;
  box-sizing: border-box;
}
.mycharts {
  overflow: hidden;
  position: relative;
  width: 1065px;
  margin: 0 auto;
  margin-top: 65px;
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
  top: -1px;
  left: 480px;
  color: #2d6d3f;
}
.iconhuoli {
  top: -1px;
  left: 834px;
}
.iconliujiu {
  top: 250px;
  left: 286px;
}
.iconbinjiang {
  top: 250px;
  left: 635px;
}
.iconsenlin {
  top: 250px;
  left: 988px;
}
.qiji{
  margin-left: 198px;
}
</style>
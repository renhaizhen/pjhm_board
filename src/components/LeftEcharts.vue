<template>
  <div ref="mychart" class="chart" :style="{width:chartWidth,height:chartHeight}">

  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "LeftEcharts",
  data() {
    return {
         chartData = {
        xAxisData:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
        yAxisData:[820,932,901,934,1290,1330,1320]
    }
    };
  },
  created() {
    this.generatorWidthAndHeight();
  },
  methods: {
    //生成图标的宽度和高度
    generatorWidthAndHeight() {
      this.chartWidth = `${document.body.offsetWidth * 0.8}px`;
      this.chartHeight = `${document.body.offsetHeight * 0.6}px`;
    }
  },
  mounted(){
    this.drawChart()
},
drawChart(){
    // let chart = echarts.init((this as any).$refs.mychart as HTMLCanvasElement)
    if(chart == undefined){
        console.log('绘制失败')
        return
    }
    switch(this.chartType){
        case 'line':
            // chart.setOption((this as any).generatorLineOption())
            break
    }
}
};
</script>

<style scoped>
</style>

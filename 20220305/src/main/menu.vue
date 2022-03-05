<template>
  <div class="menu">
      <div id="chanliang" class="chanliang"></div>
      <div id="dllsqxmain"><div id="dllsqx"></div></div>
  </div>
</template>

<script>
import {
  Search,
  Edit,
  Check,
  Message,
  Star,
  Delete,
} from '@element-plus/icons-vue'
export default {
  name: 'menu',
    data() {
        return{
            currentView:'home',
            from:'',
            index:0
        }
  },

    mounted(){
        this.dllsqx()
    },
    methods:{
            dllsqx(){
                // var chartDom = document.getElementById('dllsqx');
                // var myChart = echarts.init(chartDom);
                // var option;
                // option = {
                // title: {
                //     text: 'Waterfall Chart',
                //     subtext: 'Living Expenses in Shenzhen'
                // },
                // tooltip: {
                //     trigger: 'axis',
                //     axisPointer: {
                //     type: 'shadow'
                //     },
                //     formatter: function (params) {
                //     var tar = params[1];
                //     return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
                //     }
                // },
                // grid: {
                //     left: '3%',
                //     right: '4%',
                //     bottom: '3%',
                //     containLabel: true
                // },
                // xAxis: {
                //     type: 'category',
                //     splitLine: { show: false },
                //     data: ['Total', 'Rent', 'Utilities', 'Transportation', 'Meals', 'Other']
                // },
                // yAxis: {
                //     type: 'value'
                // },
                // series: [
                //     {
                //     name: 'Placeholder',
                //     type: 'bar',
                //     stack: 'Total',
                //     itemStyle: {
                //         borderColor: 'transparent',
                //         color: 'transparent'
                //     },
                //     emphasis: {
                //         itemStyle: {
                //         borderColor: 'transparent',
                //         color: 'transparent'
                //         }
                //     },
                //     data: [0, 1700, 1400, 1200, 300, 0]
                //     },
                //     {
                //     name: 'Life Cost',
                //     type: 'bar',
                //     stack: 'Total',
                //     label: {
                //         show: true,
                //         position: 'inside'
                //     },
                //     data: [2900, 1200, 300, 200, 900, 300]
                //     }
                // ]
                // }
                // option && myChart.setOption(option);
            }
    }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
:root {
  --el-color-primary: #409eff;
  --el-color-success: #67c23a;
  --el-color-warning: #e6a23c;
  --el-color-danger: #f56c6c;
  --el-color-error: #f56c6c;
  --el-color-info: #909399;
}
.chanliang{
    position:fixed;
    background-color:#f56c6c;
    z-index:999;
    height:50px;
    width:100px;
    left:700px;
    top:100px;
}
#dllsqx{
    z-index:999;
}
#dllsqxmain{
    z-index:999;
    height:300px;
    width:300px;
    position:fixed !important;
    bottom:0;
}
</style>

<template>
  <div class="model">
      <div class="model">
            <div id="cesiumContainer">              
            </div>
      </div>
      <div class="menu">
            <div id="biaoti">
                <div id="biaoti-child">电解槽可视化系统</div>
            </div>
            <div id="chanliang">
                <div id="chanliang-child">
                    当班产量:100吨
                </div>
            </div>
            <div id="yuanliao">
                <div id="yuanliao-child">原料:1.2吨
                </div>
            </div>
            <div id="chundu">
                <div id="chundu-child">
                纯度:99.97%
                </div>
            </div>
            <div id="dianliu">
                <div id="dianliu-child">
                电流99.5kA
                </div>
            </div>
            <div id="dianya">
                <div id="dianya-child">
                电压5.1V
                </div>
            </div>
            <div id="dianhao">
                <div id="dianhao-child">
                电耗1200kWh/t
                </div>
            </div>
            <div id="zichan">
                <div id="zichan-style-lu"></div>
                <div id="zichan-style-ru"></div>
                <div id="zichan-style-lb"></div>
                <div id="zichan-style-rb"></div>
                <p>资产信息</p>
                    <ul id="zichan-child">
                        <li>A9
                            <ul>
                                <li>槽壳
                                    <ul>
                                        <li style="list-style-type:none">部件2</li>
                                    </ul>
                                </li>
                                <li>阴极
                                    <ul>
                                        <li style="list-style-type:none">碳块</li>
                                        <li style="list-style-type:none">钢棒</li>
                                        <li style="list-style-type:none">母线</li>
                                    </ul>
                                </li>
                                <li>阳极
                                    <ul>
                                        <li style="list-style-type:none">电极</li>
                                        <li style="list-style-type:none">导杆</li>
                                        <li style="list-style-type:none">母线</li>
                                    </ul>
                                </li>
                                <li style="list-style-type:none">底部支承</li>
                                <li style="list-style-type:none">内衬</li>
                                <li style="list-style-type:none">加料室</li>
                                <li style="list-style-type:none">阴极升降机构</li>
                                <li style="list-style-type:none">阳极支承架</li>
                            </ul>
                        </li>
                    </ul>  
            </div>
            <div id="bujianxinxi">
                <div id="bujianxinxi-style-lu"></div>
                <div id="bujianxinxi-style-ru"></div>
                <div id="bujianxinxi-style-lb"></div>
                <div id="bujianxinxi-style-rb"></div>
                <div id="bujianxinxi-child">部件信息</div>
            </div>
            <div id="sanshuiping">
                <div id="sanshuiping-style-lu"></div>
                <div id="sanshuiping-style-ru"></div>
                <div id="sanshuiping-style-lb"></div>
                <div id="sanshuiping-style-rb"></div>
                <p>三水平</p>
                <p>铝液:20cm</p>
                <p>电解质:10cm</p>
                <p>精铝液:25cm</p>
            </div>
            <div id="wendu">
                <div id="wendu-style-lu"></div>
                <div id="wendu-style-ru"></div>
                <div id="wendu-style-lb"></div>
                <div id="wendu-style-rb"></div>
                <p>温度</p>
                <p>精度:500°</p>
                <p>纯铝液:550°</p>
                <p>阳极钢棒:510°</p>
            </div>
            <div id="caozuoxinxi">
                <div id="caozuoxinxi-style-lu"></div>
                <div id="caozuoxinxi-style-ru"></div>
                <div id="caozuoxinxi-style-lb"></div>
                <div id="caozuoxinxi-style-rb"></div>
                <div id="caozuoxinxi-child">操作信息</div>
            </div>
            <div id="weihuxinxi">
                <div id="weihuxinxi-style-lu"></div>
                <div id="weihuxinxi-style-ru"></div>
                <div id="weihuxinxi-style-lb"></div>
                <div id="weihuxinxi-style-rb"></div>
                <div id="weihuxinxi-child">维护信息</div>
            </div>
            <div id="shishi">
                <div id="shishi-style-lu"></div>
                <div id="shishi-style-ru"></div>
                <div id="shishi-style-lb"></div>
                <div id="shishi-style-rb"></div>
                <div id="shishi-child">
                实时状态异常提醒
                </div>
            </div>
            <div id="qiehuanchejian">
                <div id="qiehuanchejian-child">
                切换至车间
                </div>
            </div>
            <div id="zhengchang">
                <div id="zhengchang-child1">
                </div>
                <span id="zhengchang-child2">正常</span>
            </div>
            <div id="baojing">
                <div id="baojing-child1">
                </div>
                <span id="baojing-child2">报警</span>
            </div>
            <div id="shigu">
                <div id="shigu-child1">
                </div>
                <span id="shigu-child2">事故</span>
            </div>
            <div id="tingyong">
                <div id="tingyong-child1">
                </div>
                <span id="tingyong-child2">停用</span>
            </div>
            <!-- <div id="dllsqxmain">
                <div id="dllsqx" style="height:200px;width:300px"></div>
            </div> -->
      </div>
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
  name: 'model',
    data() {
        return{
            currentView:'home',
            from:'',
            index:0
        }
  },

  mounted(){
        var viewer
        var scene
        viewer = new Cesium.Viewer('cesiumContainer', {
            animation: true,
            baseLayerPicker: false,
            timeline: true,
            geocoder: false,
            homeButton: false,
            sceneModePicker: false,
            navigationHelpButton: false,
            globe: false,
            skyAtmosphere: false,
            skyBox: false,
            scene3DOnly:true,
            fullscreenElement: 'cesiumContainer'
        })
        
        scene = viewer.scene;
        scene.backgroundColor = Cesium.Color.grey;//设置场景背景色
        viewer.extend(Cesium.viewerDragDropMixin);
        scene.renderError.addEventListener(function() {
            //If a model fails to load, restart render loop.
            scene.primitives.removeAll();
            viewer.useDefaultRenderLoop = true;
        })
		//$(".cesium-viewer-animationContainer,.cesium-viewer-timelineContainer").hide();//隐藏时钟，时间轴控件
		//loadModelBlob("../model/djc-gltf.gltf");//加载3D模型
        //const viewer=new Cesium.Viewer('map')
        const model = viewer.entities.add({
            name: '456',
            position:Cesium.Cartesian3.fromDegrees(110,40),
            model:{
                uri:'/model/djc-gltf.gltf'
            }
        })
        viewer.flyTo(model)
        //添加动画
        viewer.clock.shouldAnimate = true // default 开启动画自动播放
        viewer.clock.multiplier = 5//动画播放速度
        console.log('载入模型')
        //viewer.entities.removeAll()
        this.dllsqx()
        },
        methods:{
    //         dllsqx(){
    //             var chartDom = document.getElementById('dllsqx');
    //             var myChart = echarts.init(chartDom);
    //             var option;
    //             option = {
    //             title: {
    //                 text: 'Waterfall Chart',
    //                 subtext: 'Living Expenses in Shenzhen'
    //             },
    //             tooltip: {
    //                 trigger: 'axis',
    //                 axisPointer: {
    //                 type: 'shadow'
    //                 },
    //                 formatter: function (params) {
    //                 var tar = params[1];
    //                 return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
    //                 }
    //             },
    //             grid: {
    //                 left: '3%',
    //                 right: '4%',
    //                 bottom: '3%',
    //                 containLabel: true
    //             },
    //             xAxis: {
    //                 type: 'category',
    //                 splitLine: { show: false },
    //                 data: ['Total', 'Rent', 'Utilities', 'Transportation', 'Meals', 'Other']
    //             },
    //             yAxis: {
    //                 type: 'value'
    //             },
    //             series: [
    //                 {
    //                 name: 'Placeholder',
    //                 type: 'bar',
    //                 stack: 'Total',
    //                 itemStyle: {
    //                     borderColor: 'transparent',
    //                     color: 'transparent'
    //                 },
    //                 emphasis: {
    //                     itemStyle: {
    //                     borderColor: 'transparent',
    //                     color: 'transparent'
    //                     }
    //                 },
    //                 data: [0, 1700, 1400, 1200, 300, 0]
    //                 },
    //                 {
    //                 name: 'Life Cost',
    //                 type: 'bar',
    //                 stack: 'Total',
    //                 label: {
    //                     show: true,
    //                     position: 'inside'
    //                 },
    //                 data: [2900, 1200, 300, 200, 900, 300]
    //                 }
    //             ]
    //             }
    //             option && myChart.setOption(option);
    //         }
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
#biaoti{
    display: table;
    position:fixed;
    background-color:rgba(0,0,0,0.1);
    color:#64e3f2;
    font-weight:bolder;
    z-index:999;
    height:70px;
    width:1500px;
    left:10px;
    top:10px;
    font-size:25px;
}
#biaoti-child{
    display: table-cell;
    vertical-align: middle;

}
#chanliang{
    display: table;
    position:fixed;
    background-color:#0c4464;
    color:white;
    z-index:999;
    height:30px;
    width:100px;
    left:400px;
    top:90px;
    font-size:13px;
}
#chanliang-child{
    display: table-cell;
    vertical-align: middle;
}
#yuanliao{
    display:table;
    position:fixed;
    background-color:#0c4464;
    color:white;
    z-index:999;
    height:30px;
    width:100px;
    left:520px;
    top:90px;
    font-size:13px;
}
#yuanliao-child{
    display: table-cell;
    vertical-align: middle;
}
#chundu{
    display: table;
    position:fixed;
    background-color:#0c4464;
    color:white;
    z-index:999;
    height:30px;
    width:100px;
    left:640px;
    top:90px;
    font-size:13px;

}
#chundu-child{
    display: table;
    display: table-cell;
    vertical-align: middle;
}
#dianliu{
    display: table;
    position:fixed;
    background-color:#0c4464;
    color:white;
    z-index:999;
    height:30px;
    width:100px;
    left:760px;
    top:90px;
    font-size:13px;
}
#dianliu-child{
    display: table-cell;
    vertical-align: middle;
}
#dianya{
    display: table;
    position:fixed;
    background-color:#0c4464;
    color:white;
    z-index:999;
    height:30px;
    width:100px;
    left:880px;
    top:90px;
    font-size:13px;
}
#dianya-child{
    display: table-cell;
    vertical-align: middle;
}
#dianhao{
    display: table;
    position:fixed;
    background-color:#0c4464;
    color:white;
    z-index:999;
    height:30px;
    width:100px;
    left:1000px;
    top:90px;
    font-size:13px;
}
#dianhao-child{
    display: table-cell;
    vertical-align: middle;
}
#sanshuiping{
    position:fixed;
    background-color:#0c4464;
    color:white;
    z-index:999;
    height:120px;
    width:120px;
    left:1220px;
    top:90px;
    font-size:13px;
}
#sanshuiping-style-lu{
  z-index:999;
  height:10px;
  width:10px;
  position:fixed;
  left:1220px;
  top:90px;
  border-top: 1px solid #00F6E5;
  border-left: 1px solid #00F6E5;
}
#sanshuiping-style-ru{
  z-index:999;
  height:10px;
  width:10px;
  position:fixed;
  left:1330px;
  top:90px;
  border-top: 1px solid #00F6E5;
  border-right: 1px solid #00F6E5;
}
#sanshuiping-style-lb{
  z-index:999;
  height:10px;
  width:10px;
  position:fixed;
  left:1220px;
  top:200px;
  border-bottom: 1px solid #00F6E5;
  border-left: 1px solid #00F6E5;
}
#sanshuiping-style-rb{
  z-index:999;
  height:10px;
  width:10px;
  position:fixed;
  left:1330px;
  top:200px;
  border-bottom: 1px solid #00F6E5;
  border-right: 1px solid #00F6E5;
}
#wendu{
    position:fixed;
    background-color:#0c4464;
    color:white;
    z-index:999;
    height:120px;
    width:120px;
    left:1370px;
    top:90px;
    font-size:13px;
}
#wendu-style-lu{
  z-index:999;
  height:10px;
  width:10px;
  position:fixed;
  left:1370px;
  top:90px;
  border-top: 1px solid #00F6E5;
  border-left: 1px solid #00F6E5;
}
#wendu-style-ru{
  z-index:999;
  height:10px;
  width:10px;
  position:fixed;
  left:1480px;
  top:90px;
  border-top: 1px solid #00F6E5;
  border-right: 1px solid #00F6E5;
}
#wendu-style-lb{
  z-index:999;
  height:10px;
  width:10px;
  position:fixed;
  left:1370px;
  top:200px;
  border-bottom: 1px solid #00F6E5;
  border-left: 1px solid #00F6E5;
}
#wendu-style-rb{
  z-index:999;
  height:10px;
  width:10px;
  position:fixed;
  left:1480px;
  top:200px;
  border-bottom: 1px solid #00F6E5;
  border-right: 1px solid #00F6E5;
}
#caozuoxinxi{
    display: table;
    position:fixed;
    background-color:#0c4464;
    color:white;
    z-index:999;
    height:150px;
    width:270px;
    left:1220px;
    top:220px;
    font-size:13px;
    text-align:center;
    vertical-align: middle;   
}
#caozuoxinxi-child{
    display: table-cell;
    vertical-align: middle;

}
#caozuoxinxi-style-lu{
  z-index:999;
  height:10px;
  width:10px;
  position:fixed;
  left:1220px;
  top:220px;
  border-top: 1px solid #00F6E5;
  border-left: 1px solid #00F6E5;
}
#caozuoxinxi-style-ru{
  z-index:999;
  height:10px;
  width:10px;
  position:fixed;
  left:1480px;
  top:220px;
  border-top: 1px solid #00F6E5;
  border-right: 1px solid #00F6E5;
}
#caozuoxinxi-style-lb{
  z-index:999;
  height:10px;
  width:10px;
  position:fixed;
  left:1220px;
  top:360px;
  border-bottom: 1px solid #00F6E5;
  border-left: 1px solid #00F6E5;
}
#caozuoxinxi-style-rb{
  z-index:999;
  height:10px;
  width:10px;
  position:fixed;
  left:1480px;
  top:360px;
  border-bottom: 1px solid #00F6E5;
  border-right: 1px solid #00F6E5;
}
#weihuxinxi{
    display: table;
    position:fixed;
    background-color:#0c4464;
    color:white;
    z-index:999;
    height:150px;
    width:270px;
    left:1220px;
    top:380px;
    font-size:13px;  
}
#weihuxinxi-child{
    display: table-cell;
    vertical-align: middle;

}
#weihuxinxi-style-lu{
  z-index:999;
  height:10px;
  width:10px;
  position:fixed;
  left:1220px;
  top:380px;
  border-top: 1px solid #00F6E5;
  border-left: 1px solid #00F6E5;
}
#weihuxinxi-style-ru{
  z-index:999;
  height:10px;
  width:10px;
  position:fixed;
  left:1480px;
  top:380px;
  border-top: 1px solid #00F6E5;
  border-right: 1px solid #00F6E5;
}
#weihuxinxi-style-lb{
  z-index:999;
  height:10px;
  width:10px;
  position:fixed;
  left:1220px;
  top:520px;
  border-bottom: 1px solid #00F6E5;
  border-left: 1px solid #00F6E5;
}
#weihuxinxi-style-rb{
  z-index:999;
  height:10px;
  width:10px;
  position:fixed;
  left:1480px;
  top:520px;
  border-bottom: 1px solid #00F6E5;
  border-right: 1px solid #00F6E5;
}
#shishi{
    display: table;
    position:fixed;
    background-color:#0c4464;
    color:white;
    z-index:999;
    height:50px;
    width:270px;
    left:1220px;
    top:540px;
    font-size:13px;
    
}
#shishi-child{
    display: table-cell;
    vertical-align: middle;

}
#shishi-style-lu{
  z-index:999;
  height:10px;
  width:10px;
  position:fixed;
  left:1220px;
  top:540px;
  border-top: 1px solid #00F6E5;
  border-left: 1px solid #00F6E5;
}
#shishi-style-ru{
  z-index:999;
  height:10px;
  width:10px;
  position:fixed;
  left:1480px;
  top:540px;
  border-top: 1px solid #00F6E5;
  border-right: 1px solid #00F6E5;
}
#shishi-style-lb{
  z-index:999;
  height:10px;
  width:10px;
  position:fixed;
  left:1220px;
  top:580px;
  border-bottom: 1px solid #00F6E5;
  border-left: 1px solid #00F6E5;
}
#shishi-style-rb{
  z-index:999;
  height:10px;
  width:10px;
  position:fixed;
  left:1480px;
  top:580px;
  border-bottom: 1px solid #00F6E5;
  border-right: 1px solid #00F6E5;
}
#qiehuanchejian{
    display: table;
    position:fixed;
    background-color:#0c4464;
    color:white;
    z-index:999;
    height:90px;
    width:90px;
    left:1400px;
    top:610px;
    font-size:13px;
    
}
#qiehuanchejian-child{
    display: table-cell;
    vertical-align: middle;
}
#zichan{
    position:fixed;
    background-color:#0c4464;
    color:white;
    z-index:999;
    height:450px;
    width:180px;
    left:20px;
    top:90px;
    font-size:12px;
}
#zichan-child{
    position:fixed;
    background-color:#0c4464;
    color:white;
    z-index:999;
    height:300px;
    width:150px;
    left:50px;
    top:120px;
    font-size:12px;
    text-align: left;
    margin:0px; padding:0px;
}
#zichan-style-lu{
  z-index:999;
  height:10px;
  width:10px;
  position:fixed;
  left:20px;
  top:90px;
  border-top: 1px solid #00F6E5;
  border-left: 1px solid #00F6E5;
}
#zichan-style-ru{
  z-index:999;
  height:10px;
  width:10px;
  position:fixed;
  left:160px;
  top:90px;
  border-top: 1px solid #00F6E5;
  border-right: 1px solid #00F6E5;
}
#zichan-style-lb{
  z-index:999;
  height:10px;
  width:10px;
  position:fixed;
  left:20px;
  top:430px;
  border-bottom: 1px solid #00F6E5;
  border-left: 1px solid #00F6E5;
}
#zichan-style-rb{
  z-index:999;
  height:10px;
  width:10px;
  position:fixed;
  left:160px;
  top:430px;
  border-bottom: 1px solid #00F6E5;
  border-right: 1px solid #00F6E5;
}
#bujianxinxi{
    display: table;
    position:fixed;
    background-color:#0c4464;
    color:white;
    z-index:999;
    height:150px;
    width:180px;
    left:20px;
    top:550px;
    font-size:13px;
    
}
#bujianxinxi-child{
    display: table-cell;
    vertical-align: middle;

}
#bujianxinxi-style-lu{
  z-index:999;
  height:10px;
  width:10px;
  position:fixed;
  left:20px;
  top:550px;
  border-top: 1px solid #00F6E5;
  border-left: 1px solid #00F6E5;
}
#bujianxinxi-style-ru{
  z-index:999;
  height:10px;
  width:10px;
  position:fixed;
  left:190px;
  top:550px;
  border-top: 1px solid #00F6E5;
  border-right: 1px solid #00F6E5;
}
#bujianxinxi-style-lb{
  z-index:999;
  height:10px;
  width:10px;
  position:fixed;
  left:20px;
  top:690px;
  border-bottom: 1px solid #00F6E5;
  border-left: 1px solid #00F6E5;
}
#bujianxinxi-style-rb{
  z-index:999;
  height:10px;
  width:10px;
  position:fixed;
  left:190px;
  top:690px;
  border-bottom: 1px solid #00F6E5;
  border-right: 1px solid #00F6E5;
}
#zhengchang-child1{
    position:fixed;
    background-color:#94f304;
    color:white;
    z-index:999;
    height:20px;
    width:30px;
    left:880px;
    top:500px;
    font-size:13px;
}
#zhengchang-child2{
    position:fixed;
    color:white;
    z-index:999;
    height:20px;
    width:30px;
    left:915px;
    top:502px;
    font-size:13px;
}
#baojing-child1{
    position:fixed;
    background-color:yellow;
    color:white;
    z-index:999;
    height:20px;
    width:30px;
    left:960px;
    top:500px;
    font-size:13px;
}
#baojing-child2{
    position:fixed;
    color:white;
    z-index:999;
    height:20px;
    width:30px;
    left:995px;
    top:502px;
    font-size:13px;
}
#shigu-child1{
    position:fixed;
    background-color:red;
    color:white;
    z-index:999;
    height:20px;
    width:30px;
    left:1040px;
    top:500px;
    font-size:13px;
}
#shigu-child2{
    position:fixed;
    color:white;
    z-index:999;
    height:20px;
    width:30px;
    left:1075px;
    top:502px;
    font-size:13px;
}
#tingyong-child1{
    position:fixed;
    background-color:white;
    color:white;
    z-index:999;
    height:20px;
    width:30px;
    left:1120px;
    top:500px;
    font-size:13px;
}
#tingyong-child2{
    position:fixed;
    color:white;
    z-index:999;
    height:20px;
    width:30px;
    left:1155px;
    top:502px;
    font-size:13px;
}

/* #dllsqxmain{
    height:200px;
    width:300px;
    position: fixed;
    bottom:0;
    background-color:#fff;
} */
.menu{
  position: fixed;
  z-index:999;
  height:100%;
  width:100%;
}

</style>

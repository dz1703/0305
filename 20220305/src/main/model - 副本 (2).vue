<template>
  <div class="model">
      <div class="model" style="background:#000; color:#FFF">
            <div id="cesiumContainer" style="background:#000; color:#FFF">              
            </div>
      </div>
      <div class="menu">
            <div id="biaoti">
                <div id="biaoti-child">电解槽可视化系统</div>
            </div>
            <div id="dllsqxmain0">
                <div id="dllsqx0" style="height:200px;width:300px"></div>
            </div>
            <div id="dllsqxmain1">
                <div id="dllsqx1" style="height:200px;width:300px"></div>
            </div>
            <div id="dllsqxmain2">
                <div id="dllsqx2" style="height:200px;width:300px"></div>
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
                <!-- <div id="bujianxinxi-style-lu"></div> -->
                <div id="bujianxinxi-child">部件信息</div>
            </div>
            <div id="sanshuiping">
                <p>三水平</p>
                <p>铝液:20cm</p>
                <p>电解质:10cm</p>
                <p>精铝液:25cm</p>
            </div>
            <div id="wendu">
                <p>温度</p>
                <p>精度:500°</p>
                <p>纯铝液:550°</p>
                <p>阳极钢棒:510°</p>
            </div>
            <div id="caozuoxinxi">
                <div id="caozuoxinxi-child">操作信息</div>
            </div>
            <div id="weihuxinxi">
                <div id="weihuxinxi-child">维护信息</div>
            </div>
            <div id="shishi">
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
import cb_json from '../assets/confidence-band'
import bj_json from '../assets/aqi-beijing'
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
            animation: false,
            baseLayerPicker: false,
            timeline: false,
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

        viewer.scene.backgroundColor = Cesium.Color.RED;
        viewer.cesiumWidget.creditContainer.style.display = "none";
        scene = viewer.scene;
        scene.backgroundColor = Cesium.Color.GRAY;//设置场景背景色
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
            dllsqx(){

                // var ROOT_PATH =
                // 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';

                var chartDom0 = document.getElementById('dllsqx0');
                var myChart0 = echarts.init(chartDom0);
                var option0;

                //$.get(ROOT_PATH + '/data/asset/data/aqi-beijing.json', function (data) {
                myChart0.setOption(
                        (option0 = {
                            title: {
                                text: '电流历史曲线',
                                left: 'center'
                            },
                            tooltip: {
                                trigger: 'axis'
                            },
                            grid: {
                                left: '5%',
                                right: '15%',
                                bottom: '10%'
                            },
                            xAxis: {
                                data: bj_json.map(function (item) {
                                return item[0];
                                })
                            },
                            yAxis: {},
                            // toolbox: {
                            //     right: 10,
                            //     feature: {
                            //     dataZoom: {
                            //         yAxisIndex: 'none'
                            //     },
                            //     restore: {},
                            //     saveAsImage: {}
                            //     }
                            // },
                            dataZoom: [
                                {
                                startValue: '2014-06-01'
                                },
                                {
                                type: 'inside'
                                }
                            ],
                            visualMap: {
                                top: 50,
                                right: 10,
                                pieces: [
                                {
                                    gt: 0,
                                    lte: 50,
                                    color: '#93CE07'
                                },
                                {
                                    gt: 50,
                                    lte: 100,
                                    color: '#FBDB0F'
                                },
                                {
                                    gt: 100,
                                    lte: 150,
                                    color: '#FC7D02'
                                },
                                {
                                    gt: 150,
                                    lte: 200,
                                    color: '#FD0100'
                                },
                                {
                                    gt: 200,
                                    lte: 300,
                                    color: '#AA069F'
                                },
                                {
                                    gt: 300,
                                    color: '#AC3B2A'
                                }
                                ],
                                outOfRange: {
                                color: '#999'
                                }
                            },
                            series: {
                                name: 'Beijing AQI',
                                type: 'line',
                                data: bj_json.map(function (item) {
                                return item[1];
                                }),
                                // markLine: {
                                // silent: true,
                                // lineStyle: {
                                //     color: '#333'
                                // },
                                // data: [
                                //     {
                                //     yAxis: 50
                                //     },
                                //     {
                                //     yAxis: 100
                                //     },
                                //     {
                                //     yAxis: 150
                                //     },
                                //     {
                                //     yAxis: 200
                                //     },
                                //     {
                                //     yAxis: 300
                                //     }
                                // ]
                                // }
                            }
                        })
                    );
                //});

                option0 && myChart0.setOption(option0);




                // var chartDom1 = document.getElementById('dllsqx1');
                // var myChart1 = echarts.init(chartDom1);
                // var option1;

                // let base = +new Date(1968, 9, 3);
                // let oneDay = 24 * 3600 * 1000;
                // let date1 = [];
                // let data1 = [Math.random() * 300];
                // for (let i = 1; i < 20000; i++) {
                // var now = new Date((base += oneDay));
                // date1.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
                // data1.push(Math.round((Math.random() - 0.5) * 20 + data1[i - 1]));
                // }
                // option1 = {
                //     tooltip: {
                //         trigger: 'axis',
                //         position: function (pt) {
                //         return [pt[0], '10%'];
                //         }
                //     },
                //     title: {
                //         left: 'center',
                //         text: '电压历史曲线'
                //     },
                //     toolbox: {
                //         feature: {
                //         dataZoom: {
                //             yAxisIndex: 'none'
                //         },
                //         restore: {},
                //         saveAsImage: {}
                //         }
                //     },
                //     xAxis: {
                //         type: 'category',
                //         boundaryGap: false,
                //         data: date1
                //     },
                //     yAxis: {
                //         type: 'value',
                //         boundaryGap: [0, '100%']
                //     },
                //     dataZoom: [
                //         {
                //         type: 'inside',
                //         start: 0,
                //         end: 10
                //         },
                //         {
                //         start: 0,
                //         end: 10
                //         }
                //     ],
                //     series: [
                //         {
                //         name: 'Fake Data',
                //         type: 'line',
                //         symbol: 'none',
                //         sampling: 'lttb',
                //         itemStyle: {
                //             color: 'rgb(255, 70, 131)'
                //         },
                //         areaStyle: {
                //             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                //             {
                //                 offset: 0,
                //                 color: 'rgb(255, 158, 68)'
                //             },
                //             {
                //                 offset: 1,
                //                 color: 'rgb(255, 70, 131)'
                //             }
                //             ])
                //         },
                //         data: data1
                //         }
                //     ]
                // };

                // option1 && myChart1.setOption(option1);


                //var ROOT_PATH ='https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';

                var chartDom1 = document.getElementById('dllsqx1');
                var myChart1 = echarts.init(chartDom1);
                var option1;

                // myChart.showLoading();
                // $.get(ROOT_PATH + '/data/asset/data/confidence-band.json', function (data) {

                myChart1.hideLoading();
                var base = -cb_json.reduce(function (min, val) {
                    return Math.floor(Math.min(min, val.l));
                }, Infinity);
                myChart1.setOption(
                    (option1 = {
                        title: {
                            text: '电压历史曲线',
                            subtext: 'Example in MetricsGraphics.js',
                            left: 'center'
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                            type: 'cross',
                            animation: false,
                            label: {
                                backgroundColor: '#ccc',
                                borderColor: '#aaa',
                                borderWidth: 1,
                                shadowBlur: 0,
                                shadowOffsetX: 0,
                                shadowOffsetY: 0,
                                color: '#222'
                            }
                            },
                            formatter: function (params) {
                            return (
                                params[2].name +
                                '<br />' +
                                ((params[2].value - base) * 100).toFixed(1) +
                                '%'
                            );
                            }
                        },
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            data: cb_json.map(function (item) {
                            return item.date;
                            }),
                            axisLabel: {
                            formatter: function (value, idx) {
                                var date = new Date(value);
                                return idx === 0
                                ? value
                                : [date.getMonth() + 1, date.getDate()].join('-');
                            }
                            },
                            boundaryGap: false
                        },
                        yAxis: {
                            axisLabel: {
                            formatter: function (val) {
                                return (val - base) * 100 + '%';
                            }
                            },
                            axisPointer: {
                            label: {
                                formatter: function (params) {
                                return ((params.value - base) * 100).toFixed(1) + '%';
                                }
                            }
                            },
                            splitNumber: 3
                        },
                        series: [
                            {
                            name: 'L',
                            type: 'line',
                            data: cb_json.map(function (item) {
                                return item.l + base;
                            }),
                            lineStyle: {
                                opacity: 0
                            },
                            stack: 'confidence-band',
                            symbol: 'none'
                            },
                            {
                            name: 'U',
                            type: 'line',
                            data: cb_json.map(function (item) {
                                return item.u - item.l;
                            }),
                            lineStyle: {
                                opacity: 0
                            },
                            areaStyle: {
                                color: '#ccc'
                            },
                            stack: 'confidence-band',
                            symbol: 'none'
                            },
                            {
                            type: 'line',
                            data: cb_json.map(function (item) {
                                return item.value + base;
                            }),
                            itemStyle: {
                                color: '#333'
                            },
                            showSymbol: false
                            }
                        ]
                        })
                    );
                //});

                option1 && myChart1.setOption(option1);




                var chartDom2 = document.getElementById('dllsqx2');
                var myChart2 = echarts.init(chartDom2);
                var option2;

                //$.get(ROOT_PATH + '/data/asset/data/aqi-beijing.json', function (data) {
                myChart2.setOption(
                        (option2 = {
                            title: {
                                text: '电耗历史曲线',
                                left: 'center'
                            },
                            tooltip: {
                                trigger: 'axis'
                            },
                            grid: {
                                left: '5%',
                                right: '15%',
                                bottom: '10%'
                            },
                            xAxis: {
                                data: bj_json.map(function (item) {
                                return item[0];
                                })
                            },
                            yAxis: {},
                            // toolbox: {
                            //     right: 10,
                            //     feature: {
                            //     dataZoom: {
                            //         yAxisIndex: 'none'
                            //     },
                            //     restore: {},
                            //     saveAsImage: {}
                            //     }
                            // },
                            dataZoom: [
                                {
                                startValue: '2014-06-01'
                                },
                                {
                                type: 'inside'
                                }
                            ],
                            visualMap: {
                                top: 50,
                                right: 10,
                                pieces: [
                                {
                                    gt: 0,
                                    lte: 50,
                                    color: '#93CE07'
                                },
                                {
                                    gt: 50,
                                    lte: 100,
                                    color: '#FBDB0F'
                                },
                                {
                                    gt: 100,
                                    lte: 150,
                                    color: '#FC7D02'
                                },
                                {
                                    gt: 150,
                                    lte: 200,
                                    color: '#FD0100'
                                },
                                {
                                    gt: 200,
                                    lte: 300,
                                    color: '#AA069F'
                                },
                                {
                                    gt: 300,
                                    color: '#AC3B2A'
                                }
                                ],
                                outOfRange: {
                                color: '#999'
                                }
                            },
                            series: {
                                name: 'Beijing AQI',
                                type: 'line',
                                data: bj_json.map(function (item) {
                                return item[1];
                                }),
                                // markLine: {
                                // silent: true,
                                // lineStyle: {
                                //     color: '#333'
                                // },
                                // data: [
                                //     {
                                //     yAxis: 50
                                //     },
                                //     {
                                //     yAxis: 100
                                //     },
                                //     {
                                //     yAxis: 150
                                //     },
                                //     {
                                //     yAxis: 200
                                //     },
                                //     {
                                //     yAxis: 300
                                //     }
                                // ]
                                // }
                            }
                        })
                    );
                //});

                option2 && myChart2.setOption(option2);


            }


            
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#dllsqxmain0{
    height:200px;
    width:300px;
    left:220px;
    position: fixed;
    top:550px;
    background-color:rgb(129, 126, 126);
}
#dllsqxmain1{
    height:200px;
    width:300px;
    left:530px;
    position: fixed;
    top:550px;
    background-color:rgb(129, 126, 126);
}
#dllsqxmain2{
    height:200px;
    width:300px;
    left:850px;
    position: fixed;
    top:550px;
    background-color:rgb(129, 126, 126);
}


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
    left:100px;
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
/* #bujianxinxi-style-lu{
  background-image:url("E:/ceisum-1/public/tab-bg-lu.png");
  background-repeat: no-repeat;
  z-index:999;
  height:24px;
  width:24px;
  position:fixed;
  left:20px;
  top:550px;
} */
/* .main-box {
    height: 24px;
    width: 24px;
    background-image: url("/ceisum-1/public/tab-bg-lu"),
      url("/ceisum-1/public/tab-bg-lu"),
      url("../../assets/bg_images/HFY-Angle-4.png"),
      url("../../assets/bg_images/HFY-Angle-3.png");
    background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
    background-position: top left, top right, bottom left, bottom right;
    z-index: 1;
    padding: 2px 2px 3px 2px; //设置padding给div往里挤
} */
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

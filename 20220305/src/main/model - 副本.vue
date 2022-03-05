<template>
  <div class="model">
      <div class="model">
            <div id="cesiumContainer">              
            </div>
      </div>
      <div class="menu">
            <div id="chanliang" class="chanliang">
                <p>当班产量：200</p>
            </div>
            <div id="dllsqxmain0">
                <div id="dllsqx0" style="height:200px;width:300px;top:100px"></div>
            </div>
            <div id="dllsqxmain1">
                <div id="dllsqx1" style="height:200px;width:300px;top:100px"></div>
            </div>
            <div id="dllsqxmain2">
                <div id="dllsqx2" style="height:200px;width:300px;top:100px"></div>
            </div>
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
        // var viewer
        // var scene
        // viewer = new Cesium.Viewer('cesiumContainer', {
        //     animation: true,
        //     baseLayerPicker: false,
        //     timeline: true,
        //     geocoder: false,
        //     homeButton: false,
        //     sceneModePicker: false,
        //     navigationHelpButton: false,
        //     globe: false,
        //     skyAtmosphere: false,
        //     skyBox: false,
        //     scene3DOnly:true,
        //     fullscreenElement: 'cesiumContainer'
        // })
        
        // scene = viewer.scene;
        // scene.backgroundColor = Cesium.Color.GRAY;//设置场景背景色
        // viewer.extend(Cesium.viewerDragDropMixin);
        // scene.renderError.addEventListener(function() {
        //     //If a model fails to load, restart render loop.
        //     scene.primitives.removeAll();
        //     viewer.useDefaultRenderLoop = true;
        // })
		// //$(".cesium-viewer-animationContainer,.cesium-viewer-timelineContainer").hide();//隐藏时钟，时间轴控件
		// //loadModelBlob("../model/djc-gltf.gltf");//加载3D模型
        // //const viewer=new Cesium.Viewer('map')
        // const model = viewer.entities.add({
        //     name: '456',
        //     position:Cesium.Cartesian3.fromDegrees(110,40),
        //     model:{
        //         uri:'/model/djc-gltf.gltf'
        //     }
        // })
        // viewer.flyTo(model)
        // //添加动画
        // viewer.clock.shouldAnimate = true // default 开启动画自动播放
        // viewer.clock.multiplier = 5//动画播放速度
        // console.log('载入模型')
        // //viewer.entities.removeAll()
        this.dllsqx()
        },
        methods:{
            dllsqx(){
                
                // var chartDom0 = document.getElementById('dllsqx0');
                // var myChart0 = echarts.init(chartDom0);
                // var option0;

                // const dataCount = 5e5;
                // const data = generateData(dataCount);
                // option0 = {
                //     title: {
                //         //text: echarts.format.addCommas(dataCount) + ' Data',
                //         text:'电流历史曲线',
                //         left: 50
                //     },
                //     toolbox: {
                //         feature: {
                //         dataZoom: {
                //             yAxisIndex: false
                //         },
                //         saveAsImage: {
                //             pixelRatio: 2
                //         }
                //         }
                //     },
                //     tooltip: {
                //         trigger: 'axis',
                //         axisPointer: {
                //         type: 'shadow'
                //         }
                //     },
                //     grid: {
                //         bottom: 90
                //     },
                //     dataZoom: [
                //         {
                //         type: 'inside'
                //         },
                //         {
                //         type: 'slider'
                //         }
                //     ],
                //     xAxis: {
                //         data: data.categoryData,
                //         silent: false,
                //         splitLine: {
                //         show: false
                //         },
                //         splitArea: {
                //         show: false
                //         }
                //     },
                //     yAxis: {
                //         splitArea: {
                //         show: false
                //         }
                //     },
                //     series: [
                //         {
                //         type: 'bar',
                //         data: data.valueData,
                //         // Set `large` for large data amount
                //         large: true
                //         }
                //     ]
                //     };
                //     function generateData(count) {
                //     let baseValue = Math.random() * 1000;
                //     let time = +new Date(2011, 0, 1);
                //     let smallBaseValue;
                //     function next(idx) {
                //         smallBaseValue =
                //         idx % 30 === 0
                //             ? Math.random() * 700
                //             : smallBaseValue + Math.random() * 500 - 250;
                //         baseValue += Math.random() * 20 - 10;
                //         return Math.max(0, Math.round(baseValue + smallBaseValue) + 3000);
                //     }
                //     const categoryData = [];
                //     const valueData = [];
                //     for (let i = 0; i < count; i++) {
                //         categoryData.push(
                //         echarts.format.formatTime('yyyy-MM-dd\nhh:mm:ss', time, false)
                //         );
                //         valueData.push(next(i).toFixed(2));
                //         time += 1000;
                //     }
                //     return {
                //         categoryData: categoryData,
                //         valueData: valueData
                //     };
                // }

                // option0 && myChart0.setOption(option0);


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
#dllsqxmain0{
    height:300px;
    width:400px;
    left:400px;
    position: fixed;
    top:630px;
    background-color:#fff;
}
#dllsqxmain1{
    height:300px;
    width:400px;
    left:800px;
    position: fixed;
    top:630px;
    background-color:#fff;
}
#dllsqxmain2{
    height:300px;
    width:400px;
    left:1200px;
    position: fixed;
    top:630px;
    background-color:#fff;
}
.menu{
  position: fixed;
  z-index:999;
  height:100%;
  width:100%;
}
.chanliang p{
    font-size:12px;
    color:#fff;
}
</style>

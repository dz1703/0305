<template>
  <div class="model">
      <div class="model">
            <div id="container">
                </div>
      </div>
      <div class="menu">
            <!-- <div id="biaoti">
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
            </div> -->
      </div>
  </div>
</template>



<script>
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

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
        this.initThree()
        },
        methods:{
            initThree(){
            const scene = new THREE.Scene()
            scene.background = new THREE.Color('#eee')
            scene.fog = new THREE.Fog('#eee', 20, 100)
      
            const canvas = document.querySelector('#three')
            const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
            renderer.shadowMap.enabled = true
      
            const camera = new THREE.PerspectiveCamera(
              50,
              window.innerWidth / window.innerHeight,
              0.1,
              1000
            )
            camera.position.z = 10
      
            const gltfLoader = new GLTFLoader()
            gltfLoader.load('D:/20220125_version1.1.0/public/model/CeisumDrone.gltf', (gltf) => {
              let model = gltf.scene
              //遍历模型每部分
              model.traverse((o) => {
                //将图片作为纹理加载
                let explosionTexture = new THREE.TextureLoader().load(
                  '/seraphine/textures/Mat_cwfyfr1_userboy17.bmp_diffuse.png'
                )
                //调整纹理图的方向
                explosionTexture.flipY = false
                //将纹理图生成基础网格材质(MeshBasicMaterial)
                const material = new THREE.MeshBasicMaterial({
                  map: explosionTexture,
                })
                //给模型每部分上材质
                o.material = material
                if (o.isMesh) {
                  o.castShadow = true
                  o.receiveShadow = true
                }
              })
              scene.add(model)
            })
      
            const hemLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6)
            hemLight.position.set(0, 48, 0)
            scene.add(hemLight)
      
            const dirLight = new THREE.DirectionalLight(0xffffff, 0.6)
            //光源等位置
            dirLight.position.set(-10, 8, -5)
            //可以产生阴影
            dirLight.castShadow = true
            dirLight.shadow.mapSize = new THREE.Vector2(1024, 1024)
            scene.add(dirLight)
      
            let floorGeometry = new THREE.PlaneGeometry(8000, 8000)
            let floorMaterial = new THREE.MeshPhongMaterial({
              color: 0x857ebb,
              shininess: 0,
            })
      
            let floor = new THREE.Mesh(floorGeometry, floorMaterial)
            floor.rotation.x = -0.5 * Math.PI
            floor.receiveShadow = true
            floor.position.y = -0.001
            scene.add(floor)
      
            const controls = new OrbitControls(camera, renderer.domElement)
            controls.enableDamping = true
      
            function animate() {
              controls.update()
              renderer.render(scene, camera)
              requestAnimationFrame(animate)
      
              if (resizeRendererToDisplaySize(renderer)) {
                const canvas = renderer.domElement
                camera.aspect = canvas.clientWidth / canvas.clientHeight
                camera.updateProjectionMatrix()
              }
            }
            animate()
      
            function resizeRendererToDisplaySize(renderer) {
              const canvas = renderer.domElement
              var width = window.innerWidth
              var height = window.innerHeight
              var canvasPixelWidth = canvas.width / window.devicePixelRatio
              var canvasPixelHeight = canvas.height / window.devicePixelRatio
      
              const needResize =
                canvasPixelWidth !== width || canvasPixelHeight !== height
              if (needResize) {
                renderer.setSize(width, height, false)
              }
              return needResize
            }   
                // var chartDom0 = document.getElementById('dllsqx0');
                // var myChart0 = echarts.init(chartDom0);
                // var option0;
                // myChart0.setOption(
                //         (option0 = {
                //             title: {
                //                 text: '电流历史曲线',
                //                 left: 'center'
                //             },
                //             tooltip: {
                //                 trigger: 'axis'
                //             },
                //             grid: {
                //                 left: '5%',
                //                 right: '15%',
                //                 bottom: '10%'
                //             },
                //             xAxis: {
                //                 data: bj_json.map(function (item) {
                //                 return item[0];
                //                 })
                //             },
                //             yAxis: {},
                //             dataZoom: [
                //                 {
                //                 startValue: '2014-06-01'
                //                 },
                //                 {
                //                 type: 'inside'
                //                 }
                //             ],
                //             visualMap: {
                //                 top: 50,
                //                 right: 10,
                //                 pieces: [
                //                 {
                //                     gt: 0,
                //                     lte: 50,
                //                     color: '#93CE07'
                //                 },
                //                 {
                //                     gt: 50,
                //                     lte: 100,
                //                     color: '#FBDB0F'
                //                 },
                //                 {
                //                     gt: 100,
                //                     lte: 150,
                //                     color: '#FC7D02'
                //                 },
                //                 {
                //                     gt: 150,
                //                     lte: 200,
                //                     color: '#FD0100'
                //                 },
                //                 {
                //                     gt: 200,
                //                     lte: 300,
                //                     color: '#AA069F'
                //                 },
                //                 {
                //                     gt: 300,
                //                     color: '#AC3B2A'
                //                 }
                //                 ],
                //                 outOfRange: {
                //                 color: '#999'
                //                 }
                //             },
                //             series: {
                //                 name: 'Beijing AQI',
                //                 type: 'line',
                //                 data: bj_json.map(function (item) {
                //                 return item[1];
                //                 }),
                //             }
                //         })
                //     );
                // //});

                // option0 && myChart0.setOption(option0);





                // var chartDom1 = document.getElementById('dllsqx1');
                // var myChart1 = echarts.init(chartDom1);
                // var option1;

                // // myChart.showLoading();
                // // $.get(ROOT_PATH + '/data/asset/data/confidence-band.json', function (data) {

                // myChart1.hideLoading();
                // var base = -cb_json.reduce(function (min, val) {
                //     return Math.floor(Math.min(min, val.l));
                // }, Infinity);
                // myChart1.setOption(
                //     (option1 = {
                //         title: {
                //             text: '电压历史曲线',
                //             subtext: 'Example in MetricsGraphics.js',
                //             left: 'center'
                //         },
                //         tooltip: {
                //             trigger: 'axis',
                //             axisPointer: {
                //             type: 'cross',
                //             animation: false,
                //             label: {
                //                 backgroundColor: '#ccc',
                //                 borderColor: '#aaa',
                //                 borderWidth: 1,
                //                 shadowBlur: 0,
                //                 shadowOffsetX: 0,
                //                 shadowOffsetY: 0,
                //                 color: '#222'
                //             }
                //             },
                //             formatter: function (params) {
                //             return (
                //                 params[2].name +
                //                 '<br />' +
                //                 ((params[2].value - base) * 100).toFixed(1) +
                //                 '%'
                //             );
                //             }
                //         },
                //         grid: {
                //             left: '3%',
                //             right: '4%',
                //             bottom: '3%',
                //             containLabel: true
                //         },
                //         xAxis: {
                //             type: 'category',
                //             data: cb_json.map(function (item) {
                //             return item.date;
                //             }),
                //             axisLabel: {
                //             formatter: function (value, idx) {
                //                 var date = new Date(value);
                //                 return idx === 0
                //                 ? value
                //                 : [date.getMonth() + 1, date.getDate()].join('-');
                //             }
                //             },
                //             boundaryGap: false
                //         },
                //         yAxis: {
                //             axisLabel: {
                //             formatter: function (val) {
                //                 return (val - base) * 100 + '%';
                //             }
                //             },
                //             axisPointer: {
                //             label: {
                //                 formatter: function (params) {
                //                 return ((params.value - base) * 100).toFixed(1) + '%';
                //                 }
                //             }
                //             },
                //             splitNumber: 3
                //         },
                //         series: [
                //             {
                //             name: 'L',
                //             type: 'line',
                //             data: cb_json.map(function (item) {
                //                 return item.l + base;
                //             }),
                //             lineStyle: {
                //                 opacity: 0
                //             },
                //             stack: 'confidence-band',
                //             symbol: 'none'
                //             },
                //             {
                //             name: 'U',
                //             type: 'line',
                //             data: cb_json.map(function (item) {
                //                 return item.u - item.l;
                //             }),
                //             lineStyle: {
                //                 opacity: 0
                //             },
                //             areaStyle: {
                //                 color: '#ccc'
                //             },
                //             stack: 'confidence-band',
                //             symbol: 'none'
                //             },
                //             {
                //             type: 'line',
                //             data: cb_json.map(function (item) {
                //                 return item.value + base;
                //             }),
                //             itemStyle: {
                //                 color: '#333'
                //             },
                //             showSymbol: false
                //             }
                //         ]
                //         })
                //     );
                // //});

                // option1 && myChart1.setOption(option1);




                // var chartDom2 = document.getElementById('dllsqx2');
                // var myChart2 = echarts.init(chartDom2);
                // var option2;

                // //$.get(ROOT_PATH + '/data/asset/data/aqi-beijing.json', function (data) {
                // myChart2.setOption(
                //         (option2 = {
                //             title: {
                //                 text: '电耗历史曲线',
                //                 left: 'center'
                //             },
                //             tooltip: {
                //                 trigger: 'axis'
                //             },
                //             grid: {
                //                 left: '5%',
                //                 right: '15%',
                //                 bottom: '10%'
                //             },
                //             xAxis: {
                //                 data: bj_json.map(function (item) {
                //                 return item[0];
                //                 })
                //             },
                //             yAxis: {},
                //             // toolbox: {
                //             //     right: 10,
                //             //     feature: {
                //             //     dataZoom: {
                //             //         yAxisIndex: 'none'
                //             //     },
                //             //     restore: {},
                //             //     saveAsImage: {}
                //             //     }
                //             // },
                //             dataZoom: [
                //                 {
                //                 startValue: '2014-06-01'
                //                 },
                //                 {
                //                 type: 'inside'
                //                 }
                //             ],
                //             visualMap: {
                //                 top: 50,
                //                 right: 10,
                //                 pieces: [
                //                 {
                //                     gt: 0,
                //                     lte: 50,
                //                     color: '#93CE07'
                //                 },
                //                 {
                //                     gt: 50,
                //                     lte: 100,
                //                     color: '#FBDB0F'
                //                 },
                //                 {
                //                     gt: 100,
                //                     lte: 150,
                //                     color: '#FC7D02'
                //                 },
                //                 {
                //                     gt: 150,
                //                     lte: 200,
                //                     color: '#FD0100'
                //                 },
                //                 {
                //                     gt: 200,
                //                     lte: 300,
                //                     color: '#AA069F'
                //                 },
                //                 {
                //                     gt: 300,
                //                     color: '#AC3B2A'
                //                 }
                //                 ],
                //                 outOfRange: {
                //                 color: '#999'
                //                 }
                //             },
                //             series: {
                //                 name: 'Beijing AQI',
                //                 type: 'line',
                //                 data: bj_json.map(function (item) {
                //                 return item[1];
                //                 }),
                //             }
                //         })
                //     );
                // //});

                // option2 && myChart2.setOption(option2);

            }        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* #dllsqxmain0{
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
#three {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
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
  left:190px;
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
  top:530px;
  border-bottom: 1px solid #00F6E5;
  border-left: 1px solid #00F6E5;
}
#zichan-style-rb{
  z-index:999;
  height:10px;
  width:10px;
  position:fixed;
  left:190px;
  top:530px;
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
} */

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


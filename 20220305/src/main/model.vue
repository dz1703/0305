<template>
  <div class="model">	
      <!-- <canvas id="three"></canvas> -->
      <div id="three"></div>
      <!-- <div class="model">
        <div id="three"></div>
      </div> -->
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
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass'
import { toRaw } from '@vue/reactivity'


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
let scene = "";
export default {
  name: 'model',
    data() {
        return{
            camera: null,
            scene: null,
            renderer: null,
            mush: null,
            loader: null,
            mixer: null,
            clock: new THREE.Clock(),
            controls: null,
            currentView:'home',
            from:'',
            index:0,
            composer: null,
            outlinePass: null,
            renderPass: null,
            selectObjects: [],
            //intersects:[]
        }
  },
  mounted(){
        this.initThree();
        this.initMenu();

        this.highLight();

        //this.addEventListener('click',this.onMouseclick,false);
        window.addEventListener('click',this.onMouseclick,false);
        //this.container.addEventListener('click', this.onMouseClick, false);
        },
        methods:{
            onMouseclick(event){

                console.log("enter in the onMouse----------------------------------------")

                // //获取raycaster和所有模型相交的数组，其中的元素按照距离排序，越近的越靠前
                // let intersects = getIntersects(event);





                //声明 rayCaster 和 mouse 变量
                let rayCaster = new THREE.Raycaster();
                let mouse = new THREE.Vector2();
                var box = document.getElementById('three');
                //通过鼠标点击位置，计算出raycaster所需点的位置，以屏幕为中心点，范围-1到1
                mouse.x = ((event.clientX - box.getBoundingClientRect().left) / box.offsetWidth) * 2 - 1;
                mouse.y = -((event.clientY - box.getBoundingClientRect().top) / box.offsetHeight) * 2 + 1; //这里为什么是-号，没有就无法点中

                //通过鼠标点击的位置(二维坐标)和当前相机的矩阵计算出射线位置
                rayCaster.setFromCamera(mouse, this.camera);

                //获取与射线相交的对象数组， 其中的元素按照距离排序，越近的越靠前。
                //+true，是对其后代进行查找，这个在这里必须加，因为模型是由很多部分组成的，后代非常多。
                intersects = rayCaster.intersectObjects(scene.children, true);
                let intersects = rayCaster.intersectObjects(scene.children, true);




                console.log("intersects is ");
                console.log(intersects);
                console.log("intersects[0] is ");
                console.log(intersects[0]);
                console.log("intersects[0].object is");
                console.log(intersects[0].object);



                //获取选中最近的Mesh对象
                //instance坐标是对象，右边是类，判断对象是不是属于这个类的
                if (intersects.length !== 0 && intersects[0].object.type === 'Mesh') {
                    //this.selectObjects = intersects[0].object;
                    
                    this.selectObjects = intersects
                    
                    //changeMaterial(selectObject)
                } else {
                    console.log('未选中 Mesh!');
                }
                this.highLight();
            },
            // getIntersects(event){
            //     event.preventDefault();// 阻止默认的点击事件执行, https://developer.mozilla.org/zh-CN/docs/Web/API/Event/preventDefault
            //     //console.log("event.clientX:" + event.clientX);
            //     //console.log("event.clientY:" + event.clientY);

            //     //声明 rayCaster 和 mouse 变量
            //     let rayCaster = new THREE.Raycaster();
            //     let mouse = new THREE.Vector2();

            //     //通过鼠标点击位置，计算出raycaster所需点的位置，以屏幕为中心点，范围-1到1
            //     mouse.x = ((event.clientX - canvas.getBoundingClientRect().left) / canvas.offsetWidth) * 2 - 1;
            //     mouse.y = -((event.clientY - canvas.getBoundingClientRect().top) / canvas.offsetHeight) * 2 + 1; //这里为什么是-号，没有就无法点中

            //     //通过鼠标点击的位置(二维坐标)和当前相机的矩阵计算出射线位置
            //     rayCaster.setFromCamera(mouse, camera);

            //     //获取与射线相交的对象数组， 其中的元素按照距离排序，越近的越靠前。
            //     //+true，是对其后代进行查找，这个在这里必须加，因为模型是由很多部分组成的，后代非常多。
            //     let intersects = rayCaster.intersectObjects(group.children, true);

            //     //返回选中的对象
            //     return intersects;
            // },
          initThree() {
              let self = this;

              let container = document.getElementById("three");
              this.renderer = new THREE.WebGLRenderer({ antialias: true });
              this.renderer.setSize(container.clientWidth, container.clientHeight);
              container.appendChild(this.renderer.domElement);

              scene = new THREE.Scene();
              scene.background = new THREE.Color("#FFFFFF");
              /**
               * 相机设置
               */
              var width = window.innerWidth; //窗口宽度
              var height = window.innerHeight; //窗口高度
              var k = width / height; //窗口宽高比
              var s = 150; //三维场景显示范围控制系数，系数越大，显示的范围越大
              // 设置相机
              this.camera = new THREE.PerspectiveCamera(
                70,
                container.clientWidth / container.clientHeight,
                0.01,
                1000000
              );
              this.camera.position.z = 2;

              /*
                添加光源
              */
              //环境光
              var ambient = new THREE.AmbientLight(0xffffff);
              scene.add(ambient);
              //点光源
              var point = new THREE.PointLight(0xffffff);
              point.position.set(400, 200, 300); //点光源位置
              scene.add(point); //点光源添加到场景中

              //
              this.controls = new OrbitControls(this.camera, this.renderer.domElement);

              // 加载模型
              const loader = new GLTFLoader().setPath("../model/");
              let dracoLoader = new DRACOLoader();
              loader.setDRACOLoader(dracoLoader);
              dracoLoader.setDecoderPath("../libs/draco/");
              loader.load("djccc.gltf", (gltf) => {
                let object = gltf.scene;

                console.log(object);

                // let geometry = new THREE.BoxGeometry(1, 1, 1);
                // let material = new THREE.MeshBasicMaterial({ color: "#ff0000" });
                // let mesh = new THREE.Mesh(geometry, material);
                // scene.add(mesh);

                let size = .006;
                object.scale.set(size, size, size);
                scene.add(object);

                // var mesh = gltf.scene.children[0];
                // mesh.scale.set(10, 10, 10);
                // self.scene.add(mesh); // 将模型引入three
                // console.log(gltf, "gltf");

                // // 调用动画
                // self.mixer = new THREE.AnimationMixer(mesh);
                // var action = self.mixer.clipAction(gltf.animations[0]);
                // action.stop().setDuration(4).play();

                // container.addEventListener('click', this.onMouseClick, false);
                // console.log("click in the init")
                this.render();
                
              });
              // scene.add(loader);
            },
            
            highLight(){
                
                console.log("enter hignlight!")

                let composer, renderPass, outlinePass, effectFXAA
                //let color = 'yellow'

                //this.selectObjects = this.intersects
                
                //let config = new THREE.WebGLRenderer({ antialias: true });
                //config.setSize(container.clientWidth, container.clientHeight);

                  // 创建一个EffectComposer（效果组合器）对象，然后在该对象上添加后期处理通道。
                composer = new EffectComposer(this.renderer)
                //console.log("enter hignlight!--------")
                console.log("selectObject is " )
                console.log(this.selectObjects)

                var list = toRaw(this.selectObjects)
                console.log("list is")
                console.log(list)

                  // 新建一个场景通道  为了覆盖到原理来的场景上
                renderPass = new RenderPass(this.scene, this.camera)
                composer.addPass(renderPass)

                  // 物体边缘发光通道
                outlinePass = new OutlinePass(new THREE.Vector2(window.innerWidth, window.innerHeight), this.scene, this.camera, this.list)
                console.log("outLinePass is ")
                console.log(outlinePass)
                outlinePass.selectedObjects = [this.list]
                outlinePass.edgeStrength = 30.0 // 边框的亮度
                outlinePass.edgeGlow = 0 // 光晕[0,1]
                outlinePass.usePatternTexture = false // 是否使用父级的材质
                outlinePass.edgeThickness = 10.0 // 边框宽度
                outlinePass.downSampleRatio = 2 // 边框弯曲度
                outlinePass.pulsePeriod = 5 // 呼吸闪烁的速度
                outlinePass.visibleEdgeColor.set(parseInt("0xff0000")) // 呼吸显示的颜色
                outlinePass.hiddenEdgeColor = new THREE.Color(0, 0, 0); // 呼吸消失的颜色
                outlinePass.clear = true
                composer.addPass(outlinePass)

                console.log("composer is ")
                console.log(composer)

                // 自定义的着色器通道 作为参数
                effectFXAA = new ShaderPass(FXAAShader)
                effectFXAA.uniforms.resolution.value.set(1 / window.innerWidth, 1 / window.innerHeight)
                effectFXAA.renderToScreen = true
                composer.addPass(effectFXAA)

                return {
                    composer, // composer在render循环函数中调用
                    outlinePass // 实例化一次后设置  outlinePass.selectedObjects = selectedObjects
                }
                
                //this.render()


            },
            render() {
                this.renderer.render(scene, this.camera); //执行渲染操作

            //   var time = this.clock.getDelta();
            //   if (this.mixer) {
            //     this.mixer.update(time);
            //   }
                

                //TWEEN.update()
                //this.renderer.render(this.scene, this.camera)
                this.controls.update()
                requestAnimationFrame(this.render);
                if (this.composer) {
                    this.composer.composer.render()
                } 
                // if (composer) {
                //         composer.render();
                // }

            },
            initMenu(){
                
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
                var chartDom1 = document.getElementById('dllsqx1');
                var myChart1 = echarts.init(chartDom1);
                var option1;
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
            },  
            //this.addEventListener('click',this.onMouseclick,false);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#three {
  z-index:1000;
  width: 1000px;
  height: 380px;
  position: fixed;
  left: 220px;
  top: 120px;
}
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
.model{
  position: fixed;
  background-color: black;
  z-index:999;
  height:100%;
  width:100%;
}
</style>
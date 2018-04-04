

//内存
function  memory(memoryline_Chart) {
    var colors = ['#5793f3', '#d14a61', '#675bba','#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD'];
    var Memory_Chart = echarts.init(document.getElementById(memoryline_Chart));
    var  equipment=[]
    // '电脑110', '电脑113', '电脑117', '电脑118', '电脑120'
    var data_time=[]
    var storageData={
        0:[11.6, 5.9, 9.0, 26.4,30],
        1:[33.9, 5.9, 11.1, 18.7,22],
        2:[22.9, 5.9, 11.1, 18.7, 48.3],
        3:[43.9, 5.9, 11.1, 18.7,25],
        4: [3.9, 5.9, 11.1, 18.7,22]

    }
    $.ajax({

        // url: 'indexs.json?'+ new Date().getTime() ,
        url: '../paye_319/memory.json?'+ new Date().toTimeString() ,
        type: 'GET',
        contentType: 'application/json;charset=utf-8',
        dataType: "json",
        // data:'indexs.json?'+ new Date().toTimeString() ,
        success: function (data) {

            var  seriesData=[];
            for(var i=0;i<data.length;i++){

                var ServerName=data[i].ServerName;
                // console.log(ServerName);
                equipment.push(ServerName);
                var SysServerMemoryRateList=data[i].SysServerMemoryRateList;
                // console.log(SysServerMemoryRateList);
                var Server_time=[];
                var Server_numder=[];

                for (var j=0;j<SysServerMemoryRateList.length;j++){

                    Server_numder.push(SysServerMemoryRateList[j].MemoryRate)
                    var times=SysServerMemoryRateList[j].UpdateTime
                    // 去掉年月
                    var arr=times.split(" ");
                    arr.shift()
                    //去掉秒
                    var ary=arr[0];
                    var s = ary.split(":",2);
                    var work=s[0]+":"+s[1];
                    Server_time.push(work );
                };
                storageData[i]=Server_numder;
                data_time=Server_time;
                var ymarry= {
                    itemStyle : { normal: {label : {show: true}}},//点显示数据
                    // symbol: 'arrow',  //这句就是去掉点的
                    smooth:true,  //这句就是让曲
                    name:equipment[i],
                    type:'line',
                    // xAxisIndex: 1.5,

                    areaStyle: {normal: {}},
                    data: storageData[i]
                };
                seriesData.push(ymarry);
            };
            console.log(equipment);
            var who="内存"
            data_line_Chart(equipment,data_time,seriesData,Memory_Chart,colors,who,100);
            //参数为元素类，设备名称，时间，series组件模块；storageData可以不传
        },
        error: function () {
            console.log("内存报错");
        }
    })
}
memory("memoryLine_Chart");
//CPU
function  cpuline(cpuline_Chart)  {
    var colors = ['#60C0DD', '#d14a61', '#675bba','#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD'];
    var cpuline_Chart = echarts.init(document.getElementById(cpuline_Chart));
    var  equipment=[]
    // '电脑110', '电脑113', '电脑117', '电脑118', '电脑120'
    var data_time=[]
    var storageData=[]
    console.log(storageData)
    $.ajax({

        // url: 'indexs.json?'+ new Date().getTime() ,
        url: '../paye_319/dataCPU.json?'+ new Date().toTimeString() ,
        type: 'GET',
        contentType: 'application/json;charset=utf-8',
        dataType: "json",
        // data:'indexs.json?'+ new Date().toTimeString() ,
        success: function (data) {

            var  seriesData=[];
            for(var i=0;i<data.length;i++){
                var SysServerMemoryRateList=data[i]
                var ServerName=data[i].ServerName;
                equipment.push(ServerName)
                // console.log(SysServerMemoryRateList);
                var Server_time=[];
                var Server_numder=[];
                // Server_numder.push(SysServerMemoryRateList.CpuRate)
                storageData.push(SysServerMemoryRateList.CpuRate)

                var times=SysServerMemoryRateList.UpdateTime
                // 去掉年月
                var arr=times.split(" ");
                arr.shift()
                //去掉秒
                var ary=arr[0];
                var s = ary.split(":",2);
                var work=s[0]+":"+s[1];
                data_time.push(work );
                console.log(equipment);
                var ymarry= {

                    itemStyle : { normal: {label : {show: true}}},//点显示数据
                    // symbol: 'arrow',  //这句就是去掉点的
                    smooth:true,  //这句就是让曲
                    name:equipment[0],
                    type:'line',
                    xAxisIndex: 0,

                    areaStyle: {normal: {}},
                    data: storageData
                };
                seriesData.push(ymarry);

            };

            var who="CPU"
            data_line_Chart(equipment,data_time,seriesData,cpuline_Chart,colors,who,100);
            //参数为元素类，设备名称，时间，series组件模块；storageData可以不传
        },
        error: function () {
            console.log("内存报错");
        }
    })
}
cpuline("cpuLine_Chart")
//用户在线数
function  userline(cpuline_Chart)  {
    var colors = ['#26BC54', '#d14a61', '#675bba','#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD'];
    var cpuline_Chart = echarts.init(document.getElementById(cpuline_Chart));
    var  equipment=[]
    // '电脑110', '电脑113', '电脑117', '电脑118', '电脑120'
    var data_time=[]
    var storageData=[6500,3500,7500,5450,4550]
    console.log(storageData)
    $.ajax({
        url: '../paye_319/dataCPU.json?'+ new Date().toTimeString() ,
        type: 'GET',
        contentType: 'application/json;charset=utf-8',
        dataType: "json",
        success: function (data) {

            var  seriesData=[];
            for(var i=0;i<data.length;i++){
                var SysServerMemoryRateList=data[i]
                var ServerName=data[i].ServerName;
                equipment.push(ServerName)
                var Server_time=[];
                var Server_numder=[];
                var times=SysServerMemoryRateList.UpdateTime
                // 去掉年月
                var arr=times.split(" ");
                arr.shift()
                //去掉秒
                var ary=arr[0];
                var s = ary.split(":",2);
                var work=s[0]+":"+s[1];
                data_time.push(work );
                console.log(equipment);
                var ymarry= {

                    itemStyle : { normal: {label : {show: true}}},//点显示数据
                    // symbol: 'arrow',  //这句就是去掉点的
                    // smooth:true,  //这句就是让曲
                    name:equipment[0],
                    type:'line',
                    xAxisIndex: 0,

                    // areaStyle: {normal: {}},
                    data: storageData
                };
                seriesData.push(ymarry);

            };

            var who="用户在线数量"
            data_line_Chart(equipment,data_time,seriesData,cpuline_Chart,colors,who,10000);
            //参数为元素类，设备名称，时间，series组件模块；storageData可以不传
        },
        error: function () {
            console.log("内存报错");
        }
    })
}
userline("userLine_Chart")
//终端在线数

function  terminalLine(cpuline_Chart)  {
    var colors = ['#1a2c7b', '#d14a61', '#675bba','#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD'];
    var cpuline_Chart = echarts.init(document.getElementById(cpuline_Chart));
    var  equipment=[]
    // '电脑110', '电脑113', '电脑117', '电脑118', '电脑120'
    var data_time=[]
    var storageData=[63,45,50,75,20]
    console.log(storageData)
    $.ajax({

        // url: 'indexs.json?'+ new Date().getTime() ,
        url: '../paye_319/dataCPU.json?'+ new Date().toTimeString() ,
        type: 'GET',
        contentType: 'application/json;charset=utf-8',
        dataType: "json",
        // data:'indexs.json?'+ new Date().toTimeString() ,
        success: function (data) {

            var  seriesData=[];
            for(var i=0;i<data.length;i++){
                var SysServerMemoryRateList=data[i]
                var ServerName=data[i].ServerName;
                equipment.push(ServerName)
                var Server_time=[];
                var Server_numder=[];
                // storageData.push(SysServerMemoryRateList.CpuRate)
                // storageData.push()

                var times=SysServerMemoryRateList.UpdateTime
                // 去掉年月
                var arr=times.split(" ");
                arr.shift()
                //去掉秒
                var ary=arr[0];
                var s = ary.split(":",2);
                var work=s[0]+":"+s[1];
                data_time.push(work );
                console.log(equipment);
                var ymarry= {

                    itemStyle : { normal: {label : {show: true}}},//点显示数据
                    // symbol: 'arrow',  //这句就是去掉点的
                    // smooth:true,  //这句就是让曲
                    name:equipment[0],
                    type:'line',
                    xAxisIndex: 0,

                    // areaStyle: {normal: {}},
                    data: storageData
                };
                seriesData.push(ymarry);

            };

            var who="终端在线数量"
            data_line_Chart(equipment,data_time,seriesData,cpuline_Chart,colors,who,100);
            //参数为元素类，设备名称，时间，series组件模块；storageData可以不传
        },
        error: function () {
            console.log("内存报错");
        }
    })
}
terminalLine("terminalLine_Chart")

//互联网
function  webLine(memoryline_Chart) {
    var colors = ['#5793f3', '#d14a61', '#675bba','#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD'];
    var Memory_Chart = echarts.init(document.getElementById(memoryline_Chart));
    var  equipment=[]
    // '电脑110', '电脑113', '电脑117', '电脑118', '电脑120'
    var data_time=[]
    var storageData={
        0:[11.6, 5.9, 9.0, 26.4,30],
        1:[33.9, 5.9, 11.1, 18.7,22],
        2:[22.9, 5.9, 11.1, 18.7, 48.3],
        3:[43.9, 5.9, 11.1, 18.7,25],
        4: [3.9, 5.9, 11.1, 18.7,22]

    }
    $.ajax({

        // url: 'indexs.json?'+ new Date().getTime() ,
        url: '../paye_319/indexsweb.json?'+ new Date().toTimeString() ,
        type: 'GET',
        contentType: 'application/json;charset=utf-8',
        dataType: "json",
        // data:'indexs.json?'+ new Date().toTimeString() ,
        success: function (data) {

            var  seriesData=[];
            for(var i=0;i<data.length;i++){

                var ServerName=data[i].ServerName;
                // console.log(ServerName);
                equipment.push(ServerName);
                var SysServerMemoryRateList=data[i].SysServerMemoryRateList;
                // console.log(SysServerMemoryRateList);
                var Server_time=[];
                var Server_numder=[];

                for (var j=0;j<SysServerMemoryRateList.length;j++){

                    Server_numder.push(SysServerMemoryRateList[j].MemoryRate)
                    var times=SysServerMemoryRateList[j].UpdateTime
                    // 去掉年月
                    var arr=times.split(" ");
                    arr.shift()
                    //去掉秒
                    var ary=arr[0];
                    var s = ary.split(":",2);
                    var work=s[0]+":"+s[1];
                    Server_time.push(work );
                };
                storageData[i]=Server_numder;
                data_time=Server_time;
                var ymarry= {
                    itemStyle : { normal: {label : {show: true}}},//点显示数据
                    // symbol: 'arrow',  //这句就是去掉点的
                    // smooth:true,  //这句就是让曲
                    name:equipment[i],
                    type:'line',
                    // xAxisIndex: 1.5,

                    // areaStyle: {normal: {}},
                    data: storageData[i]
                };
                seriesData.push(ymarry);
            };
            console.log(equipment);
            var who="互联网"
            web_line_Chart(equipment,data_time,seriesData,Memory_Chart,colors,who,100);
            //参数为元素类，设备名称，时间，series组件模块；storageData可以不传
        },
        error: function () {
            console.log("内存报错");
        }
    })
}
webLine("weblLine_Chart");
//视联网
function  vvcLine(memoryline_Chart) {
    var colors = ['#5793f3', '#d14a61', '#675bba','#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD'];
    var Memory_Chart = echarts.init(document.getElementById(memoryline_Chart));
    var  equipment=[]
    // '电脑110', '电脑113', '电脑117', '电脑118', '电脑120'
    var data_time=[]
    var storageData={
        0:[11.6, 5.9, 9.0, 26.4,30],
        1:[33.9, 5.9, 11.1, 18.7,22],
        2:[22.9, 5.9, 11.1, 18.7, 48.3],
        3:[43.9, 5.9, 11.1, 18.7,25],
        4: [3.9, 5.9, 11.1, 18.7,22]

    }
    $.ajax({

        // url: 'indexs.json?'+ new Date().getTime() ,
        url: '../paye_319/indexsweb.json?'+ new Date().toTimeString() ,
        type: 'GET',
        contentType: 'application/json;charset=utf-8',
        dataType: "json",
        // data:'indexs.json?'+ new Date().toTimeString() ,
        success: function (data) {

            var  seriesData=[];
            for(var i=0;i<data.length;i++){

                var ServerName=data[i].ServerName;
                // console.log(ServerName);
                equipment.push(ServerName);
                var SysServerMemoryRateList=data[i].SysServerMemoryRateList;
                // console.log(SysServerMemoryRateList);
                var Server_time=[];
                var Server_numder=[];

                for (var j=0;j<SysServerMemoryRateList.length;j++){

                    Server_numder.push(SysServerMemoryRateList[j].MemoryRate)
                    var times=SysServerMemoryRateList[j].UpdateTime
                    // 去掉年月
                    var arr=times.split(" ");
                    arr.shift()
                    //去掉秒
                    var ary=arr[0];
                    var s = ary.split(":",2);
                    var work=s[0]+":"+s[1];
                    Server_time.push(work );
                };
                storageData[i]=Server_numder;
                data_time=Server_time;
                var ymarry= {
                    itemStyle : { normal: {label : {show: true}}},//点显示数据
                    // symbol: 'arrow',  //这句就是去掉点的
                    // smooth:true,  //这句就是让曲
                    name:equipment[i],
                    type:'line',
                    xAxisIndex: 0,

                    // areaStyle: {normal: {}},
                    data: storageData[i]
                };
                seriesData.push(ymarry);
            };
            console.log(equipment);
            var who="视联网"
            web_line_Chart(equipment,data_time,seriesData,Memory_Chart,colors,who,50);
            //参数为元素类，设备名称，时间，series组件模块；storageData可以不传
        },
        error: function () {
            console.log("内存报错");
        }
    })
}
vvcLine("VLine_Chart");
//内存CPU用户在线数终端在线数调用
function data_line_Chart(equipment,data_time,seriesData,Memory_Chart,colors,who,max) {
    //，设备名称，时间，series组件模块 Memory_Chart类/组件，colors颜色,max最大值；storageData可以不传





    var  option_Memory = {
        color: colors,
        title: {
            text:equipment[0]+ who,
            // subtext: '数据来自网络'
            textStyle:{
                fontSize:20,
                fontWeight:'900',
                // fontFamily:'华文细黑',
            },
        },
        tooltip: {
            trigger: 'none',
            axisPointer: {
                type: 'cross'
            }
        },
        legend: {
            bottom: '0%',
            data:equipment,
        },
        grid: {
            top: 70,
            bottom: 60,
            // left:0
            containLabel: true
        },
        // toolbox: {
        //     feature: {
        //         saveAsImage: {}
        //     }
        // },
        xAxis: {
            type: 'category',
            boundaryGap: false,//图形俩边留白
            data: data_time,
                axisTick: {
                    alignWithLabel: true
                },
            axisLine: {
                    onZero: true,
                    lineStyle: {
                        color: colors[1]
                    }
                },
            axisPointer: {
                    label: {
                        formatter: function (params) {
                            return who+'使用率  ' + params.value
                                + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                        }
                    }
                },
        },
        yAxis: {
            type: 'value',
            max:max,
        },
        series:seriesData
    };

    Memory_Chart.setOption(option_Memory);

}

//互联网视联网调用
function web_line_Chart(equipment,data_time,seriesData,Memory_Chart,colors,who,max) {
    //，设备名称，时间，series组件模块 Memory_Chart类/组件，colors颜色,max最大值；storageData可以不传

    var  option_Memory = {
        color: colors,
        title: {
            text: who,
            // subtext: '数据来自网络'
            textStyle:{
                fontSize:20,
                fontWeight:'900',
                // fontFamily:'华文细黑',
            },
        },
        tooltip: {
            trigger: 'none',
            axisPointer: {
                type: 'cross'
            }
        },
        legend: {
            bottom: '0%',
            data:equipment,
        },
        grid: {
            top: 70,
            bottom: 60,
            // left:0
            containLabel: true
        },
        // toolbox: {
        //     feature: {
        //         saveAsImage: {}
        //     }
        // },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: data_time,
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                onZero: true,
                lineStyle: {
                    color: colors[1]
                }
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return who+'流量 ' + params.value
                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                    }
                }
            },
        },
        yAxis: {
            type: 'value',
            max:max,
        },
        series:seriesData
    };

    Memory_Chart.setOption(option_Memory);

}


//
// function data_line_Chart(equipment,data_time,seriesData,Memory_Chart,colors,who) {
//     //，设备名称，时间，series组件模块 Memory_Chart类/组件，colors颜色；storageData可以不传
//
//
//
//
//
//     var  option_Memory = {
//         color: colors,
//         title: {
//             text:equipment+ who+'利用量',
//             // subtext: '数据来自网络'
//             textStyle:{
//                 fontSize:20,
//                 fontWeight:'900',
//                 // fontFamily:'华文细黑',
//             },
//         },
//         tooltip: {
//             trigger: 'none',
//             axisPointer: {
//                 type: 'cross'
//             }
//         },
//         legend: {
//             bottom: '0%',
//             data:equipment,
//         },
//         grid: {
//             top: 70,
//             bottom: 60,
//             // left:0
//             containLabel: true
//         },
//         // toolbox: {
//         //     feature: {
//         //         saveAsImage: {}
//         //     }
//         // },
//         xAxis: [
//             {
//                 type: 'category',
//                 boundaryGap: false,
//                 axisTick: {
//                     alignWithLabel: true
//                 },
//                 axisLine: {
//                     onZero: true,
//                     lineStyle: {
//                         color: colors[1]
//                     }
//                 },
//                 axisPointer: {
//                     label: {
//                         formatter: function (params) {
//                             return '内存使用率  ' + params.value
//                                 + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
//                         }
//                     }
//                 },
//                 data:data_time
//             },
//             {
//                 type: 'category',
//                 // axisTick: {
//                 //     alignWithLabel: true
//                 // },
//                 axisLine: {
//                     onZero: false,
//                     lineStyle: {
//                         color: "transparent"
//                     }
//                 },
//                 // axisPointer: {
//                 //     label: {
//                 //         formatter: function (params) {
//                 //             return '内存使用率  ' + params.value
//                 //                 + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
//                 //         }
//                 //     }
//                 // },
//                 data:data_time
//             }
//         ],
//         yAxis: [
//             {
//                 max:100,
//                 type: 'value',
//                 boundaryGap: [0, '100%'],
//                 axisLabel: {
//                     show: true,
//                 }
//             }
//
//
//         ],
//         series:seriesData
//     };
//
//     Memory_Chart.setOption(option_Memory);
//
// }
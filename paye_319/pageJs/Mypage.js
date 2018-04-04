

//
// var start = function () {
//     if (!!window.WebSocket && window.WebSocket.prototype.send) {
//         /*supported*/
//         var wsImpl = window.WebSocket || window.MozWebSocket;
//
//
//         // create a new websocket and connect
//         window.ws = new wsImpl('ws://192.168.95.91:7182/');
//
//         // when data is comming from the server, this metod is called
//         ws.onmessage = function (evt) {
//             console.log(evt.data);
//             var datas=JSON.parse(evt.data)
//             console.log(datas)
//
//             // for(var i=0;i<datas.length;i++){
//                 // var MediaServer =data[i]
//                 var MediaServer=datas.Data
//
//                 console.log("表格"+MediaServer);
//                 var MediaServerData={};
//                 MediaServerData["vda_sid"]=MediaServer.OranizationName
//                 MediaServerData["vda_spath"]=MediaServer.MediaServerName
//                 MediaServerData["vda_time"]=MediaServer.Time
//                 MediaServerData["vda_line"]=MediaServer.Status
//
//                 myTabledata.push(MediaServerData)
//                 if(myTabledata.length>10){
//                     var ary = myTabledata.slice(myTabledata.length-10,myTabledata.length);
//                     console.log(ary)
//                     myTabledata=ary
//                 }
//                 console.log(myTabledata)
//                 // {"vda_sid":"北京","vda_spath":"流媒体5","vda_time":"2014-10-13 13:35:51","vda_line":"离线"},
//             // }
//
//             $("#table_show").bootstrapTable('load', myTabledata);
//
//
//
//         };
//
//         // when the connection is established, this method is called
//         ws.onopen = function () {
//             console.log("打开连接");
//         };
//
//         // when the connection is closed, this method is called
//         ws.onclose = function () {
//             console.log("连接关闭");
//         }
//     }
//     else {
//         alert("您的浏览器不支持Html5，请使用谷歌浏览器");
//     }
//
// }
//
// window.onload = start;


var ChartFont=[20,]
// 健康值
var ChartWidth=[40]

var wid =document.documentElement.clientWidth;
if (wid<1399){
    ChartWidth=[25]
}


function annularChartHealt() {
    var rnd=Math.floor(Math.random()*40)+60;
    console.log(rnd)
    var Mynumder=rnd/100
    console.log(Mynumder)
    var div='<div id="healthyChart" class="ChartWidth">'+'</div>'
    $('.refreshChart').append(div)
    // $('#healthyChart').children().remove();
    // console.log( $("#healthyChart").children())
    var myHealthChart = echarts.init(document.getElementById('healthyChart'));
    var health_Chart = {
        title: {
            text: '系统健康值',
            // subtext: '数据来自网络'  text: '在线人数'+'\n' + cupline,
            textStyle:{
                fontSize:20,
                fontWeight:'900',
                // fontFamily:'华文细黑',
            },
        },
        textStyle:{
            fontSize: '70',

        },
        series: [{
            type: 'liquidFill',
            radius: '80%',
            data: [Mynumder],
            label: {
                textStyle:{
                    fontSize: '80',

                },

                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                    }
                }
            }
            // emphasis:{
            //     label: {
            //         fontSize:900,
            //     }
            //
            // }


        }]
    };
    myHealthChart.setOption(health_Chart);
    window.onresize = myHealthChart.resize
}
// MapChartHealt()
annularChartHealt();
function  MapChartHealt() {


    timer= setTimeout(function() {
        $('.refreshChart'). empty()
        $('.ChartWidthHide'). empty()
        annularChartHealt();
        MapChartHealt()
        annularChart(ast)//在线率
    },5000)

}
var ast=[ "55","5"]
// 在线率
function annularChart(daast) {
    ast[0] =Math.floor(Math.random()*1000)+60
    ast[1]  =Math.floor(Math.random()*80)+10
    cupline=daast[0];
    cupoff_line=daast[1];

    console.log(cupline,cupoff_line)
    var ChartWidth='<div id="User_Chart" class="ChartWidth">'+'</div>'

    $('.ChartWidthHide').append(ChartWidth)
    var myChartb = echarts.init(document.getElementById('User_Chart'));
    var optionb = {
        title: {
            text: '在线人数'+'\n' + cupline,
            textStyle:{
                color:'green',
                fontSize:40,
                fontWeight:'normal',
                // fontFamily:'华文细黑',
            },
            x: 'center',
            y: 'center'
        },
        // title: {
        //     text: '在线率统计',
        //
        //     // left: '50%',
        //     // right: '4%',
        //     // bottom: '3%',
        //     containLabel: true
        //
        //     // subtext: '数据来自网络'
        // },
        tooltip: {
            text: '在线率统计',
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            fontSize:40,
        },
        color:['green', '#9e9ea6','yellow','blueviolet'],
        legend: {
            orient: 'vertical',
            x: 'right',
            data:['在线','离线'],
            textStyle: {
                // fontFamily:fontFamily,
                // fontSize:fontSize,
                // color:color,
                // fontFamily:fontFamily,
                fontSize:20,
                color:'#000000',

                fontWeight: '900'
            }

        },
        series: [

            {
                name:'系统用户',
                type:'pie',
                radius: ['70%', '90%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: false,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:cupline, name:'在线'},

                    {value:cupoff_line, name:'离线'}

                ]
            }
        ]




    };

    myChartb.setOption(optionb);
    window.onresize = myChartb.resize
}
annularChart(ast);

//告警统计
function AlarmStatistics_Chart () {
    var AlarmStatistics_Show = echarts.init(document.getElementById('AlarmStatistics'));

    var  option_AlarmStatistics = {

        title: {
            text: '告警统计 ',
            // subtext: '数据来自网络'
            textStyle:{
                fontSize:20,
                fontWeight:'900',
                // fontFamily:'华文细黑',
            },
        },
        xAxis: {
            type: 'category',
            data: ['紧急', '严重', '一般', '提示']
        },
        yAxis: {
            type: 'value'
        },
        series: [{

            data: [120, 200, 150,500],
            type: 'bar',
            itemStyle: {
                normal: {
                    //好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                            '#be162a','#e4791b', '#046268','#aac92c','#97cb28',
                            '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                            '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                        ];
                        return colorList[params.dataIndex]
                    },
                    //以下为是否显示，显示位置和显示格式的设置了
                    label: {
                        show: true,
                        position: 'top',
//                             formatter: '{c}'
                        formatter: '{b}\n{c}'
                    }
                }
            },
        }]
    };


    AlarmStatistics_Show.setOption(option_AlarmStatistics);

}
AlarmStatistics_Chart()

// CPU
function data_cpu_Chart() {
    var data_cpu = echarts.init(document.getElementById('data_cpu'));

   var  option_cpu = {
        title: {
            text: 'Top5主机CPU利用率  ',
            // subtext: '数据来自网络'
            textStyle:{
                fontSize:20,
                fontWeight:'900',
                // fontFamily:'华文细黑',
            },
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            // data: ['2011年', '2012年']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            max:100,

            data:[0,10,20,30,40,50,60,70,100],


        },
        yAxis: {
            type: 'category',
            data: ['CPU5', 'CPU4','CPU3','CPU2','CPU1'],
        },
        series: [
            {
                // name: 'CPU1',
                type: 'bar',
                data: [90,60,50,40,30],
                itemStyle: {
                    normal: {
                        //好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，
                        color: function(params) {
                            // build a color map as your need.
                            var colorList = [
                                '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                                '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                                '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                            ];
                            return colorList[params.dataIndex]
                        },
                        //以下为是否显示，显示位置和显示格式的设置了
                        label: {
                            show: true,
                            position: 'top',
//                             formatter: '{c}'
                            formatter: '{b}\n{c}'
                        }
                    }
                },
                //设置柱的宽度，要是数据太少，柱子太宽不美观~
                barWidth:ChartWidth,
            },

        ]
    };


    data_cpu.setOption(option_cpu);
}

data_cpu_Chart();

// 内存

function data_Memory_Chart() {
    var Memory_Chart = echarts.init(document.getElementById('Memory_Chart'));
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

    var colors = ['#5793f3', '#d14a61', '#675bba','#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD'];

    $.ajax({

        // url: 'indexs.json?'+ new Date().getTime() ,
        url: 'indexs.json?'+ + new Date().toTimeString() ,

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
                    // console.log(work);
                    // console.log(arr);
                    Server_time.push(work );
                };
                storageData[i]=Server_numder;
                data_time=Server_time;
                // console.log(data_time);
                // console.log(storageData);
                var ymarry= {
                    itemStyle : { normal: {label : {show: true}}},//点显示数据
                    // symbol: 'arrow',  //这句就是去掉点的
                    smooth:true,  //这句就是让曲
                    name:equipment[i],
                    type:'line',
                    xAxisIndex: 0,

                    // areaStyle: {normal: {}},
                    data: storageData[i]
                };
                seriesData.push(ymarry)
            };
           // console.log(seriesData);
            var  option_Memory = {
                color: colors,
                title: {
                    text: 'Top5主机内存利用量',
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
                xAxis: [
                    {
                        type: 'category',
                        data:data_time,
                        boundaryGap: false,//图形俩边留白
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
                                    return '内存使用率  ' + params.value
                                        + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                                }
                            }
                        },

                    },
                    {
                        type: 'category',
                        // axisTick: {
                        //     alignWithLabel: true
                        // },
                        axisLine: {
                            onZero: false,
                            lineStyle: {
                                color: "transparent"
                            }
                        },
                        // axisPointer: {
                        //     label: {
                        //         formatter: function (params) {
                        //             return '内存使用率  ' + params.value
                        //                 + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                        //         }
                        //     }
                        // },
                        data:data_time
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        max:100,
                    }


                ],
                series:seriesData
            };

            Memory_Chart.setOption(option_Memory);

        },
        error: function () {
            console.log("内存报错");
        }
    })
}
data_Memory_Chart();

// b表格


function setTable(MytableLoading,myTabledata){
    var Mytable_show='<div class="Mytable_show ">'+
        '<table  id="table_show" >'+
        '<thead>'+
        '<tr>'+
        '<th data-field="vda_sid"  data-switchable="false">地点</th>'+
        '<th data-field="vda_spath"  data-switchable="false" >名称</th>'+
        '<th data-field="vda_time" >时间</th>'+
        '<th data-field="vda_line" >状态</th>'+
        '</tr>'+
        '</thead>'+
        '</table>'+
        '</div>'
    $("."+MytableLoading).append(Mytable_show)
    var id =document.getElementById("table_show")
//        console.log(data)
//
//        table = myparameter.height;
//
//        table_id = "table_"+id;

    $("#table_show").bootstrapTable({
        cache: true,//是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
//            height: table.height,
//         height: 450,
        striped: false,//是否显示行间隔色
        sortable:false,
        //pagination: table.pagination,  //是否显示分页（*）
        pageSize: 10,//每页的记录行数（*）
        //pageNumber:1,//初始化加载第一页，默认第一页
        pageList: [10],//可供选择的每页的行数（*）
        search: false,//是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
        //         showColumns: false,//刷新按钮
//         showRefresh: false,//列头筛选
        showExport:true,
//            showColumns: table.showColumns,
//            showRefresh: table.showRefresh,
//            showExport: table.showExport,
        exportTypes: ['csv','txt','xml'],
        clickToSelect: true,
        switchable: true,
        // columns: [
        //     {title: "地点", field: "vda_sid", align: "center", valign: "middle", sortable: true},
        //     {title: "名称", field: "vda_spath", align: "center", valign: "middle", sortable: true},
        //     {title: "时间", field: "vda_time", align: "center", valign: "middle", sortable: true},
        //     {title: "在线", field: "vda_line", align: "center", valign: "middle", sortable: true}],
        data :myTabledata ,
        // rowStyle: function (row, index) {
        //     if ( row["isAlarm"] ) {
        //         return {"css":{"background-color":"rgba(255,0,0,1)"}};
        //     }
        //     else {
        //         return {"css":{"background-color":"rgba(255,255,0,0)"}};
        //     }
        // },
        onColumnSwitch: function (field, checked){
            comm = myTabledata;
            for (var i = 0; i<comm.length; i++) {
                if (comm[i]['field'] == field) {
                    comm[i]['visible'] = checked;
                    break;
                }
            }
        },

        onPrepended: function(tr_id, data){



            if (data == undefined || data["isAlarm"] == false)
                return ;

            color = 0;
            idd = '#'+tr_id
            var fox = { x: 1, id:id};
            new TWEEN.Tween( fox )
                .to({x:0}, 15000)
                .onUpdate(function() {
                    //color = parseInt(this.x);
                    //rgb = "rgb(255," + color +"," + color +")";
                    rgb = "rgba(255,0,0,"+ this.x +")";
                    $(this.id)[0].style.backgroundColor = rgb;
                })
                .onComplete(function () {
                    $(this.id)[0].style.backgroundColor = "";
                }).start();

            function animate( time ) {

                requestAnimationFrame( animate );

                TWEEN.update( time );

            }
            animate();

        },
        //onSort: function (name, order) {
        // },
        //formatShowingRows: function (pageFrom, pageTo, totalRows) {
        //	return '';
        // },
        //formatRecordsPerPage: function () {
        //	return '';
        //  },
        formatNoMatches: function(){
            // return '无符合条件的记录';
        }

    });
    $("#table_show").bootstrapTable('load', myTabledata);

    // $(window).resize(function () {
    //     $('#'+id).bootstrapTable('resetView');
    // });

}

var myTabledata=[]
setTable("MytableLoading",myTabledata);



//////////////////////////////////////////////////////////////
function  MapCharttable() {

    //
    // timer= setTimeout(function() {

        $.ajax({
            url:"/Admin/MediaServer/MediaServerHandler.ashx?op=getMediaOffLineList",
            // url:"data.json",
            type: 'post',
            contentType: 'application/json;charset=utf-8',
            dataType: "json",
            success:function (data) {
                console.log()

                for(var i=0;i<data.length;i++){
                    // var MediaServer =data[i]
                    var MediaServer=data[i].Data

                    console.log("表格"+MediaServer);
                    var MediaServerData={};
                    MediaServerData["vda_sid"]=MediaServer.OranizationName
                    MediaServerData["vda_spath"]=MediaServer.MediaServerName
                    MediaServerData["vda_time"]=MediaServer.Time
                    MediaServerData["vda_line"]=MediaServer.Status

                    myTabledata.push(MediaServerData)
                    if(myTabledata.length>10){
                        var ary = myTabledata.slice(myTabledata.length-10,myTabledata.length);
                        console.log(ary)
                        myTabledata=ary
                    }
                    console.log(myTabledata)
                    // {"vda_sid":"北京","vda_spath":"流媒体5","vda_time":"2014-10-13 13:35:51","vda_line":"离线"},
                }

                $("#table_show").bootstrapTable('load', myTabledata);
            },
            error: function () {
                console.log("表格报错");
            }


        })
        // $('.Mytable_show'). empty()
        // setTable(myTabledata);

        $(" .bootstrap-table .table:not(.table-condensed) > tbody > tr:last-child > td").css({
            //  "color":"#ffffff",
            // "background":"red",
            // "animation":"myfirst 5s",
            // "-webkit-animation":"myfirst 5s"
        })


        console.log(myTabledata)
    // },2000)

}
MapCharttable()



function  MapChartHealtALL() {


    timer= setTimeout(function() {

        MapChartHealtALL()
        MapCharttable()
    },60000)

}
MapChartHealtALL()
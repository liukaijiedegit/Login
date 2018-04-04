/**
 * Created by lkj206345 on 2018/4/3.
 */
// b表格
function setTable(){
    var id =document.getElementById("table_show")
//        console.log(data)
//
//        table = myparameter.height;
//
//        table_id = "table_"+id;

    $("#table_show").bootstrapTable({
        cache: false,//是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
//            height: table.height,
        height: 450,
        striped: true,//是否显示行间隔色
        sortable:false,
        //pagination: table.pagination,  //是否显示分页（*）
        pageSize: 10,//每页的记录行数（*）
        //pageNumber:1,//初始化加载第一页，默认第一页
        pageList: [10],//可供选择的每页的行数（*）
        search: true,//是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
        showColumns: true,
        showRefresh: true,
        showExport:true,
//            showColumns: table.showColumns,
//            showRefresh: table.showRefresh,
//            showExport: table.showExport,
        exportTypes: ['csv','txt','xml'],
        clickToSelect: true,
        switchable: true,
        columns: [{title: "系统会话号", field: "vda_sid", align: "center", valign: "middle", sortable: true}, {title: "录像存储位置", field: "vda_spath", align: "center", valign: "middle", sortable: true},{title: "录像帧号", field: "vda_frame_index", align: "center", valign: "middle", sortable: true},{title: "操作时间", field: "vda_op_time", align: "center", valign: "middle", sortable: true},{title: "远程IP", field: "vda_remote_ip", align: "center", valign: "middle", sortable: true},{title: "当前操作桌面IP", field: "vda_local_ip", align: "center", valign: "middle", sortable: true},{title: "系统登录账号", field: "vda_login_acc", align: "center", valign: "middle", sortable: true},{title: "营业厅/地域", field: "vda_gpath", align: "center", valign: "middle", sortable: true},{title: "内存", field: "vda_mem_info", align: "center", valign: "middle", sortable: true},{title: "操作内容", field: "vda_content", align: "center", valign: "middle", sortable: true}],
        data : [{"vda_sid":"20dai.rikon@gmail.com","vda_spath":"","vda_frame_index":"2014-10-13 13:35:51","vda_op_time":"0","vda_remote_ip":"0","vda_local_ip":"0","vda_login_acc":"0","vda_gpath":"100014","vda_mem_info":"NULL","vda_content":"NULL"},
            {"vda_sid":"20dai.rikon@gmail.com","vda_spath":"","vda_frame_index":"2014-10-13 13:35:51","vda_op_time":"0","vda_remote_ip":"0","vda_local_ip":"0","vda_login_acc":"0","vda_gpath":"100014","vda_mem_info":"NULL","vda_content":"NULL"}, {"vda_sid":"20dai.rikon@gmail.com","vda_spath":"","vda_frame_index":"2014-10-13 13:35:51","vda_op_time":"0","vda_remote_ip":"0","vda_local_ip":"0","vda_login_acc":"0","vda_gpath":"100014","vda_mem_info":"NULL","vda_content":"NULL"}, {"vda_sid":"20dai.rikon@gmail.com","vda_spath":"","vda_frame_index":"2014-10-13 13:35:51","vda_op_time":"0","vda_remote_ip":"0","vda_local_ip":"0","vda_login_acc":"0","vda_gpath":"100014","vda_mem_info":"NULL","vda_content":"NULL"}, {"vda_sid":"20dai.rikon@gmail.com","vda_spath":"","vda_frame_index":"2014-10-13 13:35:51","vda_op_time":"0","vda_remote_ip":"0","vda_local_ip":"0","vda_login_acc":"0","vda_gpath":"100014","vda_mem_info":"NULL","vda_content":"NULL"}, {"vda_sid":"20dai.rikon@gmail.com","vda_spath":"","vda_frame_index":"2014-10-13 13:35:51","vda_op_time":"0","vda_remote_ip":"0","vda_local_ip":"0","vda_login_acc":"0","vda_gpath":"100014","vda_mem_info":"NULL","vda_content":"NULL"}, {"vda_sid":"20dai.rikon@gmail.com","vda_spath":"","vda_frame_index":"2014-10-13 13:35:51","vda_op_time":"0","vda_remote_ip":"0","vda_local_ip":"0","vda_login_acc":"0","vda_gpath":"100014","vda_mem_info":"NULL","vda_content":"NULL"}, {"vda_sid":"20dai.rikon@gmail.com","vda_spath":"","vda_frame_index":"2014-10-13 13:35:51","vda_op_time":"0","vda_remote_ip":"0","vda_local_ip":"0","vda_login_acc":"0","vda_gpath":"100014","vda_mem_info":"NULL","vda_content":"NULL"}, {"vda_sid":"20dai.rikon@gmail.com","vda_spath":"","vda_frame_index":"2014-10-13 13:35:51","vda_op_time":"0","vda_remote_ip":"0","vda_local_ip":"0","vda_login_acc":"0","vda_gpath":"100014","vda_mem_info":"NULL","vda_content":"NULL"}, {"vda_sid":"20dai.rikon@gmail.com","vda_spath":"","vda_frame_index":"2014-10-13 13:35:51","vda_op_time":"0","vda_remote_ip":"0","vda_local_ip":"0","vda_login_acc":"0","vda_gpath":"100014","vda_mem_info":"NULL","vda_content":"NULL"}],
        onColumnSwitch: function (field, checked){

            comm = map_config[myparameter.dataType];

            for (var i = 0; i<comm.length; i++)
            {
                if (comm[i]['field'] == field)
                {
                    comm[i]['visible'] = checked;
                    break;
                }
            }
        },

        onPrepended: function(tr_id, data){



            if (data == undefined || data["isAlarm"] == false)
                return ;

            color = 0;
            id = '#'+tr_id
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
            return '无符合条件的记录';
        }

    });


    $(window).resize(function () {
        $('#'+id).bootstrapTable('resetView');
    });

}
setTable();
///////////////////////////////////////////////////

function setTable(MyTableClass,myTabledata){
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
    $("."+MyTableClass).append(Mytable_show)
    var id =document.getElementById("table_show")
//        console.log(data)
//
//        table = myparameter.height;
//
//        table_id = "table_"+id;

    $("#table_show").bootstrapTable({
        cache: true,//是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
//            height: table.height,
        height: 450,
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
            return '无符合条件的记录';
        }

    });
    $("#table_show").bootstrapTable('load', myTabledata);

    // $(window).resize(function () {
    //     $('#'+id).bootstrapTable('resetView');
    // });

}

var myTabledata=[
    {"vda_sid":"北京","vda_spath":"流媒体1","vda_time":"2014-10-13 13:35:51","vda_line":"离线"},
    {"vda_sid":"北京","vda_spath":"流媒体2","vda_time":"2014-10-13 13:35:51","vda_line":"离线"},
    {"vda_sid":"北京","vda_spath":"流媒体3","vda_time":"2014-10-13 13:35:51","vda_line":"离线"},
    {"vda_sid":"北京","vda_spath":"流媒体4","vda_time":"2014-10-13 13:35:51","vda_line":"离线"},
    {"vda_sid":"北京","vda_spath":"流媒体5","vda_time":"2014-10-13 13:35:51","vda_line":"离线"},
    {"vda_sid":"北京","vda_spath":"流媒体1","vda_time":"2014-10-13 13:35:51","vda_line":"离线"},
    {"vda_sid":"北京","vda_spath":"流媒体2","vda_time":"2014-10-13 13:35:51","vda_line":"离线"},
    {"vda_sid":"北京","vda_spath":"流媒体3","vda_time":"2014-10-13 13:35:51","vda_line":"离线"},
    {"vda_sid":"北京","vda_spath":"流媒体4","vda_time":"2014-10-13 13:35:51","vda_line":"离线"},
    {"vda_sid":"北京","vda_spath":"流媒体5","vda_time":"2014-10-13 13:35:51","vda_line":"离线"},

]

function  MapCharttable() {


    timer= setTimeout(function() {
        var mynumder=Math.floor(Math.random()*1000)+60
        myTabledata.push(
            {"vda_sid":"北京","vda_spath":"流媒体"+mynumder,"vda_time":"2014-10-13 13:35:51","vda_line":"离线"}
        )
        myTabledata.shift()
        // $('.Mytable_show'). empty()
        // setTable(myTabledata);
        $("#table_show").bootstrapTable('load', myTabledata);
        $(" .bootstrap-table .table:not(.table-condensed) > tbody > tr:last-child > td").css({
            "color":"#ffffff",
            "background":"red",
            "animation":"myfirst 5s",
            "-webkit-animation":"myfirst 5s"
        })
        MapCharttable()


        console.log(myTabledata)
    },20000)

}
MapCharttable()
setTable("MytableLoading",myTabledata);


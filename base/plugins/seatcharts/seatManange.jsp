

<html>
	<head>
		<title>test</title>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<link rel="stylesheet" type="text/css" href="http://10.0.69.248:8080/scpc/base/js/jquery.seat-charts.css"/>
		<link rel="stylesheet" type="text/css" href="./seatManange.css">
		<link rel="stylesheet" type="text/css" href="http://10.0.69.248:8080/scpc/base/resources/css/ext-all.css"/>
		<link rel="stylesheet" type="text/css" href="http://10.0.69.248:8080/scpc/base/resources/css/xtheme-green.css"/>
		<link rel="stylesheet" type="text/css" href="http://10.0.69.248:8080/scpc/base/resources/css/uxcss.css"/>
		<script type="text/javascript" src="http://10.0.69.248:8080/scpc/base/adapter/ext/ext-base.js">
			</script><script type="text/javascript" src="http://10.0.69.248:8080/scpc/base/ext-basex.js"></script><script type="text/javascript" src="http://10.0.69.248:8080/scpc/base/ext-all.js"></script><script type="text/javascript" src="http://10.0.69.248:8080/scpc/base/ext-lang-zh_CN.js"></script><script type="text/javascript" src="http://10.0.69.248:8080/scpc/base/ux/uxjs.js"></script><script type="text/javascript">Ext.onReady(function(){Ext.BLANK_IMAGE_URL = 'http://10.0.69.248:8080/scpc/base/resources/images/default/s.gif';Ext.CASIT_BASE_PATH = 'http://10.0.69.248:8080/scpc/';Ext.QuickTips.init();

		
		//var meetid;
		function failfunc(){
			Ext.Msg.alert("错误","发生未知错误，请联系管理员!");
		}
		function distributionToTeam(){
			var selids = selIdsHid.getValue();
			if(selids==null||selids==""){
				Ext.Msg.alert("提示","未选中位置！");
				return;
			}
			var seldelTeam = delTeam.getValue();
			if(seldelTeam==null||seldelTeam==""){
				Ext.Msg.alert("提示","请选择要分配的代表团！");
				return;
			}
			Ext.Ajax.request({
				url : 'http://10.0.69.248:8080/scpc/seatingarrage/distributionToTeam',
				params : {
					meetid:meetid,
					ids:selids,
					areacode:seldelTeam
				},
				success :function(xhr){
					 if(xhr.responseText='success'){
					 	window.location.href=window.location.href;
					 }
				},
		    failure : failfunc
			});	
		}
		
		function clearAllSeat(){
			  Ext.Msg.confirm("提示","您将清空所有位置信息，是否继续?",function(t){
		   		 if(t=="yes"){
					Ext.Ajax.request({
						url : 'http://10.0.69.248:8080/scpc/seatingarrage/clearAllSeat',
						params : {
							meetid:meetid
						},
						success :function(xhr){
							 if(xhr.responseText='success'){
							 	window.location.href=window.location.href;
							 }
						},
				    failure : failfunc
					});	
		  		 }else{
		       		return;
		  		 }
	 		});
		}
		function distributionForAllDel(){
		  Ext.Msg.confirm("提示","一键分配位置，是否继续?",function(t){
	   		 if(t=="yes"){
   		 		Ext.Ajax.request({
					url : 'http://10.0.69.248:8080/scpc/seatingarrage/dstributionforalldel',
					params : {
						meetid:meetid
					},
					success :function(xhr){
						 if(xhr.responseText='success'){
						 	window.location.href=window.location.href;
						 }
					},
			    failure : failfunc
				});	
	  		 }else{
	       		return;
	  		 }
	 		});
		}
		function exportExcel(){
		    var obj = {};
		   	obj.meetid=meetid;
		   	obj.meetname=decodeURI(decodeURI(getQueryString('meetname')));
			download("http://10.0.69.248:8080/scpc/seatingarrage/excelout",obj);
		}
		function print(){
			var headstr = "<html><head><title></title></head><body>"; 
			var footstr = "</body></html>"; 
			var newstr = document.all.item('maindiv').innerHTML; 
			var oldstr = document.body.innerHTML; 
			document.body.innerHTML = headstr+newstr+footstr; 
			window.print(); 
			document.body.innerHTML = oldstr; 
			return false; 
		}
		function showPersonInfo(){
			showPerNum();
			persongrid2.getStore().baseParams['meetid'] = meetid;
			persongrid2.getStore().load();
			personInfoWin.show();
		}
		//会场代表排座情况
		function showPerNum(teamcode){
			Ext.Ajax.request({
				url : 'http://10.0.69.248:8080/scpc/seatingarrage/showPerNum',
				params : {
					meetid:meetid,
					areacode:teamcode
				},
				success :function(xhr){
					var tempArr = xhr.responseText.split("_");
					totalLa.setText("共<font conlor='red'>"+tempArr[0]+"</font>人,已排座:<font color='red'>"+tempArr[1]+"</font>人,未排座:<font color='red'>"+tempArr[2]+"</font>人");
				},
		    failure : failfunc
			});	
		}
		
		
		
		
			
				
					
					
					
					
					
						
					
					
					
					
					
					
					
					
					
					
					
						
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
				
			
		
		 
		
	var meetname = new Ext.Toolbar.TextItem({"id":"meetname","text":""});var totalSeat = new Ext.Toolbar.TextItem({"id":"totalSeat","text":""});var selIdsHid = new Ext.form.Hidden({});var showPersonInfoBut = new Ext.Button({"text":"查看会议人员","iconCls":"ux-edit","handler":showPersonInfo});var changeSeatBox = new Ext.form.Checkbox({"id":"changeSeatBox","boxLabel":"对换位置"});var distributionForOneBox = new Ext.form.Checkbox({"id":"distributionForOneBox","boxLabel":"为单个位置指定人员"});var clearOneSeatPersonBox = new Ext.form.Checkbox({"id":"clearOneSeatPersonBox","boxLabel":"清除指定位置人员"});var clearOneSeatBox = new Ext.form.Checkbox({"id":"clearOneSeatBox","boxLabel":"将指定位置置空"});var firstSeat = new Ext.Toolbar.TextItem({});var secondSeat = new Ext.Toolbar.TextItem({});var clearAllSeatBut = new Ext.Button({"text":"清空所有座位","iconCls":"ux-edit","handler":clearAllSeat});var clearAllPersonBut = new Ext.Button({"text":"清空所有代表团人员位置","iconCls":"ux-edit","handler":clearAllPerson});var dbtbut = new Ext.Button({"text":"一键排座","iconCls":"ux-edit","handler":distributionForAllDel});var exportBut = new Ext.Button({"text":"导出座位信息表","iconCls":"ux-excel","handler":exportExcel});var delTeam_st = new Ext.ux.JsonStore({"root":"root","storeId":"delTeam_st","url":"http://10.0.69.248:8080/scpc/seatingarrage/selectTeam","fields":["value","display"]});var delTeam = new Ext.form.ComboBox({"lazyInit":false,"store":delTeam_st,"displayField":"display","valueField":"value","triggerAction":"all","dataIndex":"value","fieldLabel":"代表团","editable":false,"mode":"local","anchor":"97%"});var dbbut = new Ext.Button({"text":"将选中位置指定代表团","iconCls":"ux-save","handler":distributionToTeam});var clearSeatFormTeamBut = new Ext.Button({"text":"将所选代表团位置置空","iconCls":"ux-edit","handler":clearSeatFormTeam});var clearPersonFromTeamBut = new Ext.Button({"text":"清空所选代表团人员位置","iconCls":"ux-edit","handler":clearPersonFromTeam});var twoform = new Ext.Panel({"layoutConfig":{'align':'stretch'},"height":300,"items":[{"layoutConfig":{'align':'stretch'},"items":[{"layoutConfig":{'align':'stretch'},"labelWidth":70,"itemCls":"itemCss","items":[{"text":"当前会议:","xtype":"tbtext"},meetname,totalSeat,selIdsHid,{"layoutConfig":{'align':'stretch'},"items":[showPersonInfoBut],"xtype":"buttongroup"},changeSeatBox,distributionForOneBox,clearOneSeatPersonBox,clearOneSeatBox,firstSeat,secondSeat,{"layoutConfig":{'align':'stretch'},"items":[clearAllSeatBut],"xtype":"buttongroup"},{"layoutConfig":{'align':'stretch'},"items":[clearAllPersonBut],"xtype":"buttongroup"},{"layoutConfig":{'align':'stretch'},"items":[dbtbut],"xtype":"buttongroup"},{"layoutConfig":{'align':'stretch'},"items":[exportBut],"xtype":"buttongroup"},delTeam,{"layoutConfig":{'align':'stretch'},"items":[dbbut],"xtype":"buttongroup"},{"layoutConfig":{'align':'stretch'},"items":[clearSeatFormTeamBut],"xtype":"buttongroup"},{"layoutConfig":{'align':'stretch'},"items":[clearPersonFromTeamBut],"xtype":"buttongroup"}],"xtype":"form","labelAlign":"right","border":false,"flex":1}],"layout":"hbox","xtype":"panel","border":false,"flex":0.5}],"layout":"vbox","border":false,"flex":1});var casit_view = new Ext.Viewport({"layoutConfig":{'align':'stretch'},"items":[{"tbar":{"layoutConfig":{'align':'stretch'},"xtype":"toolbar"},"layoutConfig":{'align':'stretch'},"region":"east","frame":"true","items":[twoform],"collapsible":true,"layout":"fit","width":260,"xtype":"panel","border":false},{"layoutConfig":{'align':'stretch'},"id":"scrollDiv","region":"center","height":400,"frame":false,"autoScroll":true,"xtype":"panel","split":"true","border":false,"contentEl":"maindiv"}],"layout":"border"});
		
			
				
				
			
			
				
					
					
						
					
					
				
				
				
				
				
				
				
				
			
			
			
			
		var areaGrid_st = new Ext.data.JsonStore({"root":"root","storeId":"areaGrid_st","url":Ext.CASIT_BASE_PATH+'seatingarrage/areagrid',"fields":[{"name":"areacode"},{"name":"delegationidname"}]});var areaGrid_cm = new Ext.grid.ColumnModel({"columns":[new Ext.grid.RowNumberer(),{"hidden":true,"dataIndex":"areacode","header":"代表团代号"},{"dataIndex":"delegationidname","header":"代表团"}]});var areaGrid = new Ext.grid.EditorGridPanel({"region":"west","columnLines":true,"title":"代表团","cm":areaGrid_cm,"store":areaGrid_st,"width":180,"split":true});var persongrid_st = new Ext.data.JsonStore({"baseParams":{"limit":20,"start":0},"root":"root","autoLoad":false,"storeId":"persongrid_st","url":Ext.CASIT_BASE_PATH+'seatingarrage/persongrid',"fields":[{"name":"personid"},{"name":"personname"},{"name":"delcode"},{"name":"areaname"},{"name":"areacode"},{"name":"post"}]});var persongrid_cm = new Ext.grid.ColumnModel({"columns":[new Ext.grid.RowNumberer(),{"hidden":true,"dataIndex":"personid","header":"ID"},{"width":100,"dataIndex":"personname","header":"姓名"},{"dataIndex":"delcode","header":"代表证号"},{"width":120,"dataIndex":"areaname","header":"所属代表团"},{"hidden":true,"dataIndex":"areacode","header":"所属代表团"},{"width":240,"dataIndex":"post","header":"单位(职务)"}]});var serchstr_tf = new Ext.form.TextField({"listeners":{"keypress":{"scope":this,"fn":keypressfunc}},"enableKeyEvents":true});var persongrid_pt = new Ext.PagingToolbar({"displayInfo":true,"gridnm":"persongrid","store":persongrid_st,"pageSize":20});var persongrid = new Ext.grid.EditorGridPanel({"tbar":{"layoutConfig":{'align':'stretch'},"items":[{"text":"人员姓名：","xtype":"tbtext"},serchstr_tf,{"text":"查询","xtype":"button","iconCls":"ux-search","handler":search}],"xtype":"toolbar"},"region":"center","columnLines":true,"cm":persongrid_cm,"store":persongrid_st,"autoScroll":true,"autoSelect":false,"split":true,"fieldLabel":"true","viewConfig":{"forceFit":false},"bbar":persongrid_pt});var personchoose = new Ext.Window({"layoutConfig":{'align':'stretch'},"height":400,"closable":false,"items":[areaGrid,persongrid],"hidden":true,"layout":"border","width":850,"closeAction":"hide","buttons":[{"text":"确定","xtype":"button","handler":chooseperson},{"text":"清空","xtype":"button","handler":clearval},{"text":"取消","xtype":"button","handler":cancel}],"buttonAlign":"center","modal":true});
		 
			    
		var ftree = new Ext.ux.tree.TreeGrid({"tbar":{"layoutConfig":{'align':'stretch'},"items":["->",{"layoutConfig":{'align':'stretch'},"items":[{"text":"确定","iconAlign":"right","xtype":"button","iconCls":"ux-save","handler":choosemeet}],"xtype":"buttongroup","columns":1}],"xtype":"toolbar"},"listeners":{"afterrender":{"scope":this,"delay":10,"fn":Ext.ux.tree.initEditor}},"dataUrl":Ext.CASIT_BASE_PATH+'seatingarrage/meetingtrees',"autoScroll":false,"enableDD":true,"enableSort":false,"columns":[{"width":300,"xtype":"tgcolumn","dataIndex":"text","header":"会议名称"}]});var meetwin = new Ext.Window({"layoutConfig":{'align':'stretch'},"height":400,"closable":false,"items":[{"layoutConfig":{'align':'stretch'},"title":"会议选择","items":[ftree],"layout":"fit","xtype":"panel","border":false}],"layout":"fit","width":300,"closeAction":"hide","modal":true});
		 
					 
			
		var areaGrid2_st = new Ext.data.JsonStore({"root":"root","storeId":"areaGrid2_st","url":Ext.CASIT_BASE_PATH+'seatingarrage/areagrid',"fields":[{"name":"areacode"},{"name":"delegationidname"}]});var areaGrid2_cm = new Ext.grid.ColumnModel({"columns":[new Ext.grid.RowNumberer(),{"hidden":true,"dataIndex":"areacode","header":"代表团代号"},{"dataIndex":"delegationidname","header":"代表团"}]});var areaGrid2 = new Ext.grid.EditorGridPanel({"region":"west","columnLines":true,"title":"代表团","cm":areaGrid2_cm,"store":areaGrid2_st,"width":180,"split":true});var persongrid2_st = new Ext.data.JsonStore({"baseParams":{"limit":20,"start":0},"root":"root","autoLoad":false,"storeId":"persongrid2_st","url":Ext.CASIT_BASE_PATH+'seatingarrage/persongridinfo',"fields":[{"name":"personid"},{"name":"personname"},{"name":"areaname"},{"name":"persontypename"},{"name":"areacode"},{"name":"isrostrum"},{"name":"readyisrostrum"},{"name":"factseatid"},{"name":"factseatreadyid"}]});var persongrid2_cm = new Ext.grid.ColumnModel({"columns":[new Ext.grid.RowNumberer(),{"hidden":true,"dataIndex":"personid","header":"ID"},{"width":100,"dataIndex":"personname","header":"姓名"},{"width":120,"dataIndex":"areaname","header":"所属代表团"},{"width":120,"dataIndex":"persontypename","header":"人员类型"},{"hidden":true,"dataIndex":"areacode","header":"所属代表团"},{"hidden":true,"dataIndex":"isrostrum","header":"正式会议主席台"},{"hidden":true,"dataIndex":"readyisrostrum","header":"预备会议主席台"},{"width":140,"dataIndex":"factseatid","renderer":seatRender,"header":"正式会议位置"},{"width":140,"dataIndex":"factseatreadyid","renderer":readyseatRender,"header":"预备会议位置"}]});var serchstr_tf2 = new Ext.form.TextField({"listeners":{"keypress":{"scope":this,"fn":keypressfunc2}},"enableKeyEvents":true,"disable":false});var seatInfoCo_st = new Ext.data.ArrayStore({"listeners":{"load":{"delay":500,"fn":function(){seatInfoCo.setValue('')}}},"data":[["","全部"],["1","已排座"],["0","未排座"]],"fields":["v","n"]});var seatInfoCo = new Ext.form.ComboBox({"lazyInit":false,"store":seatInfoCo_st,"displayField":"n","width":60,"valueField":"v","value":"","triggerAction":"all","editable":false,"mode":"local"});var persontypeCo_st = new Ext.ux.JsonStore({"listeners":{"load":{"delay":500,"fn":function(){persontypeCo.setValue('')}}},"root":"root","storeId":"persontypeCo_st","url":"http://10.0.69.248:8080/scpc/commAction/commCombox?typecode=perType&&type=all","fields":["value","display"]});var persontypeCo = new Ext.form.ComboBox({"lazyInit":false,"store":persontypeCo_st,"displayField":"display","width":60,"valueField":"value","value":"","triggerAction":"all","editable":false,"mode":"local"});var persongrid2_pt = new Ext.PagingToolbar({"displayInfo":true,"gridnm":"persongrid2","store":persongrid2_st,"pageSize":20});var persongrid2 = new Ext.grid.EditorGridPanel({"tbar":{"layoutConfig":{'align':'stretch'},"items":[{"text":"人员姓名：","xtype":"tbtext"},serchstr_tf2,{"text":"排座情况：","xtype":"tbtext"},seatInfoCo,{"text":"人员类型：","xtype":"tbtext"},persontypeCo,{"text":"查询","xtype":"button","iconCls":"ux-search","handler":search2}],"xtype":"toolbar"},"region":"center","columnLines":true,"cm":persongrid2_cm,"store":persongrid2_st,"autoScroll":true,"autoSelect":false,"split":true,"fieldLabel":"true","viewConfig":{"forceFit":false},"bbar":persongrid2_pt});var totalLa = new Ext.Toolbar.TextItem({"text":"排座情况"});var personInfoWin = new Ext.Window({"layoutConfig":{'align':'stretch'},"height":520,"closable":true,"items":[areaGrid2,{"layoutConfig":{'align':'stretch'},"region":"center","items":[persongrid2,{"tbar":{"layoutConfig":{'align':'stretch'},"items":[totalLa],"xtype":"toolbar","buttonAlign":"center"},"layoutConfig":{'align':'stretch'},"region":"north","height":20,"frame":true,"xtype":"panel","border":false}],"layout":"border","xtype":"panel","border":false}],"hidden":true,"layout":"border","width":850,"closeAction":"hide","buttonAlign":"center","modal":true});
	seatInfoCo.on("select",search2);
	persontypeCo.on("select",search2);
	function seatRender(v,c,d){
		if(v==""){
			if(d.data.isrostrum=='1'){
				return '主席台';
			}
			return "<font color='red'>未分配</font>";
		}
		var teamsArr = v.split("_");
		return teamsArr[0]+"排"+teamsArr[1]+"号";
	}
	function readyseatRender(v,c,d){
		if(v==""){
			if(d.data.readyisrostrum=='1'){
				return '主席台';
			}
			return "<font color='red'>未分配</font>";
		}
		var teamsArr = v.split("_");
		return teamsArr[0]+"排"+teamsArr[1]+"号";
	}
	function search2(){
        persongrid2.getStore().baseParams['meetid'] = meetid;
        persongrid2.getStore().baseParams['personname'] = serchstr_tf2.getValue();
        persongrid2.getStore().baseParams['seatinfo'] = seatInfoCo.getValue();
        persongrid2.getStore().baseParams['persontype'] = persontypeCo.getValue();
        persongrid2.getStore().load();
 	}
	
	//键盘回车
	function keypressfunc2(t,e){
		if(e.getKey()==Ext.EventObject.ENTER){
			search2();
		}
	}
	
	function clearSeatFormTeam(){
		var teamCode = delTeam.getValue();
		var teamName = delTeam.getRawValue(); 
		if(teamCode==null||teamCode==""){
		  Ext.Msg.alert("提示","请选择代表团!");
		  return;
		}
		 Ext.Msg.confirm("提示","是否将"+teamName+"代表团位置置空?",function(t){
		   		 if(t=="yes"){
					clearSeat(teamCode);
		  		 }else{
		       		return;
		  		 }
	 		});
	}	
	function clearPersonFromTeam(){
		var teamCode = delTeam.getValue();
		var teamName = delTeam.getRawValue(); 
		if(teamCode==null||teamCode==""){
		  Ext.Msg.alert("提示","请选择代表团!");
		  return;
		}
		 Ext.Msg.confirm("提示","是否清除"+teamName+"代表团所有人员位置?",function(t){
		   		 if(t=="yes"){
					clearPerson(teamCode);
		  		 }else{
		       		return;
		  		 }
	 		});
	}	
	function clearAllPerson(){
		 Ext.Msg.confirm("提示","是否清除所有代表团所有人员位置?",function(t){
		   		 if(t=="yes"){
					clearPerson("","all");
		  		 }else{
		       		return;
		  		 }
	 		});
	}
	function clearPerson(teamcode,type){
 		Ext.Ajax.request({
			url : 'http://10.0.69.248:8080/scpc/seatingarrage/clearperson',
			params : {
				teamCode:teamcode,
				type:type,
				meetid:meetid
			},
			success :function(xhr){
				 if(xhr.responseText='success'){
				 	window.location.href=window.location.href;
				 }
			},
	    failure : failfunc
		});	
	}
	function clearSeat(teamcode,type){
		Ext.Ajax.request({
			url : 'http://10.0.69.248:8080/scpc/seatingarrage/clearseat',
			params : {
				teamCode:teamcode,
				type:type,
				meetid:meetid
			},
			success :function(xhr){
				 if(xhr.responseText='success'){
				 	window.location.href=window.location.href;
				 }
			},
	    failure : failfunc
		});	
	}
	var tempSeat="";
	areaGrid.on('rowclick',function(grid,rowIndex){
		//获得所点击行的代表团的代号
		var areacode = areaGrid.getStore().getAt(rowIndex).get("areacode");
		persongrid.getStore().baseParams['areacode'] = areacode;
		persongrid.getStore().load(); 
	})
	areaGrid2.on('rowclick',function(grid,rowIndex){
		//获得所点击行的代表团的代号
		var areacode = areaGrid2.getStore().getAt(rowIndex).get("areacode");
		persongrid2.getStore().baseParams['areacode'] = areacode;
		persongrid2.getStore().load(); 
		showPerNum(areacode);
	})
	function search(){
        persongrid.getStore().baseParams['meetid'] = meetid;
        persongrid.getStore().baseParams['personname'] = serchstr_tf.getValue();
        persongrid.getStore().load();
 	}
	
	//键盘回车
	function keypressfunc(t,e){
		if(e.getKey()==Ext.EventObject.ENTER){
			search();
		}
	}
	//关闭弹出框
	function cancel(){
		tempSeat="";
		personchoose.hide();
	}
	//清空
	function clearval(){
		persongrid.getSelectionModel().clearSelections(true);
		persongrid.getStore().reload();
	}
	function chooseperson(){
        var rd=persongrid.getSelectionModel().getSelected();
        if(!Ext.isDefined(rd)){
        	Ext.Msg.alert('提示','没有选择人员数据，请检查！');
        	return;
        }
	    var selPersonid=rd.get("personid");
	    var selareaCode=rd.get("areacode");
	    Ext.Ajax.request({
			url : 'http://10.0.69.248:8080/scpc/seatingarrage/distributionforone',
			params : {
				personid:selPersonid,
				areacode:selareaCode,
				seatid:tempSeat,
				meetid:meetid
			},
			success :function(xhr){
				 if(xhr.responseText='success'){
				 	window.location.href=window.location.href;
				 }
			},
	    failure : failfunc
		});	
		personchoose.hide();
	}
	changeSeatBox.on('check',function(t,c){
		if(c){
			checkBoxChange(t);
			firstSeat.setText("请选择第一个位置");
		}else{
			firstSeat.setText("");
			secondSeat.setText("");
			changeSeatArr=[];
		}
	});
	distributionForOneBox.on('check',function(t,c){
		if(c){
			firstSeat.setText("");
			secondSeat.setText("");
			changeSeatArr=[];
			checkBoxChange(t);
			firstSeat.setText("请选择要指定的位置！");
		}else{
			firstSeat.setText("");
		}
	});
	clearOneSeatPersonBox.on('check',function(t,c){
		if(c){
			firstSeat.setText("");
			secondSeat.setText("");
			changeSeatArr=[];
			checkBoxChange(t);
			firstSeat.setText("请选择要清除的位置！");
		}else{
			firstSeat.setText("");
		}
	});
	clearOneSeatBox.on('check',function(t,c){
		if(c){
			firstSeat.setText("");
			secondSeat.setText("");
			changeSeatArr=[];
			checkBoxChange(t);
			firstSeat.setText("请选择要置空的位置！");
		}else{
			firstSeat.setText("");
		}
	});
	function choosemeet(){
		var selNode = ftree.getSelectionModel().getSelectedNode();
		if(!selNode){
			Ext.Msg.alert("提示信息","请先选择要操作的会议!");
			return;
		}
		if(selNode.attributes.leaf==false){
			Ext.Msg.alert("提示信息","请先选择要操作的子会议!");
			return;
		}
  		 meetid= selNode.id;
  		 var meetname = selNode.parentNode.text+selNode.text;
	 	window.location.href=window.location.href+"?meetid="+meetid+"&meetname="+encodeURI(encodeURI(meetname));
		meetwin.hide();
	}
	function init(){
		meetid=getQueryString('meetid');
		if(meetid==null){
			meetwin.show();
		}else{
		meetname.setText("<font color='red'>"+decodeURI(decodeURI(getQueryString('meetname')))+"</font>");
		personInfoWin.show();
		personInfoWin.hide();
		}
	}
	init();
	extSelectEvent = function selectSeatEvent(ids){
		selIdsHid.setValue(ids);
		console.info(selIdsHid.getValue());
			//dbbut.show();
	}
	var changeSeatArr = [];
	clickSeatFunc =function clickSeatFunction(t){
		var tempStr;
		if(changeSeatBox.getValue()=='1'){
			changeSeatFunc(t);
		}else if(distributionForOneBox.getValue()=='1'){
	       distributionForOneFunc(t);
		}else if(clearOneSeatPersonBox.getValue()=='1'){
			clearOneSeatPersonFunc(t);
		}else if(clearOneSeatBox.getValue()=='1'){
			clearOneSeatFunc(t);
		}else{
			cancelChoose(t);
		}
	}
	//交换位置
	function changeSeatFunc(t){
		if(changeSeatArr.length==0||!$(t).attr('id')!=changeSeatArr[0]){
			changeSeatArr.push($(t).attr('id'));
			tempStr = changeSeatArr[0].split("_");
			var firstS = tempStr[0]+"排"+tempStr[1]+"号";
			firstSeat.setText("第一个位置:"+firstS);
			secondSeat.setText("请选择第二个位置");
		}
		if(changeSeatArr.length==2){
			tempStr = changeSeatArr[1].split("_");
			var secondS = tempStr[0]+"排"+tempStr[1]+"号";
			secondSeat.setText("第二个位置:"+secondS);
			Ext.Msg.confirm("提示","是否确认调换"+firstS+","+secondS+"这两个位置的人员?",function(t){
		   		 if(t=="yes"){
	   		 		Ext.Ajax.request({
						url : 'http://10.0.69.248:8080/scpc/seatingarrage/changeSeat',
						params : {
							seatf:changeSeatArr[0],
							seats:changeSeatArr[1],
							meetid:meetid
						},
						success :function(xhr){
							 if(xhr.responseText='success'){
							 	window.location.href=window.location.href;
							 }
						},
				    failure : failfunc
					});	
		  		 }else{
	   		 		firstSeat.setText("请选择第一个位置");
					secondSeat.setText("");
					changeSeatArr=[];
		  		 }
		 		});
		}
	}
	//指定单个位置
	function distributionForOneFunc(t){
		if(choosepersonName==""||choosepersonName.indexOf("未分配")!=-1){
	 		persongrid.getStore().baseParams['meetid'] = meetid;
			persongrid.getStore().load();
			personchoose.show();
			tempSeat = $(t).attr('id');
		}else{
			Ext.Msg.alert("提示","该位置已有人员!请重新选择。");
		}
	}
	//取消选择
	function cancelChoose(t){
		if(t.className.indexOf("selected") != -1 ){
			t.className = "seatCharts-seat seatCharts-cell available economy-class";
			chooseSeatCount--;
			var tempValue=selIdsHid.getValue();
			var tId = t.id+";";
			newValue = tempValue.replace(tId,"");
			selIdsHid.setValue(newValue);
  	 		$('#totalSeat').html("共选择了<font color='red'> " + chooseSeatCount + " </font>个位置");
		}else if(t.className.indexOf("economy-class") != -1){
			t.className = "seatCharts-seat seatCharts-cell economy-class selected";
			chooseSeatCount++;
			var tempValue=selIdsHid.getValue();
			var tId = t.id+";";
			tempValue = tempValue+tId;
			selIdsHid.setValue(tempValue);
  	 		$('#totalSeat').html("共选择了<font color='red'> " + chooseSeatCount + " </font>个位置");
		}
	}
	//取消复选框勾选
	function checkBoxChange(t){
		var boxArr=[];
		boxArr.push(changeSeatBox);
		boxArr.push(distributionForOneBox);
		boxArr.push(clearOneSeatPersonBox);
		boxArr.push(clearOneSeatBox);
		for(var i=0;i< boxArr.length;i++){
			if(boxArr[i]!=t){
				boxArr[i].setValue(0);
			}
		}
	}
	//清除指定位置人员
	function clearOneSeatPersonFunc(t){
		var clearseatid = $(t).attr('id');
		var clearseatidArr = clearseatid.split("_");
		var seatname = clearseatidArr[0]+"排"+clearseatidArr[1]+"号";
		 Ext.Msg.confirm("提示","是否移除"+seatname+"位置人员("+choosepersonName+")?",function(th){
	   		 if(th=="yes"){
	   		 	Ext.Ajax.request({
						url : 'http://10.0.69.248:8080/scpc/seatingarrage/clearOneSeatPerson',
						params : {
							seatid:clearseatid,
							meetid:meetid
						},
						success :function(xhr){
							 if(xhr.responseText='success'){
							  $(t).css("color","#FFFFFF");
							 	Ext.Msg.alert("提示","清除人员成功!");
						 }
					},
			    failure : failfunc
				});	
	  		 }else{
	       		return;
	  		 }
 		});
		
	}
	//将指定位置置空
	function clearOneSeatFunc(t){
		var clearseatid = $(t).attr('id');
		var clearseatidArr = clearseatid.split("_");
		var seatname = clearseatidArr[0]+"排"+clearseatidArr[1]+"号";
		 Ext.Msg.confirm("提示","是否将"+seatname+"位置置空?",function(c){
	   		 if(c=="yes"){
   		 		Ext.Ajax.request({
					url : 'http://10.0.69.248:8080/scpc/seatingarrage/clearOneSeat',
					params : {
						seatid:clearseatid,
						meetid:meetid
					},
					success :function(xhr){
						 if(xhr.responseText='success'){
						 	t.className = "seatCharts-seat seatCharts-cell available economy-class";
						 	$(t).css("color","#FFFFFF");
					 		Ext.Msg.alert("提示","清空位置成功!");
					 }
					},
				    failure : failfunc
					});	
	  		 }else{
	       		return;
	  		 }
 		});
	}
	});</script><script type="text/javascript" src="http://10.0.69.248:8080/scpc/base/ux/treeGrid.js"></script>
	</head>
	
	<body>

		<div class="wrapper" id="maindiv">
			<div class="container">
				<div id="seat-map" style=" width: 1400px;">
				</div>
			</div>
			 <div id="legend"></div> 
		</div>
		<div id="mydiv1" style="position:absolute;display:none;border:1px solid silver;background:#99CCFF;"></div>
		<script src="http://10.0.69.248:8080/scpc/base/js/jquery.min.js"></script>
		<script src="http://10.0.69.248:8080/scpc/base/js/jquery.seat-charts.js"></script>
		
		<script>
		var clickSeatFunc;
		var extSelectEvent;
		var firstSeatLabel = 1;
		//选中位置
		var chooseSeatCount = 0;
		//选中人员姓名
		var choosepersonName="";
		var meetid;
		function getQueryString(name) {
		    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		    var r = window.location.search.substr(1).match(reg);
		    if (r != null) return unescape(r[2]); return null;
	    }
		function seatinit(){
			meetid=getQueryString('meetid');
		}
		function show(obj,id,text) { 
			var objDiv = $("#"+id+""); 
			$(objDiv).css("display","block"); 
			$(objDiv).css("left", event.clientX); 
			$(objDiv).css("top", event.clientY + 30); 
			if(text==""){
				text="空位";
			}else if(text=="0"){
				text="";
			}
			$(objDiv).html(text);
		} 
		function hide(obj,id) { 
			var objDiv = $("#"+id+""); 
			$(objDiv).css("display", "none"); 
		} 
		seatinit();
		$(document).ready(function() {
		var map1;
		var seats;
		var legendJa;
		$.ajax({
				type     : 'get',
				url      : 'http://10.0.69.248:8080/scpc/seatingarrage/seatmaping',
				//dataType : 'json',
				async: false ,
				data:{meetid:meetid},
				success  : function(response) {
					if(response==""){
						return;
					}
				response = eval("(" + response + ")");
				map1 = response.map;
				seats = response.seats;
				legendJa=response.legendJa;
					//iterate through all bookings for our event 
					//$.each(response.bookings, function(index, booking) {
					//find seat by id and set its status to unavailable
					//sc.status('7-3', 'unavailable');
				//});
			 }
    	});
				var $cart = $('#selected-seats'),
					sc = $('#seat-map').seatCharts({
					map: map1,
					seats:seats.seats,
					naming : {
						top : false,
						getLabel : function (character, row, column) {
							return firstSeatLabel++;
						},
					},
					legend : {
						node : $('#legend'),
					    items : legendJa				
					},
					click: function () {
					alert(1);
					}
				});
				/*
			setInterval(function() {
					$.ajax({
						type     : 'get',
						url      : '/bookings/get/100',
						dataType : 'json',
						success  : function(response) {
							//iterate through all bookings for our event 
							$.each(response.bookings, function(index, booking) {
							//find seat by id and set its status to unavailable
							sc.status('7-3', 'unavailable');
					});
				}
			});
	}, 10000); //every 10 seconds
	*/

				//this will handle "[cancel]" link clicks
				$('#selected-seats').on('click', '.cancel-cart-item', function () {
					//let's just trigger Click event on the appropriate seat, so we don't have to repeat the logic here
					sc.get($(this).parents('li:first').data('seatId')).click();
				});

				//let's pretend some seats have already been booked
				sc.get(['1_29', '1_30', '22_51', '22_50']).status('unavailable');
				seatFontColor();
				$(".available").each(function(){
					if($.inArray(this.id,seatArr)!=-1){
						//this.className = "seatCharts-seat seatCharts-cell available economy-class";
						$(this).css("color","black");
// 						$(this).css("border-radius",0);
					}
					$(this).mouseover(function(){
						$.ajax({
							type     : 'get',
							url      : 'http://10.0.69.248:8080/scpc/seatingarrage/queryperson',
							//dataType : 'json',
							async: false ,
							data:{meetid:meetid,seatid:$(this).attr("id")},
							success  : function(response) {
									choosepersonName=response;
								show(this,'mydiv1',response);
						 }
			    		});
					});
					$(this).mouseout(function(){
						hide(this,'mydiv1');
					});
					$(this).click(function(){
						clickSeatFunc(this);
					});
				//	$(this).css("color","black");
				});
		});
		var seatArr;
		function seatFontColor(){
			if(meetid==""||meetid==null){
				return;
			}
			$.ajax({
				type     : 'get',
				url      : 'http://10.0.69.248:8080/scpc/seatingarrage/getAlreadSeat',
			//dataType : 'json',
				async: false ,
				data:{meetid:meetid},
				success  : function(response) {
					if(response==""){
						return;
					}
					seatArr = eval("(" + response + ")");
			}
			});
		}
		function recalculateTotal(sc) {
			var total = 0;
		
			//basically find every selected seat and sum its price
			sc.find('selected').each(function () {
				total += this.data().price;
			});
			
			return total;
		}
		
		</script>
		<script type="text/javascript"> 
(function() {
  document.getElementById("seat-map").onmousedown = function() {

    var selList = [];
    var fileNodes = document.getElementsByTagName("div");
    for ( var i = 0; i < fileNodes.length; i++) {
      if (fileNodes[i].className.indexOf("unavailable") == -1&&fileNodes[i].className.indexOf("seatCharts-seat")!=-1) {
       // fileNodes[i].className = "available";
        selList.push(fileNodes[i]);
      }
    }

    var isSelect = true;
    var evt = window.event || arguments[0];
    var startX = (evt.x || evt.clientX);
    var startY = (evt.y || evt.clientY);
    var selDiv = document.createElement("div");
    selDiv.style.cssText = "position:absolute;width:0px;height:0px;font-size:0px;margin:0px;padding:0px;border:1px dashed #0099FF;background-color:#C3D5ED;z-index:1000;filter:alpha(opacity:60);opacity:0.6;display:none;";
    selDiv.id = "selectDiv";
    document.body.appendChild(selDiv);

    selDiv.style.left = startX + "px";
    selDiv.style.top = startY + "px";

    var _x = null;
    var _y = null;
    clearEventBubble(evt);
	var ismove=false;
    document.getElementById("seat-map").onmousemove = function() {
      evt = window.event || arguments[0];
      if (isSelect) {
    	ismove=true;
        if (selDiv.style.display == "none") {
          selDiv.style.display = "";
        }
        _x = (evt.x || evt.clientX);
        _y = (evt.y || evt.clientY);
        selDiv.style.left = Math.min(_x, startX) + "px";
        selDiv.style.top = Math.min(_y, startY) + "px";
        selDiv.style.width = Math.abs(_x - startX) + "px";
        selDiv.style.height = Math.abs(_y - startY) + "px";
        //scrollTop/left解决出现滚动条后无法框选问题
        var _l = selDiv.offsetLeft+$('#scrollDiv').children().children().scrollLeft(), _t = selDiv.offsetTop+$('#scrollDiv').children().children().scrollTop();
        var _w = selDiv.offsetWidth, _h = selDiv.offsetHeight;
        for ( var i = 0; i < selList.length; i++) {
          var sl = selList[i].offsetWidth + selList[i].offsetLeft;
          var st = selList[i].offsetHeight + selList[i].offsetTop;
          //_h-100px（解决顶部panel）
          if (sl > _l && st > _t && selList[i].offsetLeft < _l + _w && selList[i].offsetTop < _t + _h) {
            if (selList[i].className.indexOf("selected") == -1 &&selList[i].className.indexOf("unavailable") == -1 ) {
            	//是否未分配位置
            	if(selList[i].className.indexOf("economy-class") == -1 ){
            		   //Ext.Msg.confirm("提示","您选择的座位含已分配的位置，是否继续?",function(t){
				   		 //if(t=="yes"){
              				//selList[i].className = "seatCharts-seat seatCharts-cell economy-class selected";
				  		 //}else{
				       		//return;
				  		// }
   				 		//});
            	}else{
              				selList[i].className = "seatCharts-seat seatCharts-cell economy-class selected";
            	}
            
              
            }else{
             // selList[i].className =  "seatCharts-seat seatCharts-cell available economy-class";
            }
          } else {
            if (selList[i].className.indexOf("selected") != -1) {
              //selList[i].className = "fileDiv";
            }
          }
        }

      }
      clearEventBubble(evt);
    }

    document.onmouseup = function() {
      isSelect = false;
      if (selDiv) {
        document.body.removeChild(selDiv);
        if(ismove){
        showSelDiv(selList);
        ismove=false;
        }
      }
      selList = null, _x = null, _y = null, selDiv = null, startX = null, startY = null, evt = null;
    }
  }
})();
function clearEventBubble(evt) {
  if (evt.stopPropagation)
    evt.stopPropagation();
  else
    evt.cancelBubble = true;
  if (evt.preventDefault)
    evt.preventDefault();
  else
    evt.returnValue = false;
}
function showSelDiv(arr) {
  var count = 0;
  var selInfo = "";
  for ( var i = 0; i < arr.length; i++) {
    if (arr[i].className.indexOf("selected") != -1) {
      count++;
      selInfo += arr[i].id + ";";
    }
  }
  if(count!=0){
	  chooseSeatCount=count;
  	  $('#totalSeat').html("共选择了<font color='red'> " + count + " </font>个位置");
	  extSelectEvent(selInfo);
  }
  //alert("共选择 <font color='red'>" + count + " 个位置，分别是：\n" + selInfo);
}

</script>
<script type="text/javascript" src="http://10.0.69.248:8080/scpc/base/js/excelRelevant.js"></script>
	</body>
</html>


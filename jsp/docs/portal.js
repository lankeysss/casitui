var iboxtoolshtml=
'<div class="ibox-tools">  '+
 '	<a class="dropdown-toggle" data-toggle="dropdown" href="table_basic.html#">'+
  '    <i class="fa fa-wrench"></i>'+
'  </a>'+
'   <ul class="dropdown-menu dropdown-user">'+
'     <li><a  >设置<button class="gaodubutton  portalmaxheight">最大高度</button>'+
'                  <button class="gaodubutton portalminheight">最小高度</button></a> '+
'      </li> '+
'      <li><a >设置宽度比例:</a> '+
'      	<div> '+
'      		<table style="  margin-left: 5px;   margin-right: 5px;">'+
'      		<tr>'+
'      			<td><button class="kuandubutton">2</button></td>'+
'      			<td><button class="kuandubutton">3</button></td>'+
'      			<td><button class="kuandubutton">4</button></td>'+
'      			<td><button class="kuandubutton">5</button></td>'+
'      			<td><button class="kuandubutton">6</button></td>'+
'      			<td><button class="kuandubutton">7</button></td>'+
'      		</tr>'+
'      		<tr>'+
'      			<td><button class="kuandubutton">8</button></td>'+
'      			<td><button class="kuandubutton">9</button></td>'+
'      			<td><button class="kuandubutton">10</button></td>'+
'      			<td><button class="kuandubutton">11</button></td>'+
'      			<td><button class="kuandubutton">12</button></td> '+
'      		</tr> '+
'      		</table> '+
'        </div>'+
'      </li>'+
'      <li><a  >向前移动<button class="qianbutton portalqian1">1格</button>'+
'                       <button class="qianbutton portalqiantop">最前</button></a> '+
'      </li>'+
'      <li><a  >向后移动<button class="houbutton  portalhou1">1格</button>'+
'                       <button class="houbutton  portalhoutop">最后</button></a> '+
'      </li>'+
 ' </ul>'+
'  <a class="collapse-link">'+
'      <i class="fa fa-chevron-up"></i>'+
'  </a>'+
'	<a class="allsc-link">'+
'      <i class="fa fa-arrows-alt"></i>'+
'  </a>'+
//'  <a class="allscw-link">'+
//'      <i class="fa fa-arrows-h"></i>'+
//'  </a>'+
'  <a class="close-link">'+
'      <i class="fa fa-times"></i>'+
'  </a> '+
'</div>'+
'</div>'+
'';

// tooltips
$('.ibox-title').append( iboxtoolshtml);

//全屏横向
$('body').on('click','.allscw-link',function(e,t){    
		var divv=$(this).closest('div.portalpanel');
    var ibox = $(this).closest('div.ibox');
    var button = $(this).find('i ');
    var content = ibox.find('div.ibox-content');
    var setwidth=divv.attr('data-w');
    
    divv.toggleClass('col-sm-'+setwidth).toggleClass('col-sm-12');
    if(divv.hasClass('col-sm-12')){
    	divv.toggleClass('animated slideInLeft' );
	    setTimeout(function(){
	      divv.removeClass('animated slideInLeft');
	   	}, 1000);
    }else{
    	content.css("height","100%");
    	divv.toggleClass('animated lightSpeedIn ' );
	    setTimeout(function(){
	      divv.removeClass('animated lightSpeedIn ');
	   	}, 1000);
    }
     
});



//全屏
$('body').on('click','.allsc-link',function(e,t){   
		var divv=$(this).closest('div.portalpanel');
    var ibox = $(this).closest('div.ibox');
    var button = $(this).find('i ');
    var content = ibox.find('div.ibox-content');
    var bodyheight=$('body').height()-90; 
    var setwidth=divv.attr('data-w');
    
    divv.toggleClass('col-sm-'+setwidth).toggleClass('col-sm-12');
    button.toggleClass('fa-compress').toggleClass('fa-arrows-alt');   
    if(divv.hasClass('col-sm-12')){
     	content.css("height",bodyheight+"px");
    	divv.toggleClass('animated slideInLeft' );
	    setTimeout(function(){
	      divv.removeClass('animated slideInLeft');
	   	}, 1000);
    }else{
    	content.css("height","100%");
    	divv.toggleClass('animated lightSpeedIn ' );
	    setTimeout(function(){
	      divv.removeClass('animated lightSpeedIn ');
	   	}, 1000);
    }
    
   // content.slideToggle(200);
   // button.toggleClass('fa-arrows-h').toggleClass('fa-arrows-h');
  //  ibox.toggleClass('').toggleClass('border-bottom');
    //setTimeout(function () {
   //     ibox.resize();
   //     ibox.find('[id^=map-]').resize();
   // }, 50);
});


//设置宽度
$('body').on('click','.kuandubutton',function(e,t){  
		var divv=$(this).closest('div.portalpanel');
    var ibox = $(this).closest('div.ibox');
    var button = $(this).find('i ');
    var content = ibox.find('div.ibox-content');
    var btsetwidth=$(this)[0].innerText;
    var setwidth=divv.attr('data-w');
    
    divv.toggleClass('col-sm-'+setwidth).toggleClass('col-sm-'+btsetwidth);
    if(divv.hasClass('col-sm-'+btsetwidth)){
    	divv.toggleClass('animated slideInLeft' );
	    setTimeout(function(){
	      divv.removeClass('animated slideInLeft');
	   	}, 1000);
    }else{ 
    	divv.toggleClass('animated lightSpeedIn ' );
	    setTimeout(function(){
	      divv.removeClass('animated lightSpeedIn ');
	   	}, 1000);
    }
    
    divv.attr('data-w',btsetwidth);
});


//设置最大高度
$('body').on('click','.portalmaxheight',function(e,t){   
		var divv=$(this).closest('div.portalpanel');
    var ibox = $(this).closest('div.ibox');
    var button = $(this).find('i ');
    var content = ibox.find('div.ibox-content');
    var btsetwidth=$(this)[0].innerText;
    var setwidth=divv.attr('data-w');
    
		pubwin.prompt("设置最大高度","请输入高度值：(当前高度:"+content.outerHeight()+")"
		,function (val){   
    	content.css("max-height",val+"px");
	    if(divv.hasClass('col-sm-'+btsetwidth)){
	    	divv.toggleClass('animated slideInLeft' );
		    setTimeout(function(){
		      divv.removeClass('animated slideInLeft');
		   	}, 1000);
	    }else{ 
	    	divv.toggleClass('animated lightSpeedIn ' );
		    setTimeout(function(){
		      divv.removeClass('animated lightSpeedIn ');
		   	}, 1000);
	    } 
	    divv.attr('data-maxh',val);	
		}
		,function (val){ console.log("取消回调"+val);},"400px"
		); 
    
});




//设置最小高度 
$('body').on('click','.portalminheight',function(e,t){  
		var divv=$(this).closest('div.portalpanel');
    var ibox = $(this).closest('div.ibox');
    var button = $(this).find('i ');
    var content = ibox.find('div.ibox-content');
    var btsetwidth=$(this)[0].innerText;
    var setwidth=divv.attr('data-w');
    
		pubwin.prompt("设置最小高度","请输入高度值：(当前高度:"+content.outerHeight()+")"
		,function (val){   
    	content.css("min-height",val+"px");
	    if(divv.hasClass('col-sm-'+btsetwidth)){
	    	divv.toggleClass('animated slideInLeft' );
		    setTimeout(function(){
		      divv.removeClass('animated slideInLeft');
		   	}, 1000);
	    }else{ 
	    	divv.toggleClass('animated lightSpeedIn ' );
		    setTimeout(function(){
		      divv.removeClass('animated lightSpeedIn ');
		   	}, 1000);
	    } 
	    divv.attr('data-minh',val);	
		}
		,function (val){ console.log("取消回调"+val);},"400px"
		); 
    
});



//前移一格
$('body').on('click','.portalqian1',function(e,t){ 
		var divv=$(this).closest('div.portalpanel');
    var ibox = $(this).closest('div.ibox');
    var button = $(this).find('i ');
    var content = ibox.find('div.ibox-content');
    var btsetwidth=$(this)[0].innerText;
    var setwidth=divv.attr('data-w');
    
		var divwrap=$(this).closest('div.wrapper-content');
     
    if(divv.prev().length==0){
    	divv.toggleClass('animated shake ' );
	    setTimeout(function(){
	      divv.removeClass('animated shake ');
	   	}, 1000); 
    }else{
	    var divvprev=divv.prev();
	    divv.prev().before(divv[0].outerHTML); 
	    var divvprevnew=divv.prev().prev(); 
	    divv.remove();
	          
	    divvprev.toggleClass('animated fadeInLeft ' );
	    setTimeout(function(){
	      divvprev.removeClass('animated fadeInLeft ');
	   	}, 1000);
	   	
	   	divvprevnew.toggleClass('animated fadeInRight ' );
	    setTimeout(function(){
	      divvprevnew.removeClass('animated fadeInRight ');
	   	}, 1000);  
    }
    	
    
    
}); 


//后移一格
$('body').on('click','.portalhou1',function(e,t){ 
		var divv=$(this).closest('div.portalpanel');
    var ibox = $(this).closest('div.ibox');
    var button = $(this).find('i ');
    var content = ibox.find('div.ibox-content');
    var btsetwidth=$(this)[0].innerText;
    var setwidth=divv.attr('data-w');
    
		var divwrap=$(this).closest('div.wrapper-content');
     
     if(divv.next().length==0){
    	divv.toggleClass('animated shake ' );
	    setTimeout(function(){
	      divv.removeClass('animated shake ');
	   	}, 1000); 
    }else{
	    var divvprev=divv.next();
	    divv.next().after(divv[0].outerHTML); 
	    var divvprevnew=divv.next().next(); 
	    divv.remove();
	          
	    divvprev.toggleClass('animated fadeInLeft ' );
	    setTimeout(function(){
	      divvprev.removeClass('animated fadeInLeft ');
	   	}, 1000);
	   	
	   	divvprevnew.toggleClass('animated fadeInRight ' );
	    setTimeout(function(){
	      divvprevnew.removeClass('animated fadeInRight ');
	   	}, 1000);  
    }
}); 



//前移最前
$('body').on('click','.portalqiantop',function(e,t){ 
		var divv=$(this).closest('div.portalpanel');
    var ibox = $(this).closest('div.ibox');
    var button = $(this).find('i ');
    var content = ibox.find('div.ibox-content');
    var btsetwidth=$(this)[0].innerText;
    var setwidth=divv.attr('data-w');
    
		var divwrap=$(this).closest('div.wrapper-content');
     
    if(divv.prev().length==0){
    	divv.toggleClass('animated shake ' );
	    setTimeout(function(){
	      divv.removeClass('animated shake ');
	   	}, 1000); 
    }else{
	    var divvprev=divv.prev(); 
	    while(divvprev.prev().length!=0){
	    	divvprev=divvprev.prev();
	    }
	    divvprev.before(divv[0].outerHTML); 
	    var divvprevnew=divvprev.prev(); 
	    divv.remove(); 
	   	
	   	divvprevnew.toggleClass('animated fadeInRight ' );
	    setTimeout(function(){
	      divvprevnew.removeClass('animated fadeInRight ');
	   	}, 1000);  
    }
    	
    
    
}); 


//后移最后
$('body').on('click','.portalhoutop',function(e,t){ 
		var divv=$(this).closest('div.portalpanel');
    var ibox = $(this).closest('div.ibox');
    var button = $(this).find('i ');
    var content = ibox.find('div.ibox-content');
    var btsetwidth=$(this)[0].innerText;
    var setwidth=divv.attr('data-w');
    
		var divwrap=$(this).closest('div.wrapper-content');
     
     if(divv.next().length==0){
    	divv.toggleClass('animated shake ' );
	    setTimeout(function(){
	      divv.removeClass('animated shake ');
	   	}, 1000); 
    }else{
	    var divvprev=divv.next();
	    while(divvprev.next().length!=0){
	    	divvprev=divvprev.next();
	    }
	    divvprev.after(divv[0].outerHTML); 
	    var divvprevnew=divvprev.next(); 
	    divv.remove(); 
	    
	   	divvprevnew.toggleClass('animated fadeInRight ' );
	    setTimeout(function(){
	      divvprevnew.removeClass('animated fadeInRight ');
	   	}, 1000);  
    }
}); 


require.config({
    packages: [
        {
            name: 'zrender',
            location: '../../base/plugins/zrender/src',
            main: 'zrender'
        }
    ]
});



var zrender ;
var pzrender={};
var pline;
var parrow;
var pstart;
var pend;

var ptask;
var psubtask;
var pdoc;
var ptext;

var pbranch;
var pmerge;
var proute;

var phangup;
var pexception;

var ppoint;
var mk0suhaxin;
var mk0suhaxin2;

require(
    [
        'zrender' ,
    ],
    function (ec) { 
    	zrender = require('zrender');
    	
////////////////////pline  线
var Base = require('zrender/shape/Base'); 

pline=function pline(options) { 
	if(options.style==null){options.style={};} 
	options.style.type="pline";

	options.clickable=true;
 	options.style.color="#AFAFAF";  
	options.zlevel=0;
	options.style.textColor="#333333";
	options.style.strokeColor="#999999";
	options.textPosition="top"; 
	if(options.begin==null || options.end==null){ }  else{ 
	//	options.style.xStart=(pzrender.getobjx(options.begin)+pzrender.getobjx(options.end))/2;   
	//	options.style.yStart=(pzrender.getobjy(options.begin)+pzrender.getobjy(options.end))/2+24; 
	//	options.style.xEnd=options.style.xStart; 
	//	options.style.yEnd=options.style.yStart; 
	}
	//options.style.text="111000";
	//this.brushTypeOnly = 'stroke';  // 线条只能描边，填充后果自负
    this.textPosition = 'end';
    Base.call(this, options);
};

pline.prototype =  {
        type: 'pline',

        /**
         * 创建线条路径
         * @param {CanvasRenderingContext2D} ctx
         * @param {module:zrender/shape/Line~ILineStyle} style
         */
        buildPath : function (ctx, style) { 
        	ctx.save();
            ctx.beginPath();
            ctx.strokeStyle = style.strokeColor || style.color;
            if(this.begin==null || this.end==null){
            	ctx.moveTo(0,0);
    	        ctx.lineTo(0,0);	
            }else{   
            	/*this.style.xEnd=this.style.xStart; 
            	this.style.yEnd=this.style.yStart;  
            	*/
            	if(style.text!=null && style.text.length>1){
            		ctx.fillStyle = '#333333';
            		text = (style.text + '').split('\n');
            	var textx=(pzrender.getobjx(this.begin)+pzrender.getobjx(this.end))/2-  (style.text.length*4 / text.length);   
            	var texty=(pzrender.getobjy(this.begin)+pzrender.getobjy(this.end))/2-3; 
            	
            	  
            	  for (var i = 0, l = text.length; i < l; i++) {
            		  ctx.fillText(text[i],textx,texty);
            		  texty += 11;
                  }
            	
            	}
            	if (!style.lineType || style.lineType == 'a') {
                    // 默认为实线 
        	        ctx.moveTo(pzrender.getobjx(this.begin),pzrender.getobjy(this.begin));
        	        ctx.lineTo(pzrender.getobjx(this.end),pzrender.getobjy(this.end));	 
                }
                else if (style.lineType == 'b'
                        || style.lineType == 'c'
                ) {
                    var dashLength = (style.lineWidth || 1)  
                                     * (style.lineType == 'c' ? 15 : 3);
                    this.dashedLineTo(
                        ctx,
                        pzrender.getobjx(this.begin), pzrender.getobjy(this.begin),
                        pzrender.getobjx(this.end), pzrender.getobjy(this.end),
                        dashLength
                    );
                }
    			
            }
            ctx.closePath();
            ctx.stroke();
            ctx.restore();
            return;
        },
        dashedLineTo: function (ctx, x1, y1, x2, y2, dashLength) {
            	var dashPattern = [ 15, 15 ];
                // http://msdn.microsoft.com/en-us/library/ie/dn265063(v=vs.85).aspx
                if (ctx.setLineDash) {
                    dashPattern[0] = dashPattern[1] = dashLength;
                    ctx.setLineDash(dashPattern);
                    ctx.moveTo(x1, y1);
                    ctx.lineTo(x2, y2);
                    return;
                }

                dashLength = typeof dashLength != 'number'
                                ? 5 
                                : dashLength;

                var dx = x2 - x1;
                var dy = y2 - y1;
                var numDashes = Math.floor(
                    Math.sqrt(dx * dx + dy * dy) / dashLength
                );
                dx = dx / numDashes;
                dy = dy / numDashes;
                var flag = true;
                for (var i = 0; i < numDashes; ++i) {
                    if (flag) {
                        ctx.moveTo(x1, y1);
                    }
                    else {
                        ctx.lineTo(x1, y1);
                    }
                    flag = !flag;
                    x1 += dx; 
                    y1 += dy;
                }
                ctx.lineTo(x2, y2);
            } ,

        /**
         * 计算返回线条的包围盒矩形
         * @param {module:zrender/shape/Line~ILineStyle} style
         * @return {module:zrender/shape/Base~IBoundingRect}
         */
        getRect : function (style) {
            if (style.__rect) {
                return style.__rect;
            }
            
            var lineWidth = style.lineWidth || 1;
            style.__rect = {
                x : Math.min(style.xStart, style.xEnd) - lineWidth,
                y : Math.min(style.yStart, style.yEnd) - lineWidth,
                width : Math.abs(style.xStart - style.xEnd)
                        + lineWidth,
                height : Math.abs(style.yStart - style.yEnd)
                         + lineWidth
            };
            
            return style.__rect;
        }
    };
 
require('zrender/tool/util').inherits(pline, Base);
 mk0suhaxin=new pline({ });


 
 
 
 
 
 

////////////////////parrow  线
var Base = require('zrender/shape/Base'); 

parrow=function parrow(options) { 
	if(options.style==null){options.style={};} 
	options.style.type="parrow"; 

	options.clickable=true;
	options.style.color="#999999";  
		//"#AFAFAF";  
	//if(options.style.jiantou==null){options.style.jiantou=30;} 
	options.zlevel=0;
	options.style.textColor="#333333";
	options.style.strokeColor="#999999";  
	options.textPosition="top"; 
	if(options.begin==null || options.end==null){ }  else{  
	} 
	this.textPosition = 'end';
	Base.call(this, options);
};

parrow.prototype =  {
type: 'parrow',

/**
* 创建线条路径
* @param {CanvasRenderingContext2D} ctx
* @param {module:zrender/shape/Line~ILineStyle} style
*/
buildPath : function (ctx, style) { 
	ctx.save();				
	ctx.beginPath();
	ctx.strokeStyle = style.strokeColor || style.color;
	if(this.begin==null || this.end==null){
		ctx.moveTo(0,0);
		ctx.lineTo(0,0);	
	}else if( this.end.style.type=='ppoint'){
		ctx.moveTo(pzrender.getobjx(this.begin),pzrender.getobjy(this.begin));
		ctx.lineTo(pzrender.getobjx(this.end),pzrender.getobjy(this.end)); 	
	}else{   
		/*this.style.xEnd=this.style.xStart; 
		this.style.yEnd=this.style.yStart;  
		*/
		//text
		if(style.text!=null && style.text.length>1){
			ctx.fillStyle = '#333333';
			text = (style.text + '').split('\n');
			var textx=(pzrender.getobjx(this.begin)+pzrender.getobjx(this.end))/2-  (style.text.length*4 / text.length);   
			var texty=(pzrender.getobjy(this.begin)+pzrender.getobjy(this.end))/2-3;   
			for (var i = 0, l = text.length; i < l; i++) {
				  ctx.fillText(text[i],textx,texty);
				  texty += 11;
			} 
		}
		
		//line
		var beginxinx=pzrender.getobjx(this.begin);
		var beginxiny=pzrender.getobjy(this.begin);
		var endxinx=pzrender.getobjx(this.end);
		var endxiny=pzrender.getobjy(this.end);
		var patan=Math.atan(  (  (beginxiny - endxiny) / (beginxinx - endxinx)    ));
		var pasin=Math.atan(   (  (beginxiny - endxiny) / 
				Math.sqrt((beginxinx - endxinx)*(beginxinx - endxinx)  +(beginxiny - endxiny)*(beginxiny - endxiny) ) 
				));
		var pacos=Math.atan(   (  (beginxinx - endxinx) /
				Math.sqrt((beginxinx - endxinx)*(beginxinx - endxinx)  +(beginxiny - endxiny)*(beginxiny - endxiny) )
				));
		
		
		var par;
		var pajianchang=30; 
		var pajianyi=6;
		if(style.jiantou!= null ){
			pajianchang=style.jiantou; 
		} if(style.jiankuan!= null ){
			pajianyi=style.jiankuan; 
		} 
		var jiantoux ; 
		var jiantouy ; 
		 
		if(this.end.style.type=='pstart' || this.end.style.type=='pend' ){  
			par=this.end.style.r +13;  
			jiantoux=  parseInt(endxinx+  par* pacos); 
			jiantouy=  parseInt(endxiny+  par* pasin ); 
		}else if(this.end.style.type=='ptask' || this.end.style.type=='psubtask'|| this.end.style.type=='pcraft' || 
				this.end.style.type=='pdoc' || this.end.style.type=='ptext'){   
			var du=Math.atan(  (  (beginxiny - endxiny) / (beginxinx - endxinx)    )) +Math.PI/2;
			var duend=Math.atan(   (  this.end.style.height /this.end.style.width    ) )  ;  
			var patanxian=   (beginxiny - endxiny) / (beginxinx - endxinx)  ; 
			if(beginxiny == endxiny){ patanxian=0; } 
		
				 if(  (beginxinx < endxinx)  && (beginxiny <= endxiny)  ){
					 if(du< (Math.PI/2+duend)){
						jiantoux=  parseInt(endxinx -  this.end.style.width*0.5   ); 
						jiantouy=  parseInt(endxiny  -  this.end.style.width*0.5*patanxian );
						 jiantoux-=3;
					}else{ 
						jiantoux=  parseInt(endxinx -  this.end.style.height*0.5/patanxian ); 
						jiantouy=  parseInt(endxiny - this.end.style.height*0.5  ); 
						 jiantouy-=3;
					}  
				}else  if( (beginxinx >  endxinx) && (beginxiny <=  endxiny))
				{
					if(du< (Math.PI/2-duend)){
						jiantoux=  parseInt(endxinx -  this.end.style.height*0.5/patanxian ); 
						jiantouy=  parseInt(endxiny - this.end.style.height*0.5  ); 
						 jiantouy-=3;
					}else{
						jiantoux=  parseInt(endxinx +  this.end.style.width*0.5   ); 
						jiantouy=  parseInt(endxiny  +  this.end.style.width*0.5*patanxian );
						 jiantoux+=3;
					}
				}else  if( (beginxinx < endxinx) && (beginxiny >= endxiny))
				{ 	
					if(du< (Math.PI/2-duend)){
						jiantoux=  parseInt(endxinx +  this.end.style.height*0.5/patanxian ); 
						jiantouy=  parseInt(endxiny + this.end.style.height*0.5  ); 
						 jiantouy+=3;
					}else{
						 jiantoux-=3;
						jiantoux=  parseInt(endxinx -  this.end.style.width*0.5   ); 
						jiantouy=  parseInt(endxiny  -  this.end.style.width*0.5*patanxian );
					} 
				}else  if( (beginxinx >  endxinx) && (beginxiny >= endxiny))
				{

					if(du< (Math.PI/2+duend)){
						jiantoux=  parseInt(endxinx +  this.end.style.width*0.5   ); 
						jiantouy=  parseInt(endxiny  +  this.end.style.width*0.5*patanxian );
						 jiantoux+=3;
					}else{
						
						jiantoux=  parseInt(endxinx +  this.end.style.height*0.5/patanxian ); 
						jiantouy=  parseInt(endxiny + this.end.style.height*0.5  ); 
					} 
				} 
				////
				else  if( (beginxinx == endxinx) && (beginxiny > endxiny))
				{ 	 
					jiantoux=  parseInt(endxinx   ); 
					jiantouy=  parseInt(endxiny  + this.end.style.height*0.5   );
					jiantouy+=3;
				}else  if( (beginxinx ==  endxinx) && (beginxiny < endxiny))
				{ 
					jiantoux=  parseInt(endxinx   ); 
					jiantouy=  parseInt(endxiny - this.end.style.height*0.5  ); 
					jiantouy-=3; 
				}  
			
		}else if(this.end.style.type=='pbranch' || this.end.style.type=='pmerge'||
				this.end.style.type=='proute'  ){   
			//par=;
			var du=Math.atan(  (  (beginxiny - endxiny) / (beginxinx - endxinx)    )) +Math.PI/2;
			var patanend=  (  this.end.style.height /this.end.style.width    )   ;  
			var patanxian;
			if(beginxinx != endxinx)
				{patanxian=   (beginxiny - endxiny) / (beginxinx - endxinx)  ; }
			else{
				patanxian=0;
			}
			
		
				if(  (beginxinx <  endxinx)  && (beginxiny <=  endxiny)  ){
					jiantoux=  endxinx + this.end.style.height/2 /(-patanxian - patanend);
					jiantouy= endxiny +  (this.end.style.height/2 /(-patanxian - patanend)) * patanxian;
					jiantoux-=3;
					jiantouy-=3; 
				}else  if( (beginxinx >  endxinx) && (beginxiny <=  endxiny))
				{  
					jiantoux=  endxinx + this.end.style.height/2 /(-patanxian + patanend);
					jiantouy= endxiny +  (this.end.style.height/2 /(-patanxian + patanend)) * patanxian;
					jiantoux+=3;
					jiantouy-=3;
				}else  if( (beginxinx < endxinx) && (beginxiny >= endxiny))
				{ 	  
					jiantoux=  endxinx - this.end.style.height/2 /(-patanxian + patanend);
					jiantouy= endxiny -  (this.end.style.height/2 /(-patanxian + patanend)) * patanxian;
					jiantoux-=3;
					jiantouy+=3;
				}else  if( (beginxinx >  endxinx) && (beginxiny >= endxiny))
				{
					jiantoux=  endxinx - this.end.style.height/2 /(-patanxian - patanend);
					jiantouy= endxiny -  (this.end.style.height/2 /(-patanxian - patanend)) * patanxian;  
					jiantoux+=3;
					jiantouy+=3;
				}  else  if( (beginxinx ==  endxinx) && (beginxiny >= endxiny))
				{
					jiantoux=  endxinx;
					jiantouy= endxiny +  this.end.style.height/2 ;  
					jiantouy+=3;
				}  else  if( (beginxinx ==  endxinx) && (beginxiny < endxiny))
				{
					jiantoux=  endxinx ;
					jiantouy= endxiny -  (this.end.style.height/2  ) ;   
					jiantouy-=3;
				}  
				
		} 
		var jianweix=  parseInt(jiantoux+  (pajianchang)* pacos ); 
		var jianweiy=  parseInt(jiantouy+  (pajianchang)* pasin );  
		
		var jian1x=  parseInt(jianweix +  (pajianyi)* pasin ); 
		var jian1y=  parseInt(jianweiy -  (pajianyi)* pacos );  
		
		var jian2x=  parseInt(jianweix -  (pajianyi)* pasin ); 
		var jian2y=  parseInt(jianweiy +  (pajianyi)* pacos ); 
		
		
		
		ctx.moveTo(beginxinx,beginxiny);
		ctx.lineTo(jianweix,jianweiy); 
		ctx.lineTo(jian1x,jian1y); 
		ctx.lineTo(jiantoux,jiantouy); 
		ctx.lineTo(jian2x,jian2y);  
		ctx.lineTo(jianweix,jianweiy); 
			
			
		

	}
	ctx.closePath();
	ctx.stroke();
	ctx.restore();
	return;
},
 

/**
* 计算返回线条的包围盒矩形
* @param {module:zrender/shape/Line~ILineStyle} style
* @return {module:zrender/shape/Base~IBoundingRect}
*/
getRect : function (style) {
	if (style.__rect) {
		return style.__rect;
	}
	
	var lineWidth = style.lineWidth || 1;
	style.__rect = {
		x : Math.min(style.xStart, style.xEnd) - lineWidth,
		y : Math.min(style.yStart, style.yEnd) - lineWidth,
		width : Math.abs(style.xStart - style.xEnd)
		     + lineWidth,
		height : Math.abs(style.yStart - style.yEnd)
		      + lineWidth
	};
	
	return style.__rect;
}
};

require('zrender/tool/util').inherits(parrow, Base);
mk0suhaxin2=new parrow({ });
 
 
 

 

////////////////////pstart 
 pstart = function(options) {
	options.style.type="pstart";
	options.zlevel=10;
	options.clickable=true; 
	options.ondragend  =function(e){ 
	  zr.modShape(mk0suhaxin.id ); 
  	  zr.modShape(mk0suhaxin2.id ); 
	  zr.refresh();
    };
	if(options.style.strokeColor==null)	{options.style.strokeColor="#2dbb69";} 
	if(options.style.r==null)			{options.style.r=20;} 
	if(options.style.brushType==null)	{options.style.brushType="both";} 
	if(options.style.color==null)		{options.style.color="#ffffff";} 
	if(options.style.lineWidth==null)	{options.style.lineWidth=5;} 
	if(options.style.text==null)		{options.style.text="开始";} 
	if(options.style.textColor==null)	{options.style.textColor="#000";} 
	if(options.style.textPosition==null){options.style.textPosition="inside";}   
	 

	if(options.hoverable==null)			{options.hoverable=true;} 
	if(options.draggable==null)			{options.draggable=true;} 
	if(options.clickable==null)			{options.clickable=true;} 

    Base.call(this, options);  
	 
};

pstart.prototype = {
    type: 'pstart', 
    buildPath : function (ctx, style) {
        ctx.arc(style.x, style.y, style.r, 0, Math.PI * 2, true);
        return;
    }, 
    getRect : function (style) {
        if (style.__rect) {
            return style.__rect;
        } 
        var lineWidth;
        if (style.brushType == 'stroke' || style.brushType == 'fill') {
            lineWidth = style.lineWidth || 1;
        }
        else {
            lineWidth = 0;
        }
        style.__rect = {
            x : Math.round(style.x - style.r - lineWidth / 2),
            y : Math.round(style.y - style.r - lineWidth / 2),
            width : style.r * 2 + lineWidth,
            height : style.r * 2 + lineWidth
        }; 
        return style.__rect;
    }
};

require('zrender/tool/util').inherits(pstart, Base); 








////////////////////pend  
pend = function(options) { 
	options.ondragend  =function(e){
	  	  zr.modShape(mk0suhaxin.id ); 
	  	  zr.modShape(mk0suhaxin2.id ); 
		  zr.refresh();
	    };
	options.style.type="pend";
	options.zlevel=10; 
	if(options.style.strokeColor==null){options.style.strokeColor="#1e75c9";}
	if(options.style.r==null)			{options.style.r=20;} 
	if(options.style.brushType==null)	{options.style.brushType="both";} 
	if(options.style.color==null)		{options.style.color="#ffffff";} 
	if(options.style.lineWidth==null)	{options.style.lineWidth=5;} 
	if(options.style.text==null)		{options.style.text="结束";} 
	if(options.style.textColor==null)	{options.style.textColor="#000";} 
	if(options.style.textPosition==null){options.style.textPosition="inside";}   
	
	if(options.hoverable==null)			{options.hoverable=true;} 
	if(options.draggable==null)			{options.draggable=true;} 
	if(options.clickabler==null)		{options.clickabler=true;} 
	
    Base.call(this, options);  
};

pend.prototype = {
    type: 'pend', 
    buildPath : function (ctx, style) {
        ctx.arc(style.x, style.y, style.r, 0, Math.PI * 2, true);
        return;
    }, 
    getRect : function (style) {
        if (style.__rect) {
            return style.__rect;
        } 
        var lineWidth;
        if (style.brushType == 'stroke' || style.brushType == 'fill') {
            lineWidth = style.lineWidth || 1;
        }
        else {
            lineWidth = 0;
        }
        style.__rect = {
            x : Math.round(style.x - style.r - lineWidth / 2),
            y : Math.round(style.y - style.r - lineWidth / 2),
            width : style.r * 2 + lineWidth,
            height : style.r * 2 + lineWidth
        }; 
        return style.__rect;
    }
};

require('zrender/tool/util').inherits(pend, Base);    	
    



////////////////////ppoint 
 ppoint = function(options) {
	options.style.type="ppoint";
	options.zlevel=10;
	options.clickable=true; 
	options.ondragend  =function(e){
  	  zr.modShape(mk0suhaxin.id ); 
  	  zr.modShape(mk0suhaxin2.id ); 
	  zr.refresh();
    }; 

	if(options.style.strokeColor==null)	{options.style.strokeColor="#aaaaaa";} 
	if(options.style.r==null)			{options.style.r=2;} 
	if(options.style.brushType==null)	{options.style.brushType="both";}  
	if(options.style.lineWidth==null)	{options.style.lineWidth=3;}  
	 

	if(options.hoverable==null)			{options.hoverable=true;} 
	if(options.draggable==null)			{options.draggable=true;} 
	if(options.clickabler==null)		{options.clickabler=true;} 

    Base.call(this, options);  
	 
};

ppoint.prototype = {
    type: 'ppoint', 
    buildPath : function (ctx, style) {
        ctx.arc(style.x, style.y, style.r, 0, Math.PI * 2, true);
        return;
    }, 
    getRect : function (style) {
        if (style.__rect) {
            return style.__rect;
        } 
        var lineWidth;
        if (style.brushType == 'stroke' || style.brushType == 'fill') {
            lineWidth = style.lineWidth || 1;
        }
        else {
            lineWidth = 0;
        }
        style.__rect = {
            x : Math.round(style.x - style.r - lineWidth / 2),
            y : Math.round(style.y - style.r - lineWidth / 2),
            width : style.r * 2 + lineWidth,
            height : style.r * 2 + lineWidth
        }; 
        return style.__rect;
    }
};

require('zrender/tool/util').inherits(ppoint, Base); 




/////////////////////////  ptask 任务
ptask = function (options) {
	if(options.style==null){options.style={};} 
	options.style.type="ptask";
	options.zlevel=10; 
	options.ondragend  =function(e){
  	  zr.modShape(mk0suhaxin.id );
  	  zr.modShape(mk0suhaxin2.id );  
	  zr.refresh();
    }; 
    if(options.style.width==null)	{options.style.width=120;} 
    if(options.style.height==null)	{options.style.height=40;} 
    if(options.style.radius==null)	{options.style.radius=[10, 10];} 
	if(options.style.strokeColor==null)	{options.style.strokeColor="#3EA86B";} 
	if(options.style.r==null)			{options.style.r=20;} 
	if(options.style.brushType==null)	{options.style.brushType="both";} 
	if(options.style.color==null)		{options.style.color="#eeeeee";} 
	if(options.style.lineWidth==null)	{options.style.lineWidth=4;} 
	if(options.style.text==null)		{options.style.text="任务";} 
	if(options.style.textColor==null)	{options.style.textColor="#000";} 
	if(options.style.textPosition==null){options.style.textPosition="inside";}   
	if(options.style.lineJoin==null){options.style.lineJoin="round";}     

	if(options.hoverable==null)			{options.hoverable=true;} 
	if(options.draggable==null)			{options.draggable=true;} 
	if(options.clickabler==null)		{options.clickabler=true;} 
	 
    Base.call(this, options); 
};

ptask.prototype =  {
    type: 'ptask',

    _buildRadiusPath: function (ctx, style) {
        // 左上、右上、右下、左下角的半径依次为r1、r2、r3、r4
        // r缩写为1         相当于 [1, 1, 1, 1]
        // r缩写为[1]       相当于 [1, 1, 1, 1]
        // r缩写为[1, 2]    相当于 [1, 2, 1, 2]
        // r缩写为[1, 2, 3] 相当于 [1, 2, 3, 2]
        var x = style.x;
        var y = style.y;
        var width = style.width;
        var height = style.height;
        var r = style.radius;
        var r1; 
        var r2; 
        var r3; 
        var r4;
          
        if (typeof r === 'number') {
            r1 = r2 = r3 = r4 = r;
        }
        else if (r instanceof Array) {
            if (r.length === 1) {
                r1 = r2 = r3 = r4 = r[0];
            }
            else if (r.length === 2) {
                r1 = r3 = r[0];
                r2 = r4 = r[1];
            }
            else if (r.length === 3) {
                r1 = r[0];
                r2 = r4 = r[1];
                r3 = r[2];
            }
            else {
                r1 = r[0];
                r2 = r[1];
                r3 = r[2];
                r4 = r[3];
            }
        }
        else {
            r1 = r2 = r3 = r4 = 0;
        }
        
        var total;
        if (r1 + r2 > width) {
            total = r1 + r2;
            r1 *= width / total;
            r2 *= width / total;
        }
        if (r3 + r4 > width) {
            total = r3 + r4;
            r3 *= width / total;
            r4 *= width / total;
        }
        if (r2 + r3 > height) {
            total = r2 + r3;
            r2 *= height / total;
            r3 *= height / total;
        }
        if (r1 + r4 > height) {
            total = r1 + r4;
            r1 *= height / total;
            r4 *= height / total;
        }
        ctx.moveTo(x + r1, y);
        ctx.lineTo(x + width - r2, y);
        r2 !== 0 && ctx.quadraticCurveTo(
            x + width, y, x + width, y + r2
        );
        ctx.lineTo(x + width, y + height - r3);
        r3 !== 0 && ctx.quadraticCurveTo(
            x + width, y + height, x + width - r3, y + height
        );
        ctx.lineTo(x + r4, y + height);
        r4 !== 0 && ctx.quadraticCurveTo(
            x, y + height, x, y + height - r4
        );
        ctx.lineTo(x, y + r1);
        r1 !== 0 && ctx.quadraticCurveTo(x, y, x + r1, y);
    },
    
    /**
     * 创建矩形路径
     * @param {CanvasRenderingContext2D} ctx
     * @param {Object} style
     */
    buildPath : function (ctx, style) {
        if (!style.radius) {
            ctx.moveTo(style.x, style.y);
            ctx.lineTo(style.x + style.width, style.y);
            ctx.lineTo(style.x + style.width, style.y + style.height);
            ctx.lineTo(style.x, style.y + style.height);
            ctx.lineTo(style.x, style.y);
            // ctx.rect(style.x, style.y, style.width, style.height);
        }
        else {
            this._buildRadiusPath(ctx, style);
        }
        ctx.closePath();
        return;
    },

    /**
     * 计算返回矩形包围盒矩阵
     * @param {module:zrender/shape/Rectangle~IRectangleStyle} style
     * @return {module:zrender/shape/Base~IBoundingRect}
     */
    getRect : function(style) {
        if (style.__rect) {
            return style.__rect;
        }
        
        var lineWidth;
        if (style.brushType == 'stroke' || style.brushType == 'fill') {
            lineWidth = style.lineWidth || 1;
        }
        else {
            lineWidth = 0;
        }
        style.__rect = {
            x : Math.round(style.x - lineWidth / 2),
            y : Math.round(style.y - lineWidth / 2),
            width : style.width + lineWidth,
            height : style.height + lineWidth
        };
        
        return style.__rect;
    }
};

require('zrender/tool/util').inherits(ptask, Base);











/////////////////////////  pcraft 任务,工艺设计和线路的
pcraft = function (options) {
	if(options.style==null){options.style={};} 
	options.style.type="pcraft";
	options.zlevel=10; 
	options.ondragend  =function(e){
  	  zr.modShape(mk0suhaxin.id );
  	  zr.modShape(mk0suhaxin2.id );  
	  zr.refresh();
    }; 
    if(options.style.width==null)	{options.style.width=120;} 
    if(options.style.height==null)	{options.style.height=40;} 
    if(options.style.radius==null)	{options.style.radius=[10, 10];} 
	if(options.style.strokeColor==null)	{options.style.strokeColor="#3EA86B";} 
	if(options.style.r==null)			{options.style.r=20;} 
	if(options.style.brushType==null)	{options.style.brushType="both";} 
	if(options.style.color==null)		{options.style.color="#eeeeee";} 
	if(options.style.lineWidth==null)	{options.style.lineWidth=4;} 
	if(options.style.text==null)		{options.style.text="任务";} 
	if(options.style.textColor==null)	{options.style.textColor="#000";} 
	if(options.style.textPosition==null){options.style.textPosition="inside";}   
	if(options.style.lineJoin==null){options.style.lineJoin="round";}     

	if(options.hoverable==null)			{options.hoverable=true;} 
	if(options.draggable==null)			{options.draggable=true;} 
	if(options.clickabler==null)		{options.clickabler=true;} 
	 
    Base.call(this, options); 
};

pcraft.prototype =  {
    type: 'pcraft',

    _buildRadiusPath: function (ctx, style) {
        // 左上、右上、右下、左下角的半径依次为r1、r2、r3、r4
        // r缩写为1         相当于 [1, 1, 1, 1]
        // r缩写为[1]       相当于 [1, 1, 1, 1]
        // r缩写为[1, 2]    相当于 [1, 2, 1, 2]
        // r缩写为[1, 2, 3] 相当于 [1, 2, 3, 2]
        var x = style.x;
        var y = style.y;
        var width = style.width;
        var height = style.height;
        var r = style.radius;
        var r1; 
        var r2; 
        var r3; 
        var r4;
          
        if (typeof r === 'number') {
            r1 = r2 = r3 = r4 = r;
        }
        else if (r instanceof Array) {
            if (r.length === 1) {
                r1 = r2 = r3 = r4 = r[0];
            }
            else if (r.length === 2) {
                r1 = r3 = r[0];
                r2 = r4 = r[1];
            }
            else if (r.length === 3) {
                r1 = r[0];
                r2 = r4 = r[1];
                r3 = r[2];
            }
            else {
                r1 = r[0];
                r2 = r[1];
                r3 = r[2];
                r4 = r[3];
            }
        }
        else {
            r1 = r2 = r3 = r4 = 0;
        }
        
        var total;
        if (r1 + r2 > width) {
            total = r1 + r2;
            r1 *= width / total;
            r2 *= width / total;
        }
        if (r3 + r4 > width) {
            total = r3 + r4;
            r3 *= width / total;
            r4 *= width / total;
        }
        if (r2 + r3 > height) {
            total = r2 + r3;
            r2 *= height / total;
            r3 *= height / total;
        }
        if (r1 + r4 > height) {
            total = r1 + r4;
            r1 *= height / total;
            r4 *= height / total;
        }
        ctx.moveTo(x + r1, y);
        ctx.lineTo(x + width - r2, y);
        r2 !== 0 && ctx.quadraticCurveTo(
            x + width, y, x + width, y + r2
        );
        ctx.lineTo(x + width, y + height - r3);
        r3 !== 0 && ctx.quadraticCurveTo(
            x + width, y + height, x + width - r3, y + height
        );
        ctx.lineTo(x + r4, y + height);
        r4 !== 0 && ctx.quadraticCurveTo(
            x, y + height, x, y + height - r4
        );
        ctx.lineTo(x, y + r1);
        r1 !== 0 && ctx.quadraticCurveTo(x, y, x + r1, y);
    },
    
    /**
     * 创建矩形路径
     * @param {CanvasRenderingContext2D} ctx
     * @param {Object} style
     */
    buildPath : function (ctx, style) {
        if (!style.radius) {
            ctx.moveTo(style.x, style.y);
            ctx.lineTo(style.x + style.width, style.y);
            ctx.lineTo(style.x + style.width, style.y + style.height);
            ctx.lineTo(style.x, style.y + style.height);
            ctx.lineTo(style.x, style.y);
            // ctx.rect(style.x, style.y, style.width, style.height);
        }
        else {
            this._buildRadiusPath(ctx, style);
        }
        ctx.closePath();
        return;
    },

    /**
     * 计算返回矩形包围盒矩阵
     * @param {module:zrender/shape/Rectangle~IRectangleStyle} style
     * @return {module:zrender/shape/Base~IBoundingRect}
     */
    getRect : function(style) {
        if (style.__rect) {
            return style.__rect;
        }
        
        var lineWidth;
        if (style.brushType == 'stroke' || style.brushType == 'fill') {
            lineWidth = style.lineWidth || 1;
        }
        else {
            lineWidth = 0;
        }
        style.__rect = {
            x : Math.round(style.x - lineWidth / 2),
            y : Math.round(style.y - lineWidth / 2),
            width : style.width + lineWidth,
            height : style.height + lineWidth
        };
        
        return style.__rect;
    }
};

require('zrender/tool/util').inherits(pcraft, Base);


	

	




/////////////////////////  psubtask  子任务
psubtask = function (options) {
	if(options.style==null){options.style={};} 
	options.style.type="psubtask";
	options.zlevel=10; 
	options.ondragend  =function(e){
  	  zr.modShape(mk0suhaxin.id ); 
  	  zr.modShape(mk0suhaxin2.id ); 
	  zr.refresh();
    }; 
    if(options.style.width==null)	{options.style.width=120;} 
    if(options.style.height==null)	{options.style.height=40;} 
    if(options.style.radius==null)	{options.style.radius=[10, 10];} 
	if(options.style.strokeColor==null)	{options.style.strokeColor="#9B1996";}  
	if(options.style.brushType==null)	{options.style.brushType="both";} 
	if(options.style.color==null)		{options.style.color="#eeeeee";} 
	if(options.style.lineWidth==null)	{options.style.lineWidth=4;} 
	if(options.style.text==null)		{options.style.text="子任务";} 
	if(options.style.textColor==null)	{options.style.textColor="#000";} 
	if(options.style.textPosition==null){options.style.textPosition="inside";}   
	if(options.style.lineJoin==null){options.style.lineJoin="round";}     

	if(options.hoverable==null)			{options.hoverable=true;} 
	if(options.draggable==null)			{options.draggable=true;} 
	if(options.clickabler==null)		{options.clickabler=true;} 
	 
    Base.call(this, options); 
};

psubtask.prototype =  {
    type: 'psubtask',

    _buildRadiusPath: function (ctx, style) {
        // 左上、右上、右下、左下角的半径依次为r1、r2、r3、r4
        // r缩写为1         相当于 [1, 1, 1, 1]
        // r缩写为[1]       相当于 [1, 1, 1, 1]
        // r缩写为[1, 2]    相当于 [1, 2, 1, 2]
        // r缩写为[1, 2, 3] 相当于 [1, 2, 3, 2]
        var x = style.x;
        var y = style.y;
        var width = style.width;
        var height = style.height;
        var r = style.radius;
        var r1; 
        var r2; 
        var r3; 
        var r4;
          
        if (typeof r === 'number') {
            r1 = r2 = r3 = r4 = r;
        }
        else if (r instanceof Array) {
            if (r.length === 1) {
                r1 = r2 = r3 = r4 = r[0];
            }
            else if (r.length === 2) {
                r1 = r3 = r[0];
                r2 = r4 = r[1];
            }
            else if (r.length === 3) {
                r1 = r[0];
                r2 = r4 = r[1];
                r3 = r[2];
            }
            else {
                r1 = r[0];
                r2 = r[1];
                r3 = r[2];
                r4 = r[3];
            }
        }
        else {
            r1 = r2 = r3 = r4 = 0;
        }
        
        var total;
        if (r1 + r2 > width) {
            total = r1 + r2;
            r1 *= width / total;
            r2 *= width / total;
        }
        if (r3 + r4 > width) {
            total = r3 + r4;
            r3 *= width / total;
            r4 *= width / total;
        }
        if (r2 + r3 > height) {
            total = r2 + r3;
            r2 *= height / total;
            r3 *= height / total;
        }
        if (r1 + r4 > height) {
            total = r1 + r4;
            r1 *= height / total;
            r4 *= height / total;
        }
        ctx.moveTo(x + r1, y);
        ctx.lineTo(x + width - r2, y);
        r2 !== 0 && ctx.quadraticCurveTo(
            x + width, y, x + width, y + r2
        );
        ctx.lineTo(x + width, y + height - r3);
        r3 !== 0 && ctx.quadraticCurveTo(
            x + width, y + height, x + width - r3, y + height
        );
        ctx.lineTo(x + r4, y + height);
        r4 !== 0 && ctx.quadraticCurveTo(
            x, y + height, x, y + height - r4
        );
        ctx.lineTo(x, y + r1);
        r1 !== 0 && ctx.quadraticCurveTo(x, y, x + r1, y);
        
        //ziliucheng shuxian
        ctx.moveTo(style.x+10, style.y );
        ctx.lineTo(style.x+10, style.y + style.height);
        
        ctx.moveTo(style.x+style.width-10, style.y );
        ctx.lineTo(style.x+style.width-10, style.y + style.height );
        
    },
    
    /**
     * 创建矩形路径
     * @param {CanvasRenderingContext2D} ctx
     * @param {Object} style
     */
    buildPath : function (ctx, style) {
        if (!style.radius) {
            ctx.moveTo(style.x, style.y);
            ctx.lineTo(style.x + style.width, style.y);
            ctx.lineTo(style.x + style.width, style.y + style.height);
            ctx.lineTo(style.x, style.y + style.height);
            ctx.lineTo(style.x, style.y);
            // ctx.rect(style.x, style.y, style.width, style.height);
        }
        else {
            this._buildRadiusPath(ctx, style);
        }
        ctx.closePath();
        return;
    },

    /**
     * 计算返回矩形包围盒矩阵
     * @param {module:zrender/shape/Rectangle~IRectangleStyle} style
     * @return {module:zrender/shape/Base~IBoundingRect}
     */
    getRect : function(style) {
        if (style.__rect) {
            return style.__rect;
        }
        
        var lineWidth;
        if (style.brushType == 'stroke' || style.brushType == 'fill') {
            lineWidth = style.lineWidth || 1;
        }
        else {
            lineWidth = 0;
        }
        style.__rect = {
            x : Math.round(style.x - lineWidth / 2),
            y : Math.round(style.y - lineWidth / 2),
            width : style.width + lineWidth,
            height : style.height + lineWidth
        };
        
        return style.__rect;
    }
};

require('zrender/tool/util').inherits(psubtask, Base);	
	
	
	
	
	
	
	



/////////////////////////  pdoc 文档
pdoc = function (options) {
	if(options.style==null){options.style={};} 
	options.style.type="pdoc";
	options.zlevel=10; 
	options.ondragend  =function(e){
		zr.modShape(mk0suhaxin.id ); 
	  	  zr.modShape(mk0suhaxin2.id ); 
		zr.refresh();
	}; 
	if(options.style.width==null)	{options.style.width=120;} 
	if(options.style.height==null)	{options.style.height=40;}  
	if(options.style.strokeColor==null)	{options.style.strokeColor="#1e75c9";}  
	if(options.style.brushType==null)	{options.style.brushType="both";} 
	if(options.style.color==null)		{options.style.color="#eeeeee";} 
	if(options.style.lineWidth==null)	{options.style.lineWidth=4;} 
	if(options.style.text==null)		{options.style.text="文档数据";} 
	if(options.style.textColor==null)	{options.style.textColor="#000";} 
	if(options.style.textPosition==null){options.style.textPosition="inside";}   
	if(options.style.lineJoin==null){options.style.lineJoin="round";}     
	
	if(options.hoverable==null)			{options.hoverable=true;} 
	if(options.draggable==null)			{options.draggable=true;} 
	if(options.clickabler==null)		{options.clickabler=true;} 
	
	Base.call(this, options); 
};

pdoc.prototype =  {
type: 'pdoc',

buildPath : function (ctx, style) {
	 
	//ctx.moveTo(style.x + style.width, style.y + style.height);
	
	
	var xStart = style.x;
    var yStart = style.y + style.height;
    var cpX1 = style.x+ parseInt(style.width*0.35);
    var cpY1 = style.y + style.height+30;
    var cpX2 = style.x+ parseInt(style.width*0.75);
    var cpY2 = style.y + style.height-20;
    var xEnd = style.x + style.width;
    var yEnd = style.y + style.height;
	
	ctx.moveTo(xStart, yStart);
    if (typeof cpX2 != 'undefined'
        && typeof cpY2 != 'undefined'
    ) {
        ctx.bezierCurveTo(
            cpX1, cpY1,
            cpX2, cpY2,
            xEnd, yEnd
        );
    }
    else {
        ctx.quadraticCurveTo(
            cpX1, cpY1,
            xEnd, yEnd
        );
    }
    ctx.lineTo(style.x + style.width, style.y);
	ctx.lineTo(style.x, style.y);
	ctx.lineTo(style.x, style.y + style.height);
	//ctx.lineTo(style.x, style.y);

	ctx.closePath();
	 
	return;
},

/**
* 计算返回矩形包围盒矩阵
* @param {module:zrender/shape/Rectangle~IRectangleStyle} style
* @return {module:zrender/shape/Base~IBoundingRect}
*/
getRect : function(style) {
	if (style.__rect) {
		return style.__rect;	
	}
	
	var lineWidth;
	if (style.brushType == 'stroke' || style.brushType == 'fill') {
		lineWidth = style.lineWidth || 1;
	}
	else {
		lineWidth = 0;
	}
	style.__rect = {
		x : Math.round(style.x - lineWidth / 2),
		y : Math.round(style.y - lineWidth / 2),
		width : style.width + lineWidth,
		height : style.height + lineWidth
	};
	
	return style.__rect;
	}
};

require('zrender/tool/util').inherits(pdoc, Base);













/////////////////////////  pbranch 文档
pbranch = function (options) {
	if(options.style==null){options.style={};} 
	options.style.type="pbranch";
	options.zlevel=10; 
	options.ondragend  =function(e){
		zr.modShape(mk0suhaxin.id ); 
	  	zr.modShape(mk0suhaxin2.id ); 
		zr.refresh();
	}; 
	if(options.style.width==null)	{options.style.width=60;} 
	if(options.style.height==null)	{options.style.height=40;}  
	if(options.style.strokeColor==null)	{options.style.strokeColor="#B3964E";}  
	if(options.style.brushType==null)	{options.style.brushType="both";} 
	if(options.style.color==null)		{options.style.color="#eeeeee";} 
	if(options.style.lineWidth==null)	{options.style.lineWidth=4;} 
	if(options.style.text==null)		{options.style.text="分支";} 
	if(options.style.textColor==null)	{options.style.textColor="#000";} 
	if(options.style.textPosition==null){options.style.textPosition="inside";}   
	if(options.style.lineJoin==null){options.style.lineJoin="round";}     
	
	if(options.hoverable==null)			{options.hoverable=true;} 
	if(options.draggable==null)			{options.draggable=true;} 
	if(options.clickabler==null)		{options.clickabler=true;} 
	
	Base.call(this, options); 
};

pbranch.prototype =  {
type: 'pbranch',

buildPath : function (ctx, style) {
	 
	
	ctx.moveTo(style.x + style.width/2, style.y); 
	ctx.lineTo(style.x + style.width, style.y+style.height/2);
	ctx.lineTo(style.x + style.width/2, style.y + style.height);
	ctx.lineTo(style.x, style.y + style.height/2);
	//ctx.lineTo(style.x, style.y);
	
	ctx.closePath();

return;
},

/**
* 计算返回矩形包围盒矩阵
* @param {module:zrender/shape/Rectangle~IRectangleStyle} style
* @return {module:zrender/shape/Base~IBoundingRect}
*/
getRect : function(style) {
	if (style.__rect) {
		return style.__rect;	
	}
	
	var lineWidth;
	if (style.brushType == 'stroke' || style.brushType == 'fill') {
		lineWidth = style.lineWidth || 1;
	}
	else {
		lineWidth = 0;
	}
	style.__rect = {
		x : Math.round(style.x - lineWidth / 2),
		y : Math.round(style.y - lineWidth / 2),
		width : style.width + lineWidth,
		height : style.height + lineWidth
	};
	
	return style.__rect;
	}
};

require('zrender/tool/util').inherits(pbranch, Base);













/////////////////////////  ptext 文本
ptext = function (options) {
if(options.style==null){options.style={};} 
	options.style.type="ptext";
	options.zlevel=9; 
	options.ondragend  =function(e){
	zr.modShape(mk0suhaxin.id ); 
	zr.modShape(mk0suhaxin2.id ); 
	zr.refresh();
	}; 
	if(options.style.width==null)	{options.style.width=120;} 
	if(options.style.height==null)	{options.style.height=40;}   
	if(options.style.brushType==null)	{options.style.brushType="both";}   
	if(options.style.color==null)		{options.style.color="#ffffff";} 
	if(options.style.strokeColor==null)		{options.style.strokeColor="rgba(100, 100, 100, 0.0)";} 
	if(options.style.text==null)		{options.style.text="文档数据";} 
	if(options.style.textColor==null)	{options.style.textColor="#000";} 
	if(options.style.textPosition==null){options.style.textPosition="inside";}   
	if(options.style.lineJoin==null){options.style.lineJoin="round";}     
	
	if(options.hoverable==null)			{options.hoverable=true;} 
	if(options.draggable==null)			{options.draggable=true;} 
	if(options.clickabler==null)		{options.clickabler=true;} 
	
	Base.call(this, options); 
};

ptext.prototype =  {
type: 'ptext', 
buildPath : function (ctx, style) { 
	ctx.moveTo(style.x, style.y);
	ctx.lineTo(style.x + style.width, style.y);
	ctx.lineTo(style.x + style.width, style.y + style.height);
	ctx.lineTo(style.x, style.y + style.height);
	ctx.lineTo(style.x, style.y); 
	ctx.closePath();
	return;
},
 
getRect : function(style) {
	if (style.__rect) {
		return style.__rect;	
	} 
	var lineWidth;
	if (style.brushType == 'stroke' || style.brushType == 'fill') {
		lineWidth = style.lineWidth || 1;
	}
	else {
		lineWidth = 0;
	}
	style.__rect = {
		x : Math.round(style.x - lineWidth / 2),
		y : Math.round(style.y - lineWidth / 2),
		width : style.width + lineWidth,
		height : style.height + lineWidth
	};
	
	return style.__rect;
	}
};

require('zrender/tool/util').inherits(ptext, Base);
 



    }
);



 














////////////////////////////////////////////////////////////////////////////////////////////////////////
   /////   //////
     //    //   //
   //      //////
   /////   //  // 

////////////////////////////////////////////////////////////////////////////////////////////////////////

pzrender.nodes=[];
pzrender.init=function (zr){
	zr.clear();
	pzrender.zr=zr;
	zr.addShape(mk0suhaxin);
  	zr.addShape(mk0suhaxin2 ); 
};
pzrender.opt={};
pzrender.getnowopt=function(){
	for(var i=0;i<pzrender.nodes.length;i++){
		for(var j=0;j<pzrender.opt.nodes.length;j++){
			//console.log(pzrender.opt.nodes[j].x+"  "+pzrender.nodes[i].style.x);
			if(pzrender.nodes[i].style.id==pzrender.opt.nodes[j].id 
			 && (pzrender.opt.nodes[j].type!="pline" && pzrender.opt.nodes[j].type!="parrow"     )){
				pzrender.opt.nodes[j].x=pzrender.nodes[i].style.x + pzrender.nodes[i]. position[0];
				pzrender.opt.nodes[j].y=pzrender.nodes[i].style.y + pzrender.nodes[i]. position[1];
				pzrender.opt.nodes[j].text=pzrender.nodes[i].style.text;
				if(pzrender.nodes[i].style.width!=null){pzrender.opt.nodes[j].width=pzrender.nodes[i].style.width;}
				if(pzrender.nodes[i].style.height!=null){pzrender.opt.nodes[j].height=pzrender.nodes[i].style.height;}
			}
		}
	}
	return pzrender.opt;
}; 

pzrender.optremovefromid=function(id){ 
	var ret=[];
	var at=[];
	for(var j=0;j<pzrender.opt.nodes.length;j++){ 
		if( pzrender.opt.nodes[j].id!= id   ){ 
			if(pzrender.opt.nodes[j].type!='pline' && pzrender.opt.nodes[j].type!='parrow' ){ 
				at.push(pzrender.opt.nodes[j]); 
			}else{ 
				if( pzrender.opt.nodes[j].begin==id ||  pzrender.opt.nodes[j].end==id ){  
					pzrender.delshapebyid(pzrender.opt.nodes[j].id);
				}else{ 
					at.push(pzrender.opt.nodes[j]); 
				}
			} 
		} 
	} 
	pzrender.opt.nodes=at;
}
pzrender.delshapebyid=function(id){ 
	for(var j=0;j<pzrender.nodes.length;j++){ 
		if( pzrender.nodes[j].style.id== id   ){ 
			 pzrender.zr.delShape(pzrender.nodes[j].id);
		} 
	} 
	pzrender.zr.refresh();
}

pzrender.getobjx=function( into){ 
    var bw=0;  
    if(into.style.type=='pstart'||into.style.type=='pend'||into.style.type=='ppoint'){}
	else{
		bw=(into.style.width/2); 
		}  
   return (into.style.x+into.position[0]+bw);
}
pzrender.getobjy=function( into){ 
    var bw=0;  
    if(into.style.type=='pstart'||into.style.type=='pend'|| into.style.type=='ppoint'){}
	else{
		bw=(into.style.height/2); 
		}  
   return (into.style.y+into.position[1]+bw);
}
	  
pzrender.show =function(opt,zr){ 
	pzrender.opt= JSON.parse( JSON.stringify(opt)); 
	pzrender.addshape(opt,zr);
	zr.render( );
} ;
pzrender.showCL =function(opt,zr){ 
	pzrender.opt= JSON.parse( JSON.stringify(opt));  
	pzrender.addshapeCL(opt,zr);
	zr.render( );
} ;

pzrender.zr;
pzrender.fucstate="none";
pzrender.clicklist=[];


//各种元素增加
pzrender.addcraft =function(parent,name,zr){
	var node={"type":"pcraft","x":10,"y":10,"text":name,"width":90,"id":("t"+pzrender.opt.index++),"strokeColor":pzrender.getcolor(parent)} ;
	var optst={"nodes":[node]};
	pzrender.showaddCL(  optst  ,zr); 
	zr.render( );
} ;
pzrender.addtask =function(name,zr){ 
	var node={"type":"ptask","x":10,"y":10,"text":name,"width":90,"id":("t"+pzrender.opt.index++)} ;
	var optst={"nodes":[node]};
	pzrender.showaddCL(  optst  ,zr); 
	zr.render( );
} ;
pzrender.addsubtask =function(name,zr){
	var node={"type":"psubtask","x":10,"y":10,"text":name,"width":90,"id":("t"+pzrender.opt.index++)} ;
	var optst={"nodes":[node]};
	pzrender.showaddCL(  optst  ,zr); 
	zr.render( );
} ;
pzrender.adddoc =function(name,zr){
	var node={"type":"pdoc","x":10,"y":10,"text":name,"width":90,"id":("t"+pzrender.opt.index++)} ;
	var optst={"nodes":[node]};
	pzrender.showaddCL(  optst  ,zr); 
	zr.render( );
} ;
pzrender.addbranch =function(name,zr){
	var node={"type":"pbranch","x":10,"y":10,"text":name,"width":90,"id":("t"+pzrender.opt.index++)} ;
	var optst={"nodes":[node]};
	pzrender.showaddCL(  optst  ,zr); 
	zr.render( );
} ;

pzrender.addtext =function(name,zr){
	var node={"type":"ptext","x":10,"y":10,"text":name,"width":100,"id":("t"+pzrender.opt.index++)}  ;
	var optst={"nodes":[node]};
	pzrender.showaddCL(  optst  ,zr); 
	zr.render( );
} ;
pzrender.addline =function(begin,end,name,zr,lineType){
	var node={"type":"pline","begin":begin,"end":end,"id":("t"+pzrender.opt.index++)} ;
	if(lineType!=null){ node.lineType=lineType;}
	if(name!=null){ node.text=name;}
	//opts.nodes.push(node);
	var optst={"nodes":[node]};
	pzrender.showaddCL(  optst  ,zr); 
	zr.render( );
}; 
pzrender.addarrow =function(begin,end,name,zr){
	var node={"type":"parrow","begin":begin,"end":end,"id":("t"+pzrender.opt.index++),jiantou:'18',jiankuan:'8'} ;
	if(name!=null){ node.text=name;}
	//opts.nodes.push(node);
	var optst={"nodes":[node]};
	pzrender.showaddCL(  optst  ,zr); 
	zr.render( );
} ;

pzrender.addpoint =function(zr){
	var node={"type":"ppoint","x":50,"y":50,"id":("t"+pzrender.opt.index++)} 
	//opts.nodes.push(node);
	var optst={"nodes":[node]};
	pzrender.showaddCL(  optst  ,zr); 
	zr.render( );
} ;

pzrender.addstart =function(zr){
	var node={"type":"pstart","x":50,"y":50,"id":("t"+pzrender.opt.index++)} 
	//opts.nodes.push(node);
	var optst={"nodes":[node]};
	pzrender.showaddCL(  optst  ,zr); 
	zr.render( );
} ;

pzrender.addend =function(zr){
	var node={"type":"pend","x":50,"y":50,"id":("t"+pzrender.opt.index++)} 
	//opts.nodes.push(node);
	var optst={"nodes":[node]};
	pzrender.showaddCL(  optst  ,zr); 
	zr.render( );
} ;

pzrender.showadd =function(opt,zr){
	//zr.clear();
	for (var i = opt.nodes.length - 1; i >= 0; i--) {
		pzrender.opt.nodes.push(   JSON.parse( JSON.stringify(opt.nodes[i]))  ) ; 
	}; 
	pzrender.addshape(opt,zr);
	
} ;



///工艺设计 begin
pzrender.showaddCL =function(opt,zr){
	//zr.clear();
	for (var i = opt.nodes.length - 1; i >= 0; i--) {
		pzrender.opt.nodes.push(   JSON.parse( JSON.stringify(opt.nodes[i])) ) ; 
	}; 
	pzrender.addshapeCL(opt,zr);
	
} ;


pzrender.addshapeCL= function(opt,zr){ 
	for (var i = 0; i < opt.nodes.length; i++) {
		if(opt.nodes[i].option==null)
			{opt.nodes[i].option={};}
		opt.nodes[i].option.clickable=true;
		opt.nodes[i].option.onclick = pzrender.clickfuncCL;
	};
	pzrender.addshape(opt,zr);
}

pzrender.clickfuncCL= function(params){
	pzrender.clicklist.push(params);
	if(params.target.style.type=='ptask' ||params.target.style.type=='psubtask' ||
		params.target.style.type=='pdoc'||params.target.style.type=='pbranch'||params.target.style.type=='ptext'){
		$('#nodeid').val(params.target.style.id);
		$('#nodewidth').val(params.target.style.width);
		$('#ccomment').val(params.target.style.text);		
	}else{
		$('#nodeid').val('');
		$('#nodewidth').val('');
		$('#ccomment').val('');	
	}
	
	if(pzrender.fucstate=='addline'){
		toastr.info("提示","请选择 结束节点！");
		pzrender.fucstate='addline2';
	}else if(pzrender.fucstate=='addline2'){
		var begin =pzrender.clicklist[pzrender.clicklist.length-2].target.style.id;
		var end   =pzrender.clicklist[pzrender.clicklist.length-1].target.style.id;
		pzrender.addline(begin,end,null,pzrender.zr);
		pzrender.fucstate="none";
	}if(pzrender.fucstate=='addlineB'){
		toastr.info("提示","请选择 结束节点！");
		pzrender.fucstate='addlineB2';
	}else if(pzrender.fucstate=='addlineB2'){
		var begin =pzrender.clicklist[pzrender.clicklist.length-2].target.style.id;
		var end   =pzrender.clicklist[pzrender.clicklist.length-1].target.style.id;
		pzrender.addline(begin,end,null,pzrender.zr,"b");
		pzrender.fucstate="none";
	}else if(pzrender.fucstate=='addarrow'){
		toastr.info("提示","请选择 结束节点！");
		pzrender.fucstate='addarrow2';
	}else if(pzrender.fucstate=='addarrow2'){
		var begin =pzrender.clicklist[pzrender.clicklist.length-2].target.style.id;
		var end   =pzrender.clicklist[pzrender.clicklist.length-1].target.style.id;
		pzrender.addarrow(begin,end,null,pzrender.zr);
		pzrender.fucstate="none";
	}else if(pzrender.fucstate=='del'){
		$("#myModal1").modal('show');
		$("#delmodal").html('是否删除（'+params.target.style.text+'）节点？');
		$("#delsure").on('click',function(){
			$("#myModal1").modal('hide');
			pzrender.optremovefromid(params.target.style.id);
			pzrender.zr.delShape(params.target.id);
			zr.modShape(mk0suhaxin.id ); 
			zr.modShape(mk0suhaxin2.id ); 
			pzrender.zr.refresh();
			toastr.success("提示","删除成功！");			
		});
		pzrender.fucstate="none";		
	} 
}; 
///工艺设计 end



pzrender.addshape= function(opt,zr){
	if(opt.nodes!=null){ 
		for(var i=0;i<opt.nodes.length;i++){
			var n=opt.nodes[i];
			var sp;
			if(n.option==null){n.option={};};
			if(n.option.style==null){n.option.style={};};
			if(n.id!=null){n.option.style.id=n.id;};
 
			if(n.type=="pstart"){
				if(n.x!=null){n.option.style.x=n.x;}
				if(n.y!=null){n.option.style.y=n.y;}
				sp=new pstart(n.option);   
			}
			else if(n.type=="pend"){
				if(n.x!=null){n.option.style.x=n.x;}
				if(n.y!=null){n.option.style.y=n.y;}
				sp=new pend(n.option);   
			}
			else if(n.type=="ppoint"){
				if(n.x!=null){n.option.style.x=n.x;}
				if(n.y!=null){n.option.style.y=n.y;}
				sp=new ppoint(n.option);   
			}
			else if(n.type=="ptask"){
				if(n.x!=null){n.option.style.x=n.x;}
				if(n.y!=null){n.option.style.y=n.y;}
				if(n.text!=null){n.option.style.text=n.text;}
				if(n.width!=null){n.option.style.width=n.width;}
				if(n.height!=null){n.option.style.height=n.height;}
				if(n.strokeColor!=null){n.option.style.strokeColor=n.strokeColor;}
				sp=new ptask(n.option);   
			}else if(n.type=="pcraft"){
				if(n.x!=null){n.option.style.x=n.x;}
				if(n.y!=null){n.option.style.y=n.y;}
				if(n.text!=null){n.option.style.text=n.text;}
				if(n.width!=null){n.option.style.width=n.width;}
				if(n.height!=null){n.option.style.height=n.height;}
				if(n.strokeColor!=null){n.option.style.strokeColor=n.strokeColor;}
				sp=new pcraft(n.option);   
			}else if(n.type=="psubtask"){
				if(n.x!=null){n.option.style.x=n.x;}
				if(n.y!=null){n.option.style.y=n.y;}
				if(n.text!=null){n.option.style.text=n.text;}
				if(n.width!=null){n.option.style.width=n.width;}
				if(n.height!=null){n.option.style.height=n.height;}
				sp=new psubtask(n.option);   
			}else if(n.type=="pdoc"){
				if(n.x!=null){n.option.style.x=n.x;}
				if(n.y!=null){n.option.style.y=n.y;}
				if(n.text!=null){n.option.style.text=n.text;}
				if(n.width!=null){n.option.style.width=n.width;}
				if(n.height!=null){n.option.style.height=n.height;}
				sp=new pdoc(n.option);   
			}else if(n.type=="pbranch"){
				if(n.x!=null){n.option.style.x=n.x;}
				if(n.y!=null){n.option.style.y=n.y;}
				if(n.text!=null){n.option.style.text=n.text;}
				if(n.width!=null){n.option.style.width=n.width;}
				if(n.height!=null){n.option.style.height=n.height;}
				sp=new pbranch(n.option);   
			}else if(n.type=="ptext"){
				if(n.x!=null){n.option.style.x=n.x;}
				if(n.y!=null){n.option.style.y=n.y;}
				if(n.text!=null){n.option.style.text=n.text;}
				if(n.width!=null){n.option.style.width=n.width;}
				if(n.height!=null){n.option.style.height=n.height;}
				sp=new ptext(n.option);   
			}else if(n.type=="pline"||n.type=="parrow"){ //parrow
				var bgt;var edt;
				if(n.begin!=null){
					for(var j=0;j<pzrender.nodes.length;j++){
						if(pzrender.nodes[j].style.id == n.begin){ 
							bgt=pzrender.nodes[j];
						}
						if(pzrender.nodes[j].style.id == n.end){ 
							edt=pzrender.nodes[j];
						}
					}
				} 
				n.option.begin=bgt;
				n.option.end=edt;  
				if(n.text!=null){n.option.style.text=n.text;}
				if(n.lineType!=null){n.option.style.lineType=n.lineType;}
				if(n.jiantou!=null){n.option.style.jiantou=n.jiantou;}
				if(n.jiankuan!=null){n.option.style.jiankuan=n.jiankuan;}
				if(n.type=="pline"){  sp=new pline(n.option); }
				else if(n.type=="parrow"){  sp=new parrow(n.option); }//||n.type=="parrow"
			}
			//console.log(sp);
			zr.addShape(sp);
			if(n.active!=null&&n.active=="1"){
				var colort="#C40000";
				var colort2=sp.style.strokeColor;
				var textt=sp.style.text;
				//sp.style.text=sp.style.text+'(当前位置)';
				sp.style.textFont='bold';
				var tm1 = zr.animate( sp.id, "style", true)
				.when(300, {  
					lineWidth:6,
					strokeColor : colort
				})
				.when(800, { 
					lineWidth:3,
					strokeColor :colort2
				})
				.start();
			}
			pzrender.nodes.push(sp);
		}
	} 
};


pzrender.getcolor=function (type){ 
	var ret;
	if(type==null) type='1';
	if(type=='1'){ 
		ret='#3EA86B';
	}else if(type=='2'){ 
		ret='#00645C';
	}else if(type=='3'){ 
		ret='#275706';
	}else if(type=='4'){ 
		ret='#00662A';
	}

	return ret;
}







///////////gongyi xianlu




/*  动画
var colort="rgba(220, 20, 60, 0.8)";
var colort2="#fff";
var tm1 = zr.animate( c1.id, "style", true)
.when(1000, {
    color : colort
})
.when(2000, {
	  color :colort2
})
.start();
*/
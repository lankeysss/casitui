$(function() {
		
	if("undefined" == (typeof window.pubwin)){
		window.pubwin={};
	}
	
		///user
		var pubwinuser_html=
	'<div class="modal inmodal fade" id="pubwinuser_Modal" tabindex="-1"'  +
			'role="dialog" aria-hidden="true"  data-remote="user.html">'+
		'<div class="modal-dialog ">'+
			'<div class="modal-content"> '+
			'</div>'+
	   '</div>'+
	'</div>';
		window.pubwin.user=function(opts,returnfunc){
			$("#pubwinuser_Modal").remove(); 
			$("body").append( pubwinuser_html); 
			window.pubwin.user.opts=opts;
			window.pubwin.user.returnfunc=returnfunc;
			$('#pubwinuser_Modal').modal('show');
			
		} 
		//user  end
		
		
		
		//alert start
		var pubwinalert_html=function(title,content,width){
			if("undefined" == (typeof width)){
				width="";
			}else{
				width="width:"+width;
			}
			return '<div class="modal inmodal fade" id="pubwinalert_Modal" tabindex="-1" role="dialog" aria-hidden="true">'+
				'<div class="modal-dialog modal-sm"  style="'+width+'">'+
					'<div class="modal-content">'+
						'<div class="modal-header">'+
							'<button type="button" class="close" data-dismiss="modal">'+
								'<span aria-hidden="true">&times;</span><span class="sr-only">Close</span>'+
							'</button>'+
							'<h4 class="modal-title">'+title+'</h4>'+
						'</div>'+
						'<div class="modal-body">'+
							'<p>'+
								content+
							'</p>'+
						'</div>'+
						'<div class="modal-footer">'+ 
							'<button type="button" id="pubwinalert_btn" class="btn btn-primary" data-dismiss="modal">确认</button>'+
						'</div>'+
					'</div>'+
				'</div>'+
			'</div>'
			;};
		
		window.pubwin.alert=function(title,content,func,width){ 
			$("#pubwinalert_Modal").remove();
			$("body").append( pubwinalert_html(title,content,width)); 
			$('#pubwinalert_Modal').on('hide.bs.modal',  func); 
			$('#pubwinalert_Modal').modal('show');   
		} 
		
		
		
		
		//confrim start
		var pubwinconfrim_html=function(title,content,width){
			if("undefined" == (typeof width)){
				width="";
			}else{
				width="width:"+width;
			}
			return '<div class="modal inmodal fade" id="pubwinconfrim_Modal" tabindex="-1" role="dialog" aria-hidden="true">'+
				'<div class="modal-dialog modal-sm"  style="'+width+'">'+
					'<div class="modal-content">'+
						'<div class="modal-header">'+
							'<button type="button" class="close" data-dismiss="modal">'+
								'<span aria-hidden="true">&times;</span><span class="sr-only">Close</span>'+
							'</button>'+
							'<h4 class="modal-title">'+title+'</h4>'+
						'</div>'+
						'<div class="modal-body">'+
							'<p>'+
								content+
							'</p>'+
						'</div>'+
						'<div class="modal-footer">'+ 
							'<button type="button" id="pubwinconfrim_btn2" class="btn btn-white" data-dismiss="modal">取消</button>'+
							'<button type="button" id="pubwinconfrim_btn" class="btn btn-primary" data-dismiss="modal">确认</button>'+
						'</div>'+
					'</div>'+
				'</div>'+
			'</div>'
			;};
		
		window.pubwin.confrim=function(title,content,func,func2,width){ 
			$("#pubwinconfrim_Modal").remove();
			$("body").append( pubwinconfrim_html(title,content,width));
			$('#pubwinconfrim_btn').on("click", func );
			$('#pubwinconfrim_btn2').on("click", func2);
			$('#pubwinconfrim_Modal').modal('show');   
		} 
		//confrim end
		
		
		
		
		
		//prompt start
		var pubwinprompt_html=function(title,content,width){ 
			if("undefined" == (typeof width)){
				width="";
			}else{
				width="width:"+width;
			}
			return '<div class="modal inmodal fade" id="pubwinprompt_Modal" tabindex="-1" role="dialog" aria-hidden="true">'+
				'<div class="modal-dialog modal-sm"  style="'+width+'">'+
					'<div class="modal-content">'+
						'<div class="modal-header">'+
							'<button type="button" class="close" data-dismiss="modal">'+
								'<span aria-hidden="true">&times;</span><span class="sr-only">Close</span>'+
							'</button>'+
							'<h4 class="modal-title">'+title+'</h4>'+
						'</div>'+
						'<div class="modal-body">'+
							'<p>'+
								content+
							'</p>'+
							'<input type="text" id="pubwinprompt_input" placeholder="请输入" class="form-control" name="name" required="" aria-required="true">'+
						'</div>'+
						'<div class="modal-footer">'+ 
							'<button type="button" id="pubwinprompt_btn2" class="btn btn-white" data-dismiss="modal">取消</button>'+
							'<button type="button" id="pubwinprompt_btn" class="btn btn-primary" data-dismiss="modal">确认</button>'+
						'</div>'+
					'</div>'+
				'</div>'+
			'</div>'
			;};
		
		window.pubwin.prompt=function(title,content,func,func2,width){ 
			$("#pubwinprompt_Modal").remove();
			$("body").append( pubwinprompt_html(title,content,width));
			$('#pubwinprompt_btn').on("click", function(){  func($('#pubwinprompt_input').val())  });
			$('#pubwinprompt_btn2').on("click", function(){  func2($('#pubwinprompt_input').val())});
			$('#pubwinprompt_Modal').modal('show');   
		} 
		//prompt end
		
		
		
		
		//prompt start
		var pubwinform_html=function(title,content,form,width){ 
			if("undefined" == (typeof width)){
				width="";
			}else{
				width="width:"+width;
			}
			return '<div class="modal inmodal fade" id="pubwinform_Modal" tabindex="-1" role="dialog" aria-hidden="true">'+
				'<div class="modal-dialog modal-sm"  style="'+width+'">'+
					'<div class="modal-content">'+
						'<div class="modal-header">'+
							'<button type="button" class="close" data-dismiss="modal">'+
								'<span aria-hidden="true">&times;</span><span class="sr-only">Close</span>'+
							'</button>'+
							'<h4 class="modal-title">'+title+'</h4>'+
						'</div>'+
						'<div class="modal-body">'+
							'<p>'+
								content+
							'</p>'+
							'<form id="pubwinform_form">'+form+
							'</form>'+
						'</div>'+
						'<div class="modal-footer">'+ 
							'<button type="button" id="pubwinform_btn2" class="btn btn-white" data-dismiss="modal">取消</button>'+
							'<button type="button" id="pubwinform_btn" class="btn btn-primary" data-dismiss="modal">确认</button>'+
						'</div>'+
					'</div>'+
				'</div>'+
			'</div>'
			;};
		
		window.pubwin.form=function(title,content,form,func,func2,width){ 
			$("#pubwinform_Modal").remove();
			$("body").append( pubwinform_html(title,content,form,width));
			$('#pubwinform_btn').on("click",  function(){  func($('#pubwinform_form').serialize())  } );
			$('#pubwinform_btn2').on("click",  function(){  func2($('#pubwinform_form').serialize())  });
			$('#pubwinform_Modal').modal('show');   
		} 
		//form end
		
	 });
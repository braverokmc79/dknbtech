let formContactCheck = {

	init: function () {
	
		$('#select_email').change(function () {

			$("#select_email option:selected").each(function (event) {

				if ($(this).val() == '1') {
					$("#email_2").val('');
					$("#email_2").attr("readonly", false);
				} else {
					$("#email_2").val($(this).text());
					$("#email_2").attr("readonly", true);
				}
			});
		});


	},


}

formContactCheck.init();

var captchaErrorCount=0; 

//form 유효성 체크
function contactCheck() {
	

	var obj = document.contForm;
	if(obj.companyNm.value==""){ alert('회사명을 입력하세요'); obj.companyNm.focus(); return; }
	if(obj.wrterNm.value==""){ alert('이름을 입력하세요'); obj.wrterNm.focus(); return; }

	if(obj.areaNo.value==""){ alert('연락처를 입력하세요'); obj.areaNo.focus(); return; }
	if(obj.middleTelno.value==""){ alert('연락처를 입력하세요'); obj.middleTelno.focus(); return; }
	if(obj.endTelno.value==""){ alert('연락처를 입력하세요'); obj.endTelno.focus(); return; }

		
	obj.tel.value = obj.areaNo.value + "-" + obj.middleTelno.value + "-" + obj.endTelno.value;
	

	if(obj.email_1.value==""){ alert('이메일을 입력하세요'); obj.email_1.focus(); return; }
	obj.emailAdres.value = obj.email_1.value + "@" + obj.email_2.value;
	
	if(obj.qestnSj.value==""){ alert('제목을 입력하세요'); obj.qestnSj.focus(); return; }


	if(obj.iprotect[0].checked==false){ alert('개인정보취급방침에 동의해주세요'); return; }

	if(obj.qestnCn.value==""){ alert('내용을 입력하세요'); obj.qestnCn.focus(); return; }

	if(obj.txtCaptcha.value==""){ alert('자동등록방지 코드를 입력하세요'); obj.txtCaptcha.focus(); return; }


	var formdata=$("#contForm").serialize();
	console.log(formdata);

	$.ajax({
		url:'/portal/inquiry/inquiry.do',
		type:'POST',
		contentTyp:'application/json',
		data:formdata,
		dataType : "json",
		cache   : false,
		success  : function(res, status){
			console.log(res, status);
			if(res==-1){
				alert("자동등록방지 번호가 일치하지 않습니다.");
				obj.txtCaptcha.value="";

				captchaErrorCount++;
				console.log(" captchaErrorCount : " +captchaErrorCount);
				if(captchaErrorCount>3){
					location.reload();
				}
				refreshBtn();				
				return;
			}else if(res==1){
				alert("접수 되었습니다.");
				location.reload();
				return;
			}else{
				alert("접수 오류 입니다");	
			}
			               
		},
		error : function(res,status){
			console.log("에러");
			console.log(res, status);
			alert("접수 오류 입니다");			
		}
	})


	

}

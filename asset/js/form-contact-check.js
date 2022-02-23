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


//form 유효성 체크
function contactCheck() {
	var obj = document.contForm;
	if(obj.company.value==""){ alert('회사명을 입력하세요'); obj.company.focus(); return; }
	if(obj.name.value==""){ alert('이름을 입력하세요'); obj.name.focus(); return; }

	if(obj.tel_1.value==""){ alert('연락처를 입력하세요'); obj.tel_1.focus(); return; }
	if(obj.tel_2.value==""){ alert('연락처를 입력하세요'); obj.tel_2.focus(); return; }
	if(obj.tel_3.value==""){ alert('연락처를 입력하세요'); obj.tel_3.focus(); return; }
	obj.tel.value = obj.tel_1.value + "-" + obj.tel_2.value + "-" + obj.tel_3.value;
	obj.email.value = obj.email_1.value + "@" + obj.email_2.value;

	if(obj.title.value==""){ alert('제목을 입력하세요'); obj.title.focus(); return; }


	if(obj.iprotect[0].checked==false){ alert('개인정보취급방침에 동의해주세요'); return; }

	if(obj.txtCaptcha.value==""){ alert('자동등록방지 코드를 입력하세요'); obj.txtCaptcha.focus(); return; }

	alert("전송 되었습니다.");
	//obj.submit();
}
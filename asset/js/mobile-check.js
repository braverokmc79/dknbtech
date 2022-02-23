function Mobile(){
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);}
	
if(Mobile()){// 모바일일 경우
	 // resizeMap("100%", "360px");
	// console.log("모바일");
	// $(".aos-script").html("");	
	// $(".aos-script").parent("script").remove();

} else {// 모바일 외
	//  resizeMap("100%", "465px");
	//console.log("pc");
/* 	var s = document.createElement("script"); 
	s.type = "text/javascript"; 
	s.src = "https://unpkg.com/aos@2.3.1/dist/aos.js";
	$("#footer-script").append(s);
 */
/* 	var s2 = document.createElement("link"); 
	s2.type = "text/css"; 
	s2.href = "https://unpkg.com/aos@2.3.1/dist/aos.css";
	s2.rel = "stylesheet";
	$("head").append(s2);
 */
  
}
	
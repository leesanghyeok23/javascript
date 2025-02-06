

// script-2.html파일 내부에 작성해 놓은
// id="heading"인 <h1>한쌍을 선택해서 heading변수 메모리에 저장
let heading	 = document.querySelector("#heading");

// heading변수메모리에 저장된 <h1>한쌍에  사용자가 클릭하는 행동(이벤트) 등록후 처리코드
heading.onclick = function(){
	//이벤트 처리 코드 작성
	//h1한 쌍 내부에 적힌 글자 색상을 빨간색으로 설정
	heading.style.color = "red";
	
};
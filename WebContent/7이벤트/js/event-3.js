//<button>Click</button>요소를 선택해서 
//button상수를 만들어 저장
const button = document.querySelector("button");

//이벤트 처리함수(이벤트핸들러함수) 따로 외부에 정의
function changeBackground(){
	//body요소의 배경색을 그린으로 설정
	document.body.style.backgroundColor = "green";
	
}

//선택해온 <button>Click<button>요소에 click이벤트 등록,
//그리고  click이벤트가 발생하면 자동으로 호출될 이벤트핸들러함수 연결
button.onclick = changeBackground;// 호출할 이벤트 핸들러 함수명 뒤에 소괄호()를 사용하지 않고 
								  // 함수명만 작성해 호출











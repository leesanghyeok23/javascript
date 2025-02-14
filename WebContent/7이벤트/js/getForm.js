/*
<select name="major" id="major">
	<option>---- 학과 선택 ----</option>
	<option value="archi">건축공학과</option>
	<option value="mechanic">기계공학과</option>
	<option value="indust">산업공학과</option>
	<option value="elec">전기전자공학과</option>
	<option value="computer">컴퓨터공학과</option>
	<option value="chemical">화학공학과</option>
</select>
사용자가  학과 선택할수 있는 위  select요소를 선택해서 가져와 상수에  저장
*/
const selectMenu = document.querySelector("#major");

//이벤트처리함수(이벤트 핸들러 함수)
//사용자가 선택한 option항목의 텍스트를 가져와
//이를 알림창으로 표시하는 기능의 함수 
function displaySelect(){
	
	//selectMenu.options속성을 호출하면
	//모든 <option>요소를 포함하는 배열과 유사한 객체를 반환해줌
	
    //selectMenu.selectedIndex속성을 호출하면
    //현재 선택된 <option>요소의 index위치번호를 반환 
	
	
    //selectMenu.options[ selectMenu.selectedIndex ].innerText;
    // 선택된 <option>요소의 텍스트노드값을 가져옵니다.
	
	let selectedText = selectMenu.options[selectMenu.selectedIndex].innerText; //산업공학과
						//	<option value="indust">산업공학과</option>.innerText;
	
    //alert함수로 선택된 option요소의 텍스트를 알림창에 보여주자
	alert(`${selectedText}를 선택했습니다.`);
}


//select option들 중에서 하나의 option태그를 선택한 동작(change이벤트)을 했을때
//이벤트 핸들러 함수 displaySelect함수를 호출하여 실행시킵니다. 
selectMenu.onchange = displaySelect;//<--이벤트핸들러 함수명만 작성해서 호출되게 하자 
	
	
	

















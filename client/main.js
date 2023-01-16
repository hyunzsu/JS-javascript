// [주사위 굴리기]
// 1. dice 애니메이션 불러오기
// 2. bindEvent 유틸함수 만들기
// 3. handleRollingDice 함수 만들고 토글로 애니메이션 제어하기
// 4. 변수 보호를 위한 클로저 + IIFE 사용하기

// [ 레코드 리스트 보이기 ] [9 ~ ]
// 1. handleRecord 함수를 만들기
// 2. disable 활성 유틸 함수 만들기
// 3. handleReset 함수를 만듭니다.
// 4. visible 활성 유틸 함수 만들기
// 5. toggleState 유틸 함수 만들기 

import { diceAnimation, disableElement, enableElement, getNode } from "./lib/index.js";


const rollingDiceButton = getNode('.buttonGroup > button:nth-child(1)');
const recordButton = getNode('.buttonGroup > button:nth-child(2)');

const handlerRollingDice = () => { 

  let stopAnimation;
  let isRolling = false;

  return () => { // 클로저로 보호해야 실행됨.
    if (!isRolling) {
      stopAnimation = setInterval(diceAnimation,100); // 시간간격 두고 반복실행 (연결시켜 놓은 애니메이션으로))
      disableElement(recordButton); // (12) 비활성화. 주사위버튼 실행중이면 기록버튼 누를 수 없음
    } else {
      clearInterval(stopAnimation); // 이전에 설정된 시간 제한 반복 작업을 취소시킴
      enableElement(recordButton); // (12) 활성화. 주사위버튼 멈추면 기록버튼 누를 수 있음
    }
  
    isRolling = !isRolling; // true, false 토글 됨

  }

  
}

const handleRecord = () => {

}

rollingDiceButton.addEventListener('click', handlerRollingDice()); // IIFE 사용하지 않고 클로저하면 뒤에 () 붙여야 함
recordButton.addEventListener('click', handleRecord);


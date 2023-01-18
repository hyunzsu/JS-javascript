/* readyState
0: uninitalized // XMLHttpRequest 객체는 생성되었지만 open()메서드가 호출되지 않음
1: loading // open()메서드가 호출됨
2: loaded // send()메서드가 호출됨
3: interative // 응답을 로드중
4: complete // 요청 완료
*/

// import { typeError } from '../error/typeError.js';

// 함수 만들기 전
const xhr = new XMLHttpRequest();

//비동기 통신 오픈
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users'); // 메서드, 주소

// 변경이 일어날떄마다 호출하는 역할
xhr.addEventListener('readystatechange', () => {
  if (xhr.status >= 200 && xhr.status < 400) { // 오류 처리
    if (xhr.readyState === 4) { // 2,3,4 단계마다 출력하지말고 complete 했을 때만 찍혀라
      console.log('통신 성공');
    }
  } else {
    console.error('통신 실패');
  }
});

//서버에 요청
xhr.send();

/* 결과는 '통신 성공' 한번만 찍힘
2, 3, 4 나오는 이유? 
위치에따라 xhr객체의 상태가 다르기 때문에 위치에 따라 다르게 출력됨.
이유는 비동기요청 보낼 때 readyState상태가 계속 바뀌는데, 걸어준 이벤트자체가 
readystatechange(readystate가 바뀔 때 발생하는 이벤트)이기 때문에 2, 3, 4가 모두 출력됨.
=> if(readyState === 4) 조건문으로 통신이 완료되었을 때만 통신성공이라는 문구를 출력하도록 만듦 */
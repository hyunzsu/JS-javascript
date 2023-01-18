/* readyState
0: uninitalized // XMLHttpRequest 객체는 생성되었지만 open()메서드가 호출되지 않음
1: loading // open()메서드가 호출됨
2: loaded // send()메서드가 호출됨
3: interative // 응답을 로드중
4: complete // 요청 완료
*/

// import { typeError } from '../error/typeError.js';

// GET
// * 함수만들기(xhrData)
function xhrData(method, url) {
  const xhr = new XMLHttpRequest();

  // 비동기 통신 오픈
  xhr.open(method, url);

  // 변경이 일어날때마다 호출하는 역할 (readyState가 change됬을 때 발생하는 이벤트)
  xhr.addEventListener('readystatechange', () => {
    if (xhr.status >= 200 && xhr.status < 400) { // 오류 처리
      if (xhr.readyState === 4) { // 2,3,4 단계마다 출력하지말고 complete 했을 때만 찍혀라
        console.log('통신 성공');
      }
    } else {
      console.error('통신 실패');
    }
  });

  // 서버에 요청
  xhr.send();
}
xhrData('GET', 'https://jsonplaceholder.typicode.com/users');

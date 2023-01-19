/* readyState
0: uninitalized // XMLHttpRequest 객체는 생성되었지만 open()메서드가 호출되지 않음
1: loading // open()메서드가 호출됨
2: loaded // send()메서드가 호출됨
3: interative // 응답을 로드중
4: complete // 요청 완료
*/

// import { typeError } from '../error/typeError.js';

// POST (통신body 필요!) 시작 - users에 새롭게 추가, 포스팅
function xhrData(method, url, body) {
  const xhr = new XMLHttpRequest();

  // 비동기 통신 오픈
  xhr.open(method, url);

  // 변경이 일어날때마다 호출하는 역할 (readyState가 change됬을 때 발생하는 이벤트)
  xhr.addEventListener('readystatechange', () => {

    // 객체 구조 분해 할당!!!!
    const {status, readyState, response} = xhr;

    if (status >= 200 && status < 400) { // 오류 처리
      if (readyState === 4) { // 2,3,4 단계마다 출력하지말고 complete 했을 때만 찍혀라
        // console.log('통신 성공');
        console.log(JSON.parse(response)); // 응답을 우리가 봐야하니까 객체화 시킴
      }
    } else {
      console.error('통신 실패');
    }
  });

  // 서버에 요청
  xhr.send(JSON.stringify(body)); // 서버에 보내는거니깐 문자화
}

xhrData({
  url:'https://jsonplaceholder.typicode.com/users',
  method:'GET',
  body:null,
  headers:{
    'Content-Type':'application/json'
  }
})


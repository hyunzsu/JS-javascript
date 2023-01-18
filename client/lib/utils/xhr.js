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
    if (xhr.status >= 200 && xhr.status < 400) { // 오류 처리
      if (xhr.readyState === 4) { // 2,3,4 단계마다 출력하지말고 complete 했을 때만 찍혀라
        // console.log('통신 성공');
        console.log(JSON.parse(xhr.response)); // 응답을 우리가 봐야하니까 객체화 시킴
      }
    } else {
      console.error('통신 실패');
    }
  });

  // 서버에 요청
  xhr.send(JSON.stringify(body)); // 서버에 보내는거니깐 문자화
}

xhrData('POST','https://jsonplaceholder.typicode.com/users',{
  "name": "kindtiger",
  "username": "seonbeom",
  "email": "tiger@euid.dev",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "010-7169-0262",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
})


/* 출력 결과 => {id: 11}
원래 10개 있는데 1개 더 보내니까 11이라고 출력
xhr.reponse // 데이더 값들, 요청의 속성 값에 따라 응답의 본문 콘텐츠를 문자열로 반환
console.log((typeof xhr.response)) // String
console.log(JSON.parse(xhr.reponse)) // 객체화 시킴 
*/
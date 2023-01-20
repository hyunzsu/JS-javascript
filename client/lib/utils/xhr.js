/* readyState
0: uninitalized // XMLHttpRequest 객체는 생성되었지만 open()메서드가 호출되지 않음
1: loading // open()메서드가 호출됨
2: loaded // send()메서드가 호출됨
3: interative // 응답을 로드중
4: complete // 요청 완료
*/

// import { typeError } from '../error/typeError.js';

// GET
// argument에서 받을 것을 parameter로 받겠다. 
function xhrData({ // 기본값 설정, default parameter
  url = '',
  method = 'GET',
  body = null,
  onSuccess = null,
  headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin': '*',
  },

}){
  const xhr = new XMLHttpRequest();
  // console.log(xhr);

  // 비동기 통신 오픈
  xhr.open(method, url);

  // 변경이 일어날때마다 호출하는 역할 (readyState가 change됬을 때 발생하는 이벤트)
  xhr.addEventListener('readystatechange', () => {

    const {status, readyState, response} = xhr; // 객체 구조 분해 할당!!!!

    if (status >= 200 && status < 400) { // 오류 처리
      if (readyState === 4) { // 2,3,4 단계마다 출력하지말고 complete 했을 때만 찍혀라
        onSuccess(JSON.parse(response)) // 객체화, onSuccess 함수 이용, argument에 users/1 만 보냄
      }
    } else {
      console.error('통신 실패');
    }
  });

  // 서버에 요청
  xhr.send(JSON.stringify(body)); // 서버에 보내는거니깐 문자화
}

// argument 적어짐
xhrData({
  url:'https://jsonplaceholder.typicode.com/users/1', // 1만 보냄
  onSuccess: (result) => {
    console.log(result);
  }
})

/* 출력 결과
{id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz', address: {…}, …} 
url:'https://jsonplaceholder.typicode.com/users/1' -> 1만 GET 해라
*/
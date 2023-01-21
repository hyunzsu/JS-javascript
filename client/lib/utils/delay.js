import { getNode } from '../dom/getNode.js';

const first = getNode('.first');
const second = getNode('.second');

// JS는 위에서 아래로 읽는데 같이 움직임, 콜백이 필요한 순간!
/* first.style.top = '-100px';
first.style.transform = 'rotate(360deg)';
first.style.top = '0px' */

// 콜백함수 이용 -> 함수가 함수 호출할 때 다시 delay 줘서 다시 호출,..
function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

// 콜백지옥
/* delay(()=>{
  first.style.top = '-100px';
  delay(()=>{
    second.style.left = '100px';
    delay(()=>{
      first.style.top = '0px';
      second.style.left = '0px';
    })
    first.style.transform = 'rotate(360deg)';
  })
}) */

// promise 이용 -> 콜백함수의 가독성을 위해
/*
function delayP(timeout = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('성공!');
      // reject('실패!');
    }, timeout);
  });
}

delayP()
.then(() => {
  first.style.top = '-100px';
  return delayP();
})
.then(() => {
  first.style.transform = 'rotate(360deg)';
  second.style.left = '100px';
  return delayP();
})
.then(() => {
  first.style.top = '0px';
  second.style.left = '0px'
});

console.log(delayP()); // Promise, [PromiseState]: 'fulfilled', [PromiseResult]: '성공!'
*/


// 매개변수 자리마다 맞추기 힘드니까 구조분해할당 말고 다른 형태 시도~!
// 내가 원하는 값만 넣어주고 다른것들은 기본값으로 하고싶어 -> 기본값은 기본으로 깔고, 우리가 변경하고 싶은 값만 새롭게 반영
// argument 일일히 다 넘기기 귀찮, 필요한것만 넘길거~ 다른것들은 기본값

// 기본값 설정
const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: '성공했습니다.',
  errorMessage: '알 수 없는 오류가 발생했습니다.'
}

export function delayP(options = {}) {

  // defaultOptions
  let config = {...defaultOptions} // 얕복, 새롭게 담김, 왜 하냐? 참조에 의한 복사하면 기존 값까지 바뀌어버리는 사태가 발생...!
  
  // 객체 합성 mixin
  config = {...config, ...options}; // 기존 config객체 + 우리가 넣을 options 추가하기(options값이 config값과 동일하면 options값으로 덮어주기)

  const {shouldReject, data, errorMessage, timeout} = config; // 새로운 config로 구조 분해 할당

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldReject) {
        resolve(data)    
      } else {
        reject(errorMessage)
      }
    }, timeout);
  })
}

/* delayP({
  data: '안녕',
}).then((res) => {
  console.log(res); // 안녕
}) */

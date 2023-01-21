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

// return 쓰는거 귀찮!
// default parameter, argument는 추가하고싶은거 따로 넘겨줌
function delayP(shouldReject = false, timeout = 1000, data = '성공했습니다.', errorMessage = '알 수 없는 오류가 발생했습니다.') {
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

delayP(false, 1000, '진짜 성공', '오류가 발생했다!!').then((res)=>{
  console.log(res); // 진짜 성공
}) 


// resolve, reject
/*
delayP()
.then((res) => console.log(res)); // resolve
.catch((err) => console.log(err)); // reject
*/
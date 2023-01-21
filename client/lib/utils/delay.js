import { getNode } from '../dom/getNode.js';

const first = getNode('.first');

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
  first.style.top = '-100px'
  delay(()=>{
    first.style.transform = 'rotate(360deg)'
    delay(()=>{
      first.style.top = '0px'
    })
  })
}) */

// promise 이용 -> 콜백함수의 가독성을 위해
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
  return delayP();
})
.then(() => {
  first.style.top = '0px';
});

console.log(delayP()); // Promise, [PromiseState]: 'fulfilled', [PromiseResult]: '성공!'


// 위에 결과를 가져옴. 성공한걸! 실패는 catch 구문
/* promise.then((res)=>{
	console.log(res) // 성공입니다.
}) 

promise.cathch((err)=>{
	console.log(err) // 실패입니다.
}) */
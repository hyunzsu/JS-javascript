import { xhrData, insertLast } from './lib/index.js';


// insertLast -> 화면에 뿌려줌 (user 1 정보)
/* xhrData.get(
  'https://jsonplaceholder.typicode.com/users/1',
  (res) => {
    insertLast('body', JSON.stringify(res)); // onSuccess
  },
  (err) => {
    insertLast('body', '데이터 로딩에 실패했습니다.'); // onFail
  }
); */


/* xhrPromise({
  url: 'https://jsonplaceholder.typicode.com/users/1'
})
.then((res) => {
  console.log(res); // {id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz', address: {…}, …}
})
.catch((err) => {
  console.log(err);
}) */

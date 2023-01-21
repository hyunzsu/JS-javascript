
// fetch

const defaultOptions = {
  method: 'GET',
  mode: 'cors',
  body:null,
  cache: 'no-cache',
  credential: 'same-origin',
  redirect:'follow',
  referrerPolicy:'no-referrer',
  headers:{
    'Content-Type':'application/json; charset=UTF-8'
  }
}


export const tiger = async (options = {}) => {

  // 객체합성과 동시에 url, ...restOptions(url을 제외한 나머지 객체?)만 구조분해할당
  const {url, ...restOptions} = {
    ...defaultOptions,
    ...options,
    headers: {...defaultOptions.headers, ...options.headers} // 깊은 복사
  }
  // console.log(restOptions);

  let response = await fetch(url, restOptions) // 문법이 이럼

  if (response.ok) { // fetch가 완료되었다면
    response.data = await response.json() // data 추가, response 안에 있는 json 값을 가져옴 -> await은 값을 가져오는거니깐
  }
  
  // console.log(response);

  return response;

}

// tiger();

// GET
tiger.get = (url,options) => {
  tiger({
    url,
    ...options
  })
}

// POST
tiger.post = (url, body, options) => {
  tiger({
    method: 'POST',
    url,
    body: JSON.stringify(body),
    ...options
  })
}

// PUT
tiger.put = (url, body, options) => {
  tiger({
    method: 'PUT',
    url,
    body: JSON.stringify(body),
    ...options
  })
}

// DELETE
tiger.delete = (url, options) => {
  tiger({
    method: 'DELETE',
    url,
    ...options
  })
}
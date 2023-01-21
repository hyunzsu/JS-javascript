
// fetch

const defaultOptions = {
  method: 'GET',
  mode: 'cors',
  body:null,
  cache: 'no-cache',
  credential: 'same-origin',
  redirect:'follow',
  referrerPlicy:'no-reffere',
  headers:{
    'Content-Type':'application/json; charset=UTF-8'
  }
}


const tiger = async () => {
  let response = await fetch(
    'https://jsonplaceholder.typicode.com/users/1',
    {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
      },
    }
  )
  console.log(response);
}

tiger()
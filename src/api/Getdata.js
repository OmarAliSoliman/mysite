import Data from './api.json';
// import axios from 'axios';

export function getdate(){
  // return axios.get('https://elcourse3.getsandbox.com/category/courses');
  return Promise.resolve(Data);
}


// async function getUser() {
//   const response = await axios.get('/user?ID=12345');
//   console.log(response)
// }// return Promise.resolve(Data);
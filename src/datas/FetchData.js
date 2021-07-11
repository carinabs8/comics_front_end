import axios from 'axios';

export const fetchData = async path => {
  return axios.get(path, {headers: {
     "Content-Type": "application/json"
   }})
  .then(result => {
    return result.data
  })
  .catch(function (error) {
    return error.response.status;
  });
}

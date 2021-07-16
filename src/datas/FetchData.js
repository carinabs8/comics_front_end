import axios from 'axios';

export const client = axios.create({
  baseURL: '/'
});

export const fetchData = async path => {
  return client.get(path, {headers: {
     "Content-Type": "application/json"
   }})
  .then(result => {
    return result.data
  })
  .catch(function (error) {
    return error.response.status;
  });
}

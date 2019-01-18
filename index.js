const axios = require('axios');

const promise = axios.get('https://api.github.com/users/davyengone');

promise
  .then(getUser)
  .then(getFollowers)
  .catch(error);

function getUserError(err) {
  //console.log(err);
  return { data: [] };
}

function error(err) {
  console.log(err);
}
function getUser(user) {
  console.log(user);
  return axios.get(user.data.followers_url);
}
function getFollowers(followers) {
  const logins = followers.data.map(user => user.login);
  console.log(logins);
}

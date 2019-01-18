import axios from 'axios';

// function main() {
//   const promise = axios.get('https://api.github.com/users/davyengone');
//   promise
//     .then(getUser, getUserError)
//     .then(getFollowers)
//     .catch(error);
// }
async function main() {
  try {
    const user = await getUser();
    const followers = await axios.get(user.data.followers_url);
    console.log(followers.data);
  } catch (error) {
    console.log('hummmmmm', error);
  }
}

main();

function getUser() {
  return axios.get('https://api.github.com/users/davyengone');
}
function getFollowers(followers) {
  const logins = followers.data.map(user => user.login);
  console.log(logins);
}

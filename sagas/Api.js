// const urlGetUsers = 'https://randomuser.me/api/?results=5&callback=randomuserdata'
const urlGetUsers = 'https://randomuser.me/api/?results=100';

function* getUsersFromApi() {
  const response = yield fetch(urlGetUsers, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: '',
  });
  const users = yield response.status === 200
    ? JSON.parse(response._bodyInit)
    : [];
  return users;
}

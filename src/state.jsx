const user = {
  id: "1",
  email: "ivan@ya.ru",
  name: "Иван",
  surname: "Иванов",
  avatar:
    "https://img.freepik.com/free-psd/3d-illustration-bald-person-with-glasses_23-2149436184.jpg",
  about: "Тут мой рассказ очень интересный",
};

let users = [];

export function getUser(userId) {
  for (let i = 0; i < Object.keys(users).length; i++ ) {
    if (users[i].id == userId) return users[i];
  }
  return user;
}

export async function getUsers() {
  let response = await fetch("http://l96705y2.beget.tech/getUsers"); //запрос в базу данныx - программа прописана в router.php и папке php требует CORS ЗАГОЛОВКА
  users = await response.json();
  return users;
}

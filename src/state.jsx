const user = {
  id: "1",
  email: "ivan@ya.ru",
  name: "Иван",
  lastname: "Иванов",
  avatar:
    "https://img.freepik.com/free-psd/3d-illustration-bald-person-with-glasses_23-2149436184.jpg",
  about: "Тут мой рассказ очень интересный",
};

const users = {
  0: { name: "Анна", lastname: "Лесная" },
  1: { name: "Олег", lastname: "Синицин" },
  2: { name: "Николай", lastname: "Поддубный" },
  3: { name: "Степан", lastname: "Коровин" },
  4: { name: "Алла", lastname: "Курова" },
};
export function getUser() {
  return user;
}

export function getUsers() {
  return users;
}

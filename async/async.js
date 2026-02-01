const message = document.getElementById("message");
const usersContainer = document.getElementById("users");
const getAllBtn = document.getElementById("get-All");
const deleteAllBtn = document.getElementById("delete-All");

const STORAGE_KEY = "users";

function getUsersFromStorage() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY));
}

function saveUsersToStorage(users) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}

function fetchUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch("users.json")
      .then((response) => {
        if(!response.ok) {
          throw new Error("Ошибка при загрузке данных");
        }
        return response.json();
      })
      .then((data) => resolve(data.users))
      .catch(() => reject(new Error("Ошибка при загрузке данных")));
    }, 1000);
  });
}

function renderUsers(users) {
  usersContainer.innerHTML = "";

  if (users.length === 0) {
    message.textContent = "Пользователей нет";
    return;
  }

  message.textContent = "";

  users.forEach((user) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${user.name} ${user.surname}</h3>
      <p>${user.email}</p>
      <p>Возраст: ${user.age}</p>
      <button>Удалить</button>
    `;

    card.querySelector("button").addEventListener("click", () => {
      deleteUser(user.id);
    });

    usersContainer.appendChild(card);
  });
}

function deleteUser(id) {
  let users = getUsersFromStorage();
  users = users.filter((user) => user.id !== id);
  saveUsersToStorage(users);
  renderUsers(users);
}

deleteAllBtn.addEventListener("click", () => {
  const users = getUsersFromStorage();

  if (!users || users.length === 0) {
    message.textContent = "Пользователей нет";
    return;
  }

  saveUsersToStorage([]);
  renderUsers([]);
});

getAllBtn.addEventListener("click", async () => {
  const users = getUsersFromStorage();

  if (users && users.length > 0 && usersContainer.children.length > 0) {
    message.textContent = "Все пользователи уже отображены";
    return;
  }

  if (users && users.length > 0) {
    renderUsers(users);
    return;
  }

  message.textContent = "Данные загружаются";

  try {
    const fetchedUsers = await fetchUsers();
    saveUsersToStorage(fetchedUsers);
    renderUsers(fetchedUsers);
  } catch (error) {
    message.textContent = "Ошибка при загрузке данных";
  }
});

document.addEventListener("DOMContentLoaded", async () => {
  const storedUsers = getUsersFromStorage();

  if (storedUsers) {
    renderUsers(storedUsers);
  } else {
    message.textContent = "Данные загружаются";

    try {
      const users = await fetchUsers();
      saveUsersToStorage(users);
      renderUsers(users);
    } catch (error) {
      message.textContent = "Ошибка при загрузке данных";
    }
  }
});

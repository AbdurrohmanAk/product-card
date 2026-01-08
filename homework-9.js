// 4 К форме в footer добавить логику и валидацию

const footerForm = document.querySelector("#footerForm");
footerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const mailForm = event.target;
  const formData = new FormData(mailForm);
  const data = Object.fromEntries(formData.entries());
  console.log(data);
});

// 5 создать форму для регистрации

const openModal = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const overlayModal = document.getElementById("overlayModal");

openModal.addEventListener("click", () => {
  overlayModal.classList.add("modal-showed");
});

closeModalBtn.addEventListener("click", () => {
  overlayModal.classList.remove("modal-showed");
});

overlayModal.addEventListener("click", () => {
  if (event.target === overlayModal) {
    overlayModal.classList.remove("modal-showed");
  }
});

// 6 Создать форму для регистрации внутри модального окна.

const registerForm = document.getElementById("registerForm");
let user = null;

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!registerForm.checkValidity()) {
    alert("Форма заполнена неверно");
    return;
  }

const formData = new FormData(registerForm);
const data = Object.fromEntries(formData.entries());
  if (data.password !== data.repeatPassword) {
    alert("Пароли не совпадают");
    return;
  }

  user = {
  ...data,
  createdOn: new Date(),
};
})
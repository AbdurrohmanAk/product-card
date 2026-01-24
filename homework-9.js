// 4 К форме в footer добавить логику и валидацию

const footerForm = document.querySelector("#footerForm");
footerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!footerForm.checkValidity()) {
    alert("Форма заполнена неверно");
    return;
  }
  const formData = new FormData(footerForm);
  const data = Object.fromEntries(formData.entries());
  console.log(data);
});

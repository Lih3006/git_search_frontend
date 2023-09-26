import { requestUser } from "./requests.js";

const input = document.querySelector(".input__git-search");
const ancor = document.querySelector(".submit__git-search");
const form = document.querySelector(".form__git-search");

if (ancor !== null) {
  ancor.addEventListener("click", () => {
    requestUser(input.value);
  });
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    requestUser(input.value);
  });
}

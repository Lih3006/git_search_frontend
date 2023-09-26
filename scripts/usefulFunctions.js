/* normatizar uma string para comparacao */

export function standartString(name) {
  let standart = name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ /g, "")
    .trim();

  return standart;
}

/* volta para a página inicial */

export function backToHome() {
  window.location.replace("../../index.html");
}

import { standartString } from "./usefulFunctions.js";

//TODO --> FUNCAO RECEBE VALOR INFORMADO PELO USUÁRIO
//* SE USUÁRIO NAO EXISTE PÁGINA REDIRECIONADA PARA A PÁGINA ERRO
//* SE USUÁRIO EXISTE PÁGINA É REDIRECIONADA PARA A PÁGINA PROFILE

export async function requestUser(userName) {
  const user = await fetch(
    `https://api.github.com/users/${standartString(userName)}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      if (res.message === "Not Found") {
        window.location.replace("./pages/error/index.html");
        return res;
      } else {
        localStorage.setItem("requestUser", JSON.stringify(res));
        window.location.replace("./pages/profile/index.html");
      }
    });

  return user;
}

export async function requestRepository(userName) {
  const repositories = await fetch(
    `https://api.github.com/users/${standartString(userName)}/repos`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      return res;
    });
  return repositories;
}

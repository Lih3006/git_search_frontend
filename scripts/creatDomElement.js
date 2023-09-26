import { backToHome } from "./usefulFunctions.js";

export function creatProfile(user) {
  const containerInitial = document.createElement("div");
  const userContainer = document.createElement("div");
  const imgUser = document.createElement("img");
  const nameUser = document.createElement("h2");
  const changeUserContainer = document.createElement("div");
  const ancorChangeUser = document.createElement("a");

  containerInitial.classList.add("container__initial");
  userContainer.classList.add("box__user");
  imgUser.classList.add("img__user");
  changeUserContainer.classList.add("box__change-user");
  ancorChangeUser.classList.add("ancor__change-user");
  nameUser.classList.add("title__user");
  imgUser.setAttribute("src", user.avatar_url);
  nameUser.innerText = user.name;
  ancorChangeUser.innerText = "Trocar de Usuário";

  ancorChangeUser.addEventListener("click", backToHome);

  containerInitial.append(userContainer, changeUserContainer);
  userContainer.append(imgUser, nameUser);
  changeUserContainer.appendChild(ancorChangeUser);

  return containerInitial;
}

export function creatRepository(repository) {
  const itemRepository = document.createElement("li");
  const titleRepository = document.createElement("h2");
  const textRepository = document.createElement("p");
  const ancorOpenRepository = document.createElement("a");
  const repositorzName = repository.name;
  itemRepository.classList.add("item__repository");
  titleRepository.classList.add("title__repository");
  textRepository.classList.add("text__repository");
  ancorOpenRepository.classList.add("button_repository");
  titleRepository.innerText =
    repositorzName[0].toUpperCase() + repositorzName.substring(1);
  ancorOpenRepository.innerText = "Repositório";
  ancorOpenRepository.setAttribute(
    "href",
    `https://github.com/${repository.full_name}`
  );

  if (repository.description === null) {
    const description =
      "Um repositório no GitHub é um espaço de armazenamento virtual onde são mantidos os arquivos de um projeto, incluindo o histórico de alterações (commits), as diferentes versões do código, as ramificações (branches), as issues (problemas) e os pull requests (solicitações de alteração).";

    textRepository.innerText = `${description.substring(0, 100)}...`;
  } else {
    textRepository.innerText = `${repository.description.substring(0, 100)}...`;
  }
  itemRepository.append(titleRepository, textRepository, ancorOpenRepository);
  return itemRepository;
}

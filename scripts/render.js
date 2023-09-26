import { creatProfile, creatRepository } from "./creatDomElement.js";

export async function renderUser(user) {
  const renderToContainer = document.querySelector(".container__user");
  renderToContainer.innerHTML = "";

  renderToContainer.appendChild(creatProfile(user));

  return renderToContainer;
}

export function renderRepositories(array) {
  const listRepositories = document.querySelector(".list__repositories");

  listRepositories.innerHTML = "";

  array.forEach((repository) => {
    listRepositories.appendChild(creatRepository(repository));
  });

  return listRepositories;
}

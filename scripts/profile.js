import { renderUser, renderRepositories } from "../scripts/render.js";
import { requestRepository } from "../scripts/requests.js";
import { standartString } from "../scripts/usefulFunctions.js";

const user = JSON.parse(localStorage.getItem("requestUser"));

const repository = await requestRepository(standartString(user.login));

renderUser(user);
renderRepositories(repository);

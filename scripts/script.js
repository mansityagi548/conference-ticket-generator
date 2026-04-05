import { validateForm } from "./checking.js";
import { renderCreateHtml } from "./makingHTML.js";
import { setupUpload } from "./setupUpload.js";

const form = document.querySelector("form");
const fullNameInput = document.querySelector("#fullName");
const emailInput = document.querySelector("#email");
const githubInput = document.querySelector("#github");
const previewImg = document.querySelector("#previewImg");

setupUpload();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  const name = fullNameInput.value.trim();
  const email = emailInput.value.trim();
  const gitHub = githubInput.value.trim();
  const avatar = previewImg.src;

  renderCreateHtml({
    name,
    email,
    gitHub,
    avatar,
  });
});



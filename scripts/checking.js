const fullNameInput = document.querySelector("#fullName");
const emailInput = document.querySelector("#email");
const githubInput = document.querySelector("#github");
const previewImg = document.querySelector("#previewImg");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nameRegex = /^[a-zA-Z\s]{2,50}$/;
const usernameRegex = /^[a-zA-Z0-9_-]{3,20}$/;


export function validateForm() {
  const name = fullNameInput.value.trim();
  const email = emailInput.value.trim();
  const gitHub = githubInput.value.trim();

  if (!previewImg.src || previewImg.style.display === "none") {
    alert("Please upload an avatar");
    return false;
  }

  if (!nameRegex.test(name)) {
    alert("Name must be 2-50 letters only");
    return false;
  }

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email");
    return false;
  }
  if (!usernameRegex.test(gitHub)) {
    alert(" GitHub Username must be 3-20 chars, letters numbers - or _ only");
    return false;
  }

  return true;
}

const uploadArea = document.querySelector("#uploadArea");
const avatarInput = document.querySelector("#avatarInput");
const uploadIconWrap = document.querySelector("#uploadIconWrap");
const uploadText = document.querySelector("#uploadText");
const previewImg = document.querySelector("#previewImg");

export function setupUpload(){
    uploadArea.addEventListener("click", () => {
  avatarInput.click();
});

avatarInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;


  if (file.size > 500 * 1024) {
    alert("Image must be under 500KB");
    avatarInput.value = "";
    return;
  }


  if (!["image/jpeg", "image/png"].includes(file.type)) {
    alert("Only JPG or PNG allowed");
    avatarInput.value = "";
    return;
  }


  const reader = new FileReader();
  reader.onload = (e) => {
    previewImg.src = e.target.result;
    previewImg.style.display = "block";
    uploadIconWrap.style.display = "none";
    uploadText.style.display = "none";
  };
  reader.readAsDataURL(file);
});
}

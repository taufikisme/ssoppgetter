function isFileExists() {
  let nim_mhs = document.getElementById("search").value;
  let img_tag = document.getElementById("imgsso");
  let nim_tag = document.getElementById("nimsso");

  const img = new Image();
  img.src = "https://regonline.undip.ac.id/data/foto_ktm/" + nim_mhs + ".jpg";

  img.onload = function () {
    img_tag.src =
      "https://regonline.undip.ac.id/data/foto_ktm/" + nim_mhs + ".jpg";
    img_tag.classList.remove("d-none");
    nim_tag.innerHTML = nim_mhs;
  };

  img.onerror = function () {
    nim_tag.innerHTML = "Image Doesn't Exist :(";
    img_tag.classList.add("d-none");
  };
}

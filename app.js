let profilePicture = document.getElementById("profile-picture");
let inputFile = document.getElementById("input-file");

inputFile.onchange = function () {
  profilePicture.src = URL.createObjectURL(inputFile.files[0]);
};

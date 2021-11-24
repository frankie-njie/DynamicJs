let dropdownBtn = document.getElementsByName("button")[0];
let dropdownMenu = document.getElementsByClassName("dropdown-menu")[0];

dropdownBtn.addEventListener("click", handleDropdown);

function handleDropdown() {
  if (
    dropdownMenu.style.display === "none" ||
    dropdownMenu.style.display === ""
  ) {
    dropdownMenu.style.display = "block";
    console.log("clicked");
  } else {
    dropdownMenu.style.display = "none";
  }
}

window.onclick = function (e) {
  if (!e.target.matches(".dropdown-btn")) {
    dropdownMenu.style.display = "none";
  }
};

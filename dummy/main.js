// checking if user is signed in or not
auth.onAuthStateChanged(user => {
  if (user) {
      console.log('user is signed in at users.html');
  }
  else {
      location = "index.html";
  }
})


// logout
function logout() {
  auth.signOut();
}

let subMenu = document.getElementById("subMenu");

function toggleMenu() {
  subMenu.classList.toggle("open-menu");
}

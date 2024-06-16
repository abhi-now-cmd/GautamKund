const nav = document.getElementsByTagName("nav")[0];
function popup() {
    document.getElementById("popup").classList.toggle("display");
}
nav.firstElementChild.innerHTML+=`<li><a href="/register.html">Register</a></li>`

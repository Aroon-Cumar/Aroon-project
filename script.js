let login=document.querySelector(".login-form");
document.querySelector("#login-btn").onclick=()=>{
    login.classList.toggle('active');
}

let navbar=document.querySelector(".header .navbar");

document.querySelector("#menu-btn").onclick=()=>{
    login.classList.remove('active');
    navbar.classList.toggle('active');
}

















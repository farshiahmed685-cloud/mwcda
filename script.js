function changeRole(role, button){

const title = document.getElementById("loginTitle");
const label = document.getElementById("idLabel");
const box = document.querySelector(".login-box");

document.querySelectorAll(".role").forEach(btn=>{
btn.classList.remove("active");
});

button.classList.add("active");

if(role === "student"){
title.innerText = "Login as Student";
label.innerText = "Student ID";
box.style.borderTop = "5px solid #00c3ff";
}

if(role === "admin"){
title.innerText = "Login as Admin";
label.innerText = "Admin Username";
box.style.borderTop = "5px solid #ff4d4d";
}

if(role === "staff"){
title.innerText = "Login as Staff";
label.innerText = "Staff ID";
box.style.borderTop = "5px solid #28a745";
}

}


/* NAVBAR STICKY */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function(){

if(window.scrollY > 50){
navbar.classList.add("sticky");
}else{
navbar.classList.remove("sticky");
}

});
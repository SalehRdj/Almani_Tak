let Packs = document.querySelector(".Packs");
let Package_hover = document.querySelector(".Package_hover");
let icon = document.querySelector(".icon");

let Bars_header = document.querySelector(".Bars-header");
let shdow = document.querySelector(".shdow");
let secondary_header = document.querySelector(".secondary-header");
let Close_Bars = document.querySelector(".Close_Bars");

let Package_Open = document.querySelector(".Package_Open");
let FleshIcon2 = document.querySelector(".FleshIcon2");

var slide = document.querySelectorAll(".slide");

let SignUp_Button = document.querySelector(".SignUp_Button");
let signUp_back = document.querySelector(".signUp_back");
let signUp_Page = document.querySelector(".signUp_Page");

let fa_eye = document.querySelector(".fa-eye");
let fa_eye_slash = document.querySelector(".fa-eye-slash");
let Singup_eye = document.querySelector(".Singup_eye")

let con_icon = document.querySelector(".con_icon")
let con_icon_close = document.querySelector(".con_icon_close")
let Singup_eye_confirm = document.querySelector(".Singup_eye_confirm")

let login_eye = document.querySelector(".login_eye");
let login_eye_close = document.querySelector(".login_eye_close")
let Login_input_eye = document.querySelector(".Login_input_eye")

var Login_Page = document.querySelector(".Login_Page");
var Login_Button = document.querySelector(".Login_Button");



function hover_pack(){
  Package_hover.style.display = "flex";
  icon.style.transform = "rotate(180deg)";
}

function unhover_pack(){
  Package_hover.style.display = "none";
  icon.style.transform = "rotate(0deg)";
}



function Click_Bars() {
  secondary_header.style.width = "150px"
  shdow.style.display = "block"
  secondary_header.style.borderLeft = "2px solid white";
}

function Click_xmark() {
  secondary_header.style.width = "0px"
  shdow.style.display = "none"
  secondary_header.style.borderLeft = "none";
}

function shdow_Close(){
  secondary_header.style.borderLeft = "none";
  secondary_header.style.width = "0px"
  shdow.style.display = "none"
}

function Open_Package_Box() {

  if (Package_Open.style.display === "none" || Package_Open.style.display === "") {
    Package_Open.style.display = "block";
    FleshIcon2.style.transform = FleshIcon2.style.transform === "rotate(180deg)" ? "rotate(0deg)" : "rotate(180deg)";
  } else {
    Package_Open.style.display = "none";
    FleshIcon2.style.transform = FleshIcon2.style.transform === "rotate(0deg)" ? "rotate(180deg)" : "rotate(0deg)";
  }
}



n = 0
function Next_Slide() {
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  n++;
  if (n == slide.length) { n = 0 }
  slide[n].style.display = "block";
}

function Last_Slide() {
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }

  n--;
  if (n < 0) { n = slide.length - 1 }
  slide[n].style.display = "block";
}

setInterval(Next_Slide, 4000)


function Open_SignUp() {
  signUp_back.style.width = "100vw";
  signUp_back.style.height = "100vh";
  signUp_Page.style.display = "flex";
  Login_Page.style.display = "none";
}

function Close_SignUp_form() {
  signUp_back.style.width = "0";
  signUp_back.style.height = "0";
}

function Open_eye_signup(){
  fa_eye.style.display = "none";
  fa_eye_slash.style.setProperty('display', 'block', 'important');
  Singup_eye.setAttribute("type","text");
}

function Close_eye_signup(){
  fa_eye.style.display = "block";
  fa_eye_slash.style.setProperty('display', 'none', 'important');
  Singup_eye.setAttribute("type","password");
}

function Open_eye_signup_con(){
  con_icon.style.display = "none";
  con_icon_close.style.setProperty('display', 'block', 'important');
  Singup_eye_confirm.setAttribute("type","text");
}
function Close_eye_signup_con(){
  con_icon.style.display = "block";
  con_icon_close.style.setProperty('display', 'none', 'important');
  Singup_eye_confirm.setAttribute("type","password");
}

function Open_Login_eye(){
  login_eye.style.display = "none";
  login_eye_close.style.setProperty('display', 'block', 'important');
  Login_input_eye.setAttribute("type","text");
}
function Close_Login_eye(){
  login_eye.style.display = "block";
  login_eye_close.style.setProperty('display', 'none', 'important');
  Login_input_eye.setAttribute("type","password");
}

function Button_Open_Login(){
  signUp_back.style.width = "100vw";
  signUp_back.style.height = "100vh";
  Login_Page.style.display = "flex";
  signUp_Page.style.display = "none";
}

function Button_Close_Login(){
  signUp_back.style.width = "0";
  signUp_back.style.height = "0";
}

function Login_a_btn(){
  Login_Page.style.display = "flex";
  signUp_Page.style.display = "none";
}

function SignUp_a_btn(){
  Login_Page.style.display = "none";
  signUp_Page.style.display = "flex";
}
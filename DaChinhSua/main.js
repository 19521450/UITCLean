
var btnContainer = document.getElementById("navbarNav");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("nav-item ");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < 5; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}




let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



// var checkValidation = function () {
//   valid = KiemTraRong("name",'error_name') & KiemTraRong("password",'error_password')  & KiemTraRong("phone",'error_phone') & KiemTraRong("email",'error_email');
//   valid &= KiemTraChu("#name",'#error_name_all_leter');
//   valid &= KiemTraSo('#phone','#error_phone') & KiemTraEmail('#email','#error_email') & kiemTraDoDai('#password','#error_password');
//   if(!valid){
//       return false;
//   }
//   return valid;
// }
// document.getElementById('btnSubmit').onclick = checkValidation;


// var KiemTraRong = function(selectorValue, selectorError){ 
//   var inputtext = document.getElementById(selectorValue);
//   if(inputtext.value.trim()===''){
//       document.getElementById(selectorError).innerHTML = inputtext.name + ' không được bỏ trống';
//       document.getElementById(selectorError).style.display = 'block';
//       return false;
//   }
//   else{
//       document.getElementById(selectorError).innerHTML =  '';
//       document.getElementById(selectorError).style.display = 'none';
//       return true;
//   }
  
// }

// var KiemTraChu = function(selectorValue, selectorError ){
//   var inputtext = document.querySelector(selectorValue);
//   var regexChu = /^[A-Za-z]+$/;
//   if(regexChu.test(inputtext.value)){
//       document.querySelector(selectorError).innerHTML = '';
//       document.querySelector(selectorError).style.display = 'none';
//       return true;
//   }else{
//       document.querySelector(selectorError).innerHTML = inputtext.name + ' không chứa ký tự số, vui lòng nhập lại';
//       document.querySelector(selectorError).style.display = 'block';
//       return false;
//   }
// }

// var KiemTraSo = function(selectorValue, selectorError ){
//   var inputtext = document.querySelector(selectorValue);
//   var regexChu = /^[0-9]+$/;
//   if(regexChu.test(inputtext.value)){
//       document.querySelector(selectorError).innerHTML = '';
//       document.querySelector(selectorError).style.display = 'none';
//       return true;
//   }else{
//       document.querySelector(selectorError).innerHTML = inputtext.name + ' không chứa ký tự chữ, vui lòng nhập lại';
//       document.querySelector(selectorError).style.display = 'block';
//       return false;
//   }
// }


// // /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
// var KiemTraEmail = function(selectorEmail, selectorError){
//   var email = document.querySelector(selectorEmail);
//   var regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   if(regexEmail.test(email.value)){
//       document.querySelector(selectorError).innerHTML = '';
//       document.querySelector(selectorError).style.display = 'none';
//       return true;
//   }else{
//       document.querySelector(selectorError).innerHTML = email.name + ' vui lòng nhập lại email';
//       document.querySelector(selectorError).style.display = 'block';
//       return false;
//   }
// }


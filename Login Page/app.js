const option = document.querySelector("#option");
const done = document.querySelector(".done");
const header = document.querySelector("#header");
const naam = document.querySelector(".Name");
const cnf = document.querySelector(".confirmPassword");
const userName=document.querySelector("#user");
const password=document.querySelector("#pass");
const message=document.querySelector(".message");
let flag = 0;

let validUser1="ajeet";
let validPass2="baba";

option.addEventListener("click", function (event) {
  // Prevent default behavior of the anchor tag
  event.preventDefault();

  if (flag === 0) {
    option.innerHTML = "Login";
    done.innerHTML = "Register";
    header.innerHTML = "Register";
    naam.style.display = "block"; // Show Name field
    cnf.style.display = "block"; // Show Confirm Password field
    flag = 1;
  } else {
    option.innerHTML = "Register";
    done.innerHTML = "Login";
    header.innerHTML = "Login";
    naam.style.display = "none"; // Hide Name field
    cnf.style.display = "none"; // Hide Confirm Password field
    flag = 0;
  }
});
done.addEventListener("click",function(){
  if(userName.value===validUser && password.value===validPass){
    console.log("logged in");
  }else if(userName.value=='' || password.value==''){
    alert("Enter username and password");
  }
  else{
    message.style.display="block";
    userName.value='';
    password.value='';
  }

})



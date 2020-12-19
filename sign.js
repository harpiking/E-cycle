/*sign in*/
var signUser =document.querySelector("#signUser");
var signPassword =document.querySelector("#signPass");
var signButton =document.querySelector(".sign-button");
var signOutput =document.querySelector(".signOutput");
var next =document.querySelector(".logged-in");


/*events*/
signButton.addEventListener("click", signIn);


function signIn(e){
  e.perventDefault;
  if(signUser.value !=="" || signPassword.value !== ""){
    next.href = "profile.html"
  }else{
  signOutput.textContent ="Invalid Entry"
  }
}

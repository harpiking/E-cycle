
/*register*/
var reguser = document.querySelector("#reguser");
var regfName = document.querySelector("#regfName");
var regphone = document.querySelector("#regphone");
var regpa = document.querySelector("#regpa");
var regpu = document.querySelector("#regpu");
var regpass = document.querySelector("#regpass");
var regButton = document.querySelector(".regButton");
var regOutput = document.querySelector(".regOutput");
var  regLink = document.querySelector(".registered");

regButton.addEventListener("click", register);

function register(e){
  e.perventDefault;
  if(reguser.value !=="" || regfName.value !== "" || regphone.value !== "" || regpa.value !== "" || regpu.value !== "" || regpass.value !== ""){
    regLink.href = "signIn.html"
  }else{
  regOutput.textContent ="Invalid Entry"
  }
}

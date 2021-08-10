const paynowBtn = document.getElementById("paynow-btn");

paynowBtn.onclick = () => {
  location.href = "payment.html";
}

const paynowBtnToggle = () => {
  if(localStorage.getItem("Login") === "true"){
    paynowBtn.disabled = false;
  } else{
    paynowBtn.disabled = true;
  } 
}

paynowBtnToggle();
loginBtn.addEventListener("click", () =>{
  setTimeout(paynowBtnToggle, 1000);
})

headerLogin.addEventListener("click" , ()=> {setTimeout(paynowBtnToggle, 1000)});




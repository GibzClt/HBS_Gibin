const paynowBtn = document.getElementById("paynow-btn");

paynowBtn.onclick = () => {
  location.href = "payment.html";
}

loginBtn.addEventListener("click", () =>{
  location.href = "payment.html";
  location.reload();
})

if(localStorage.getItem("Login") === "true"){
  paynowBtn.disabled = false;
} else{
  paynowBtn.disabled = true;
}

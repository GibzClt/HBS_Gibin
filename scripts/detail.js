const NoOfAdults = document.getElementById("number-adults");
const checkInDate = document.getElementById("checkin-date");
const checkOutDate = document.getElementById("checkout-date");
const totalField = document.getElementById("total");

const calculateTotal = (adults, start , end, cost = 1000) => {
  let startDate = start.value.split("-");
  let endDate = end.value.split("-");
  let days = parseInt(endDate[2] - startDate[2]);
  let months = parseInt(endDate[1] - startDate[1]);
  let years = parseInt(endDate[0] - startDate[0]);
  let date = new Date(parseInt(startDate[0]), parseInt(startDate[1]) - 1, parseInt(startDate[2]));
  date.setDate(date.getDate() + 1);
  if((date.getMonth() + 1) < 10 ){
    checkOutDate.min = date.getFullYear() + "-" + "0" + (date.getMonth() + 1) + "-" + date.getDate();
  }else{
    checkOutDate.min = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  }
  return cost * parseInt(adults.value) * (days + months + years);
}

const formEl = document.getElementById("detail-form");

formEl.addEventListener("input", () => {
  let totalCost = calculateTotal(NoOfAdults, checkInDate, checkOutDate);
  if(!isNaN(totalCost)){
    totalField.value = "Rs. " + totalCost;
  }
});



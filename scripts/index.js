// debugger;
const viewMoreBtn = document.getElementById("view-more").children[0];
const extraCards = document.getElementsByClassName("card-set-2");

//Function when the "View more" button is clicked
viewMoreBtn.addEventListener("click", () => {
  if(viewMoreBtn.value == "1"){
    viewMoreBtn.value = "0";
    viewMoreBtn.innerText = "View less >>";
    cardsToggle(viewMoreBtn.value);
  } else{
    viewMoreBtn.value = "1";
    viewMoreBtn.innerText = "View more >>";
    cardsToggle(viewMoreBtn.value);
  }
});

// Function to toggle display of cards
const cardsToggle = (value) => {
  if(value === "1"){
    for(let i = 0; i < extraCards.length; i++){
      extraCards[i].style.display="none";
    }
  } else{
    for(let i = 0; i < extraCards.length; i++){
      extraCards[i].style.display="block";
    }
  }
}

const cardSet = document.getElementsByClassName("card-set");
console.log(cardSet);
for(let i=0; i < 8; i++){
  let query = cardSet[i].id.split("-")[0];
  console.log(query);
  cardSet[i].onclick = () => {
    window.location.href = `list.html?city=${query}`;
  }
  cardSet[i].style.cursor = "pointer";
}

//  <....................................................>






let searchQuery;
let searchCityOutputs;


const cityInput = document.getElementById("city");
const searchbarEl = document.getElementById("search-bar");
const searchOptionsList = document.getElementById("search-options-list");

cityInput.addEventListener("input", () => {
  if(cityInput.value.length >=3){
    searchQuery = cityInput.value.toLowerCase();
    let searchCityRequest = new XMLHttpRequest();
    searchCityRequest.open("GET", `https://travel-advisor.p.rapidapi.com/locations/auto-complete?query=${searchQuery}`);
    searchCityRequest.setRequestHeader("x-rapidapi-key", "665b7f0bd8msh9c1b1c6e3f27841p1570c6jsn2f3bb22c6dd0");
    searchCityRequest.setRequestHeader("x-rapidapi-host", "travel-advisor.p.rapidapi.com");
    searchCityRequest.onreadystatechange = () => {
      if(searchCityRequest.readyState == 4) {
        if(searchCityRequest.status == 200){
          searchCityOutputs = JSON.parse(searchCityRequest.responseText);
          showOptions(searchCityOutputs.data)
        }
      }
    }
    searchCityRequest.send();
  }
})

function showOptions(cityCode){
  // searchOptions.style.display = "block";
  searchOptionsList.innerHTML = "";
  for(let i = 0; i < cityCode.length; i++){
    if(cityCode[i].result_type === "geos"){
      let tempurl = `list.html?city=${cityCode[i].result_object.name}`;
      searchOptionsList.innerHTML += 
        `<a href=${tempurl}><div class="search-options">${cityCode[i].result_object.name}</div><a>`;
    }
  }
}

window.addEventListener("click", () => {
  searchOptionsList.innerHTML = "";
})
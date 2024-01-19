let fetchOptions = {
  method: "GET",
  headers: { "x-api-key": "fGhxP4ZmWFTNJkCNUUiivQ==7KHpeyTmpoQ46XFr" },
};

let url = 'https://api.api-ninjas.com/v1/recipe?query=""&offset=100';
function fetchData(url, fetchOptions) {
  //roept de api
  fetch(url, fetchOptions)
  //van de data wordt het een leesbaar object("door json methode")
    .then((res) => res.json())
    //de geproceseerde data door een anonieme function 
    .then((data) => {
      console.log(data);
      //swe spreken de class in html recipes 
      let container = document.querySelector(".recipes");
      //we nemen de hoeveelheid aangevraagde titles van recipes
      for (let index = 0; index < 10; index++) {
        console.log(data[index].title);
        //we maken een element 
      let recipesItem = document.createElement("a");
      recipesItem.href = "/recipes/" + index//geef dit een ID mee plaats maar een index
      //we stellen de innerHTML in
      recipesItem.innerHTML = data[index].title
      //Hier plaatsen we de recipes in de HTML
      container.appendChild(recipesItem)
      }
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

fetchData(url, fetchOptions);

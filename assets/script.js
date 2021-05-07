//variables
let searchForm = document.querySelector("#search-form");
let resultContent = document.querySelector("#result-content");

//functions
function handleSearchForm(event) {
  event.preventDefault();

    resultContent.textContent = "";
  let searchInput = document.querySelector("#search-input").value;
  let formatInput = document.querySelector("#format-input").value;

  if (!searchInput) {
    alert("you need a value");
    return;
  }
    //show search term to screen
    document.querySelector("#result-text").textContent = searchInput;
  //get data
  searchLibrary(searchInput, formatInput);
}

function searchLibrary(query, format) {
  let baseUrl = "https://www.loc.gov/search/?fo=json";
  if (format) {
    baseUrl = `https://www.loc.gov/${format}/?fo=json`;
  }
    let apiUrl = `${baseUrl}&q=${query}`;
    
    fetch(apiUrl).then(function (response) {
      .then(function (response) {
          response.json().then(function (data) {
              let results = data.results;
              //loop through array of data
              results.forEach(result => {
                  //print result
                  printResults(result);
              });
        
          });
      });
    
  });
}

function printResults(resultObj){
    let resultCard = document.createElement("div");
    resultCard.classList.add("card", "mb-3", "p-3");
    let resultTitle = document.createElement("div");
    let resultDescription = document.createElement("div");

    resultTitle.textContent = resultObj.title;
    resultDescription.textContent = resultObj.description;
    
    resultCard.textContent - resultObj.title;

    resultContent.append(resultCard);
}

//event handlers
searchForm.addEventListener("submit", handleSearchForm);

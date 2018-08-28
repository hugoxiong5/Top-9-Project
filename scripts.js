const apiKey = '5d576382955ff5829fc3844390db4427';
const baseAPIUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc`;
var localData = {};

$(function () {
  // After the DOM has loaded, call afterGoClicked after any time the button is clicked
  var button = $('button')
  button.on('click', afterGoClicked);
})

function afterGoClicked() {
  // Read the selected genre id from the select boxes and save it to a variable
  // Hint: use the JQuery .val() function on the element
  // Documentation: http://api.jquery.com/val/
  $(":radio").prop("checked", false);
  var genre = $('#genre').val();
  // Read the selected language from the select boxes and save it to a variable
  var language = $('#language').val();
  // Read the entered year from the text box and save it to a variable
  var year = $('#year').val();
  // Call buildQueryString to handle building a completeUrl
  var completeUrl = buildQueryString(genre, language, year);
  // Load the JSON from the API with completeUrl, and then call the afterDataLoaded function
  $.getJSON(completeUrl, afterDataLoaded);
}

/* Combine the baseUrl, genre, and year together to create a complete url with the
  right query parameters. Then return the url.

  Check out examples query params at https://www.themoviedb.org/documentation/api/discover
*/
function buildQueryString(genre, language, year){
  return `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genre}&primary_release_year=${year}&with_original_language=${language}&sort_by=revenue.desc`;
}

// Call this function with the data object that comes back from getJSON
function afterDataLoaded(dataObject){
  // All images have this base URL
  var posterBaseUrl = "https://image.tmdb.org/t/p/w500"
  
  // store API data in Global Scope (client side)
  localData = dataObject;

  /* Loop over the results in the dataObject. 
    HINT: use your debugger to find the name
    of the property that includes the array of results.
  */
  /* For each result:
    - Look up a corresponding img element (in order)
    - Set the img element's src tag to posterBaseUrl + the poster_path from the result movie
    - make sure to return default blank poster if result doesn't exist
   */
  for (var i=0; i<9; i++) {
    if (i < localData.results.length) {
      document.getElementById("movieImg" + i).src = "https://image.tmdb.org/t/p/w500" + localData.results[i].poster_path;
    } else {
      document.getElementById("movieImg" + i).src = "http://www.kevingage.com/assets/clapboard.png"
      document.getElementById("movieImg" + i).height = "382";
    }
  }
}

//  Filter Clicked/Chosen
// click on a radio button, calls a function
$(function () {
  // After the DOM has loaded, call afterFilterClicked after any time a button is clicked in the Side Nav bar
  $('.sidenav').on('click', afterFilterClicked);
})

function afterFilterClicked() {
// Find out of the values of the filters
var sort = $("input[type='radio'][name='filter']:checked").val();

// Most Popular Filter
if (sort === 'mostP') {
localData.results.sort(function(a, b){
  return b.popularity - a.popularity;
});
}

// Least Popular Filter
if (sort === 'leastP') {
  localData.results.sort(function(a, b){
    return a.popularity - b.popularity;
  });
}

// Most Acclaimed Filter
if (sort === 'mostA') {
  localData.results.sort(function(a, b){
    return b.vote_average - a.vote_average;
  });
  }

// Least Acclaimed Filter
if (sort === 'leastA') {
  localData.results.sort(function(a, b){
    return a.vote_average - b.vote_average;
  });
  }

// Filter Results and Change Posters by calling afterDataLoaded function
  afterDataLoaded(localData);
}
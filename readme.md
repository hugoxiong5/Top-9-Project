# Top9 Movie Loader

Top9 is an application that loads cover images for the top 9 movies matching search criteria provided by the user. 

This project outlines basic functionality and provides a starting point, but your options for expanding this project with your own functionality and style are limitless.

# Setup

The `begin` branch contains an optional starting point for your HTML, CSS, and JavaScript files.

You will need to set the `apiKey` string in your application to an API key provided by your instructor.

The `solution` branch contains a solution for the basic functionality. **Warning: this solution branch is a "spoiler." We highly recommend that you struggle with this project to achieve the satisfaction that comes with solving it for yourself.** After you have your own working solution, you should then check out the `solution` branch to see how your own solution compares.


# Basic Functionality

## Initial State

* The application should initially appear with a grid of 9 placeholder images in 3 rows.
* Above the grid, there should be a dropdown (select) menu for selecting a *Genre*.
* Above the grid, there should be a text input box for entering a *Release Year*.
* Above the grid, there should be a button labeled "Go!"

![initial state](https://github.com/firststepcoding/top9/blob/begin/img/initial-view.jpg?raw=true)

## Results State

* After a user enters search criteria and clicks the "Go!" button, the application should query [https://api.themoviedb.org](https://api.themoviedb.org) for movies that match the criteria.
* The movies should be returned in order of decreasing popularity, with the most popular movies returned first.
* The 9 placeholder images in the grid should be replaced with the cover images of the top 9 movies matching the provided criteria.

![initial state](https://github.com/firststepcoding/top9/blob/begin/img/after.jpg?raw=true)

# API Interactions

In order to load movie data, your application will need to set custom query parameters and interface with the JSON-based Discover API at [https://api.themoviedb.org](https://api.themoviedb.org) 

You can find example queries to the Disover API here: [https://www.themoviedb.org/documentation/api/discover](https://www.themoviedb.org/documentation/api/discover) 

Note that some fields like *Genre* have corresponding ids that you can look up via this API call: [https://developers.themoviedb.org/3/genres/get-movie-list](https://developers.themoviedb.org/3/genres/get-movie-list) 

To save you the trouble, here's a list of *Genre* ids you can use in your select box:

* Action = 28
* Adventure = 12
* Animation = 16
* Comedy = 35
* Crime = 80
* Documentary = 99
* Drama = 18
* Family = 10751
* Fantasy = 14
* History = 36
* Horror = 27
* Music = 10402

# Extended Functionality

This is the creative part of the project. Once you have the basic functionality working, it's up to you were you a take it! 

Here are a few ideas to get started:

* Customize the look and feel of the application with your own CSS.
* Add a custom footer below the grid.
* Add additional search criteria above the grid. Work them into your API requests.
* Automatically updates to the movie list whenever the user changes a value, so you don't need to use the "Go!" button.
* Add checkboxes for ratings: G, PG, PG-13, and R. Use client-side filtering to only display movies in the top 9 that have a rating matching one of the current selections. Automatically update the application whenever the user checks or unchecks a rating. (Hint: you may want to cache the data client-side to make this easier. You can do this by simply storing the API results in a global variable)
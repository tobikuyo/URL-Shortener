# URL-Shortener

A web app to generate a 7 digit code that users can click on to be redirected to their website of choice. The deployed website can be viewed [here](https://shrinkio.herokuapp.com/).

## Installation & Usage

### Installation

-   Clone or download the repo and open two terminal windows.
-   Open terminal and navigate to the `client` folder.
-   Run `npm install` to install client dependencies.

### Usage

-   Run `npm start` to launch client server.

### Technologies Used

-   React
-   React Router Dom
-   Django
-   Django Rest Framework

## Wins & Challenges

### Wins

-   Users can enter a url and generate a 7 digit code.
-   Users can append the code to our url and get redirected to their website.

### Challenges

-   We are having CORS issues with Chrome, but it works fine on other browsers.
-   Removing codes from the url when they are not in our database.

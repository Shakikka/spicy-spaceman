# The Spicy Spaceman

Created by: [Joel Thomas](https://github.com/Shakikka)

### Deployed App: [The Spicy Spaceman](https://the-spicy-spaceman.herokuapp.com/)


## Outline

1. [App Overview](#app-overview)
2. [Tech Stack](#tech-stack)
3. [Instructions for Installation](#instructions-for-installation)
4. [Future Iterations](#future-iterations)

## App Overview

The Spicy Spaceman is a web app that consumes the NASA APOD API. It allows a user to see Images with information about that imagefrom September 15th, 2021 to present day. Users can also like and dislike images.
 
## Tech Stack

- JavaScript ECMA6
  - React (create-react-app)
  - React Router
- HTML5
- CSS3
- TravisCI

<!-- ### Testing:
- Cypress
  - Mocha
  - Chai -->

## Instructions for Installation
   - Can visit the deployed app [here](https://the-spicy-spaceman.herokuapp.com/)
   
 OR
 
  - To run this application on your local machine, clone down the 
         - [repo](https://github.com/Shakikka/spicy-spaceman) 
   
  - change into the root directory from the command line, and run `npm install`. 
    
  - Then run `npm start` to open the application locally. If you aren't taken there, visit `http://localhost:3000/`
    
  - To run the test suite locally, you will also need to run the command `npm i -D cypress` from the command line.
    
  - Once it  has installed, run `npx cypress open`, then select the `app_spec.js` test file. 
    
  - Note: you will need to run the application locally (start the server with `npm start` from the root directory on the command line) in order to run the automated tests.

## Future Iterations
- Media queries
- Local Storage
- Favorite's page
- E2E and unit testing
- Random images
- Images by date range

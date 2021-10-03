# SpaceX App
This is an application that lists information about SpaceX rocket launches using
their free open SpaceX api: https://docs.spacexdata.com
Application lists the most recent 50 launches, for each launch the application shows the:
 - launch name, 
 - date
 - details (label: view rocket details). 

User is be able to sort by `date` and `launch name` and \
to click `view rocket details` to see rocket details. \
User is able to search by launch name. 

## App Setup
  - React (create react app) and TypeScript.
  - Unit tests using Jest and React Testing Library.
  - Used Material-UI for UI components.
  - Used ag-grid as the data table.

***

## Running Project
 
***

## Requirements
 - [NodeJS](https://nodejs.org/en/)

***

## Install and run

`npm install`\
`npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

`npm run start:mockDev`

Runs the app in the mocked mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

`npm run test`

Launches the test runner in the interactive watch mode.

`npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
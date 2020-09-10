This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Bootstrap has also been used for styles
All calls to the backend are supported by TheMovieDB

#### Table of contents

- [How to run](#How-to-run-)
- [Available Scripts](#Available-Scripts-)
- [Frontend](#Frontend-)
- [Router](#Router-)
- [Known bugs](#Known-bugs-)
- [Next steps](#Next-steps-)

## How to run

- Open your command line interface in the folder you wish to create this project
- Type: $ git clone https://github.com/RCorpy/moviedb.git
- Go inside the moviedb folder, $ cd moviedb
- Install dependencies, you might need sudo privileges: $ sudo npm i
- Ready to launch! $ npm start


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Frontend

We will be using React, Redux and JavaScript for this proyect, the redux part is pretty simple, we only need 1 method, that will be LOAD_MOVIES, we really dont need it at the moment, but Router is already implemented in case we want to give customization to any of the search types

#### `State Structure`
- movies: this is currently our only parameter in the redux state, because of the backend provided by theMovieDB, we will take paramenter "results" of the object the fetch function returns, each position of the array has MANY cool information

#### `Search`
I created the posibility to search for an specific movie, if the title matches any or many of the entries of the DB, they will be shown in its own component

### `State management`

The easiest of the easy of the state management, only 1 function, and on every call of this function (LOAD_MOVIES) all state will be replaced

Because of the need of sending the data pure, the fetch requests will be made in the component (Menu) and then filtered so that any movie that has no image will not be shown for presentation purposes, if the image fails to load, we will load a "image not found" image from google and hopefully that one will work

## Router

It is already implemented, but at the moment it only helps us with one conditional render, which is the Welcome component vs Populars, Search, ThisYear and Dramas.

These last 4 are identical, are already separated in case we want more customization

## Known bugs

All known bugs are fixed at the moment

## Next steps

- The 3 searchs in the menu are not optimal, many images are missing
- When loading the page, or when going to Home, the Welcome component will load, which is not a proper one yet
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# starwars-api

** Overview

This is the star wars front end project instructed to be complete by UKTV. The project took approximately 4 hours of coding to complete. I used React, and Typescript to complete this project.

The following features have been implemented:

Search: You enter into the search bar the categories you want to bring up (starships, vehicles, films) and all of the resulting data comes up in a infinite scroll.

Sort: There's a sorting button that allows you to sort alphabetically. Both ascending or descending.

To use the application go to: https://starwarsapitaha.netlify.app/
Start by typing in a search term

** Technical information

- Pages
  - Home.tsx
    
This component was implemented as a page into the default app component. This is to ensure we can implement some sort of routing in the future.

In this component I had to use a for loop to retrieve all objects from the API as it implemented pagination. Initially I wrote a component to implement the same type of pagination however it coincided with the sorting function. I kept the pagination so that hypothetically in the future it can be used (assuming it's a real project). 

- components
  - Cards
  - Card.tsx

The components folder holds all of the components. The card component only display's the Title/Name, Episode Number/Model. 

The description is in another seperate component (Cards -> FilmCard and VehicleCard) that contains the format for the rest of the information. This is to ensure different kinds of information can be displayed in the same format. As well as making the program less computationally heavy. If we introduced other categories like people we could use the same Card component and just create new sub card components. Thus allowing it to be expanded upon in the future. Furthermore it makes the Home.tsx file (where it's called) less convoluted.


- utils
  - utils.ts
 
This type script file is a utility file containing a few functions. The reason I done this is if I was working on a team this file would be worked on seperately. Furthermore if one function needed to be expanded upon it could be done quite easily in a seperate file. The functions can then also be reused and appropriate comments have been added to enable so.

- types
  - types.tsx

Once again this is another file that's seperated in order to make debugging easier, and make the entire project more organised and concise.

- styles

The appropriate style sheets have been created. Although not all contain a lot of code. The reason this is done is to ensure that we can scale upon components in the future, keeping the styles contained and organised.


Everything in this project has been done with scalability and readability in mind. 


** If I had more time

This is a feature rich API that allows it to be fleshed out into a full fledged project. The following ways is how I would improve not only the base code but also future possibilities.


* Display more categories
* Include more sorting features (e.g. date released)
* Display every object as the beginning point (e.g. display vehicles, starships, films if the user hasn't entered any query)
* Improved UI Error Handling (I've tried to include some however it could be more fleshed out and robust). Error management as in notifying the user of a 404 or if what they've entered isn't available.
* Creating pages for each of the api parameters. E.g. director page, film page etc. displaying all of the relevant information on that page.
* Implementing tracking or analytics. This would be valuable business data as well as facilitating the ability to implement some sort of user testing (e.g. a/b testing) to improve UX.
* Making the website mobile optimised
* Improving the UI/UX with a designer.







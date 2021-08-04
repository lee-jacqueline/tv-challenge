# TV Coding Challenge

This project was completed on the 4th August 2021.

## Available Scripts

To start the project, run

`yarn install` to install dependencies.\
`yarn start` to view in development mode.\
`yarn test` to launch the test runner.\
`yarn build` to build the package to a `dist` folder.\

## Guidelines followed

1. Build file exports to `dist` instead of `build`
2. Built with TypeScript and React
3. Avoided use of third party CSS frameworks/JS libraries
4. Responsive view for 720p and 1080p screens.

## Built with

- create-react-app
- TypeScript
- Jest & react-testing-library

## How to use the app

1. Use your left and right keys on your keyboard to scroll through the carousel.
2. Hit enter on your keyboard to see more details of a program.
3. Hit backspace on your keyboard to return to the home page.

## Approach

### 1. Folder Structure

I have split the code structure in the following ways. I wanted to separate the stateless components from the routes so it can be better reused, thus have set up the structure as follows.

```
.
├── public
├── src
│ ├── assets
│ │ └── logo.svg
│ ├── components
│ │ ├── Card
│ │ ├── Carousel
│ │ └── Navbar
│ ├── routes
│ │ ├── Home
│ │ └── Program
│ ├── types
│ │ └── index.ts
│ ├── App.css
│ ├── App.tsx
│ ├── index.css
│ ├── index.tsx
│ └── setupTests.ts
└── .gitignore
```

Each route and component has the following files:

- index.tsx (where the main component is exported)
- {component}.css (where all the styles are included)
- {component}.test.tsx (where all the tests are written specifically for that component)

### 2. Components and Routes

To start, I identified the abstracted components and routes from the design. Unfortunately as the design is just an image, most of the styles are eyeballed. The components are identified as Card, Carousel and Navbar, and routes are Home page and Program page. Could have implemented with react-navigation to deliver more functionality, but pure logic is sufficient to deliver this.

### 3. State Management

I used hooks to handle state on the App.js level. However, I did not like this implementation and would have rather pulled the state management into a context, or use redux to handle state. However, due to the limited time for this project, I decided to go with the easier solution so that I can get a working prototype and improve the state management further down the track.

### 4. Tests

Before implementing each of the components, I identified the tests for when I write the tests for the components and I try to write the tests before implementing. To make it much easier to test, I have added data-testid to the components so it is easier to identify the components. In the tests, I also cover cases of event fires to mock an action.

## Things I didn't get to implement in time

- Having only 10 programs in the DOM at one time (Home Page)
- Program to display determined by ID (Program Page)

## Questions

### How did you decide on the technical and architectural choices used as part of your solution?

- Design so irrelevant components are independent of each other
- Routes interact with state, whereas components stand independent of state

### Are there any improvements you could make to your submission?

1. Separating the dependency of Card on Carousel by taking children instead
   - Carousel implemented only works for Card - by taking Card out of the dependency, then we can implement the same logic for other components
2. Use createContext/useContext hook to take state out of the page components or use Redux
3. Testing to have covered more cases

### What would you do differently if you were allocated more time?

1. Have a typography component to control the fonts and text components
2. Getting access to the correct font will help with visuals
3. CSS grid implementation
4. Would have preferred styled components over pure CSS for code readability purposes or use of Sass to reuse
5. Adding more UI interactions to make the scroll experience much better

## Time taken for completion

2.5 days

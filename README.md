## Latest Tweets App

For this task, we’d like you to build a web app that lets a user view the 10 most recent tweets from a Twitter handle of the user's choice. The app should serve a single page with a form on it that has one text field and a submit button. The user should be able to enter a Twitter handle/username in the text field, and then hit the submit button to see the 10 latest tweets from that Twitter user.

Some other details:

You can use any language and tools or packages that you want.
Feel free to use Google as a reference.
You don't need to spend a lot of time (or any) on UI/styling. Just getting the tweets to display in some sort of list view is enough.

Take as much time as you need to finish, but try not to spend more than a couple hours.
To save you some time, we’ve included Twitter API credentials for a demo developer account that you can use below.
Feel free to improvise or get creative for anything not mentioned in these instructions.

As part of your solution, please write automated tests that can be run from the command line.

To submit your code, put it up on Github and send us a link to the repo. If that's not convenient for you though, you can just zip up the files and send them to us by email. We just ask that you deliver your code in such a way that we can run it locally on our own machines, with minimal setup.

To run the program, please add .env file under root folder, with following entries:

```
REACT_APP_CONSUMER_API_KEY=[twitter-consumer-api-key]
REACT_APP_CONSUMER_API_SECRET_KEY=[twitter=consumer-api-secret-key]
REACT_APP_MAX_RESULTS=10
```

======================================================

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
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

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


## Vern's attmept at the Highspot Code Challenge

What you'll find here is my attempt at satisfying the reqs for the Highspot Code Assessment.


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information. No tests are currently included but the functionality has been left intact. 

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Notes
- It would be nice to add different search states. For example, if the user hasn't entered anything into the search field (or if it's empty), the message would be different than something like "No results"
- I couldn't tell if search was meant to be a filter on the card list or a separate view. I opted for the latter since we weren't loading all cards into the main view to begin with.
- I opted out of using redux as there wasn't much use for it here.
- If I had more time, I'd implement react router for the views instead of showing and hiding based on state.
- I used react hooks over classes. I like their syntax and get the feeling that react is heading this direction.
- I didn't write tests for the sake of time.
- I'm not a fan of managing the css the way I have. I currently work quite a bit in Vue so I used something sort of like that with scss. There are so many ways of handing css in React that I just opted for the easiest route.

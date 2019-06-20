## How to create your first react app

Pre-requirements:

- Install [nodejs](https://nodejs.org/en/)
- Install an editor, I recommend [VSCode](https://code.visualstudio.com/)

We are going to create our first and very basic react app. We will see the most basic concepts:

- Bootstrap a react app with `create-react-app`
- React functional (aka stateless) component
- Props: required, optional and default props
- React stateful component
- Use component state. Note: In 2019, we recomend using hooks instead (useState hook)
- Style React Components with className and css
- Use Event Handlers with React

1. Install [create-react-app](https://github.com/facebook/create-react-app):

> npm install -g create-react-app

2. Create a react app:

> create-react-app first-react-app

You will get a react web app with the following scafolding:

```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│ ├── favicon.ico
│ ├── index.html
│ └── manifest.json
└── src
├── App.css
├── App.js
├── App.test.js
├── index.css
├── index.js
├── logo.svg
└── serviceWorker.js
```

For more information consult the [create-react-app](https://github.com/facebook/create-react-app) documentation.

3. Open your project folder and run the default app

> cd first-react-app
> code .

Note: To run the above command and be able to launch the project from command line follow these [instructions](https://code.visualstudio.com/docs/editor/command-line)

> npm start

Our first app should be running on http://localhost:3000/

4. Let's create our first component. It'll be a functional/stateless component.

- In `src/`, create a folder called `components`
- In `src/components`, create a file named `Label.js`
- Add the following content:

```
import React from "react";

function Label() {
  return <label>This is our first component, named Label</label>;
}

export default Label;
```

5. Use this component in our app.

- Open App.js
- Import our component, add at the end of the existing `import` statements the following:
  ```
  import Label from "./components/Label"
  ```
- Delete the following content:
  ```
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
  ```
- And replace it with an instance of our component:
  ```
  <Label />
  ```

See the result on http://localhost:3000/

6. Add text prop to customize the Label component

- Install `prop-types` to define the types of our props

> npm install --save prop-types

- Replace the content in Label.js by the following content:

```
import React from "react";
import PropTypes from "prop-types";

const Label = props => <label>{props.text}</label>;

Label.propTypes = {
  text: PropTypes.string.isRequired
};

export default Label;
```

Note: We create the stateless Label component that receives props and display within the `<label>` tag the `text` prop. Text prop is a string and a required prop as defined with PropTypes.

For more information about `prop-types` see the [react documentation](https://reactjs.org/docs/typechecking-with-proptypes.html)

7. Update the Label component in App.js

- Replace `<Label />` by `<Label text="This is our first component, named Label" />`

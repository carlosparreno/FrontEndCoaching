## How to create your first react app

Pre-requirements:

- Install [nodejs](https://nodejs.org/en/)
- Install an editor, I recommend [VSCode](https://code.visualstudio.com/)

We are going to create our first and very basic react app. We will see the most basic concepts:

- Bootstrap a react app with `create-react-app`
- React functional (aka stateless) component
- Props: required, optional and default props
- Use Event Handlers with React
- React stateful component
- Use component state. Note: In 2019, we recomend using hooks instead (useState hook)
- Style React Components with className and css

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

Note: To run the above command and be able to launch the project from command line follow these [instructions](https://code.visualstudio.com/docs/editor/command-line).

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

8. Let's create a second component called `Button`, here we'll see optional props, and event handlers

- In `/src/components` create the file `Button.js`
- Add the following content to `Button.js`

```
import React from "react";
import PropTypes from "prop-types";

const Button = props => (
  <button onClick={props.action}>{props.children}</button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  action: PropTypes.func
};

Button.defaultProps = {
  action: () => {
    console.log("No action assigned to this component");
  }
};

export default Button;
```

We have created a Button component that receives two props:

- children, a string used to give the button an action name.
- action, to pass a function to the onClick event.

Note that the action prop is optional, hence we added a default function in dafualtProps.

9. Update App.js:

- Add `import Button from "./components/Button";` below the imports.
- Add `<Button>Add</Button>` below Label.

Test your app by clicking the button and checking the console. The default message "No action assigned to this component" should be displayed.

10. Let's create a statefull component:

- In `src/components/` create a file named `Counter.js`
- Add the following content to `src/components/Counter`:

```
import React from "react";
import Label from "../components/Label";
import Button from "../components/Button";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <Label text={`This is a counter: ${this.state.count}`} />
        <Button action={this.incrementCount}>Increment count</Button>
      </div>
    );
  }
}

export default Counter;
```

We created a stateful component. Note that it has a render method, which is mandatory for every stateful component and must return a JSX structure.

The Counter component has a constructor that defines the state of the app, defaulted to 0: { count: 0 }, and also a method named `incrementCount` that will increment the state by 1.

The render method contains a `Label` with the count passed in the `text` prop and a `Button` that will trigger the `incrementCount` method passed in the `action` prop.

11. Let's use our new component in App.js.

- Replace the App.js content by the following:

```
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
      </header>
    </div>
  );
}

export default App;
```

See the result on http://localhost:3000/

12. Let's now add some styling to our solution by using the `className` prop that the `html` tags have built-in in React.

- We want to add styling to the counter container. So let's add a `className="counter-container"` to our `<div>` container.

- We want to add styling to our button, so we will add `className="counter-button"` to our `<Button>`

- Now we need to create the css, to do so let's create a file named `src/css/Counter.css` with the following content:

```
.counter-container {
  display: flex;
  flex-direction: column;
}

.counter-button {
  height: 40px;
  font-size: 20px;
  margin: 12px;
}
```

- And now let's import it into our Counter.js file: `import "../css/Counter.css";`.

- The Counter.js now will look like follows:

```
import React from "react";
import Label from "../components/Label";
import Button from "../components/Button";
import "../css/Counter.css";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="counter-container">
        <Label text={`This is a counter: ${this.state.count}`} />
        <Button className="counter-button" action={this.incrementCount}>
          Increment count
        </Button>
      </div>
    );
  }
}

export default Counter;
```

Test the result on http://localhost:3000/

Note: We can see the container styling working but the button styling is not. This is because the `Button` component is not an `html` tag with the `className` built-in prop. We need to add that ourselves.

- After doing that, the `Button` component will look as follows:

```
import React from "react";
import PropTypes from "prop-types";

const Button = props => (
  <button className={props.className} onClick={props.action}>
    {props.children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  action: PropTypes.func,
  className: PropTypes.string
};

Button.defaultProps = {
  action: () => {
    console.log("No action assigned to this component");
  },
  className: undefined
};

export default Button;
```

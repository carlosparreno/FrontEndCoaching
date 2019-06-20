## How to create your first react app

Pre-requirements:

- Install [nodejs](https://nodejs.org/en/)
- Install an editor, I recommend [VSCode](https://code.visualstudio.com/)

We are going to create our first and very basic react app. We will see basic concepts as:

- Bootstrap a react app with `create-react-app`
- React stateless (aka functional) component
- React stateful component
- Props: required, optional and default props

1. Install [create-react-app](https://github.com/facebook/create-react-app):

> npm i -g create-react-app

2. Create a react app:

> create-react-app first-react-app

You will get a react web app with the following scafolding:

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

For more information consult the [create-react-app](https://github.com/facebook/create-react-app) documentation.

3. Open your project folder and run the default app

> cd first-react-app
> code .
> Note: To run the above command and be able to launch the project from command line follow these [instructions](https://code.visualstudio.com/docs/editor/command-line)

> npm start

4. Let's start creating our first app. Start by deleting th
